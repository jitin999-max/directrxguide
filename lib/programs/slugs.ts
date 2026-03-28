import { PROGRAMS } from "./data";
import type { DTPProgramRow } from "./types";

/** Convert a drug brand name to a URL slug */
export function drugSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export interface DrugEntry {
  slug: string;
  drugBrand: string;
  drugGeneric: string;
  programs: DTPProgramRow[];
}

/** Get all unique drugs with their associated programs (confirmed only) */
export function getAllDrugs(): DrugEntry[] {
  const confirmed = PROGRAMS.filter((p) => p.dataStatus === "confirmed");
  const map = new Map<string, DTPProgramRow[]>();

  for (const p of confirmed) {
    const slug = drugSlug(p.drugBrand);
    if (!map.has(slug)) map.set(slug, []);
    map.get(slug)!.push(p);
  }

  return Array.from(map.entries())
    .map(([slug, programs]) => ({
      slug,
      drugBrand: programs[0].drugBrand,
      drugGeneric: programs[0].drugGeneric,
      programs: programs.sort((a, b) => a.sortPrice - b.sortPrice),
    }))
    .sort((a, b) => a.drugBrand.localeCompare(b.drugBrand));
}

/** Get a single drug by slug */
export function getDrugBySlug(slug: string): DrugEntry | undefined {
  const all = getAllDrugs();
  return all.find((d) => d.slug === slug);
}
