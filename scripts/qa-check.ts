/**
 * QA validation script for DirectRxGuide
 *
 * Checks:
 *  1. Data integrity — duplicates, missing fields, sortPrice vs priceDisplay
 *  2. Cross-check — ProgramCards.tsx prices vs canonical PROGRAMS data
 *  3. Link checker — manufacturer platformUrl reachability
 *  4. Content spot-check — drug pages render without gaps
 *  5. Staleness report — programs with old lastVerified dates
 *
 * Usage:
 *   npx tsx scripts/qa-check.ts            # run all checks (skip link check)
 *   npx tsx scripts/qa-check.ts --links    # include link checking (slow)
 */

import { PROGRAMS } from "../lib/programs/data";
import { getAllDrugs } from "../lib/programs/slugs";

// ─── Helpers ────────────────────────────────────────────────────────────

const BOLD = "\x1b[1m";
const RED = "\x1b[31m";
const YELLOW = "\x1b[33m";
const GREEN = "\x1b[32m";
const CYAN = "\x1b[36m";
const RESET = "\x1b[0m";

let totalWarnings = 0;
let totalErrors = 0;

function header(title: string) {
  console.log(`\n${BOLD}${CYAN}── ${title} ──${RESET}`);
}

function error(msg: string) {
  totalErrors++;
  console.log(`  ${RED}ERROR${RESET} ${msg}`);
}

function warn(msg: string) {
  totalWarnings++;
  console.log(`  ${YELLOW}WARN${RESET}  ${msg}`);
}

function ok(msg: string) {
  console.log(`  ${GREEN}OK${RESET}    ${msg}`);
}

/** Parse "Mar 2026" → Date */
function parseVerifiedDate(s: string): Date | null {
  const d = new Date(s + " 1");
  return isNaN(d.getTime()) ? null : d;
}

/** Extract the first dollar number from a price string like "As low as $25/mo" or "$299–$449/mo" */
function extractLeadingPrice(display: string): number | null {
  // Match $0, $25, $299, $1,717, etc.
  const m = display.match(/\$([0-9,]+(?:\.\d+)?)/);
  if (!m) return null;
  return parseFloat(m[1].replace(/,/g, ""));
}

// ─── Check 1: Data integrity ───────────────────────────────────────────

function checkDataIntegrity() {
  header("1. Data Integrity");

  // Duplicate IDs
  const ids = PROGRAMS.map((p) => p.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) {
    error(`Duplicate IDs: ${dupes.join(", ")}`);
  } else {
    ok(`No duplicate IDs across ${PROGRAMS.length} programs`);
  }

  // Programs with dataStatus "verify"
  const unverified = PROGRAMS.filter((p) => p.dataStatus === "verify");
  if (unverified.length) {
    warn(`${unverified.length} program(s) still have dataStatus "verify":`);
    unverified.forEach((p) =>
      console.log(`          - ${p.id} (${p.drugBrand} via ${p.platform})`)
    );
  } else {
    ok("All programs have dataStatus 'confirmed'");
  }

  // Required string fields not empty
  const requiredStrings: (keyof typeof PROGRAMS[0])[] = [
    "id",
    "platform",
    "manufacturer",
    "drugBrand",
    "drugGeneric",
    "programVariant",
    "drugGenericKey",
    "fdaIndication",
    "priceDisplay",
    "priceNotes",
    "eligibilityNotes",
    "platformUrl",
    "lastVerified",
  ];
  let missingCount = 0;
  for (const p of PROGRAMS) {
    for (const field of requiredStrings) {
      const val = p[field];
      if (typeof val === "string" && val.trim() === "") {
        error(`${p.id}: empty required field "${field}"`);
        missingCount++;
      }
    }
    if (p.conditionTileIds.length === 0) {
      error(`${p.id}: empty conditionTileIds`);
      missingCount++;
    }
  }
  if (missingCount === 0) ok("All required fields populated");

  // sortPrice vs priceDisplay sanity
  let priceMismatchCount = 0;
  for (const p of PROGRAMS) {
    const displayPrice = extractLeadingPrice(p.priceDisplay);
    if (displayPrice === null) {
      warn(`${p.id}: could not parse price from priceDisplay "${p.priceDisplay}"`);
      continue;
    }
    // Allow the sortPrice to match the leading price in priceDisplay
    // If it's "$0 (free)" the sortPrice should be 0
    if (p.sortPrice !== displayPrice) {
      // This is informational — sortPrice might intentionally differ
      // (e.g., priceDisplay = "$25–$449/mo", sortPrice = 25 is correct)
      // Only flag if sortPrice > displayPrice (shouldn't sort higher than shown min)
      if (p.sortPrice > displayPrice) {
        warn(
          `${p.id}: sortPrice (${p.sortPrice}) > leading priceDisplay price (${displayPrice}) — "${p.priceDisplay}"`
        );
        priceMismatchCount++;
      }
    }
  }
  if (priceMismatchCount === 0)
    ok("sortPrice consistent with priceDisplay across all programs");

  // accessibilityScore in range
  const badScores = PROGRAMS.filter(
    (p) => p.accessibilityScore < 1 || p.accessibilityScore > 4
  );
  if (badScores.length) {
    error(
      `${badScores.length} program(s) have accessibilityScore outside 1-4: ${badScores.map((p) => p.id).join(", ")}`
    );
  } else {
    ok("All accessibilityScores in valid range (1-4)");
  }
}

// ─── Check 2: ProgramCards cross-check ──────────────────────────────────

function checkProgramCardsCrossRef() {
  header("2. ProgramCards vs PROGRAMS Cross-Check");

  // Build a lookup from PROGRAMS: drugBrand (lowercase) → all sortPrices + priceDisplay values
  const programPrices = new Map<string, number[]>();
  const programDisplayPrices = new Map<string, number[]>();
  for (const p of PROGRAMS) {
    const key = p.drugBrand.toLowerCase();
    if (!programPrices.has(key)) programPrices.set(key, []);
    programPrices.get(key)!.push(p.sortPrice);
    // Also extract all dollar amounts from priceDisplay and priceNotes for copay matching
    if (!programDisplayPrices.has(key)) programDisplayPrices.set(key, []);
    const allText = `${p.priceDisplay} ${p.priceNotes}`;
    const matches = allText.match(/\$([0-9,]+(?:\.\d+)?)/g);
    if (matches) {
      for (const m of matches) {
        const val = parseFloat(m.replace(/[$,]/g, ""));
        if (!isNaN(val)) programDisplayPrices.get(key)!.push(val);
      }
    }
  }

  // Read ProgramCards data by importing the raw file and extracting drug names + prices
  // Since ProgramCards.tsx is a client component we can't import it directly.
  // Instead we'll do a simple parse of the source.
  const fs = require("fs");
  const src: string = fs.readFileSync(
    require("path").join(__dirname, "../components/ProgramCards.tsx"),
    "utf8"
  );

  // Extract drug entries: { name: "Zepbound", price: "From $299/mo", ...}
  const drugEntryRegex =
    /\{\s*name:\s*"([^"]+)",\s*price:\s*"([^"]+)",\s*note:\s*"([^"]*)",/g;
  let match;
  let cardCount = 0;
  let mismatchCount = 0;

  while ((match = drugEntryRegex.exec(src)) !== null) {
    cardCount++;
    const cardName = match[1];
    const cardPrice = match[2];
    const cardLeading = extractLeadingPrice(cardPrice);

    const canonicalPrices = programPrices.get(cardName.toLowerCase());

    if (!canonicalPrices) {
      // Drug exists on homepage card but not in PROGRAMS — may be fine if it's
      // a drug that only has "verify" status or is a variant name
      warn(
        `"${cardName}" on ProgramCards but not found in PROGRAMS data (may be unconfirmed or variant)`
      );
      continue;
    }

    if (cardLeading === null) {
      warn(`Could not parse card price for "${cardName}": "${cardPrice}"`);
      continue;
    }

    // Check if the card's leading price matches any canonical sortPrice or any price mentioned in priceDisplay/priceNotes
    const allKnownPrices = programDisplayPrices.get(cardName.toLowerCase()) || [];
    const matchesSortPrice = canonicalPrices.includes(cardLeading);
    const matchesDisplayPrice = allKnownPrices.includes(cardLeading);
    if (!matchesSortPrice && !matchesDisplayPrice) {
      warn(
        `"${cardName}" card price "${cardPrice}" (${cardLeading}) doesn't match any PROGRAMS sortPrice [${canonicalPrices.join(", ")}] or known display prices`
      );
      mismatchCount++;
    }
  }

  if (mismatchCount === 0 && cardCount > 0) {
    ok(`${cardCount} card drug entries checked — prices consistent`);
  }
}

// ─── Check 3: Link checker ──────────────────────────────────────────────

async function checkLinks() {
  header("3. Manufacturer URL Link Check");

  const uniqueUrls = [...new Set(PROGRAMS.map((p) => p.platformUrl))];
  console.log(`  Checking ${uniqueUrls.length} unique URLs...`);

  let failCount = 0;
  for (const url of uniqueUrls) {
    try {
      const res = await fetch(url, {
        method: "HEAD",
        redirect: "follow",
        signal: AbortSignal.timeout(10000),
      });
      if (!res.ok) {
        warn(`${res.status} — ${url}`);
        failCount++;
      }
    } catch (e: any) {
      warn(`FAILED (${e.code || e.message}) — ${url}`);
      failCount++;
    }
  }

  if (failCount === 0) {
    ok(`All ${uniqueUrls.length} URLs reachable`);
  } else {
    warn(`${failCount}/${uniqueUrls.length} URLs had issues`);
  }
}

// ─── Check 4: Drug page content spot-check ──────────────────────────────

function checkDrugPages() {
  header("4. Drug Page Content Spot-Check");

  const drugs = getAllDrugs();

  if (drugs.length === 0) {
    error("getAllDrugs() returned 0 drugs");
    return;
  }

  let issueCount = 0;
  for (const drug of drugs) {
    if (!drug.slug || !drug.drugBrand) {
      error(`Drug entry missing slug or drugBrand: ${JSON.stringify(drug)}`);
      issueCount++;
      continue;
    }
    if (drug.programs.length === 0) {
      error(`"${drug.drugBrand}" (${drug.slug}) has 0 programs`);
      issueCount++;
    }
    for (const p of drug.programs) {
      if (!p.priceDisplay || p.priceDisplay === "undefined") {
        error(`"${drug.drugBrand}" program ${p.id}: priceDisplay is empty/undefined`);
        issueCount++;
      }
      if (p.sortPrice < 0) {
        error(`"${drug.drugBrand}" program ${p.id}: negative sortPrice`);
        issueCount++;
      }
    }
  }

  if (issueCount === 0) {
    ok(`${drugs.length} drugs with ${drugs.reduce((sum, d) => sum + d.programs.length, 0)} total programs — all have valid content`);
  }
}

// ─── Check 5: Staleness report ──────────────────────────────────────────

function checkStaleness() {
  header("5. Staleness Report");

  const now = new Date();
  const STALE_DAYS = 45; // flag anything older than 45 days
  let staleCount = 0;

  for (const p of PROGRAMS) {
    const verified = parseVerifiedDate(p.lastVerified);
    if (!verified) {
      warn(`${p.id}: could not parse lastVerified "${p.lastVerified}"`);
      continue;
    }
    const ageMs = now.getTime() - verified.getTime();
    const ageDays = Math.floor(ageMs / (1000 * 60 * 60 * 24));
    if (ageDays > STALE_DAYS) {
      warn(
        `${p.id} (${p.drugBrand}): lastVerified "${p.lastVerified}" — ${ageDays} days old`
      );
      staleCount++;
    }
  }

  if (staleCount === 0) {
    ok(`All programs verified within the last ${STALE_DAYS} days`);
  } else {
    warn(`${staleCount} program(s) need re-verification`);
  }
}

// ─── Main ───────────────────────────────────────────────────────────────

async function main() {
  console.log(`${BOLD}DirectRxGuide QA Check${RESET}`);
  console.log(`Programs in dataset: ${PROGRAMS.length}`);
  console.log(`Date: ${new Date().toISOString().split("T")[0]}`);

  checkDataIntegrity();
  checkProgramCardsCrossRef();
  checkDrugPages();
  checkStaleness();

  const runLinks = process.argv.includes("--links");
  if (runLinks) {
    await checkLinks();
  } else {
    header("3. Manufacturer URL Link Check");
    console.log("  SKIPPED (run with --links to enable)");
  }

  // Summary
  console.log(
    `\n${BOLD}Summary:${RESET} ${totalErrors} error(s), ${totalWarnings} warning(s)\n`
  );

  if (totalErrors > 0) process.exit(1);
}

main();
