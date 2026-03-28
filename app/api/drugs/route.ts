import { NextResponse } from "next/server";
import { PROGRAMS } from "@/lib/programs/data";
import { collapseVariants, rankResults } from "@/lib/programs/filters";

/** Unique confirmed drug names for autocomplete */
const drugNames = Array.from(
  new Set(
    PROGRAMS.filter((p) => p.dataStatus === "confirmed").map((p) => p.drugBrand)
  )
).sort();

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");

  // No query → return drug name list for autocomplete
  if (!q) {
    return NextResponse.json({ names: drugNames });
  }

  // Query → return search results
  const matching = PROGRAMS.filter(
    (p) =>
      p.dataStatus === "confirmed" &&
      p.drugBrand.toLowerCase() === q.toLowerCase()
  );

  if (matching.length === 0) {
    return NextResponse.json({ results: [] });
  }

  const collapsed = collapseVariants(matching, "commercial");
  const ranked = rankResults(collapsed);
  return NextResponse.json({ results: ranked });
}
