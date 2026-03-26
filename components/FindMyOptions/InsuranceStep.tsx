import type { InsuranceStatus, ConditionTileId } from "@/lib/programs/types";
import { INSURANCE_OPTIONS, CONDITION_TILES } from "@/lib/programs/constants";

export default function InsuranceStep({
  condition,
  selectedInsurance,
  onSelect,
  onBack,
  onSubmit,
}: {
  condition: ConditionTileId;
  selectedInsurance: InsuranceStatus | null;
  onSelect: (id: InsuranceStatus) => void;
  onBack: () => void;
  onSubmit: () => void;
}) {
  const tile = CONDITION_TILES.find((t) => t.id === condition);

  return (
    <div className="animate-fade-in">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-6 group"
      >
        <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to conditions
      </button>

      {/* Selected condition badge */}
      <div className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-4 animate-scale-in">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        {tile?.label}
      </div>

      <h3 className="font-serif text-2xl text-gray-900 mb-2">
        What is your insurance status?
      </h3>
      <p className="text-sm text-gray-500 mb-8">
        This helps us show you programs you may be eligible for.
      </p>

      <div className="space-y-3 mb-8">
        {INSURANCE_OPTIONS.map((option, i) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 animate-slide-up stagger-${i + 1} ${
              selectedInsurance === option.id
                ? "border-teal-500 bg-teal-50 shadow-sm shadow-teal-100"
                : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                selectedInsurance === option.id
                  ? "border-teal-500 bg-teal-500"
                  : "border-gray-300"
              }`}>
                {selectedInsurance === option.id && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div>
                <p className={`font-medium text-sm ${
                  selectedInsurance === option.id ? "text-teal-700" : "text-gray-800"
                }`}>
                  {option.label}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{option.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={onSubmit}
        disabled={!selectedInsurance}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-200 active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:scale-100"
      >
        Find My Options
        <svg className={`w-4 h-4 transition-transform ${selectedInsurance ? "translate-x-0" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
