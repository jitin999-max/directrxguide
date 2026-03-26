export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-teal-50/30 pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-teal-50 opacity-60 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-teal-50 opacity-40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-medium px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            11 DTP Platforms · Updated Daily · Free to Use
          </div>
          <a
            href="#what-is-dtp"
            className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full hover:border-teal-300 hover:text-teal-700 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            What is DTP?
          </a>
        </div>

        {/* Main headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] tracking-tight text-balance max-w-4xl mx-auto animate-slide-up">
          Every direct-to-patient drug program,{" "}
          <em className="not-italic italic" style={{ color: "#0D9E80" }}>
            in one place.
          </em>
        </h1>

        {/* Tagline */}
        <p className="mt-5 text-base sm:text-lg text-gray-400 font-sans tracking-wide animate-slide-up stagger-2">
          No pharma bias.&nbsp;&nbsp;·&nbsp;&nbsp;No sales pitch.
        </p>

        {/* Sub-description */}
        <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-slide-up stagger-3">
          We aggregate every manufacturer direct-to-patient program so patients
          and providers can find, compare, and access them instantly.
        </p>

        {/* CTA row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up stagger-4">
          <a
            href="#eligibility"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm transition-all duration-200 shadow-sm shadow-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            Find My Options
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#programs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            Browse Programs
          </a>
        </div>
      </div>
    </section>
  );
}
