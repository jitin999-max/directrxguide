import type { Metadata } from "next";
import { headers } from "next/headers";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title:
    "How to Get Ozempic Without Insurance in 2026 — DirectRxGuide",
  description:
    "Ozempic costs $900 to $1,100 per month at retail without insurance. Learn how NovoCare's direct-to-patient program offers Ozempic at $199 to $499 per month for self-pay patients — no insurance required.",
  alternates: { canonical: "/learn/ozempic-without-insurance" },
  keywords: [
    "ozempic without insurance",
    "ozempic price without insurance",
    "how to get ozempic without insurance",
    "ozempic cost no insurance",
    "ozempic self-pay price",
    "ozempic DTP program",
    "ozempic novocare",
    "ozempic cash price",
    "semaglutide without insurance",
    "ozempic direct-to-patient",
    "ozempic uninsured",
    "novocare pharmacy ozempic",
  ],
  openGraph: {
    title:
      "How to Get Ozempic Without Insurance in 2026 — DirectRxGuide",
    description:
      "Ozempic costs $900 to $1,100 per month at retail without insurance. Learn how NovoCare's direct-to-patient program offers Ozempic at $199 to $499 per month for self-pay patients.",
    url: "https://directrxguide.com/learn/ozempic-without-insurance",
    siteName: "DirectRxGuide",
    type: "article",
    publishedTime: "2026-03-28T00:00:00Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Get Ozempic Without Insurance in 2026",
  description:
    "Ozempic costs $900 to $1,100 per month at retail without insurance. Learn how NovoCare's direct-to-patient program offers Ozempic at $199 to $499 per month for self-pay patients — no insurance required.",
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
      "https://directrxguide.com/learn/ozempic-without-insurance",
  },
};

export default function OzempicWithoutInsuranceArticle() {
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
                Ozempic Without Insurance
              </span>
            </div>
            <p className="text-sm font-medium text-teal-600 uppercase tracking-widest mb-4">
              Patient Guide
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              How to get Ozempic without insurance.{" "}
              <em
                className="not-italic italic"
                style={{ color: "#0D9E80" }}
              >
                Your options in 2026.
              </em>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ozempic (semaglutide) is one of the most prescribed
              medications for type 2 diabetes in the United States, but
              the retail price without insurance can exceed $1,000 per
              month. The good news: a direct-to-patient (DTP) program
              from the manufacturer offers it for a fraction of that
              cost, with no insurance required.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
              <time dateTime="2026-03-28">March 28, 2026</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
            <ShareButtons path="/learn/ozempic-without-insurance" title="How to Get Ozempic Without Insurance in 2026" />
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
                    "Ozempic is a once-weekly injection FDA-approved for type 2 diabetes. The retail pharmacy price without insurance is roughly $900 to $1,100 per month.",
                    "NovoCare Pharmacy (Novo Nordisk) offers Ozempic through a direct-to-patient program at $199 to $499 per month for self-pay patients. No insurance required.",
                    "Patients with commercial insurance may be eligible for the Ozempic savings card, which can reduce the cost to as little as $0 per month.",
                    "You still need a valid prescription from a healthcare provider. NovoCare is not a prescriber.",
                    "DirectRxGuide tracks this program and others so you can compare prices and find the best option for your situation.",
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

              {/* What is Ozempic and what does it cost? */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  What is Ozempic and what does it cost?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ozempic (semaglutide) is a once-weekly injectable
                  medication manufactured by Novo Nordisk. It is
                  FDA-approved for the treatment of type 2 diabetes and
                  works by helping the body regulate blood sugar levels.
                  Ozempic belongs to a class of drugs called GLP-1
                  receptor agonists.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  While semaglutide has gained attention for off-label
                  weight-loss use, Ozempic is specifically indicated for
                  type 2 diabetes. A separate semaglutide product,
                  Wegovy, is the FDA-approved version for chronic weight
                  management.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  At a traditional retail pharmacy, the cash price of
                  Ozempic without insurance is roughly $900 to $1,100
                  per month, depending on the dose and pharmacy. For
                  patients paying out of pocket, this cost makes it one
                  of the most expensive common diabetes medications on
                  the market. This is where the manufacturer&apos;s
                  direct-to-patient program becomes a critical option.
                </p>
              </div>

              {/* How NovoCare's DTP program works */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  How NovoCare&apos;s direct-to-patient program works
                  for uninsured patients
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  NovoCare Pharmacy is Novo Nordisk&apos;s
                  direct-to-patient platform. It allows patients to
                  purchase Ozempic and other Novo Nordisk medications
                  directly from the manufacturer at fixed, published
                  prices. The medication ships to your door through a
                  contracted mail-order pharmacy.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  For uninsured patients, NovoCare offers several key
                  benefits:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "No insurance required",
                      body: "The self-pay program is designed specifically for patients who do not have insurance or who choose not to use their insurance. You pay a fixed cash price with no insurance information needed.",
                    },
                    {
                      title: "Published, transparent pricing",
                      body: "The price is listed upfront. There are no surprise fees, no copay calculations, and no variance between pharmacies. The self-pay price for Ozempic through NovoCare is $199 to $499 per month depending on the dose.",
                    },
                    {
                      title: "No prior authorization",
                      body: "Because the program bypasses insurance entirely, there is no prior authorization process. If your doctor writes the prescription, you can order.",
                    },
                    {
                      title: "Home delivery",
                      body: "Ozempic ships directly to your address in temperature-controlled packaging. There are no pharmacy visits required.",
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

              {/* Pricing breakdown */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  Ozempic pricing breakdown
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The cost of Ozempic varies significantly depending on
                  how you purchase it and whether you have insurance.
                  Here is how the three main pricing paths compare.
                </p>
                <div className="overflow-x-auto -mx-4 px-4">
                  <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Pricing path
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Monthly cost
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Insurance needed?
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        {
                          label: "NovoCare self-pay",
                          detail: "Direct-to-patient program",
                          cost: "$199 – $499/mo",
                          insurance: "No",
                        },
                        {
                          label: "Ozempic savings card",
                          detail: "Commercial insurance only",
                          cost: "As little as $0/mo",
                          insurance: "Yes",
                          insuranceDetail: "Commercial only",
                        },
                        {
                          label: "Retail pharmacy cash price",
                          cost: "$900 – $1,100/mo",
                          insurance: "No",
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
                          <td className="px-4 py-3">{row.cost}</td>
                          <td className="px-4 py-3">
                            {row.insurance}
                            {row.insuranceDetail && (
                              <span className="block text-xs text-gray-400 mt-0.5">
                                {row.insuranceDetail}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 leading-relaxed mt-6">
                  For uninsured patients, the NovoCare self-pay price
                  represents savings of up to 75% or more compared to
                  the retail pharmacy cash price. Patients with
                  commercial insurance may be eligible for the Ozempic
                  savings card, which can reduce the out-of-pocket cost
                  to as little as $0 per month. Government insurance
                  (Medicare, Medicaid, TRICARE) is not eligible for the
                  savings card.
                </p>
              </div>

              {/* How to get started */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  How to get started
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you do not have insurance and need Ozempic for type
                  2 diabetes, here is how to access the NovoCare
                  direct-to-patient program.
                </p>
                <ol className="space-y-4">
                  {[
                    {
                      step: "Get a prescription from your healthcare provider",
                      detail:
                        "Ozempic is a prescription medication. You will need your doctor, endocrinologist, or other licensed provider to write a prescription for it. NovoCare does not prescribe medications — it is a dispensing and delivery platform only.",
                    },
                    {
                      step: "Visit the NovoCare Pharmacy website",
                      detail:
                        "Go to the NovoCare Pharmacy platform and select Ozempic. You will see the available doses and current self-pay pricing. Have your prescription information ready.",
                    },
                    {
                      step: "Choose your plan and provide your prescription",
                      detail:
                        "Select the self-pay option if you do not have insurance. Your healthcare provider can send the prescription directly to NovoCare Pharmacy, or you can provide it during the enrollment process.",
                    },
                    {
                      step: "Your medication ships to your door",
                      detail:
                        "Once your prescription is verified, Ozempic ships to your address in temperature-controlled packaging. Delivery typically takes a few business days. Plan ahead so you do not run out of your current supply.",
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
                  Before enrolling in the NovoCare DTP program for
                  Ozempic, here are some key considerations.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      You still need a prescription
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      NovoCare is not a prescriber or healthcare
                      provider. You must have a valid prescription from
                      a licensed healthcare provider before you can
                      order Ozempic through the program. If you do not
                      currently have a provider, start by scheduling an
                      appointment to discuss whether Ozempic is right
                      for your diabetes management.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Only brand-name Ozempic is available
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The NovoCare program dispenses brand-name Ozempic
                      manufactured by Novo Nordisk. As of March 2026,
                      there is no FDA-approved generic version of
                      semaglutide injection for type 2 diabetes. This
                      means the DTP program is currently the most
                      affordable option for uninsured patients who need
                      this specific medication.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Mail delivery takes a few days
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Because Ozempic ships through a mail-order
                      pharmacy, delivery typically takes a few business
                      days from the time your prescription is verified.
                      If you are starting Ozempic for the first time or
                      switching from a retail pharmacy, plan ahead so
                      there is no gap in your medication. For your first
                      fill, you may need to get a short supply from a
                      local pharmacy while waiting for your mail-order
                      delivery.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Government insurance restrictions
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The Ozempic savings card is only available to
                      patients with commercial insurance. Patients
                      covered by Medicare, Medicaid, TRICARE, or other
                      government-funded insurance programs are not
                      eligible for the savings card. However, the
                      NovoCare self-pay option is available to anyone
                      regardless of insurance status.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Ozempic is approved for type 2 diabetes
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ozempic is FDA-approved for the treatment of type
                      2 diabetes. While semaglutide is also available
                      under the brand name Wegovy for chronic weight
                      management, Ozempic is specifically indicated for
                      blood sugar control in adults with type 2 diabetes.
                      Your healthcare provider can help determine
                      whether Ozempic is the right medication for your
                      condition.
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
                  that tracks every active direct-to-patient program in
                  the United States. No pharmaceutical manufacturer
                  funds, sponsors, or influences this platform. We
                  built it so patients and providers can quickly compare
                  DTP programs, pricing, and eligibility in one place.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our Find My Options tool lets you search by condition
                  and insurance status. If you select type 2 diabetes
                  and &ldquo;uninsured,&rdquo; you will see Ozempic
                  through NovoCare alongside every other DTP option
                  available for your condition, ranked by out-of-pocket
                  cost. No account required. No personal data stored.
                  Just the information you need to make an informed
                  decision.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 rounded-2xl p-6 sm:p-8 text-center">
                <h2 className="font-serif text-2xl text-gray-900 mb-3">
                  See Ozempic pricing and DTP program options
                </h2>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Use our free tool to compare Ozempic and other type 2
                  diabetes medications across DTP programs. Select your
                  insurance status to see prices available to you. No
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
