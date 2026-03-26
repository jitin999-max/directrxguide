import type { GovernmentInsuranceHandling } from "@/lib/programs/types";

const BADGE_CONFIG: Record<
  string,
  { text: string; classes: string } | null
> = {
  "allowed-restricted": {
    text: "Government-insured: may purchase at cash price",
    classes: "bg-amber-50 text-amber-700 border-amber-200",
  },
  "allowed-waiver": {
    text: "Government-insured: must waive for all manufacturer Rx",
    classes: "bg-red-50 text-red-700 border-red-200",
  },
  "not-stated": {
    text: "Government eligibility: verify with manufacturer",
    classes: "bg-gray-100 text-gray-600 border-gray-200",
  },
};

export default function CaveatBadge({
  handling,
  showForGovernment,
}: {
  handling: GovernmentInsuranceHandling;
  showForGovernment: boolean;
}) {
  if (!showForGovernment) return null;
  const config = BADGE_CONFIG[handling];
  if (!config) return null;

  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border ${config.classes}`}
    >
      <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {config.text}
    </span>
  );
}
