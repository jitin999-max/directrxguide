import type {
  DTPProgramRow,
  ConditionTileId,
  InsuranceStatus,
  MedicationRoute,
  RespiratorySubType,
} from "./types";
import { T2D_INJECTABLE_KEYS, T2D_ORAL_KEYS, ASTHMA_KEYS, COPD_KEYS, DRUG_MARKET_YEAR } from "./constants";

/** Filter programs by condition tile. Returns rows where conditionTileIds includes the selected tile. */
export function filterByCondition(
  programs: DTPProgramRow[],
  condition: ConditionTileId
): DTPProgramRow[] {
  return programs.filter(
    (p) => p.dataStatus === "confirmed" && p.conditionTileIds.includes(condition)
  );
}

/** Filter programs by insurance status. Applies eligibility logic per plan. */
export function filterByInsurance(
  programs: DTPProgramRow[],
  insurance: InsuranceStatus
): DTPProgramRow[] {
  switch (insurance) {
    case "uninsured":
      // Show programs where insurance is NOT required
      return programs.filter(
        (p) =>
          p.insuranceRequirement === "none" ||
          p.insuranceRequirement === "any"
      );

    case "commercial":
      // Show copay/savings card programs AND cash-pay programs
      return programs;

    case "government":
      // Exclude programs that explicitly ban government-insured patients
      return programs.filter(
        (p) => p.governmentInsuranceHandling !== "excluded"
      );

    default:
      return programs;
  }
}

/**
 * Within each drug group, select the best-match variant for the user's insurance status.
 * Returns one primary result per drugGenericKey, plus remaining variants as collapsed options.
 */
export interface RankedResult {
  primary: DTPProgramRow;
  variants: DTPProgramRow[];
}

export function collapseVariants(
  programs: DTPProgramRow[],
  insurance: InsuranceStatus
): RankedResult[] {
  // Group by drugGenericKey
  const groups = new Map<string, DTPProgramRow[]>();
  for (const p of programs) {
    const key = p.drugGenericKey;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(p);
  }

  const results: RankedResult[] = [];

  for (const rows of Array.from(groups.values())) {
    // Sort group by best match for insurance status, then by price
    const sorted = [...rows].sort((a, b) => {
      const scoreA = variantScore(a, insurance);
      const scoreB = variantScore(b, insurance);
      if (scoreA !== scoreB) return scoreB - scoreA; // higher score first
      return a.sortPrice - b.sortPrice; // lower price first
    });

    results.push({
      primary: sorted[0],
      variants: sorted.slice(1),
    });
  }

  return results;
}

/** Score how well a variant matches the user's insurance status. Higher = better match. */
function variantScore(p: DTPProgramRow, insurance: InsuranceStatus): number {
  switch (insurance) {
    case "uninsured":
      // Prefer programs that don't require insurance
      if (p.insuranceRequirement === "none") return 3;
      if (p.insuranceRequirement === "any") return 2;
      return 0;

    case "commercial":
      // Prefer copay/savings programs (lower out-of-pocket), then cash-pay
      if (
        p.insuranceRequirement === "commercial-with-coverage" ||
        p.insuranceRequirement === "commercial-required"
      )
        return 3;
      if (p.insuranceRequirement === "commercial-without-coverage") return 2;
      if (p.insuranceRequirement === "any") return 2;
      if (p.insuranceRequirement === "none") return 1;
      return 0;

    case "government":
      // Prefer programs that explicitly allow government-insured
      if (p.governmentInsuranceHandling === "allowed-restricted") return 3;
      if (p.governmentInsuranceHandling === "allowed-waiver") return 2;
      if (p.governmentInsuranceHandling === "not-stated") return 1;
      return 0;

    default:
      return 0;
  }
}

/** Rank collapsed results by sortPrice ascending, then newer to market first, then alphabetical. */
export function rankResults(results: RankedResult[]): RankedResult[] {
  return [...results].sort((a, b) => {
    // Primary: sortPrice ascending (cheapest first)
    if (a.primary.sortPrice !== b.primary.sortPrice)
      return a.primary.sortPrice - b.primary.sortPrice;
    // Secondary: newer drug to market first (higher year = newer)
    const yearA = DRUG_MARKET_YEAR[a.primary.drugGenericKey] ?? 0;
    const yearB = DRUG_MARKET_YEAR[b.primary.drugGenericKey] ?? 0;
    if (yearA !== yearB) return yearB - yearA;
    // Tertiary: alphabetical by drug brand
    return a.primary.drugBrand.localeCompare(b.primary.drugBrand);
  });
}

/** Filter "other" programs by sub-condition drugGenericKeys. */
export function filterBySubCondition(
  programs: DTPProgramRow[],
  drugGenericKeys: string[]
): DTPProgramRow[] {
  return programs.filter((p) => drugGenericKeys.includes(p.drugGenericKey));
}

/** Filter T2D programs by medication route (oral vs injectable). */
export function filterByRoute(
  programs: DTPProgramRow[],
  route: MedicationRoute
): DTPProgramRow[] {
  if (route === "all") return programs;
  const keys = route === "injectable" ? T2D_INJECTABLE_KEYS : T2D_ORAL_KEYS;
  return programs.filter((p) => keys.includes(p.drugGenericKey));
}

/** Filter Asthma & COPD programs by respiratory sub-type. */
export function filterByRespiratorySubType(
  programs: DTPProgramRow[],
  subType: RespiratorySubType
): DTPProgramRow[] {
  if (subType === "all") return programs;
  const keys = subType === "asthma" ? ASTHMA_KEYS : COPD_KEYS;
  return programs.filter((p) => keys.includes(p.drugGenericKey));
}

/** Full pipeline: condition → sub-filters → insurance filter → collapse variants → rank. */
export function findMyOptions(
  programs: DTPProgramRow[],
  condition: ConditionTileId,
  insurance: InsuranceStatus,
  otherDrugGenericKeys?: string[],
  medicationRoute?: MedicationRoute,
  respiratorySubType?: RespiratorySubType
): RankedResult[] {
  let filtered = filterByCondition(programs, condition);
  if (condition === "other" && otherDrugGenericKeys) {
    filtered = filterBySubCondition(filtered, otherDrugGenericKeys);
  }
  if (condition === "type2-diabetes" && medicationRoute) {
    filtered = filterByRoute(filtered, medicationRoute);
  }
  if (condition === "asthma-copd" && respiratorySubType) {
    filtered = filterByRespiratorySubType(filtered, respiratorySubType);
  }
  const byInsurance = filterByInsurance(filtered, insurance);
  const collapsed = collapseVariants(byInsurance, insurance);
  return rankResults(collapsed);
}
