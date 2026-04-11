import type { DTPProgramRow } from "./types";

export const PROGRAMS: DTPProgramRow[] = [
  // ── ROW 1 — LillyDirect · Zepbound Program A ─────────────────────────
  {
    id: "lillydirect-zepbound-a",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Zepbound",
    drugGeneric: "tirzepatide",
    programVariant: "Savings card (insured with coverage, single-dose pen)",
    drugGenericKey: "tirzepatide-obesity",
    conditionTileIds: ["obesity"],
    fdaIndication:
      "Obesity or overweight with weight-related medical condition; moderate-to-severe OSA in adults with obesity.",
    insuranceRequirement: "commercial-with-coverage",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 25,
    priceDisplay: "As low as $25/mo",
    priceNotes:
      "$25/mo (1-mo fill). Max $1,300/year savings. Up to 13 fills/year. Card expires 12/31/2026.",
    eligibilityNotes:
      "Commercial insurance WITH Zepbound pen coverage required. Age 18+. US resident or Puerto Rico.",
    governmentCaveat: null,
    stateExclusions: ["MA", "CA"],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/zepbound",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 2 — LillyDirect · Zepbound Program B ─────────────────────────
  {
    id: "lillydirect-zepbound-b",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Zepbound",
    drugGeneric: "tirzepatide",
    programVariant: "Savings card (insured without coverage, single-dose pen)",
    drugGenericKey: "tirzepatide-obesity",
    conditionTileIds: ["obesity"],
    fdaIndication:
      "Obesity or overweight with weight-related medical condition; moderate-to-severe OSA in adults with obesity.",
    insuranceRequirement: "commercial-without-coverage",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 499,
    priceDisplay: "$499/mo",
    priceNotes:
      "Flat $499/mo regardless of dose. Up to 13 fills/year. Card expires 12/31/2026.",
    eligibilityNotes:
      "Commercial insurance WITHOUT Zepbound pen coverage required. Age 18+. US resident or Puerto Rico.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/zepbound",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 3 — LillyDirect · Zepbound Program C ─────────────────────────
  {
    id: "lillydirect-zepbound-c",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Zepbound",
    drugGeneric: "tirzepatide",
    programVariant: "Savings card (insured without coverage, KwikPen)",
    drugGenericKey: "tirzepatide-obesity",
    conditionTileIds: ["obesity"],
    fdaIndication:
      "Obesity or overweight with weight-related medical condition; moderate-to-severe OSA in adults with obesity.",
    insuranceRequirement: "commercial-without-coverage",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 299,
    priceDisplay: "$299\u2013$449/mo",
    priceNotes:
      "$299 (2.5mg), $399 (5mg), $449 (7.5\u201315mg) Journey Program price. Must refill within 45 days for Journey pricing on higher doses.",
    dosePricing: [
      { dose: "2.5 mg", price: "$299/mo" },
      { dose: "5 mg", price: "$399/mo" },
      { dose: "7.5–15 mg", price: "$449/mo" },
    ],
    eligibilityNotes:
      "Commercial insurance WITHOUT KwikPen coverage required. Age 18+. US resident or Puerto Rico. 45-day refill window critical for higher doses.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/zepbound",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 4 — LillyDirect · Zepbound Program D ─────────────────────────
  {
    id: "lillydirect-zepbound-d",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Zepbound",
    drugGeneric: "tirzepatide",
    programVariant: "Self-pay cash (all patients incl. government-insured)",
    drugGenericKey: "tirzepatide-obesity",
    conditionTileIds: ["obesity"],
    fdaIndication:
      "Obesity or overweight with weight-related medical condition; moderate-to-severe OSA in adults with obesity.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 299,
    priceDisplay: "$299\u2013$449/mo",
    priceNotes:
      "Journey Program: $299 (2.5mg), $399 (5mg), $449 (7.5\u201315mg). Regular price $499\u2013$699 if 45-day refill missed. No stated expiry.",
    dosePricing: [
      { dose: "2.5 mg", price: "$299/mo" },
      { dose: "5 mg", price: "$399/mo" },
      { dose: "7.5–15 mg", price: "$449/mo" },
    ],
    eligibilityNotes:
      "No insurance required. Valid Rx required. Government-insured patients explicitly directed to this path. Must refill within 45 days for Journey pricing.",
    governmentCaveat:
      "Government-insured patients are explicitly directed to this cash-pay path by the manufacturer.",
    stateExclusions: [],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/zepbound",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 5 — LillyDirect · Emgality Program A ─────────────────────────
  {
    id: "lillydirect-emgality-a",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Emgality",
    drugGeneric: "galcanezumab-gnlm",
    programVariant: "Savings card (insured with coverage)",
    drugGenericKey: "galcanezumab-migraine",
    conditionTileIds: ["migraine"],
    fdaIndication:
      "Preventive treatment of migraine in adults; episodic cluster headache in adults.",
    insuranceRequirement: "commercial-with-coverage",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 35,
    priceDisplay: "As low as $35/mo",
    priceNotes:
      "$35/mo for up to 12 months. Max $4,900/year savings. Card expires 12/31/2026.",
    eligibilityNotes:
      "Commercial insurance WITH Emgality coverage required. Age 18+. US resident or Puerto Rico only. 12-month duration cap.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/emgality",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 6 — LillyDirect · Emgality Program B ─────────────────────────
  {
    id: "lillydirect-emgality-b",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Emgality",
    drugGeneric: "galcanezumab-gnlm",
    programVariant: "First fill free (insured without coverage)",
    drugGenericKey: "galcanezumab-migraine",
    conditionTileIds: ["migraine"],
    fdaIndication:
      "Preventive treatment of migraine in adults; episodic cluster headache in adults.",
    insuranceRequirement: "commercial-without-coverage",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 0,
    priceDisplay: "$0 first fill",
    priceNotes:
      "$0 for 1 fill only (trial/introductory). Max 1 fill total. Card expires 12/31/2026.",
    eligibilityNotes:
      "Commercial insurance WITHOUT Emgality coverage required. Age 18+. US resident or Puerto Rico only. 1 fill maximum.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/emgality",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 7 — LillyDirect · Emgality Program C ─────────────────────────
  {
    id: "lillydirect-emgality-c",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Emgality",
    drugGeneric: "galcanezumab-gnlm",
    programVariant: "Self-pay (no savings card)",
    drugGenericKey: "galcanezumab-migraine",
    conditionTileIds: ["migraine"],
    fdaIndication:
      "Preventive treatment of migraine in adults; episodic cluster headache in adults.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "not-applicable",
    accessibilityScore: 1,
    sortPrice: 764,
    priceDisplay: "~$764/fill (list price)",
    priceNotes:
      "No flat discounted cash price offered. Self-pay approaches list price ($763.94/fill). Lilly Cares Foundation available separately for low-income patients.",
    eligibilityNotes:
      "No formal enrollment or card. Valid Rx required. No fill cap. Government-insured patients retain their own coverage but get no LillyDirect savings card.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/emgality",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 8 — LillyDirect · Humalog ────────────────────────────────────
  {
    id: "lillydirect-humalog",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Humalog",
    drugGeneric: "insulin lispro",
    programVariant: "Savings card (insured) + Cash savings card (uninsured)",
    drugGenericKey: "insulin-lispro-diabetes",
    conditionTileIds: ["type1-diabetes", "type2-diabetes"],
    fdaIndication:
      "Type 1 and Type 2 diabetes mellitus.",
    insuranceRequirement: "any",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 35,
    priceDisplay: "As low as $35/mo",
    priceNotes:
      "Two programs both at $35/mo: (1) Insurance savings card (up to 16 fills/yr), (2) Cash savings card \u2014 no insurance required (up to 14 fills/yr). Both expire 12/31/2026.",
    eligibilityNotes:
      "Valid Rx required. US resident or territory. Age 18+. Government beneficiaries excluded from both programs.",
    governmentCaveat: null,
    stateExclusions: ["MA", "CA"],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/humalog",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 9 — LillyDirect · Humulin Program A ──────────────────────────
  {
    id: "lillydirect-humulin-a",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Humulin",
    drugGeneric:
      "insulin human injection (R, 70/30); insulin isophane human (N); insulin human 500u/mL (R U-500)",
    programVariant: "Savings card (insured)",
    drugGenericKey: "insulin-human-diabetes",
    conditionTileIds: ["type1-diabetes", "type2-diabetes"],
    fdaIndication:
      "Type 1 and Type 2 diabetes mellitus (R U-500 for patients requiring >200 units/day).",
    insuranceRequirement: "commercial-required",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 35,
    priceDisplay: "As low as $35/mo",
    priceNotes:
      "$35/mo with commercial insurance. Max $3,000/fill (with coverage) or up to full retail price (without). Up to 16 fills/yr. Card expires 12/31/2026.",
    eligibilityNotes:
      "Commercial insurance required. Age 18+. US resident or territory. Government beneficiaries excluded.",
    governmentCaveat: null,
    stateExclusions: ["MA", "CA"],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/humulin",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 10 — LillyDirect · Humulin Program B ─────────────────────────
  {
    id: "lillydirect-humulin-b",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Humulin",
    drugGeneric:
      "insulin human injection (R, 70/30); insulin isophane human (N); insulin human 500u/mL (R U-500)",
    programVariant: "Cash savings card (self-pay/uninsured)",
    drugGenericKey: "insulin-human-diabetes",
    conditionTileIds: ["type1-diabetes", "type2-diabetes"],
    fdaIndication:
      "Type 1 and Type 2 diabetes mellitus (R U-500 for patients requiring >200 units/day).",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 35,
    priceDisplay: "As low as $35/mo",
    priceNotes:
      "$35/mo \u2014 no insurance required. Max savings up to full retail price per fill. Up to 14 fills/year. Card expires 12/31/2026.",
    eligibilityNotes:
      "No insurance required. Age 18+. US resident or territory. Government beneficiaries excluded.",
    governmentCaveat: null,
    stateExclusions: ["MA", "CA"],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/humulin",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 11 — LillyDirect · Basaglar Program A ────────────────────────
  {
    id: "lillydirect-basaglar-a",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Basaglar",
    drugGeneric: "insulin glargine injection",
    programVariant: "Savings card (insured)",
    drugGenericKey: "insulin-glargine-diabetes",
    conditionTileIds: ["type1-diabetes", "type2-diabetes"],
    fdaIndication:
      "Long-acting insulin for type 1 diabetes adults and children 6+; type 2 diabetes adults. Biosimilar to Lantus.",
    insuranceRequirement: "commercial-required",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 35,
    priceDisplay: "As low as $35/mo",
    priceNotes:
      "$35/mo with commercial insurance. Max $16,000/yr savings. Up to 16 fills/yr (with coverage) or 14/yr (without). Card expires 12/31/2026.",
    eligibilityNotes:
      "Commercial insurance required. Age 18+. US resident or territory. CA/MA biosimilar substitution exemptions apply.",
    governmentCaveat: null,
    stateExclusions: ["MA", "CA"],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/basaglar",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 12 — LillyDirect · Basaglar Program B ────────────────────────
  {
    id: "lillydirect-basaglar-b",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Basaglar",
    drugGeneric: "insulin glargine injection",
    programVariant: "Cash savings card (self-pay/uninsured)",
    drugGenericKey: "insulin-glargine-diabetes",
    conditionTileIds: ["type1-diabetes", "type2-diabetes"],
    fdaIndication:
      "Long-acting insulin for type 1 diabetes adults and children 6+; type 2 diabetes adults. Biosimilar to Lantus.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 35,
    priceDisplay: "As low as $35/mo",
    priceNotes:
      "$35/mo \u2014 no insurance required. Max savings up to full retail price per fill. Up to 14 fills/year. Card expires 12/31/2026.",
    eligibilityNotes:
      "No insurance required. Age 18+. US resident or territory. CA/MA biosimilar substitution exemptions apply. Government beneficiaries excluded.",
    governmentCaveat: null,
    stateExclusions: ["MA", "CA"],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/basaglar",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 13 — LillyDirect · Lyumjev Program A ─────────────────────────
  {
    id: "lillydirect-lyumjev-a",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Lyumjev",
    drugGeneric: "insulin lispro-aabc injection",
    programVariant: "Savings card (insured)",
    drugGenericKey: "insulin-lispro-aabc-diabetes",
    conditionTileIds: ["type1-diabetes", "type2-diabetes"],
    fdaIndication:
      "Fast-acting insulin to control high blood sugar in adults and children with type 1 and type 2 diabetes.",
    insuranceRequirement: "commercial-required",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 35,
    priceDisplay: "As low as $35/mo",
    priceNotes:
      "$35/mo with commercial insurance. Max $16,000/yr. Up to 16 fills/yr (with coverage) or 14/yr (without). Card expires 12/31/2026.",
    eligibilityNotes:
      "Commercial insurance required. Age 18+. US resident or territory. CA/MA exemptions apply.",
    governmentCaveat: null,
    stateExclusions: ["MA", "CA"],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/lyumjev",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 14 — LillyDirect · Lyumjev Program B ─────────────────────────
  {
    id: "lillydirect-lyumjev-b",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Lyumjev",
    drugGeneric: "insulin lispro-aabc injection",
    programVariant: "Cash savings card (self-pay/uninsured)",
    drugGenericKey: "insulin-lispro-aabc-diabetes",
    conditionTileIds: ["type1-diabetes", "type2-diabetes"],
    fdaIndication:
      "Fast-acting insulin to control high blood sugar in adults and children with type 1 and type 2 diabetes.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 35,
    priceDisplay: "As low as $35/mo",
    priceNotes:
      "$35/mo \u2014 no insurance required. Max savings up to full retail price per fill. Up to 14 fills/year. Card expires 12/31/2026.",
    eligibilityNotes:
      "No insurance required. Age 18+. US resident or territory. CA/MA exemptions apply. Government beneficiaries excluded.",
    governmentCaveat: null,
    stateExclusions: ["MA", "CA"],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/lyumjev",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 15 — LillyDirect · Rezvoglar Program A ───────────────────────
  {
    id: "lillydirect-rezvoglar-a",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Rezvoglar",
    drugGeneric: "insulin glargine-aglr injection",
    programVariant: "Savings card (insured)",
    drugGenericKey: "insulin-glargine-aglr-diabetes",
    conditionTileIds: ["type1-diabetes", "type2-diabetes"],
    fdaIndication:
      "Long-acting insulin for adults and children with diabetes mellitus. Interchangeable biosimilar to Lantus.",
    insuranceRequirement: "commercial-required",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 35,
    priceDisplay: "As low as $35/mo",
    priceNotes:
      "$35/mo with commercial insurance. Max $16,000/yr. Up to 16 fills/yr (with coverage) or 14/yr (without). Card expires 12/31/2026.",
    eligibilityNotes:
      "Commercial insurance required. Age 18+. US resident or territory. CA/MA biosimilar substitution exemptions apply.",
    governmentCaveat: null,
    stateExclusions: ["MA", "CA"],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/rezvoglar",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 16 — LillyDirect · Rezvoglar Program B ───────────────────────
  {
    id: "lillydirect-rezvoglar-b",
    platform: "LillyDirect",
    manufacturer: "Eli Lilly",
    drugBrand: "Rezvoglar",
    drugGeneric: "insulin glargine-aglr injection",
    programVariant: "Cash savings card (self-pay/uninsured)",
    drugGenericKey: "insulin-glargine-aglr-diabetes",
    conditionTileIds: ["type1-diabetes", "type2-diabetes"],
    fdaIndication:
      "Long-acting insulin for adults and children with diabetes mellitus. Interchangeable biosimilar to Lantus.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 35,
    priceDisplay: "As low as $35/mo",
    priceNotes:
      "$35/mo \u2014 no insurance required. Max savings up to full retail price per fill. Up to 14 fills/year. Card expires 12/31/2026.",
    eligibilityNotes:
      "No insurance required. Age 18+. US resident or territory. CA/MA biosimilar substitution exemptions apply. Government beneficiaries excluded.",
    governmentCaveat: null,
    stateExclusions: ["MA", "CA"],
    platformUrl:
      "https://www.lilly.com/lillydirect/medicines/rezvoglar",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 17 — NovoCare · Wegovy Tablet Cash Self-Pay ──────────────────
  {
    id: "novocare-wegovy-tab-cash",
    platform: "NovoCare Pharmacy",
    manufacturer: "Novo Nordisk",
    drugBrand: "Wegovy Tablet",
    drugGeneric: "semaglutide",
    programVariant: "Self-pay cash",
    drugGenericKey: "semaglutide-obesity",
    conditionTileIds: ["obesity"],
    fdaIndication:
      "Chronic weight management (GLP-1); Wegovy 25mg tablet FDA-approved.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 3,
    sortPrice: 149,
    priceDisplay: "$149\u2013$299/mo",
    priceNotes:
      "Intro: $149/mo for 1.5mg & 4mg (first 2 months). 4mg extended: $199/mo until Aug 31 2026. Standard: $299/mo. FSA/HSA accepted.",
    eligibilityNotes:
      "Valid Rx required. New-patient intro pricing requires being new to Wegovy Savings Offer AND NovoCare Pharmacy. US patient.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl: "https://www.novocare.com/pharmacy.html",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 18 — NovoCare · Wegovy Tablet Commercial Insurance ───────────
  {
    id: "novocare-wegovy-tab-ins",
    platform: "NovoCare Pharmacy",
    manufacturer: "Novo Nordisk",
    drugBrand: "Wegovy Tablet",
    drugGeneric: "semaglutide",
    programVariant: "Savings card (insured)",
    drugGenericKey: "semaglutide-obesity",
    conditionTileIds: ["obesity"],
    fdaIndication:
      "Chronic weight management (GLP-1); Wegovy 25mg tablet FDA-approved.",
    insuranceRequirement: "commercial-required",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 25,
    priceDisplay: "As little as $25/mo",
    priceNotes:
      "$25/mo with commercial insurance. Pharmacy pickup only (no delivery). List price: $1,349.02/package.",
    eligibilityNotes:
      "Valid Rx required. Commercially insured. Government beneficiaries excluded. Pickup only.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl: "https://www.novocare.com/pharmacy.html",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 19 — NovoCare · Wegovy Injection Cash Self-Pay ───────────────
  {
    id: "novocare-wegovy-inj-cash",
    platform: "NovoCare Pharmacy",
    manufacturer: "Novo Nordisk",
    drugBrand: "Wegovy Injection",
    drugGeneric: "semaglutide",
    programVariant: "Self-pay cash",
    drugGenericKey: "semaglutide-obesity",
    conditionTileIds: ["obesity"],
    fdaIndication:
      "Chronic weight management (GLP-1); FDA-approved injection.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 3,
    sortPrice: 199,
    priceDisplay: "$199\u2013$349/mo",
    priceNotes:
      "Intro: $199/mo for 0.25mg & 0.5mg (first 2 fills; ends Jun 30 2026). Standard: $349/mo. FSA/HSA accepted. Free shipping or local pickup.",
    eligibilityNotes:
      "Valid Rx required. New-patient intro pricing requires being new to Wegovy Savings Offer AND NovoCare Pharmacy. US patient.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl: "https://www.novocare.com/pharmacy.html",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 20 — NovoCare · Wegovy Injection Commercial Insurance ────────
  {
    id: "novocare-wegovy-inj-ins",
    platform: "NovoCare Pharmacy",
    manufacturer: "Novo Nordisk",
    drugBrand: "Wegovy Injection",
    drugGeneric: "semaglutide",
    programVariant: "Savings card (insured)",
    drugGenericKey: "semaglutide-obesity",
    conditionTileIds: ["obesity"],
    fdaIndication:
      "Chronic weight management (GLP-1); FDA-approved injection.",
    insuranceRequirement: "commercial-required",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 25,
    priceDisplay: "As little as $25/mo",
    priceNotes:
      "$25/mo with commercial insurance. Pharmacy pickup only. List price: $1,349.02/package.",
    eligibilityNotes:
      "Valid Rx required. Commercially insured. Government beneficiaries excluded. Pickup only.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl: "https://www.novocare.com/pharmacy.html",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 21 — NovoCare · Ozempic Injection Cash Self-Pay ──────────────
  {
    id: "novocare-ozempic-cash",
    platform: "NovoCare Pharmacy",
    manufacturer: "Novo Nordisk",
    drugBrand: "Ozempic",
    drugGeneric: "semaglutide",
    programVariant: "Self-pay cash",
    drugGenericKey: "semaglutide-diabetes",
    conditionTileIds: ["type2-diabetes"],
    fdaIndication: "Type 2 diabetes management (GLP-1); FDA-approved.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 3,
    sortPrice: 199,
    priceDisplay: "$199\u2013$499/mo",
    priceNotes:
      "Intro: $199/mo for 0.25mg & 0.5mg (first 2 fills; ends Jun 30 2026). Standard: $349/mo (0.25\u20131mg), $499/mo (2mg). FSA/HSA accepted.",
    eligibilityNotes:
      "Valid Rx required. New-patient intro pricing requires being new to Ozempic Savings Offer AND NovoCare Pharmacy. US patient.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl: "https://www.novocare.com/pharmacy.html",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 22 — NovoCare · Ozempic Injection Commercial Insurance ───────
  {
    id: "novocare-ozempic-ins",
    platform: "NovoCare Pharmacy",
    manufacturer: "Novo Nordisk",
    drugBrand: "Ozempic",
    drugGeneric: "semaglutide",
    programVariant: "Savings card (insured)",
    drugGenericKey: "semaglutide-diabetes",
    conditionTileIds: ["type2-diabetes"],
    fdaIndication: "Type 2 diabetes management (GLP-1); FDA-approved.",
    insuranceRequirement: "commercial-required",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 25,
    priceDisplay: "As little as $25/mo",
    priceNotes:
      "$25/mo with commercial insurance. Max $100/mo savings. Good up to 48 months. Does NOT count toward deductible or OOP max.",
    eligibilityNotes:
      "Valid Rx required. Commercially insured. Government beneficiaries excluded. 48-month limit. Does not count toward deductible or OOP max.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl: "https://www.novocare.com/pharmacy.html",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 23 — PfizerForAll · Zavzpret ─────────────────────────────────
  {
    id: "pfizerforall-zavzpret",
    platform: "PfizerForAll",
    manufacturer: "Pfizer",
    drugBrand: "Zavzpret",
    drugGeneric: "zavegepant",
    programVariant: "Savings card (insured) + bridge fill",
    drugGenericKey: "zavegepant-migraine",
    conditionTileIds: ["migraine"],
    fdaIndication:
      "Acute treatment of migraine attacks with or without aura in adults.",
    insuranceRequirement: "commercial-required",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 0,
    priceDisplay: "$0/mo",
    priceNotes:
      "Copay savings card: $0/mo for eligible commercially insured. Bridge/free trial: $0 for 1 fill. No true manufacturer cash-pay program. Card expires 12/31/2026.",
    eligibilityNotes:
      "Must have private/commercial insurance. Age 18+. US and Puerto Rico only. Max 1 redemption per 30 days.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl: "https://www.zavzpret.com/save",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 24 — PfizerForAll · Paxlovid ─────────────────────────────────
  {
    id: "pfizerforall-paxlovid",
    platform: "PfizerForAll",
    manufacturer: "Pfizer",
    drugBrand: "Paxlovid",
    drugGeneric: "nirmatrelvir, ritonavir",
    programVariant: "Government PAP (free)",
    drugGenericKey: "nirmatrelvir-ritonavir-other",
    conditionTileIds: ["other"],
    fdaIndication:
      "Mild-to-moderate COVID-19 in high-risk patients 12+.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 0,
    priceDisplay: "$0 (free)",
    priceNotes:
      "Free via USG PAP through Dec 31, 2026. Commercially insured patients use separate PAXCESS copay program.",
    eligibilityNotes:
      "Medicare/Medicaid/uninsured = primary eligible population. Income verification added Mar 1, 2025.",
    governmentCaveat:
      "Government-insured patients are the primary eligible population for this free program.",
    stateExclusions: [],
    platformUrl: "https://www.pfizerforall.com",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 25 — Eliquis DTP Cash-Pay ────────────────────────────────────
  {
    id: "eliquis-dtp-cash",
    platform: "ELIQUIS DTP Program (BMS/Pfizer)",
    manufacturer: "Bristol-Myers Squibb + Pfizer",
    drugBrand: "Eliquis",
    drugGeneric: "apixaban",
    programVariant: "DTP cash-pay (insurance not accepted)",
    drugGenericKey: "apixaban-heart",
    conditionTileIds: ["heart-cholesterol"],
    fdaIndication:
      "Stroke risk reduction in AFib; DVT treatment and prevention; pulmonary embolism.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 2,
    sortPrice: 346,
    priceDisplay: "$346/mo",
    priceNotes:
      "$346 (60 tabs/30-day). Free home delivery all 50 states + PR + USVI. Insurance explicitly NOT accepted. No expiry stated.",
    eligibilityNotes:
      "Eligible US patients with valid Rx. Cash-pay only \u2014 cannot submit to any insurance. Cannot combine with other savings. 340B ineligible.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward deductible.",
    stateExclusions: ["MA", "CA"],
    platformUrl:
      "https://www.eliquis.bmscustomerconnect.com/assets/commercial/us/eliquisbmscustomerconnect/en/pdf/dtp_eliquis.pdf",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 26 — PfizerForAll · Nurtec ODT ───────────────────────────────
  {
    id: "pfizerforall-nurtec",
    platform: "PfizerForAll",
    manufacturer: "Pfizer",
    drugBrand: "Nurtec ODT",
    drugGeneric: "rimegepant",
    programVariant: "Unconfirmed \u2014 verify with manufacturer",
    drugGenericKey: "rimegepant-migraine",
    conditionTileIds: ["migraine"],
    fdaIndication:
      "Acute migraine treatment and prevention.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "not-stated",
    accessibilityScore: 1,
    sortPrice: Infinity,
    priceDisplay: "Not listed",
    priceNotes:
      "Not found on PfizerForAll self-pay list as of Mar 2026. May be available through Pfizer PAP separately \u2014 needs verification.",
    eligibilityNotes:
      "Not confirmed on PfizerForAll self-pay program. Verify with manufacturer.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl: "https://www.pfizerforall.com",
    lastVerified: "Mar 2026",
    dataStatus: "verify",
  },

  // ── ROW 27 — PfizerForAll · Eucrisa ──────────────────────────────────
  {
    id: "pfizerforall-eucrisa",
    platform: "PfizerForAll",
    manufacturer: "Pfizer",
    drugBrand: "Eucrisa",
    drugGeneric: "crisaborole",
    programVariant: "GoodRx cash program (no insurance required)",
    drugGenericKey: "crisaborole-psoriasis",
    conditionTileIds: ["psoriasis-skin"],
    fdaIndication:
      "Atopic dermatitis (eczema) \u2014 PDE4 inhibitor.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 158,
    priceDisplay: "$158\u2013$223",
    priceNotes:
      "GoodRx/Pfizer self-pay: $158.48 (60g, 83% off) / $223.14 (100g, 83% off). Copay card separately: $10/tube for commercially insured.",
    eligibilityNotes:
      "US residents and Puerto Rico only. Valid Rx required. Cannot combine with other savings. 340B ineligible.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward deductible.",
    stateExclusions: ["MA", "CA"],
    platformUrl:
      "https://www.goodrx.com/eucrisa?utm_source=pfe",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 28 — PfizerForAll · Xeljanz ──────────────────────────────────
  {
    id: "pfizerforall-xeljanz",
    platform: "PfizerForAll",
    manufacturer: "Pfizer",
    drugBrand: "Xeljanz",
    drugGeneric: "tofacitinib",
    programVariant: "GoodRx cash + copay card (insured)",
    drugGenericKey: "tofacitinib-autoimmune",
    conditionTileIds: ["arthritis-autoimmune"],
    fdaIndication:
      "Rheumatoid arthritis; psoriatic arthritis; ulcerative colitis; juvenile idiopathic arthritis; ankylosing spondylitis. JAK inhibitor.",
    insuranceRequirement: "any",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 1,
    sortPrice: 1518,
    priceDisplay: "$1,518/mo cash \u00b7 $0/mo copay card",
    priceNotes:
      "GoodRx cash: $1,518.30 (30 tabs, 65% off retail). Copay card: $0/mo for commercially insured (annual cap $4,000\u2013$15,000).",
    eligibilityNotes:
      "GoodRx cash: US + PR, valid Rx. Copay card: commercial insurance required. Government beneficiaries excluded from copay card. High cash price.",
    governmentCaveat: null,
    stateExclusions: ["MA", "CA"],
    platformUrl:
      "https://www.goodrx.com/xeljanz?utm_source=pfe",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 29 — PfizerForAll · Xeljanz XR ───────────────────────────────
  {
    id: "pfizerforall-xeljanz-xr",
    platform: "PfizerForAll",
    manufacturer: "Pfizer",
    drugBrand: "Xeljanz XR",
    drugGeneric: "tofacitinib (extended-release)",
    programVariant: "GoodRx cash + copay card (insured)",
    drugGenericKey: "tofacitinib-xr-autoimmune",
    conditionTileIds: ["arthritis-autoimmune"],
    fdaIndication:
      "Rheumatoid arthritis; psoriatic arthritis; ulcerative colitis. JAK inhibitor extended-release.",
    insuranceRequirement: "any",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 1,
    sortPrice: 3204,
    priceDisplay: "$3,204/mo cash \u00b7 $0/mo copay card",
    priceNotes:
      "GoodRx cash: $3,203.70 (30 tabs, 63% off retail). Copay card: $0/mo for commercially insured (annual cap $4,000\u2013$15,000).",
    eligibilityNotes:
      "Same as Xeljanz. GoodRx cash: US + PR. Copay card: commercial insurance required. 22mg dose carries elevated risk warnings.",
    governmentCaveat: null,
    stateExclusions: ["MA", "CA"],
    platformUrl:
      "https://www.goodrx.com/xeljanz-xr?utm_source=pfe",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 30 — AZ Patient Direct · Airsupra ────────────────────────────
  {
    id: "azpatientdirect-airsupra",
    platform: "AZ Patient Direct",
    manufacturer: "AstraZeneca",
    drugBrand: "Airsupra",
    drugGeneric: "albuterol / budesonide",
    programVariant: "Self-pay cash (home delivery only)",
    drugGenericKey: "albuterol-budesonide-asthma",
    conditionTileIds: ["asthma-copd"],
    fdaIndication:
      "Asthma \u2014 rescue/maintenance inhaler (SABA/ICS combination).",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "not-stated",
    accessibilityScore: 2,
    sortPrice: 201,
    priceDisplay: "$201/inhaler",
    priceNotes:
      "$201/inhaler (home delivery only \u2014 not available at retail). HSA/FSA eligible. Eligible patients via AZ&Me: as little as $0.",
    eligibilityNotes:
      "Valid Rx required. US patients only. Home delivery only via ASPN Pharmacies. Insurance eligibility and support program qualification checked during enrollment.",
    governmentCaveat:
      "Government eligibility determined during enrollment. Verify with manufacturer.",
    stateExclusions: [],
    platformUrl:
      "https://www.azpatientdirect.com/airsupra/home",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 31 — AZ Patient Direct · Bevespi Aerosphere ──────────────────
  {
    id: "azpatientdirect-bevespi",
    platform: "AZ Patient Direct",
    manufacturer: "AstraZeneca",
    drugBrand: "Bevespi Aerosphere",
    drugGeneric: "glycopyrrolate / formoterol fumarate",
    programVariant: "Self-pay cash (home delivery only)",
    drugGenericKey: "glycopyrrolate-formoterol-copd",
    conditionTileIds: ["asthma-copd"],
    fdaIndication:
      "COPD \u2014 maintenance treatment (LAMA/LABA combination).",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "not-stated",
    accessibilityScore: 2,
    sortPrice: 51,
    priceDisplay: "$51/inhaler",
    priceNotes:
      "$51/inhaler (home delivery only). Eligible patients via AZ support programs: as little as $35. HSA/FSA eligible.",
    eligibilityNotes:
      "Valid Rx required. US patients only. Home delivery only via ASPN Pharmacies / Medvantx.",
    governmentCaveat:
      "Government eligibility determined during enrollment. Verify with manufacturer.",
    stateExclusions: [],
    platformUrl:
      "https://www.azpatientdirect.com/bevespi/home",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 32 — AZ Patient Direct · Farxiga ─────────────────────────────
  {
    id: "azpatientdirect-farxiga",
    platform: "AZ Patient Direct",
    manufacturer: "AstraZeneca",
    drugBrand: "Farxiga",
    drugGeneric: "dapagliflozin",
    programVariant: "Self-pay cash (home delivery only)",
    drugGenericKey: "dapagliflozin-diabetes-heart",
    conditionTileIds: ["type2-diabetes", "heart-cholesterol"],
    fdaIndication:
      "Type 2 diabetes; heart failure; chronic kidney disease.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "not-stated",
    accessibilityScore: 2,
    sortPrice: 181.59,
    priceDisplay: "$181.59/mo",
    priceNotes:
      "$181.59/30 tablets (home delivery only). Eligible patients via AZ&Me: as little as $0. HSA/FSA eligible.",
    eligibilityNotes:
      "Valid Rx required. US patients only. Home delivery only via ASPN Pharmacies / Medvantx. No retail pharmacy pickup at self-pay price.",
    governmentCaveat:
      "Government eligibility determined during enrollment. Verify with manufacturer.",
    stateExclusions: [],
    platformUrl:
      "https://www.azpatientdirect.com/farxiga/home",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 33 — AZ Patient Direct · Xigduo XR ──────────────────────────
  {
    id: "azpatientdirect-xigduo-xr",
    platform: "AZ Patient Direct",
    manufacturer: "AstraZeneca",
    drugBrand: "Xigduo XR",
    drugGeneric: "dapagliflozin / metformin HCl",
    programVariant: "Self-pay cash (home delivery only)",
    drugGenericKey: "dapagliflozin-metformin-diabetes",
    conditionTileIds: ["type2-diabetes"],
    fdaIndication:
      "Type 2 diabetes \u2014 combination oral therapy. BOXED WARNING: lactic acidosis risk.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "not-stated",
    accessibilityScore: 2,
    sortPrice: 181.59,
    priceDisplay: "$181.59/mo",
    priceNotes:
      "$181.59 (home delivery only). Eligible patients: as little as $0. HSA/FSA eligible. BOXED WARNING: lactic acidosis.",
    eligibilityNotes:
      "Valid Rx required. US patients only. Home delivery only. BOXED WARNING for lactic acidosis \u2014 prescriber context required.",
    governmentCaveat:
      "Government eligibility determined during enrollment. Verify with manufacturer.",
    stateExclusions: [],
    platformUrl:
      "https://www.azpatientdirect.com/xigduo/home",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 34 — AmgenNow · Repatha ──────────────────────────────────────
  {
    id: "amgennow-repatha",
    platform: "AmgenNow",
    manufacturer: "Amgen",
    drugBrand: "Repatha",
    drugGeneric: "evolocumab",
    programVariant: "Cash-pay + copay card (insured)",
    drugGenericKey: "evolocumab-heart",
    conditionTileIds: ["heart-cholesterol"],
    fdaIndication:
      "High LDL cholesterol; reducing risk of heart attack, stroke, and coronary revascularization. PCSK9 inhibitor.",
    insuranceRequirement: "any",
    governmentInsuranceHandling: "allowed-waiver",
    accessibilityScore: 2,
    sortPrice: 239,
    priceDisplay: "$239/mo cash \u00b7 $25/mo copay card",
    priceNotes:
      "Cash: $239/mo (65% off ~$688 retail). Copay card: $25/mo (commercially insured). No prior auth or step therapy required.",
    eligibilityNotes:
      "US patient with valid Rx. No income requirement. Government-insured must waive govt insurance for ALL Amgen Rx for the calendar year.",
    governmentCaveat:
      "Must waive government insurance for all Amgen medications for the entire calendar year.",
    stateExclusions: [],
    platformUrl: "https://www.amgennow.com",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 35 — AmgenNow · Aimovig ──────────────────────────────────────
  {
    id: "amgennow-aimovig",
    platform: "AmgenNow",
    manufacturer: "Amgen",
    drugBrand: "Aimovig",
    drugGeneric: "erenumab-aooe",
    programVariant: "Cash-pay + copay card (insured)",
    drugGenericKey: "erenumab-migraine",
    conditionTileIds: ["migraine"],
    fdaIndication:
      "Preventive treatment of migraine in adults. CGRP receptor antagonist.",
    insuranceRequirement: "any",
    governmentInsuranceHandling: "allowed-waiver",
    accessibilityScore: 2,
    sortPrice: 299,
    priceDisplay: "$299/mo cash \u00b7 $49/mo copay card",
    priceNotes:
      "Cash: $299/mo (65\u201368% off ~$947 retail). Copay card: $49/mo for commercially insured. No prior auth or step therapy required.",
    eligibilityNotes:
      "US patient with valid Rx. No income requirement. Government-insured must waive govt insurance for ALL Amgen Rx for the calendar year.",
    governmentCaveat:
      "Must waive government insurance for all Amgen medications for the entire calendar year.",
    stateExclusions: [],
    platformUrl: "https://www.amgennow.com",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 36 — AmgenNow · Amjevita ─────────────────────────────────────
  {
    id: "amgennow-amjevita",
    platform: "AmgenNow",
    manufacturer: "Amgen",
    drugBrand: "Amjevita",
    drugGeneric: "adalimumab-atto",
    programVariant: "Cash-pay + copay card (insured)",
    drugGenericKey: "adalimumab-atto-autoimmune",
    conditionTileIds: ["arthritis-autoimmune"],
    fdaIndication:
      "Rheumatoid arthritis; psoriatic arthritis; juvenile idiopathic arthritis; ankylosing spondylitis; Crohn\u2019s disease; plaque psoriasis; ulcerative colitis. TNF blocker biosimilar of Humira.",
    insuranceRequirement: "any",
    governmentInsuranceHandling: "allowed-waiver",
    accessibilityScore: 2,
    sortPrice: 299,
    priceDisplay: "$299/mo cash \u00b7 $0/mo copay card",
    priceNotes:
      "Cash: $299/mo (2 autoinjectors 40mg/0.4mL). Other formulations: $527\u2013$3,323. Copay card: $0/mo for commercially insured.",
    eligibilityNotes:
      "US patient with valid Rx. Government-insured must waive govt insurance for ALL Amgen Rx for the calendar year. CA/MA biosimilar rules may apply.",
    governmentCaveat:
      "Must waive government insurance for all Amgen medications for the entire calendar year.",
    stateExclusions: ["MA", "CA"],
    platformUrl: "https://www.amgennow.com",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 37 — BMS Patient Connect · Sotyktu ───────────────────────────
  {
    id: "bms-sotyktu",
    platform: "BMS Patient Connect",
    manufacturer: "Bristol Myers Squibb",
    drugBrand: "Sotyktu",
    drugGeneric: "deucravacitinib",
    programVariant: "Cash-pay (self-pay US patients)",
    drugGenericKey: "deucravacitinib-psoriasis",
    conditionTileIds: ["psoriasis-skin"],
    fdaIndication: "Moderate-to-severe plaque psoriasis.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "not-stated",
    accessibilityScore: 2,
    sortPrice: 950,
    priceDisplay: "$950/mo",
    priceNotes:
      "86% off $6,868 list price. Available since Jan 2026. Ships to all 50 states + Puerto Rico.",
    eligibilityNotes:
      "Valid Rx required. Cash-pay US patients. No income requirement stated.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl: "https://www.bmspatientconnect.com/sotyktu",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 38 — Eliquis Savings Card (commercially insured) ─────────────
  {
    id: "eliquis-savings-card",
    platform: "ELIQUIS DTP Program (BMS/Pfizer)",
    manufacturer: "Bristol-Myers Squibb + Pfizer",
    drugBrand: "Eliquis",
    drugGeneric: "apixaban",
    programVariant: "Savings card (insured)",
    drugGenericKey: "apixaban-heart",
    conditionTileIds: ["heart-cholesterol"],
    fdaIndication:
      "Stroke risk reduction in AFib; DVT treatment and prevention; pulmonary embolism.",
    insuranceRequirement: "commercial-required",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 10,
    priceDisplay: "As little as $10/mo",
    priceNotes:
      "Co-pay savings card: $10/mo minimum for commercially insured. 30-day free trial also available (first fill $0). Separate from DTP cash program.",
    eligibilityNotes:
      "Commercially insured patients. Cannot combine with DTP cash program. 30-day free trial available as separate offer.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl:
      "https://www.eliquis.bmscustomerconnect.com/assets/commercial/us/eliquisbmscustomerconnect/en/pdf/dtp_eliquis.pdf",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 39 — BI Direct · Spiriva Respimat ────────────────────────────
  {
    id: "bi-direct-spiriva",
    platform: "Boehringer Ingelheim Direct",
    manufacturer: "Boehringer Ingelheim",
    drugBrand: "Spiriva Respimat",
    drugGeneric: "tiotropium bromide",
    programVariant: "Savings card (insured or uninsured) + cash self-pay",
    drugGenericKey: "tiotropium-copd",
    conditionTileIds: ["asthma-copd"],
    fdaIndication:
      "COPD \u2014 long-term once-daily maintenance; reduces COPD flare-ups. Not for sudden symptoms or asthma.",
    insuranceRequirement: "any",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 3,
    sortPrice: 35,
    priceDisplay: "As little as $35/mo",
    priceNotes:
      "Savings card: $35/mo (commercial insured or uninsured). Cash self-pay: $35/mo. Free shipping. No expiry stated.",
    eligibilityNotes:
      "Valid Rx required. US patient. No income requirement. Government-funded program patients excluded from savings card. FSA/HSA accepted.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl:
      "https://www.boehringer-ingelheim.com/us/direct/medicines/spiriva-respimat",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 40 — BI Direct · Striverdi Respimat ──────────────────────────
  {
    id: "bi-direct-striverdi",
    platform: "Boehringer Ingelheim Direct",
    manufacturer: "Boehringer Ingelheim",
    drugBrand: "Striverdi Respimat",
    drugGeneric: "olodaterol",
    programVariant: "Cash-only (insurance cannot be used)",
    drugGenericKey: "olodaterol-copd",
    conditionTileIds: ["asthma-copd"],
    fdaIndication:
      "COPD \u2014 long-term maintenance treatment in adults. Not for sudden symptoms or asthma.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 35,
    priceDisplay: "$35/mo",
    priceNotes:
      "$35/30-day fill. Insurance cannot be billed at any time. Free USPS shipping (7\u201310 business days). No expiry stated.",
    eligibilityNotes:
      "US patient. Valid Rx required. No insurance claim permitted. HSA/FSA accepted. Account creation required at BoehringerDirect.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward deductible.",
    stateExclusions: [],
    platformUrl:
      "https://www.boehringer-ingelheim.com/us/direct/medicines/striverdi-respimat",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 41 — BI Direct · Jentadueto ──────────────────────────────────
  {
    id: "bi-direct-jentadueto",
    platform: "Boehringer Ingelheim Direct",
    manufacturer: "Boehringer Ingelheim",
    drugBrand: "Jentadueto",
    drugGeneric: "linagliptin / metformin HCl",
    programVariant: "Cash-only (insurance cannot be used)",
    drugGenericKey: "linagliptin-metformin-diabetes",
    conditionTileIds: ["type2-diabetes"],
    fdaIndication:
      "Type 2 diabetes \u2014 used with diet and exercise to lower blood sugar in adults. Not for type 1 diabetes.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 55,
    priceDisplay: "$55/mo",
    priceNotes:
      "$55/30-day fill. Insurance cannot be billed at any time. Free USPS shipping (7\u201310 business days). No expiry stated.",
    eligibilityNotes:
      "US patient. Valid Rx required. No insurance claim permitted. HSA/FSA accepted. Account creation required at BoehringerDirect.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward deductible.",
    stateExclusions: [],
    platformUrl:
      "https://www.boehringer-ingelheim.com/us/direct/medicines/jentadueto",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 42 — BI Direct · Jentadueto XR ───────────────────────────────
  {
    id: "bi-direct-jentadueto-xr",
    platform: "Boehringer Ingelheim Direct",
    manufacturer: "Boehringer Ingelheim",
    drugBrand: "Jentadueto XR",
    drugGeneric: "linagliptin / metformin HCl (extended-release)",
    programVariant: "Cash-only (insurance cannot be used)",
    drugGenericKey: "linagliptin-metformin-xr-diabetes",
    conditionTileIds: ["type2-diabetes"],
    fdaIndication:
      "Type 2 diabetes \u2014 used with diet and exercise to lower blood sugar in adults. Not for type 1 diabetes.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 55,
    priceDisplay: "$55/mo",
    priceNotes:
      "$55/30-day fill. Same terms as Jentadueto. Insurance cannot be billed. Free USPS shipping. No expiry stated.",
    eligibilityNotes:
      "US patient. Valid Rx required. No insurance claim permitted. HSA/FSA accepted. Account creation required at BoehringerDirect.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward deductible.",
    stateExclusions: [],
    platformUrl:
      "https://www.boehringer-ingelheim.com/us/direct/medicines/jentadueto-xr",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 43 — Novartis Direct · Cosentyx Program A ────────────────────
  {
    id: "novartis-cosentyx-a",
    platform: "Novartis Direct",
    manufacturer: "Novartis",
    drugBrand: "Cosentyx",
    drugGeneric: "secukinumab",
    programVariant: "DTP cash-pay (adult dosing)",
    drugGenericKey: "secukinumab-psoriasis-autoimmune",
    conditionTileIds: ["psoriasis-skin", "arthritis-autoimmune"],
    fdaIndication:
      "Moderate-to-severe plaque psoriasis (adults/children 6+); psoriatic arthritis; ankylosing spondylitis; hidradenitis suppurativa.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 2,
    sortPrice: 3434,
    priceDisplay: "$3,434/mo",
    priceNotes:
      "55% off list price ($8,492/mo list). Insurance cannot be used. Fulfilled through ASPN Pharmacies / Thrifty White. HSA/FSA accepted.",
    eligibilityNotes:
      "Valid US prescription required. US residents only (incl. territories). Cannot combine with any other Novartis offer. NPAF (no-cost PAP) available for patients who cannot afford cash price.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward deductible.",
    stateExclusions: [],
    platformUrl:
      "https://www.cosentyx.com/all/treatment-cost/direct-to-patient",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 44 — Novartis Direct · Cosentyx Program B (75mg pediatric) ───
  {
    id: "novartis-cosentyx-b",
    platform: "Novartis Direct",
    manufacturer: "Novartis",
    drugBrand: "Cosentyx",
    drugGeneric: "secukinumab",
    programVariant: "DTP cash-pay (75mg pediatric dosing)",
    drugGenericKey: "secukinumab-psoriasis-autoimmune",
    conditionTileIds: ["psoriasis-skin", "arthritis-autoimmune"],
    fdaIndication:
      "Moderate-to-severe plaque psoriasis (children 6+); psoriatic arthritis (children 2+). Pediatric weight-based dosing.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 2,
    sortPrice: 1717,
    priceDisplay: "$1,717/mo",
    priceNotes:
      "55% off list price. Pediatric dosing formulation. Same DTP terms as Program A. No expiry stated.",
    eligibilityNotes:
      "Valid US prescription required. US residents only (incl. territories). Cannot combine with any other Novartis offer.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward deductible.",
    stateExclusions: [],
    platformUrl:
      "https://www.cosentyx.com/all/treatment-cost/direct-to-patient",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 45 — Novartis Direct · Cosentyx Co-Pay Plus ──────────────────
  {
    id: "novartis-cosentyx-copay-plus",
    platform: "Novartis Direct",
    manufacturer: "Novartis",
    drugBrand: "Cosentyx",
    drugGeneric: "secukinumab",
    programVariant: "Co-Pay Plus (insured)",
    drugGenericKey: "secukinumab-psoriasis-autoimmune",
    conditionTileIds: ["psoriasis-skin", "arthritis-autoimmune"],
    fdaIndication:
      "Moderate-to-severe plaque psoriasis; psoriatic arthritis; ankylosing spondylitis; hidradenitis suppurativa.",
    insuranceRequirement: "commercial-required",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 0,
    priceDisplay: "As little as $0/mo",
    priceNotes:
      "Co-pay savings for commercially insured. Subject to annual co-pay benefit limit. Infusion admin support excludes RI and MA.",
    eligibilityNotes:
      "Commercial insurance required. Valid Rx. US and Puerto Rico only. Excluded: Medicare, Medicaid, TRICARE, VA, any federal/state plan.",
    governmentCaveat: null,
    stateExclusions: ["RI", "MA"],
    platformUrl:
      "https://www.cosentyx.com/all/treatment-cost",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 46 — Novartis Direct · Cosentyx Covered Until You're Covered ─
  {
    id: "novartis-cosentyx-covered",
    platform: "Novartis Direct",
    manufacturer: "Novartis",
    drugBrand: "Cosentyx",
    drugGeneric: "secukinumab",
    programVariant: "Covered Until You\u2019re Covered (PA denied, insured)",
    drugGenericKey: "secukinumab-psoriasis-autoimmune",
    conditionTileIds: ["psoriasis-skin", "arthritis-autoimmune"],
    fdaIndication:
      "Moderate-to-severe plaque psoriasis; psoriatic arthritis; ankylosing spondylitis; hidradenitis suppurativa (subcutaneous only).",
    insuranceRequirement: "commercial-required",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 0,
    priceDisplay: "$0/mo for up to 2 years",
    priceNotes:
      "Free Cosentyx subcutaneous injection for up to 2 years or until insurance approves coverage. Must appeal denial within 90 days of enrollment.",
    eligibilityNotes:
      "Private insurance required with prior authorization denial. Must appeal within 90 days. Subcutaneous only \u2014 IV infusion not eligible.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl:
      "https://www.cosentyx.com/all/treatment-cost",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 47 — Novartis Direct · Mayzent Program A (2mg) ───────────────
  {
    id: "novartis-mayzent-a",
    platform: "Novartis Direct",
    manufacturer: "Novartis",
    drugBrand: "Mayzent",
    drugGeneric: "siponimod",
    programVariant: "DTP cash-pay (2mg maintenance)",
    drugGenericKey: "siponimod-other",
    conditionTileIds: ["other"],
    fdaIndication:
      "Relapsing forms of multiple sclerosis (MS) in adults.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 2,
    sortPrice: 1073,
    priceDisplay: "$1,073/pack (30ct)",
    priceNotes:
      "90\u201392% off list price. Capped at $1,073.10 per package. Fulfilled through ASPN Pharmacies / Thrifty White. No expiry stated.",
    eligibilityNotes:
      "Valid US prescription required. US residents only. HIPAA authorization required. CYP2C9 genotype test required before starting.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward deductible.",
    stateExclusions: [],
    platformUrl: "https://mayzent.myaspn.com/",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 48 — Novartis Direct · Mayzent Program B (1mg) ───────────────
  {
    id: "novartis-mayzent-b",
    platform: "Novartis Direct",
    manufacturer: "Novartis",
    drugBrand: "Mayzent",
    drugGeneric: "siponimod",
    programVariant: "DTP cash-pay (1mg maintenance)",
    drugGenericKey: "siponimod-other",
    conditionTileIds: ["other"],
    fdaIndication:
      "Relapsing forms of multiple sclerosis (MS) in adults.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 2,
    sortPrice: 930,
    priceDisplay: "$930/pack (30ct)",
    priceNotes:
      "90\u201392% off list price. Same DTP terms as 2mg. Fulfilled through ASPN Pharmacies / Thrifty White. No expiry stated.",
    eligibilityNotes:
      "Valid US prescription required. US residents only. HIPAA authorization required.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward deductible.",
    stateExclusions: [],
    platformUrl: "https://mayzent.myaspn.com/",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 49 — Novartis Direct · Mayzent Program C (titration packs) ───
  {
    id: "novartis-mayzent-c",
    platform: "Novartis Direct",
    manufacturer: "Novartis",
    drugBrand: "Mayzent",
    drugGeneric: "siponimod",
    programVariant: "DTP cash-pay (0.25mg titration/starter packs)",
    drugGenericKey: "siponimod-other",
    conditionTileIds: ["other"],
    fdaIndication:
      "Relapsing forms of multiple sclerosis (MS) in adults \u2014 titration packs for dose escalation.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 2,
    sortPrice: 42,
    priceDisplay: "$42\u2013$168/pack",
    priceNotes:
      "$168 (28ct), $72 (12ct), $42 (7ct). 90\u201392% off list price. Used for dose titration at treatment initiation. No expiry stated.",
    eligibilityNotes:
      "Valid US prescription required. US residents only. HIPAA authorization required.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward deductible.",
    stateExclusions: [],
    platformUrl: "https://mayzent.myaspn.com/",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 50 — Novartis Direct · Mayzent Co-Pay Card ───────────────────
  {
    id: "novartis-mayzent-copay-card",
    platform: "Novartis Direct",
    manufacturer: "Novartis",
    drugBrand: "Mayzent",
    drugGeneric: "siponimod",
    programVariant: "Co-Pay Card (insured)",
    drugGenericKey: "siponimod-other",
    conditionTileIds: ["other"],
    fdaIndication:
      "Relapsing forms of multiple sclerosis (MS) in adults.",
    insuranceRequirement: "commercial-required",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 0,
    priceDisplay: "As little as $0/mo",
    priceNotes:
      "Co-pay savings for commercially insured. Annual combined limit of $18,000 (Co-Pay Card + Payment Card + Rebate). Patient responsible once limit reached.",
    eligibilityNotes:
      "Commercial/private insurance required. Valid Rx. US and Puerto Rico only. Excluded: Medicare, Medicaid, TRICARE, VA, DoD.",
    governmentCaveat: null,
    stateExclusions: [],
    platformUrl: "https://www.mayzent.com/",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 51 — Novartis Direct · Mayzent Medical Co-Pay ────────────────
  {
    id: "novartis-mayzent-medical-copay",
    platform: "Novartis Direct",
    manufacturer: "Novartis",
    drugBrand: "Mayzent",
    drugGeneric: "siponimod",
    programVariant: "Medical co-pay (initial assessments, insured)",
    drugGenericKey: "siponimod-other",
    conditionTileIds: ["other"],
    fdaIndication:
      "Relapsing forms of MS in adults \u2014 covers initial medical assessments and first-dose observations only.",
    insuranceRequirement: "commercial-required",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 2,
    sortPrice: 0,
    priceDisplay: "Up to $900 reimbursement",
    priceNotes:
      "One-time support for treatment initiation. Covers initial assessments and first-dose observations only. $125 patient deductible. Not for ongoing treatment cost.",
    eligibilityNotes:
      "Commercial/private insurance required. Valid Rx. Not available for RI residents. Patient must report program benefits to insurer.",
    governmentCaveat: null,
    stateExclusions: ["RI"],
    platformUrl: "https://www.mayzent.com/",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 52 — Novartis Direct · Rydapt ────────────────────────────────
  {
    id: "novartis-rydapt",
    platform: "Novartis Direct",
    manufacturer: "Novartis",
    drugBrand: "Rydapt",
    drugGeneric: "midostaurin",
    programVariant: "DTP cash-pay (oncology)",
    drugGenericKey: "midostaurin-other",
    conditionTileIds: ["other"],
    fdaIndication:
      "AML with FLT3 mutations; advanced systemic mastocytosis; SM with associated hematological neoplasm; mast cell leukemia.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 2,
    sortPrice: 2909,
    priceDisplay: "$2,909/pack (56ct)",
    priceNotes:
      "78% off list price. Pack 56 (~14-day AML supply): $2,908.64. Pack 112 (~28-day SM supply): $5,817.28. Fulfilled through ASPN / Thrifty White.",
    eligibilityNotes:
      "Valid US prescription required. US residents only. HIPAA authorization required. Cell phone + text consent required for ASPN processing.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward deductible.",
    stateExclusions: [],
    platformUrl: "https://rydapt.myaspn.com/",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 53 — Novartis Direct · Tabrecta ──────────────────────────────
  {
    id: "novartis-tabrecta",
    platform: "Novartis Direct",
    manufacturer: "Novartis",
    drugBrand: "Tabrecta",
    drugGeneric: "capmatinib",
    programVariant: "DTP cash-pay (oncology)",
    drugGenericKey: "capmatinib-other",
    conditionTileIds: ["other"],
    fdaIndication:
      "Metastatic NSCLC in adults whose tumors have a mutation leading to MET exon 14 skipping.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 2,
    sortPrice: 2650,
    priceDisplay: "$2,650\u2013$2,670/pack (56ct)",
    priceNotes:
      "77% off list price. 200mg 56ct: $2,649.92. 150mg 56ct: $2,669.52. Monthly cost ~double per-pack. Fulfilled through ASPN / Thrifty White.",
    eligibilityNotes:
      "Valid US prescription required. US residents only. HIPAA authorization required. Cell phone + text consent required for ASPN processing.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward deductible.",
    stateExclusions: [],
    platformUrl: "https://tabrecta.myaspn.com/",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 54 — GSK for You · Advair Diskus ─────────────────────────────
  {
    id: "gsk-advair-diskus",
    platform: "GSK for You",
    manufacturer: "GSK",
    drugBrand: "Advair Diskus",
    drugGeneric: "fluticasone propionate and salmeterol",
    programVariant: "DTP cash-pay (insurance not accepted)",
    drugGenericKey: "fluticasone-salmeterol-asthma-copd",
    conditionTileIds: ["asthma-copd"],
    fdaIndication:
      "Asthma maintenance (12+); COPD maintenance treatment.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 35,
    priceDisplay: "$35\u2013$64/inhaler",
    priceNotes:
      "$35.27 (100mcg), $44.31 (250mcg), $64.07 (500mcg). +$25 shipping fee per order. Fulfilled through Alto Pharmacy.",
    dosePricing: [
      { dose: "100 mcg", price: "$35.27" },
      { dose: "250 mcg", price: "$44.31" },
      { dose: "500 mcg", price: "$64.07" },
    ],
    eligibilityNotes:
      "Valid US prescription required. US residents only (incl. DC, PR, territories). Cash or cash equivalent only. No insurance claim permitted.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward TrOOP/deductible. Must notify insurer.",
    stateExclusions: [],
    platformUrl:
      "https://gskforyou.com/programs/direct-to-you/",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 55 — GSK for You · Advair HFA ────────────────────────────────
  {
    id: "gsk-advair-hfa",
    platform: "GSK for You",
    manufacturer: "GSK",
    drugBrand: "Advair HFA",
    drugGeneric: "fluticasone propionate and salmeterol",
    programVariant: "DTP cash-pay (insurance not accepted)",
    drugGenericKey: "fluticasone-salmeterol-asthma",
    conditionTileIds: ["asthma-copd"],
    fdaIndication:
      "Asthma maintenance treatment (4+). NOT indicated for COPD.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 125,
    priceDisplay: "$125\u2013$220/inhaler",
    priceNotes:
      "$125.40 (45mcg), $159.46 (115mcg), $219.86 (230mcg). +$25 shipping fee per order. Fulfilled through Alto Pharmacy.",
    dosePricing: [
      { dose: "45 mcg", price: "$125.40" },
      { dose: "115 mcg", price: "$159.46" },
      { dose: "230 mcg", price: "$219.86" },
    ],
    eligibilityNotes:
      "Valid US prescription required. US residents only. Cash or cash equivalent only. No insurance claim permitted.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward TrOOP/deductible. Must notify insurer.",
    stateExclusions: [],
    platformUrl:
      "https://gskforyou.com/programs/direct-to-you/",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 56 — GSK for You · Anoro Ellipta ─────────────────────────────
  {
    id: "gsk-anoro-ellipta",
    platform: "GSK for You",
    manufacturer: "GSK",
    drugBrand: "Anoro Ellipta",
    drugGeneric: "umeclidinium and vilanterol",
    programVariant: "DTP cash-pay (insurance not accepted)",
    drugGenericKey: "umeclidinium-vilanterol-copd",
    conditionTileIds: ["asthma-copd"],
    fdaIndication:
      "COPD maintenance treatment in adults. Once-daily LABA/LAMA combination.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 222.94,
    priceDisplay: "$222.94/inhaler",
    priceNotes:
      "$222.94/inhaler. +$25 shipping fee per order. Fulfilled through Alto Pharmacy.",
    eligibilityNotes:
      "Valid US prescription required. US residents only. Cash or cash equivalent only. No insurance claim permitted.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward TrOOP/deductible. Must notify insurer.",
    stateExclusions: [],
    platformUrl:
      "https://gskforyou.com/programs/direct-to-you/",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 57 — GSK for You · Arnuity Ellipta ───────────────────────────
  {
    id: "gsk-arnuity-ellipta",
    platform: "GSK for You",
    manufacturer: "GSK",
    drugBrand: "Arnuity Ellipta",
    drugGeneric: "fluticasone furoate",
    programVariant: "DTP cash-pay (insurance not accepted)",
    drugGenericKey: "fluticasone-furoate-asthma",
    conditionTileIds: ["asthma-copd"],
    fdaIndication:
      "Asthma maintenance treatment in patients 5+. Once-daily inhaled corticosteroid.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 78,
    priceDisplay: "$78\u2013$104/inhaler",
    priceNotes:
      "$77.98 (50mcg), $77.98 (100mcg), $104.40 (200mcg). +$25 shipping fee per order. Fulfilled through Alto Pharmacy.",
    dosePricing: [
      { dose: "50 mcg", price: "$77.98" },
      { dose: "100 mcg", price: "$77.98" },
      { dose: "200 mcg", price: "$104.40" },
    ],
    eligibilityNotes:
      "Valid US prescription required. US residents only. Cash or cash equivalent only. No insurance claim permitted.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward TrOOP/deductible. Must notify insurer.",
    stateExclusions: [],
    platformUrl:
      "https://gskforyou.com/programs/direct-to-you/",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 58 — GSK for You · Incruse Ellipta ───────────────────────────
  {
    id: "gsk-incruse-ellipta",
    platform: "GSK for You",
    manufacturer: "GSK",
    drugBrand: "Incruse Ellipta",
    drugGeneric: "umeclidinium",
    programVariant: "DTP cash-pay (insurance not accepted)",
    drugGenericKey: "umeclidinium-copd",
    conditionTileIds: ["asthma-copd"],
    fdaIndication:
      "COPD maintenance treatment in adults. Once-daily LAMA.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 134,
    priceDisplay: "$134.20/inhaler",
    priceNotes:
      "$134.20/inhaler. +$25 shipping fee per order. Fulfilled through Alto Pharmacy.",
    eligibilityNotes:
      "Valid US prescription required. US residents only. Cash or cash equivalent only. No insurance claim permitted.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward TrOOP/deductible. Must notify insurer.",
    stateExclusions: [],
    platformUrl:
      "https://gskforyou.com/programs/direct-to-you/",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 59 — GSK for You · Ventolin HFA ──────────────────────────────
  {
    id: "gsk-ventolin-hfa",
    platform: "GSK for You",
    manufacturer: "GSK",
    drugBrand: "Ventolin HFA",
    drugGeneric: "albuterol sulfate",
    programVariant: "DTP cash-pay (insurance not accepted)",
    drugGenericKey: "albuterol-asthma",
    conditionTileIds: ["asthma-copd"],
    fdaIndication:
      "Treatment or prevention of bronchospasm in patients 4+ with reversible obstructive airway disease; exercise-induced bronchospasm.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 25.80,
    priceDisplay: "$25.80/inhaler",
    priceNotes:
      "$25.80/inhaler. +$25 shipping fee per order \u2014 fee may approach or exceed drug cost for single orders. Fulfilled through Alto Pharmacy.",
    eligibilityNotes:
      "Valid US prescription required. US residents only. Cash or cash equivalent only. No insurance claim permitted.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward TrOOP/deductible. Must notify insurer.",
    stateExclusions: [],
    platformUrl:
      "https://gskforyou.com/programs/direct-to-you/",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 60 — GSK for You · Relenza ───────────────────────────────────
  {
    id: "gsk-relenza",
    platform: "GSK for You",
    manufacturer: "GSK",
    drugBrand: "Relenza",
    drugGeneric: "zanamivir",
    programVariant: "DTP cash-pay (insurance not accepted)",
    drugGenericKey: "zanamivir-other",
    conditionTileIds: ["other"],
    fdaIndication:
      "Treatment of influenza A and B in adults and children 7+ (treatment) or 5+ (prophylaxis) symptomatic for no more than 2 days.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 27.90,
    priceDisplay: "$27.90/pack",
    priceNotes:
      "$27.90/pack. +$25 shipping fee per order. Fulfilled through Alto Pharmacy.",
    eligibilityNotes:
      "Valid US prescription required. US residents only. Cash or cash equivalent only. No insurance claim permitted.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward TrOOP/deductible. Must notify insurer.",
    stateExclusions: [],
    platformUrl:
      "https://gskforyou.com/programs/direct-to-you/",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 61 — GSK for You · Malarone Pediatric ────────────────────────
  {
    id: "gsk-malarone-pediatric",
    platform: "GSK for You",
    manufacturer: "GSK",
    drugBrand: "Malarone Pediatric",
    drugGeneric: "atovaquone and proguanil HCl",
    programVariant: "DTP cash-pay (insurance not accepted)",
    drugGenericKey: "atovaquone-proguanil-other",
    conditionTileIds: ["other"],
    fdaIndication:
      "Prevention and treatment of Plasmodium falciparum malaria in pediatric patients.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 92.74,
    priceDisplay: "$92.74/pack",
    priceNotes:
      "$92.74/pack. +$25 shipping fee per order. Fulfilled through Alto Pharmacy. Adult formulation not listed \u2014 pediatric only.",
    eligibilityNotes:
      "Valid US prescription required. US residents only. Cash or cash equivalent only. No insurance claim permitted.",
    governmentCaveat:
      "May purchase at cash price. Cannot seek reimbursement or count toward TrOOP/deductible. Must notify insurer.",
    stateExclusions: [],
    platformUrl:
      "https://gskforyou.com/programs/direct-to-you/",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 61 — J&J Direct · INVOKANA ─────────────────────────────────────
  {
    id: "jjdirect-invokana",
    platform: "J&J Direct",
    manufacturer: "Johnson & Johnson",
    drugBrand: "INVOKANA",
    drugGeneric: "canagliflozin",
    programVariant: "Cash-pay (self-pay)",
    drugGenericKey: "canagliflozin-diabetes-heart",
    conditionTileIds: ["type2-diabetes", "heart-cholesterol"],
    fdaIndication:
      "Type 2 diabetes; cardiovascular risk reduction in type 2 diabetes with established CVD; diabetic kidney disease (DKD).",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 225,
    priceDisplay: "$225/mo",
    priceNotes:
      "$225/30ct (both 100mg and 300mg). $675/90ct. Insurance not accepted. Prices may change at any time without notice.",
    eligibilityNotes:
      "US resident (incl. Puerto Rico & U.S. Virgin Islands). Valid prescription required. Open to all insurance statuses. Phone enrollment only: (855) 522-3241 or HCP fax (888) 975-0603.",
    governmentCaveat:
      "May purchase at cash price. Cannot submit claims to or seek reimbursement from Medicare, Medicaid, TRICARE, DoD, or VA. Costs do not count toward Part D TrOOP or any deductible.",
    stateExclusions: [],
    platformUrl:
      "https://www.jnjdirect.com",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 62 — J&J Direct · INVOKAMET ────────────────────────────────────
  {
    id: "jjdirect-invokamet",
    platform: "J&J Direct",
    manufacturer: "Johnson & Johnson",
    drugBrand: "INVOKAMET",
    drugGeneric: "canagliflozin / metformin HCl",
    programVariant: "Cash-pay (self-pay)",
    drugGenericKey: "canagliflozin-metformin-diabetes",
    conditionTileIds: ["type2-diabetes"],
    fdaIndication:
      "Type 2 diabetes — combination oral therapy (SGLT2 inhibitor + biguanide).",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 225,
    priceDisplay: "$225/mo",
    priceNotes:
      "$225/60ct (all four strengths priced identically). Insurance not accepted. Prices may change at any time without notice.",
    eligibilityNotes:
      "US resident (incl. Puerto Rico & U.S. Virgin Islands). Valid prescription required. Open to all insurance statuses. Phone enrollment only: (855) 522-3241 or HCP fax (888) 975-0603.",
    governmentCaveat:
      "May purchase at cash price. Cannot submit claims to or seek reimbursement from Medicare, Medicaid, TRICARE, DoD, or VA. Costs do not count toward Part D TrOOP or any deductible.",
    stateExclusions: [],
    platformUrl:
      "https://www.jnjdirect.com",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 63 — J&J Direct · INVOKAMET XR ─────────────────────────────────
  {
    id: "jjdirect-invokamet-xr",
    platform: "J&J Direct",
    manufacturer: "Johnson & Johnson",
    drugBrand: "INVOKAMET XR",
    drugGeneric: "canagliflozin / metformin HCl (extended-release)",
    programVariant: "Cash-pay (self-pay)",
    drugGenericKey: "canagliflozin-metformin-xr-diabetes",
    conditionTileIds: ["type2-diabetes"],
    fdaIndication:
      "Type 2 diabetes — combination oral therapy (SGLT2 inhibitor + extended-release biguanide).",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 225,
    priceDisplay: "$225/mo",
    priceNotes:
      "$225/60ct (all four strengths priced identically). Insurance not accepted. Prices may change at any time without notice.",
    eligibilityNotes:
      "US resident (incl. Puerto Rico & U.S. Virgin Islands). Valid prescription required. Open to all insurance statuses. Phone enrollment only: (855) 522-3241 or HCP fax (888) 975-0603.",
    governmentCaveat:
      "May purchase at cash price. Cannot submit claims to or seek reimbursement from Medicare, Medicaid, TRICARE, DoD, or VA. Costs do not count toward Part D TrOOP or any deductible.",
    stateExclusions: [],
    platformUrl:
      "https://www.jnjdirect.com",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 64 — J&J Direct · XARELTO ──────────────────────────────────────
  {
    id: "jjdirect-xarelto",
    platform: "J&J Direct",
    manufacturer: "Johnson & Johnson",
    drugBrand: "XARELTO",
    drugGeneric: "rivaroxaban",
    programVariant: "Cash-pay (self-pay)",
    drugGenericKey: "rivaroxaban-heart",
    conditionTileIds: ["heart-cholesterol"],
    fdaIndication:
      "AFib stroke prevention; DVT/PE treatment and prevention; ACS; CAD/PAD risk reduction.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "allowed-restricted",
    accessibilityScore: 3,
    sortPrice: 197,
    priceDisplay: "$197/mo",
    priceNotes:
      "$197/30ct (all strengths: 10mg, 15mg, 20mg priced identically). $591/90ct. Insurance not accepted. Licensed from Bayer HealthCare AG. Prices may change at any time without notice.",
    eligibilityNotes:
      "US resident (incl. Puerto Rico & U.S. Virgin Islands). Valid prescription required. Open to all insurance statuses. Phone enrollment only: (855) 522-3241 or HCP fax (888) 975-0603.",
    governmentCaveat:
      "May purchase at cash price. Cannot submit claims to or seek reimbursement from Medicare, Medicaid, TRICARE, DoD, or VA. Costs do not count toward Part D TrOOP or any deductible.",
    stateExclusions: [],
    platformUrl:
      "https://www.jnjdirect.com",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 65 — Xofluza Direct · XOFLUZA Coupon ──────────────────────────
  {
    id: "xofluza-direct-coupon",
    platform: "Xofluza Direct",
    manufacturer: "Genentech (Roche)",
    drugBrand: "XOFLUZA",
    drugGeneric: "baloxavir marboxil",
    programVariant: "Coupon (commercially insured + self-pay)",
    drugGenericKey: "baloxavir-other",
    conditionTileIds: ["other"],
    fdaIndication:
      "Treatment of acute uncomplicated influenza in patients ≥5 years symptomatic ≤48 hours (otherwise healthy or at high risk); post-exposure prophylaxis in patients ≥5 years following contact with an influenza case.",
    insuranceRequirement: "any",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 3,
    sortPrice: 35,
    priceDisplay: "As low as $35/fill",
    priceNotes:
      "Patient pays first $35; Genentech covers up to next $70. Max 2 uses. Expires 9/30/2026. Single-dose treatment — not a monthly medication.",
    eligibilityNotes:
      "Valid Rx required. Age ≥5 for Rx; ≥18 to self-redeem coupon (parent/guardian may redeem for minors). US and US Territories only. Commercial or self-pay.",
    governmentCaveat:
      "This offer may not be used by patients in conjunction with prescription insurance under Medicaid, Medicare, TRICARE or similar federal or state programs.",
    stateExclusions: [],
    platformUrl:
      "https://www.xofluza.com/save-on-xofluza/coupon.html",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },

  // ── ROW 66 — Xofluza Direct · $50 Cash Pay ────────────────────────────
  {
    id: "xofluza-direct-cashpay",
    platform: "Xofluza Direct",
    manufacturer: "Genentech (Roche)",
    drugBrand: "XOFLUZA",
    drugGeneric: "baloxavir marboxil",
    programVariant: "$50 Cash Pay (self-pay, no insurance submission)",
    drugGenericKey: "baloxavir-other",
    conditionTileIds: ["other"],
    fdaIndication:
      "Treatment of acute uncomplicated influenza in patients ≥5 years symptomatic ≤48 hours (otherwise healthy or at high risk); post-exposure prophylaxis in patients ≥5 years following contact with an influenza case.",
    insuranceRequirement: "none",
    governmentInsuranceHandling: "excluded",
    accessibilityScore: 4,
    sortPrice: 50,
    priceDisplay: "$50/fill",
    priceNotes:
      "$50 flat for both 40mg and 80mg strengths. ~70% below WAC list price. Single-dose treatment — not a monthly medication. No insurance submission allowed. No stated expiration.",
    eligibilityNotes:
      "Valid Rx required. Age ≥5 for Rx. US and US Territories only. Available only via Alto Pharmacy (same-day + mail) and Cost Plus Drugs (mail only). Cannot submit payment to any insurance.",
    governmentCaveat:
      "Payment cannot be submitted to any third party including government or private insurance. Costs do not count toward Part D TrOOP or any deductible.",
    stateExclusions: [],
    platformUrl:
      "https://www.xofluza.com/save-on-xofluza/coupon.html",
    lastVerified: "Mar 2026",
    dataStatus: "confirmed",
  },
];
