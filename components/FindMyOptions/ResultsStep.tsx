import type { InsuranceStatus, ConditionTileId } from "@/lib/programs/types";
import type { RankedResult } from "@/lib/programs/filters";
import { CONDITION_TILES, GOVERNMENT_BANNER } from "@/lib/programs/constants";
import ResultCard from "./ResultCard";

export default function ResultsStep({
  condition,
  insurance,
  results,
  onStartOver,
  labelOverride,
}: {
  condition: ConditionTileId;
  insurance: InsuranceStatus;
  results: RankedResult[];
  onStartOver: () => void;
  labelOverride?: string;
}) {
  const tile = CONDITION_TILES.find((t) => t.id === condition);
  const displayLabel = labelOverride || tile?.label;
  const isGovernment = insurance === "government";
  const hasHighCostOnly =
    results.length > 0 && results.every((r) => r.primary.sortPrice >= 1000);

  return (
    <div>
      {/* Back + start over */}
      <button
        onClick={onStartOver}
        className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-6"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Start over
      </button>

      {/* Results banner */}
      <div className="mb-6">
        <h3 className="font-serif text-2xl text-gray-900">
          {results.length > 0 ? (
            <>
              {results.length} program{results.length !== 1 ? "s" : ""} found
              for{" "}
              <span className="text-teal-600">{displayLabel}</span>
            </>
          ) : (
            "No programs found"
          )}
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          Results ranked by estimated out-of-pocket cost
        </p>
      </div>

      {/* Government-insured banner */}
      {isGovernment && results.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <p className="text-xs text-amber-700">{GOVERNMENT_BANNER}</p>
        </div>
      )}

      {/* High-cost specialty banner */}
      {hasHighCostOnly && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
          <p className="text-xs text-gray-600">
            The programs below are for specialty medications with high list
            prices. The DTP prices shown represent significant discounts from
            list price but may still be substantial. Contact the manufacturer for
            additional financial support options.
          </p>
        </div>
      )}

      {/* Results */}
      {results.length > 0 ? (
        <div className="space-y-4">
          {/* Top 3: prominent layout */}
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            {results.slice(0, 1).map((r, i) => (
              <div key={r.primary.id} className="lg:col-span-2">
                <ResultCard result={r} rank={i + 1} insurance={insurance} />
              </div>
            ))}
            {results.slice(1, 3).map((r, i) => (
              <ResultCard
                key={r.primary.id}
                result={r}
                rank={i + 2}
                insurance={insurance}
              />
            ))}
          </div>

          {/* Remaining results */}
          {results.length > 3 && (
            <div className="space-y-3 pt-2">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                More options
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {results.slice(3).map((r, i) => (
                  <ResultCard
                    key={r.primary.id}
                    result={r}
                    rank={i + 4}
                    insurance={insurance}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Empty state */
        <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
          <svg
            className="w-12 h-12 text-gray-300 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <p className="text-gray-600 font-medium mb-2">
            No matching programs found
          </p>
          {isGovernment ? (
            <p className="text-sm text-gray-400 max-w-sm mx-auto">
              Most manufacturer direct-to-patient programs for{" "}
              {tile?.label?.toLowerCase() || "this condition"} are currently
              limited to patients with private insurance or no insurance.
              Government-insured patients (Medicare/Medicaid) are not eligible
              for these specific programs. Talk to your provider about other
              options that may be available to you.
            </p>
          ) : (
            <p className="text-sm text-gray-400 max-w-sm mx-auto">
              We didn&apos;t find any direct-to-patient programs matching your
              selections. This doesn&apos;t mean help isn&apos;t available
              &mdash; it means no manufacturer DTP program currently matches
              this combination.
            </p>
          )}
          <button
            onClick={onStartOver}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
          >
            Try different selections
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Disclaimer */}
      {results.length > 0 && (
        <p className="text-[10px] text-gray-400 text-center mt-8 max-w-lg mx-auto">
          DirectRxGuide is an independent information aggregator. Displaying a
          program does not guarantee eligibility. Eligibility and pricing should
          always be verified directly with the manufacturer. We never store your
          selections or personal data.
        </p>
      )}
    </div>
  );
}
