import type { Metadata } from "next";
import { headers } from "next/headers";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title:
    "How to Get Wegovy Without Insurance in 2026 — DirectRxGuide",
  description:
    "Wegovy costs $1,300 to $1,400 per month at retail pharmacies without insurance. Through NovoCare's direct-to-patient program, self-pay patients can get Wegovy injection for $199 to $349 per month or the newer Wegovy tablet for $149 to $299 per month.",
  alternates: { canonical: "/learn/wegovy-without-insurance" },
  keywords: [
    "wegovy without insurance",
    "wegovy price without insurance",
    "how to get wegovy without insurance",
    "wegovy cost no insurance",
    "wegovy self-pay price",
    "wegovy DTP program",
    "wegovy novocare",
    "wegovy cash price",
    "wegovy tablet price",
    "wegovy injection price",
    "wegovy semaglutide cost",
    "wegovy weight loss cost",
  ],
  openGraph: {
    title:
      "How to Get Wegovy Without Insurance in 2026 — DirectRxGuide",
    description:
      "Wegovy costs $1,300 to $1,400 per month at retail pharmacies without insurance. Through NovoCare's direct-to-patient program, self-pay patients can get Wegovy for as little as $149 per month.",
    url: "https://directrxguide.com/learn/wegovy-without-insurance",
    siteName: "DirectRxGuide",
    type: "article",
    publishedTime: "2026-03-28T00:00:00Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Get Wegovy Without Insurance in 2026",
  description:
    "Wegovy costs $1,300 to $1,400 per month at retail pharmacies without insurance. Through NovoCare's direct-to-patient program, self-pay patients can get Wegovy injection for $199 to $349 per month or the newer Wegovy tablet for $149 to $299 per month.",
  datePublished: "2026-03-28",
  dateModified: "2026-03-28",
  author: {
    "@type": "Organization",
    name: "DirectRxGuide",
    url: "https://directrxguide.com",
  },
  publisher: {
    "@type": "Organization",
    name: "DirectRxGuide",
    url: "https://directrxguide.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://directrxguide.com/learn/wegovy-without-insurance",
  },
};

export default function WegovyWithoutInsuranceArticle() {
  const nonce = headers().get("x-nonce") ?? undefined;
  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-white pt-20 pb-12 sm:pt-28 sm:pb-16 border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <a
                href="/"
                className="text-sm text-teal-600 hover:text-teal-700 transition-colors"
              >
                Home
              </a>
              <span className="text-gray-300">/</span>
              <a
                href="/learn"
                className="text-sm text-teal-600 hover:text-teal-700 transition-colors"
              >
                Learn
              </a>
              <span className="text-gray-300">/</span>
              <span className="text-sm text-gray-500">
                Wegovy Without Insurance
              </span>
            </div>
            <p className="text-sm font-medium text-teal-600 uppercase tracking-widest mb-4">
              Patient Guide
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              How to get Wegovy without insurance.{" "}
              <em
                className="not-italic italic"
                style={{ color: "#0D9E80" }}
              >
                Two options, one guide.
              </em>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              At retail pharmacies, Wegovy costs roughly $1,300 to $1,400
              per month without insurance. But through Novo Nordisk&apos;s
              direct-to-patient (DTP) program, self-pay patients can access
              Wegovy injection or the newer Wegovy tablet at a fraction of
              that price. Here is everything you need to know.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
              <time dateTime="2026-03-28">March 28, 2026</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
            <ShareButtons path="/learn/wegovy-without-insurance" title="How to Get Wegovy Without Insurance in 2026" />
          </div>
        </section>

        {/* Article body */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="space-y-12">
              {/* TL;DR summary */}
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                <h2 className="font-serif text-xl text-gray-900 mb-3">
                  The short version
                </h2>
                <ul className="space-y-2">
                  {[
                    "Wegovy (semaglutide) is FDA-approved for weight management and cardiovascular risk reduction. Retail pharmacy price without insurance is roughly $1,300 to $1,400 per month.",
                    "NovoCare Pharmacy, Novo Nordisk's DTP program, offers Wegovy injection at $199 to $349 per month for self-pay patients.",
                    "The newer Wegovy tablet is available through NovoCare at $149 to $299 per month for self-pay patients — even cheaper than the injection.",
                    "Patients with commercial insurance may be eligible for a savings card that brings the cost to as little as $25 per month for either form.",
                    "You still need a valid prescription from a healthcare provider. DirectRxGuide tracks these programs so you can compare your options.",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-sm text-teal-800 leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What is Wegovy and what does it cost? */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  What is Wegovy and what does it cost?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Wegovy (semaglutide) is a GLP-1 receptor agonist
                  manufactured by Novo Nordisk. It is FDA-approved for
                  chronic weight management in adults with obesity (BMI of
                  30 or greater) or overweight (BMI of 27 or greater) with
                  at least one weight-related comorbidity. Wegovy is also
                  FDA-approved for cardiovascular risk reduction in adults
                  with established cardiovascular disease and either obesity
                  or overweight.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At a traditional retail pharmacy, Wegovy costs roughly
                  $1,300 to $1,400 per month without insurance. This is
                  the full list price, and it is what most uninsured or
                  self-pay patients would be charged at the pharmacy counter.
                  Even patients with insurance frequently face high copays
                  or coverage denials for weight management medications.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This is where Novo Nordisk&apos;s direct-to-patient
                  program comes in. NovoCare Pharmacy offers both the
                  Wegovy injection and the newer Wegovy tablet at
                  significantly lower prices for patients who order directly
                  through the program.
                </p>
              </div>

              {/* How NovoCare's DTP program works */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  How NovoCare&apos;s DTP program works
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  NovoCare Pharmacy is Novo Nordisk&apos;s DTP platform.
                  It allows patients to purchase Novo Nordisk medications
                  directly from the manufacturer at fixed, published prices.
                  The medication ships to your door through a contracted
                  mail-order pharmacy.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Here is how the process works:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Get a prescription",
                      body: "You need a valid prescription from a licensed healthcare provider. NovoCare does not prescribe medications. If you do not have a provider, some telehealth services can evaluate you for Wegovy.",
                    },
                    {
                      title: "Enroll through NovoCare",
                      body: "Visit the NovoCare Pharmacy website to create an account and submit your prescription information. Your provider can also send the prescription directly to NovoCare's contracted pharmacy.",
                    },
                    {
                      title: "Choose your pricing path",
                      body: "NovoCare offers two pricing tracks: a self-pay cash price for uninsured or cash-pay patients, and a savings card option for patients with commercial insurance. You select the option that applies to your situation.",
                    },
                    {
                      title: "Receive your medication",
                      body: "Your medication ships directly to your home. NovoCare handles fulfillment through a contracted mail-order pharmacy that dispenses the medication and provides pharmacist support.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-gray-50 rounded-xl p-5"
                    >
                      <p className="text-sm font-semibold text-gray-900 mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wegovy pricing breakdown */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  Wegovy pricing breakdown
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The following table compares Wegovy pricing across the
                  three main options: NovoCare self-pay (cash price),
                  NovoCare savings card (for commercially insured patients),
                  and the full retail pharmacy price without insurance.
                </p>
                <div className="overflow-x-auto -mx-4 px-4">
                  <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          &nbsp;
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Wegovy Injection
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Wegovy Tablet
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        {
                          label: "Dosing frequency",
                          injection: "Once weekly",
                          tablet: "Once daily",
                        },
                        {
                          label: "NovoCare self-pay price",
                          injection: "$199–$349/mo",
                          tablet: "$149–$299/mo",
                        },
                        {
                          label: "NovoCare savings card",
                          detail: "Commercial insurance required",
                          injection: "As little as $25/mo",
                          tablet: "As little as $25/mo",
                        },
                        {
                          label: "Retail pharmacy price",
                          detail: "No insurance",
                          injection: "~$1,300–$1,400/mo",
                          tablet: "~$1,300–$1,400/mo",
                        },
                        {
                          label: "Insurance required",
                          injection: "No (self-pay available)",
                          tablet: "No (self-pay available)",
                        },
                        {
                          label: "Delivery method",
                          injection: "Mail-order to your door",
                          tablet: "Mail-order to your door",
                        },
                      ].map((row) => (
                        <tr key={row.label} className="text-gray-600">
                          <td className="px-4 py-3 font-medium text-gray-800">
                            {row.label}
                            {row.detail && (
                              <span className="block text-xs font-normal text-gray-400 mt-0.5">
                                {row.detail}
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3">{row.injection}</td>
                          <td className="px-4 py-3">{row.tablet}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Prices reflect published NovoCare pricing as of March
                  2026. Actual costs may vary by dose strength. Verify
                  current pricing directly with NovoCare before enrolling.
                </p>
              </div>

              {/* Injection vs. tablet */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  Injection vs. tablet — which is right for you?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Wegovy is available in two forms: a once-weekly
                  subcutaneous injection and a once-daily oral tablet. Both
                  contain the same active ingredient (semaglutide) and are
                  FDA-approved for the same indications. The choice between
                  them depends on your preferences, your healthcare
                  provider&apos;s recommendation, and cost considerations.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Wegovy injection
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The injection is administered once per week using a
                      prefilled pen. It has been available longer and has
                      more long-term clinical data. Some patients prefer the
                      convenience of a weekly dose rather than a daily pill.
                      Through NovoCare, the self-pay price ranges from $199
                      to $349 per month depending on the dose.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Wegovy tablet
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The tablet is the newer form and is taken once daily
                      by mouth. For patients who prefer not to use
                      injections, the tablet offers a needle-free
                      alternative. It is also the cheaper option through
                      NovoCare, with a self-pay price of $149 to $299 per
                      month depending on the dose. The tablet must be taken
                      on an empty stomach with a small amount of water, and
                      you should wait at least 30 minutes before eating,
                      drinking, or taking other oral medications.
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Your healthcare provider can help you decide which form
                  is most appropriate for your situation. Both forms are
                  available through NovoCare at the prices listed above.
                </p>
              </div>

              {/* How to get started */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  How to get started
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you are considering Wegovy and do not have insurance
                  coverage (or your insurance does not cover it), here is a
                  step-by-step path to getting started through NovoCare.
                </p>
                <ol className="space-y-4">
                  {[
                    {
                      step: "Talk to your healthcare provider",
                      detail:
                        "Wegovy requires a prescription. Discuss your weight management goals and medical history with your doctor to determine whether Wegovy is appropriate for you.",
                    },
                    {
                      step: "Choose injection or tablet",
                      detail:
                        "Work with your provider to decide between the weekly injection and the daily tablet based on your preferences, lifestyle, and clinical needs.",
                    },
                    {
                      step: "Have your prescription sent to NovoCare",
                      detail:
                        "Your provider can send your Wegovy prescription directly to NovoCare's contracted pharmacy. You can also enroll online and provide your prescription information.",
                    },
                    {
                      step: "Select your pricing option",
                      detail:
                        "If you are uninsured or paying cash, select the self-pay price. If you have commercial insurance, check whether you may be eligible for the NovoCare savings card, which can reduce your cost to as little as $25 per month.",
                    },
                    {
                      step: "Receive your medication at home",
                      detail:
                        "NovoCare ships your medication directly to your door. Subsequent refills are handled through the same mail-order process.",
                    },
                  ].map((item, i) => (
                    <li key={item.step} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-sm font-semibold text-teal-700">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-0.5">
                          {item.step}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Important things to know */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  Important things to know
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Before enrolling in NovoCare or starting Wegovy, there
                  are several important considerations to keep in mind.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Wegovy is not for everyone
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Wegovy is a prescription medication with specific
                      clinical criteria. It is not appropriate for patients
                      with a personal or family history of medullary thyroid
                      carcinoma or Multiple Endocrine Neoplasia syndrome
                      type 2. Your healthcare provider will evaluate whether
                      Wegovy is safe and appropriate for you based on your
                      full medical history.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Savings card eligibility varies
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The NovoCare savings card (as little as $25 per month)
                      is available to patients with commercial insurance.
                      Patients with government insurance such as Medicare,
                      Medicaid, or TRICARE are not eligible for the savings
                      card. If you have government insurance, the self-pay
                      cash price through NovoCare may still be lower than
                      your out-of-pocket cost at a retail pharmacy.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      DTP purchases do not count toward your deductible
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Medications purchased through NovoCare on a cash-pay
                      basis are not processed through insurance. This means
                      the amount you pay will not count toward your
                      insurance deductible or out-of-pocket maximum. For
                      uninsured patients this is not a factor, but patients
                      who have insurance and are choosing to use the
                      self-pay option should weigh this trade-off.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Prices vary by dose
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Wegovy uses a dose-escalation schedule, meaning you
                      start at a lower dose and gradually increase over
                      several months. The self-pay price through NovoCare
                      may vary depending on which dose you are currently
                      taking. The price ranges listed in this article
                      reflect the range across available doses.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Availability may vary by state
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      DTP programs ship medications by mail through
                      contracted pharmacies. Some states have restrictions
                      on mail-order pharmacy operations. Check with
                      NovoCare to confirm the program delivers to your
                      location before enrolling.
                    </p>
                  </div>
                </div>
              </div>

              {/* How DirectRxGuide helps */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  How DirectRxGuide helps
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  DirectRxGuide is an independent information aggregator
                  that tracks every active DTP program in the United States.
                  No pharmaceutical manufacturer funds, sponsors, or
                  influences this platform. We built it so patients and
                  providers can quickly find, compare, and understand their
                  options.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For Wegovy specifically, DirectRxGuide shows you the
                  current NovoCare pricing for both the injection and the
                  tablet, side by side. Our Find My Options tool lets you
                  search by condition and insurance status so you can see
                  exactly which programs apply to your situation and what
                  the out-of-pocket cost would be.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you are uninsured, underinsured, or simply paying
                  too much at the pharmacy, DirectRxGuide helps you see
                  all your options in one place — no account required and
                  no personal data stored.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 rounded-2xl p-6 sm:p-8 text-center">
                <h2 className="font-serif text-2xl text-gray-900 mb-3">
                  See Wegovy pricing and program options
                </h2>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Use our free tool to check Wegovy availability through
                  NovoCare. Select your insurance status to see the price
                  that applies to you. No account required and no personal
                  data stored.
                </p>
                <a
                  href="/#eligibility"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-200 transition-all duration-200"
                >
                  Find My Options
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>

              {/* Disclaimer */}
              <div className="border-t border-gray-100 pt-10">
                <p className="text-xs text-gray-400 leading-relaxed">
                  <strong className="text-gray-500">
                    Medical disclaimer:
                  </strong>{" "}
                  DirectRxGuide does not provide medical advice. All content
                  is for informational purposes only. Always consult your
                  healthcare provider before making changes to your
                  medications. DirectRxGuide is not a pharmacy, prescriber,
                  or healthcare provider. Program eligibility, pricing, and
                  availability are subject to change. Verify current details
                  directly with the manufacturer before enrolling.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
