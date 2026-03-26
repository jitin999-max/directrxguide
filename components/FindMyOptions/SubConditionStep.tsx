import type { OtherSubCondition } from "@/lib/programs/types";
import { OTHER_SUB_CONDITIONS } from "@/lib/programs/constants";

export default function SubConditionStep({
  onSelect,
  onBack,
}: {
  onSelect: (id: OtherSubCondition) => void;
  onBack: () => void;
}) {
  return (
    <div>
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-6"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to conditions
      </button>

      <h3 className="font-serif text-2xl text-gray-900 mb-2">
        Which condition specifically?
      </h3>
      <p className="text-sm text-gray-500 mb-8">
        Select your condition to narrow down available programs.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {OTHER_SUB_CONDITIONS.map((tile) => (
          <button
            key={tile.id}
            onClick={() => onSelect(tile.id)}
            className={`text-left p-4 rounded-xl border-2 transition-all duration-150 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${tile.colorClasses}`}
          >
            <p className="font-medium text-sm leading-snug">{tile.label}</p>
            <p className="text-xs opacity-70 mt-1">{tile.subLabel}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
