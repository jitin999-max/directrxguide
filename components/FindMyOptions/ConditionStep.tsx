import type { ConditionTileId } from "@/lib/programs/types";
import { CONDITION_TILES } from "@/lib/programs/constants";

export default function ConditionStep({
  onSelect,
}: {
  onSelect: (id: ConditionTileId) => void;
}) {
  return (
    <div className="animate-fade-in">
      <h3 className="font-serif text-2xl text-gray-900 mb-2">
        What condition are you looking for help with?
      </h3>
      <p className="text-sm text-gray-500 mb-8">
        Select a condition to see available direct-to-patient (DTP) programs.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {CONDITION_TILES.map((tile, i) => (
          <button
            key={tile.id}
            onClick={() => onSelect(tile.id)}
            className={`text-left p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 animate-scale-in stagger-${i + 1} ${tile.colorClasses}`}
          >
            <p className="font-medium text-sm leading-snug">{tile.label}</p>
            <p className="text-xs opacity-70 mt-1">{tile.subLabel}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
