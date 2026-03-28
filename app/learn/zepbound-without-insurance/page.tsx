import type { Metadata } from "next";
import { headers } from "next/headers";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title:
    "How to Get Zepbound Without Insurance in 2026 — DirectRxGuide",
  description:
    "Zepbound (tirzepatide) for weight management can cost over $1,000/mo at retail. Learn how LillyDirect's direct-to-patient program offers Zepbound starting at $299/mo with no insurance required.",
  alternates: { canonical: "/learn/zepbound-without-insurance" },
  keywords: [
    "zepbound without insurance",
    "zepbound price without insurance",
    "how to get zepbound without insurance",
    "zepbound cost no insurance",
    "zepbound self-pay price",
    "zepbound DTP program",
    "zepbound lillydirect",
    "zepbound cash price",
  ],
  openGraph: {
    title:
      "How to Get Zepbound Without Insurance in 2026 — DirectRxGuide",
    description:
      "Zepbound (tirzepatide) for weight management can cost over $1,000/mo at retail. Learn how LillyDirect's direct-to-patient program offers Zepbound starting at $299/mo with no insurance required.",
    url: "https://directrxguide.com/learn/zepbound-without-insurance",
    siteName: "DirectRxGuide",
    type: "article",
    publishedTime: "2026-03-28T00:00:00Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Get Zepbound Without Insurance in 2026",
  description:
    "Zepbound (tirzepatide) for weight management can cost over $1,000/mo at retail. Learn how LillyDirect's direct-to-patient program offers Zepbound starting at $299/mo with no insurance required.",
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
      "https://directrxguide.com/learn/zepbound-without-insurance",
  },
};

export default function ZepboundWithoutInsuranceArticle() {
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
                Zepbound Without Insurance
              </span>
            </div>
            <p className="text-sm font-medium text-teal-600 uppercase tracking-widest mb-4">
              Patient Guide
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              How to get Zepbound without insurance.{" "}
              <em
                className="not-italic italic"
                style={{ color: "#0D9E80" }}
              >
                Pricing, programs, and how to start.
              </em>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Zepbound (tirzepatide) can cost over $1,000 per month at a
              retail pharmacy without insurance. But through Eli
              Lilly&apos;s direct-to-patient (DTP) program, LillyDirect,
              the same medication starts at $299 per month with no
              insurance required. Here is everything you need to know.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
              <time dateTime="2026-03-28">March 28, 2026</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
            <ShareButtons path="/learn/zepbound-without-insurance" title="How to Get Zepbound Without Insurance in 2026" />
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
                    "Zepbound (tirzepatide) is an FDA-approved weekly injection for weight management in adults with obesity or overweight with at least one weight-related comorbidity, and for moderate-to-severe obstructive sleep apnea.",
                    "Retail pharmacy price without insurance is roughly $1,000 to $1,200 per month.",
                    "Through LillyDirect, the self-pay KwikPen price starts at $299/mo (2.5 mg) and goes up to $449/mo (7.5 mg to 15 mg). No insurance required. Government-insured patients are also eligible for the self-pay price.",
                    "You still need a valid prescription from a licensed healthcare provider. LillyDirect is not a prescriber.",
                    "DirectRxGuide tracks LillyDirect and 10 other DTP platforms so you can compare prices and find the best option for your situation.",
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

              {/* What is Zepbound and what does it cost? */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  What is Zepbound and what does it cost?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Zepbound is the brand name for tirzepatide, a
                  once-weekly injectable medication manufactured by Eli
                  Lilly. It is FDA-approved for chronic weight management
                  in adults with obesity (BMI of 30 or greater) or
                  overweight (BMI of 27 or greater) with at least one
                  weight-related condition such as high blood pressure,
                  type 2 diabetes, or high cholesterol. Zepbound is also
                  approved for moderate-to-severe obstructive sleep apnea
                  (OSA) in adults with obesity.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  It is important to note that Zepbound is not the same
                  as Mounjaro. While both contain tirzepatide, Mounjaro is
                  approved for type 2 diabetes, and Zepbound is approved
                  specifically for weight management and OSA. They are
                  separate products with separate pricing and coverage.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  At a retail pharmacy, Zepbound without insurance
                  typically costs between $1,000 and $1,200 per month.
                  For most patients paying out of pocket, that price is
                  not sustainable. This is where Eli Lilly&apos;s
                  direct-to-patient program becomes relevant.
                </p>
              </div>

              {/* How LillyDirect's DTP program works */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  How LillyDirect&apos;s direct-to-patient program works
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  LillyDirect is Eli Lilly&apos;s DTP platform. It allows
                  patients to purchase certain Lilly medications,
                  including Zepbound, directly from the manufacturer at
                  fixed, published prices. The medication is dispensed
                  through a contracted mail-order pharmacy and shipped to
                  your door.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Here is how it works:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Fixed, transparent pricing",
                      body: "LillyDirect publishes its Zepbound prices upfront. The price you see is the price you pay. There are no hidden fees, no surprise charges, and no price variation between pharmacies.",
                    },
                    {
                      title: "No insurance required",
                      body: "The self-pay KwikPen option is available to all patients regardless of insurance status. Whether you are uninsured, have commercial insurance, or have government insurance (Medicare, Medicaid, Tricare), you may be eligible for the self-pay price.",
                    },
                    {
                      title: "No prior authorization",
                      body: "Because the self-pay option bypasses insurance entirely, there is no prior authorization process. If you have a valid prescription, you can order.",
                    },
                    {
                      title: "Home delivery",
                      body: "Zepbound ships directly to your address through a contracted mail-order pharmacy. There are no pharmacy visits required.",
                    },
                    {
                      title: "Prescription required",
                      body: "You need a valid prescription from a licensed healthcare provider. LillyDirect does not prescribe medications. Some affiliated telehealth services may help connect you with a provider.",
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

              {/* Zepbound pricing breakdown */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  Zepbound pricing breakdown
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Zepbound pricing through LillyDirect depends on the
                  dose, the pen type, and your insurance situation. The
                  following table summarizes the current pricing options
                  as of March 2026.
                </p>
                <div className="overflow-x-auto -mx-4 px-4">
                  <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Option
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Who is eligible
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Price per month
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        {
                          option: "Self-pay KwikPen — 2.5 mg",
                          eligible: "All patients",
                          eligibleDetail: "Uninsured, commercial, government",
                          price: "$299",
                        },
                        {
                          option: "Self-pay KwikPen — 5 mg",
                          eligible: "All patients",
                          eligibleDetail: "Uninsured, commercial, government",
                          price: "$399",
                        },
                        {
                          option: "Self-pay KwikPen — 7.5 mg",
                          eligible: "All patients",
                          eligibleDetail: "Uninsured, commercial, government",
                          price: "$449",
                        },
                        {
                          option: "Self-pay KwikPen — 10 mg",
                          eligible: "All patients",
                          eligibleDetail: "Uninsured, commercial, government",
                          price: "$449",
                        },
                        {
                          option: "Self-pay KwikPen — 12.5 mg",
                          eligible: "All patients",
                          eligibleDetail: "Uninsured, commercial, government",
                          price: "$449",
                        },
                        {
                          option: "Self-pay KwikPen — 15 mg",
                          eligible: "All patients",
                          eligibleDetail: "Uninsured, commercial, government",
                          price: "$449",
                        },
                        {
                          option: "Savings card",
                          detail: "With coverage, single-dose pen",
                          eligible: "Commercial insurance with Zepbound pen coverage",
                          price: "As low as $25",
                        },
                        {
                          option: "Savings card",
                          detail: "Without coverage, single-dose pen",
                          eligible: "Commercial insurance without Zepbound coverage",
                          price: "$499",
                        },
                        {
                          option: "Savings card",
                          detail: "Without coverage, KwikPen",
                          eligible: "Commercial insurance without Zepbound coverage",
                          price: "$299–$449 by dose",
                        },
                        {
                          option: "Retail pharmacy",
                          detail: "No insurance",
                          eligible: "Cash-pay patients",
                          price: "~$1,000–$1,200",
                        },
                      ].map((row) => (
                        <tr key={row.option + (row.detail || "")} className="text-gray-600">
                          <td className="px-4 py-3 font-medium text-gray-800">
                            {row.option}
                            {row.detail && (
                              <span className="block text-xs font-normal text-gray-400 mt-0.5">
                                {row.detail}
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {row.eligible}
                            {row.eligibleDetail && (
                              <span className="block text-xs text-gray-400 mt-0.5">
                                {row.eligibleDetail}
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3">{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Prices shown are based on published LillyDirect pricing
                  as of March 2026. Verify current pricing directly with
                  the manufacturer before enrolling.
                </p>
              </div>

              {/* How to get started */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  How to get started
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you want to explore Zepbound through LillyDirect,
                  here is the general process:
                </p>
                <ol className="space-y-4">
                  {[
                    {
                      step: "Get a prescription",
                      detail:
                        "Talk to your healthcare provider about whether Zepbound is appropriate for you. You need a valid prescription before you can order through LillyDirect. Zepbound is a prescription medication and cannot be purchased over the counter.",
                    },
                    {
                      step: "Visit LillyDirect",
                      detail:
                        "Go to the LillyDirect platform and select Zepbound. You will see the available pricing options based on your insurance status and the pen type.",
                    },
                    {
                      step: "Choose your pricing option",
                      detail:
                        "Select the self-pay KwikPen option if you do not have insurance, have government insurance, or prefer to pay a fixed cash price. If you have commercial insurance, you may also be eligible for the savings card.",
                    },
                    {
                      step: "Submit your prescription",
                      detail:
                        "Your healthcare provider can send your prescription directly to the LillyDirect contracted pharmacy, or you can provide your prescription information during the enrollment process.",
                    },
                    {
                      step: "Receive your medication",
                      detail:
                        "Zepbound ships directly to your address through a contracted mail-order pharmacy. Delivery typically takes a few days after your prescription is verified.",
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
                  Before enrolling in LillyDirect for Zepbound, there are
                  several details worth understanding.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      A prescription is required
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Zepbound is a prescription medication. You cannot
                      purchase it without a valid prescription from a
                      licensed healthcare provider. LillyDirect does not
                      prescribe medications. If you do not already have a
                      prescription, speak with your doctor about whether
                      Zepbound is right for your situation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      KwikPen vs. single-dose pen
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Zepbound is available in two pen types: the KwikPen
                      (multi-dose) and the single-dose pen. The self-pay
                      pricing at $299 to $449 per month applies to the
                      KwikPen. The single-dose pen has different pricing
                      through the savings card program. Make sure you and
                      your provider are clear on which pen type your
                      prescription is written for, as this affects your
                      price.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      State availability restrictions
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Some LillyDirect programs may have state-level
                      restrictions. Patients in Massachusetts and
                      California may not be eligible for certain savings
                      card options. The self-pay KwikPen option has
                      broader availability, but always verify with
                      LillyDirect that your state is eligible before
                      enrolling.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Government insurance patients are eligible for
                      self-pay
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Unlike many savings card programs that exclude
                      government-insured patients (Medicare, Medicaid,
                      Tricare), the self-pay KwikPen option is available
                      to all patients regardless of insurance type. If
                      you have government insurance and Zepbound is not
                      covered by your plan, the self-pay option may be
                      your most affordable path.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      DTP purchases do not count toward your deductible
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      If you use the self-pay option, the money you spend
                      will not count toward your insurance deductible or
                      out-of-pocket maximum. This is true for all DTP
                      programs that operate on a cash-pay basis. If you
                      have insurance and are working toward your
                      deductible, factor this into your decision.
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
                  that tracks every active DTP program in the United
                  States. No pharmaceutical manufacturer funds, sponsors,
                  or influences this platform. We built it so that
                  patients and providers can quickly see which programs
                  are available, compare prices, and understand the
                  trade-offs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our Find My Options tool lets you search by condition
                  and insurance status to see every DTP program that
                  matches your situation, ranked by out-of-pocket cost.
                  Whether you are uninsured, have commercial insurance
                  without Zepbound coverage, or have government insurance,
                  we show you the options so you can make an informed
                  decision. No account required. No personal data stored.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 rounded-2xl p-6 sm:p-8 text-center">
                <h2 className="font-serif text-2xl text-gray-900 mb-3">
                  See if Zepbound is available through a DTP program for
                  you
                </h2>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Use our free tool to check pricing and eligibility for
                  Zepbound and other weight management medications. Select
                  your insurance status to see programs and prices. No
                  account required and no personal data stored.
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
