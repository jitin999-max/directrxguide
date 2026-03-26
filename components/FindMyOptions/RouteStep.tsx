import type { MedicationRoute } from "@/lib/programs/types";

const ROUTE_OPTIONS: {
  id: MedicationRoute;
  label: string;
  description: string;
  icon: JSX.Element;
}[] = [
  {
    id: "oral",
    label: "Oral medications",
    description: "Tablets and pills you take by mouth",
    icon: (
      /* Pill / capsule icon */
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect x="3" y="10" width="18" height="8" rx="4" ry="4" transform="rotate(-45 12 12)" />
        <line x1="12" y1="12" x2="16.24" y2="7.76" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "injectable",
    label: "Injectable medications",
    description: "Insulin pens, syringes, and injection-based therapies",
    icon: (
      /* Insulin pen icon */
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect x="5" y="4" width="4" height="14" rx="1" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h7a2 2 0 012 2v1a2 2 0 01-2 2H9" />
        <path strokeLinecap="round" d="M7 18v2.5" />
        <line x1="5" y1="9" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    id: "all",
    label: "Show me everything",
    description: "See all available Type 2 Diabetes programs",
    icon: (
      /* Grid / show-all icon */
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
      </svg>
    ),
  },
];

export default function RouteStep({
  selectedRoute,
  onSelect,
  onBack,
}: {
  selectedRoute: MedicationRoute | null;
  onSelect: (route: MedicationRoute) => void;
  onBack: () => void;
}) {
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
        Type 2 Diabetes
      </div>

      <h3 className="font-serif text-2xl text-gray-900 mb-2">
        What type of medication are you looking for?
      </h3>
      <p className="text-sm text-gray-500 mb-8">
        This helps narrow down the most relevant programs for you.
      </p>

      <div className="space-y-3">
        {ROUTE_OPTIONS.map((option, i) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 animate-slide-up stagger-${i + 1} ${
              selectedRoute === option.id
                ? "border-teal-500 bg-teal-50 shadow-sm shadow-teal-100"
                : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                selectedRoute === option.id
                  ? "bg-teal-500 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}>
                {option.icon}
              </span>
              <div>
                <p className={`font-medium text-sm ${
                  selectedRoute === option.id ? "text-teal-700" : "text-gray-800"
                }`}>
                  {option.label}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{option.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
