const benefits = [
  {
    title: "Convenience",
    description:
      "Many platforms combine virtual doctor visits (telehealth) with direct home delivery of your medications.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
      </svg>
    ),
  },
  {
    title: "Price transparency",
    description:
      "They often cut out the traditional middlemen (like pharmacy benefit managers), allowing you to see the exact flat-rate cash price or copay upfront before you buy.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Access to savings",
    description:
      "These hubs automatically apply manufacturer coupons, patient assistance programs, and federal discounts, helping you get the lowest possible out-of-pocket price.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
];

export default function WhatIsDTP() {
  return (
    <section
      id="what-is-dtp"
      className="py-20 sm:py-24 bg-white border-b border-gray-100"
      aria-labelledby="what-is-dtp-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <p className="text-sm font-medium text-teal-600 uppercase tracking-widest mb-3">
          Learn
        </p>
        <h2
          id="what-is-dtp-heading"
          className="font-serif text-3xl sm:text-4xl text-gray-900 leading-tight mb-6"
        >
          What is DTP{" "}
          <span className="text-gray-400 font-sans text-2xl sm:text-3xl">
            (Direct-to-Patient)
          </span>
        </h2>

        {/* Explanation */}
        <div className="space-y-4 mb-12">
          <p className="text-gray-600 leading-relaxed">
            In the healthcare world, DTP (Direct-to-Patient) and DTC
            (Direct-to-Consumer) mean exactly what they sound like: drug
            manufacturers are providing medications, and sometimes even medical
            care, directly to you.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Instead of the traditional route &mdash; booking a doctor&apos;s
            appointment, taking a paper prescription to a local pharmacy, and
            waiting to see what your insurance will cover &mdash; DTP and DTC
            platforms act as a streamlined &ldquo;one-stop shop.&rdquo;
          </p>
        </div>

        {/* Why popular */}
        <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-6">
          Why are these programs becoming so popular?
        </h3>

        <div className="space-y-4">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`flex gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-teal-200 hover:shadow-sm transition-all duration-300 stagger-${i + 1}`}
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                {b.icon}
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">{b.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
