const benefits = [
  {
    title: "One-click program lookup",
    description:
      "Search by drug name, NDC, or condition to surface every applicable assistance program for your patient in seconds.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Printable patient summaries",
    description:
      "Generate a clean one-page summary of relevant programs to hand directly to patients or attach to visit notes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
  },
  {
    title: "Prior auth & enrollment links",
    description:
      "Direct links to program enrollment forms, prescriber portals, and prior auth resources — all in one place.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "No rep contact, ever",
    description:
      "We surface program information without sending your data to pharmaceutical reps or triggering sales outreach.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
];

export default function HCPSection() {
  return (
    <section
      id="for-hcps"
      className="py-20 sm:py-24 bg-white"
      aria-labelledby="hcp-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-sm font-medium text-teal-600 uppercase tracking-widest mb-4">
              For Healthcare Providers
            </p>
            <h2
              id="hcp-heading"
              className="font-serif text-3xl sm:text-4xl text-gray-900 leading-tight"
            >
              Help your patients afford the drugs you prescribe.
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed">
              Adherence starts at the pharmacy counter. DirectRxGuide gives
              clinicians, residents, and care coordinators a fast, neutral tool
              for finding manufacturer programs — with no industry strings
              attached.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
              >
                HCP Lookup Tool
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium hover:border-teal-300 hover:text-teal-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
              >
                Download Patient Summary PDF
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-3 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {["MD", "PA", "NP", "RPh"].map((role) => (
                  <div
                    key={role}
                    className="w-9 h-9 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-teal-700"
                  >
                    {role}
                  </div>
                ))}
              </div>
              <span>Trusted by physicians, PAs, NPs, and pharmacists</span>
            </div>
          </div>

          {/* Right: benefit cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-teal-200 hover:bg-teal-50/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-teal-600 mb-3 shadow-sm group-hover:border-teal-200 transition-colors">
                  {b.icon}
                </div>
                <h3 className="font-sans font-semibold text-sm text-gray-900 mb-1">
                  {b.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
