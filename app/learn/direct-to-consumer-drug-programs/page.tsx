import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Direct-to-Consumer Drug Programs: What Patients Need to Know — DirectRxGuide",
  description:
    "Direct-to-consumer (DTC) drug programs let patients buy prescription medications straight from manufacturers. Learn how DTC compares to DTP, what most-favored-nation pricing means, and how to find the best option.",
  keywords: [
    "direct-to-consumer drug programs",
    "DTC prescription drugs",
    "buy drugs direct from manufacturer",
    "direct-to-consumer pharmacy",
    "manufacturer drug sales",
    "DTC vs DTP drug programs",
    "most favored nation drug pricing",
    "direct-to-patient programs",
    "prescription drug savings",
    "buy prescription drugs without insurance",
    "manufacturer direct prescriptions",
    "DTC pharmacy programs",
  ],
  openGraph: {
    title:
      "Direct-to-Consumer Drug Programs: What Patients Need to Know — DirectRxGuide",
    description:
      "Direct-to-consumer drug programs let patients buy prescription medications straight from manufacturers. Learn how DTC compares to DTP, what most-favored-nation pricing means, and how to find the best option.",
    url: "https://directrxguide.com/learn/direct-to-consumer-drug-programs",
    siteName: "DirectRxGuide",
    type: "article",
    publishedTime: "2026-03-28T00:00:00Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Direct-to-Consumer Drug Programs: What Patients Need to Know",
  description:
    "Direct-to-consumer (DTC) drug programs let patients buy prescription medications straight from manufacturers. Learn how DTC compares to DTP, what most-favored-nation pricing means, and how to find the best option.",
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
      "https://directrxguide.com/learn/direct-to-consumer-drug-programs",
  },
};

export default function DTCDrugProgramsArticle() {
  return (
    <>
      <script
        type="application/ld+json"
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
              <span className="text-sm text-gray-500">Learn</span>
            </div>
            <p className="text-sm font-medium text-teal-600 uppercase tracking-widest mb-4">
              Patient Guide
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Direct-to-consumer drug programs.{" "}
              <em
                className="not-italic italic"
                style={{ color: "#0D9E80" }}
              >
                What patients need to know.
              </em>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Pharmaceutical manufacturers are increasingly selling
              prescription drugs directly to patients, bypassing traditional
              pharmacies and insurance channels. These programs go by
              different names, but they all share one goal: getting
              medications to patients at lower prices.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
              <time dateTime="2026-03-28">March 28, 2026</time>
              <span>·</span>
              <span>10 min read</span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="space-y-12">
              {/* TL;DR */}
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                <h2 className="font-serif text-xl text-gray-900 mb-3">
                  The short version
                </h2>
                <ul className="space-y-2">
                  {[
                    "Direct-to-consumer (DTC) drug programs allow patients to purchase brand-name prescription medications straight from the manufacturer, usually at a fixed price and delivered by mail.",
                    "DTC and direct-to-patient (DTP) are closely related terms. DTC is the broader policy term used by regulators, while DTP is how most manufacturers brand their individual programs.",
                    "A 2025 executive order introduced the concept of \"most-favored-nation\" pricing, which would tie U.S. drug prices to what other high-income countries pay.",
                    "These programs offer real benefits: lower prices, no prior authorization, and home delivery. They also carry real risks: fragmented medical records, no deductible credit, and limited drug selection.",
                    "DirectRxGuide tracks every active DTC/DTP program in one place so you can compare options independently.",
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

              {/* What does DTC mean */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  What does &ldquo;direct-to-consumer&rdquo; mean for
                  prescription drugs?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In the traditional model, a patient gets a prescription
                  from a doctor, takes it to a pharmacy, and either pays
                  out of pocket or has their insurance cover part of the
                  cost. The manufacturer sells the drug to a distributor,
                  which sells it to the pharmacy, which sells it to you.
                  Multiple middlemen take a cut along the way.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A direct-to-consumer (DTC) drug program removes most of
                  those intermediaries. The manufacturer sets a fixed price,
                  operates its own ordering platform, and ships medication
                  directly to the patient through a contracted mail-order
                  pharmacy. You still need a valid prescription from a
                  licensed provider, but the purchasing and fulfillment
                  happen outside the traditional pharmacy and insurance
                  system.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The term &ldquo;direct-to-consumer&rdquo; has been used
                  in health policy discussions and executive orders to
                  describe this model at a broad level. It signals a
                  structural change in how prescription drugs reach
                  patients, not just a marketing label from any single
                  company.
                </p>
              </div>

              {/* DTC vs DTP */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  DTC vs. DTP: what is the difference?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You will see both &ldquo;direct-to-consumer&rdquo; (DTC)
                  and &ldquo;direct-to-patient&rdquo; (DTP) used to
                  describe these programs. The terms are often used
                  interchangeably, but there is a useful distinction.
                </p>
                <div className="space-y-4 mb-4">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Direct-to-consumer (DTC)
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      This is the broader policy and regulatory term. It
                      describes the overall model of manufacturers selling
                      medications directly to end users, bypassing
                      traditional pharmacy and insurance channels. Federal
                      executive orders and health policy discussions
                      typically use &ldquo;direct-to-consumer&rdquo; when
                      referring to this approach.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Direct-to-patient (DTP)
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      This is the term most manufacturers use when branding
                      their individual programs. LillyDirect, NovoCare,
                      PfizerForAll, and other platforms are all DTP
                      programs. The term emphasizes the patient relationship
                      and the healthcare context, as opposed to the more
                      general consumer framing.
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  In practice, DTC and DTP refer to the same thing: a
                  manufacturer selling a prescription drug directly to the
                  person who will take it, at a price set by the
                  manufacturer, delivered to their door. DirectRxGuide
                  uses &ldquo;DTP&rdquo; when referring to specific
                  manufacturer platforms and &ldquo;DTC&rdquo; when
                  discussing the broader policy landscape.
                </p>
              </div>

              {/* Most-favored-nation pricing */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  Most-favored-nation pricing: what it means for patients
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In May 2025, an executive order directed the Department
                  of Health and Human Services to explore pathways for
                  Americans to purchase prescription drugs at
                  &ldquo;most-favored-nation&rdquo; (MFN) prices. The
                  concept is straightforward: the United States should not
                  pay more for a drug than other wealthy nations do.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Under MFN pricing, the price of a drug sold in the U.S.
                  would be benchmarked against the lowest price paid by a
                  set of comparable high-income countries. If a brand-name
                  drug costs $300 per month in the U.S. but only $80 in
                  Canada or Germany, MFN pricing would aim to bring the
                  American price closer to that $80 figure.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The executive order specifically pointed to DTC
                  purchasing as one mechanism for making MFN prices
                  available. The idea is that manufacturers could offer
                  these lower prices directly to patients, bypassing the
                  insurance and pharmacy layers that have historically
                  inflated costs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As of March 2026, MFN pricing has not been fully
                  implemented. However, the policy direction has
                  accelerated manufacturer interest in DTC/DTP platforms.
                  Several major pharmaceutical companies have launched or
                  expanded their direct programs in anticipation of this
                  shift. Patients should understand that current DTP
                  program prices are set by the manufacturers themselves
                  and may or may not reflect true MFN benchmarks.
                </p>
              </div>

              {/* Current platforms */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  DTC/DTP platforms available today
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  As of March 2026, DirectRxGuide tracks 11 active
                  manufacturer platforms offering direct-to-patient
                  purchasing. Each platform covers a different set of
                  brand-name medications.
                </p>
                <div className="overflow-x-auto -mx-4 px-4">
                  <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Platform
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Manufacturer
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Notable drugs
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        {
                          platform: "LillyDirect",
                          mfr: "Eli Lilly",
                          drugs: "Mounjaro, Zepbound, Humalog, Trulicity",
                        },
                        {
                          platform: "NovoCare",
                          mfr: "Novo Nordisk",
                          drugs: "Ozempic, Wegovy, Rybelsus, Saxenda",
                        },
                        {
                          platform: "PfizerForAll",
                          mfr: "Pfizer",
                          drugs: "Eliquis, Ibrance, Xeljanz",
                        },
                        {
                          platform: "AZ Patient Direct",
                          mfr: "AstraZeneca",
                          drugs: "Farxiga, Symbicort, Breztri",
                        },
                        {
                          platform: "AmgenNow",
                          mfr: "Amgen",
                          drugs: "Enbrel, Repatha, Otezla",
                        },
                        {
                          platform: "BMS Patient Connect",
                          mfr: "Bristol-Myers Squibb",
                          drugs: "Eliquis (co-marketed), Opdivo",
                        },
                        {
                          platform: "Boehringer Ingelheim Direct",
                          mfr: "Boehringer Ingelheim",
                          drugs: "Jardiance, Ofev, Pradaxa",
                        },
                        {
                          platform: "Novartis Direct",
                          mfr: "Novartis",
                          drugs: "Entresto, Cosentyx, Kisqali",
                        },
                        {
                          platform: "GSK for You",
                          mfr: "GSK",
                          drugs: "Trelegy, Nucala, Dovato",
                        },
                        {
                          platform: "J&J Direct",
                          mfr: "Johnson & Johnson",
                          drugs: "Stelara, Tremfya, Xarelto",
                        },
                        {
                          platform: "ELIQUIS DTP Program",
                          mfr: "Pfizer / BMS",
                          drugs: "Eliquis",
                        },
                      ].map((row) => (
                        <tr key={row.platform} className="text-gray-600">
                          <td className="px-4 py-3 font-medium text-gray-800">
                            {row.platform}
                          </td>
                          <td className="px-4 py-3">{row.mfr}</td>
                          <td className="px-4 py-3">{row.drugs}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Program availability, pricing, and eligible medications
                  change frequently. Use the DirectRxGuide Find My Options
                  tool for the most current information.
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  Benefits of buying drugs direct from the manufacturer
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  DTC/DTP programs have grown rapidly because they solve
                  real problems for patients. Here are the most significant
                  advantages.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Lower out-of-pocket prices",
                      body: "Manufacturers set fixed prices that are often significantly lower than what you would pay at a pharmacy, especially if you are uninsured or have a high-deductible plan. Some programs offer medications at a fraction of the wholesale acquisition cost.",
                    },
                    {
                      title: "No prior authorization required",
                      body: "Because these programs operate outside of insurance, there is no prior authorization process. You do not need to wait for your insurance company to approve your medication before you can fill it. This eliminates one of the most common and frustrating delays in the current system.",
                    },
                    {
                      title: "Home delivery",
                      body: "Medications ship directly to your door through contracted mail-order pharmacies. There are no pharmacy lines, no waiting for refills, and no need to make a separate trip. Most programs ship to all 50 states.",
                    },
                    {
                      title: "Price transparency",
                      body: "DTP platforms display prices upfront before you commit. Unlike the traditional insurance model, where your actual out-of-pocket cost can be difficult to predict, you know exactly what you will pay before you order.",
                    },
                    {
                      title: "Access for uninsured patients",
                      body: "Patients without insurance often face the highest drug prices at traditional pharmacies. DTC programs offer a consistent, lower price regardless of insurance status, making brand-name medications accessible to people who might otherwise not be able to afford them.",
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

              {/* Risks */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  Risks and trade-offs to understand
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  DTC drug programs are not without downsides. Before
                  enrolling, consider the following.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Fragmented care and medication records
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      When you fill prescriptions at your local pharmacy,
                      your pharmacist maintains a complete record of
                      everything you are taking. They check for drug
                      interactions, duplicate therapies, and dosing
                      problems. When you order through a DTC program,
                      the medication is dispensed by a separate mail-order
                      pharmacy that does not share records with your local
                      pharmacy or your doctor&apos;s office. This
                      fragmentation means important safety checks can be
                      missed. If you use a DTC program, make sure to tell
                      both your doctor and your local pharmacist what
                      you are taking.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Payments may not count toward your insurance deductible
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Most DTC programs operate on a cash-pay basis. Your
                      payment does not go through insurance, which means
                      the money you spend typically will not count toward
                      your annual deductible or out-of-pocket maximum.
                      For patients who are close to meeting their
                      deductible, using a DTC program could actually
                      increase total annual spending by preventing them
                      from reaching the threshold where insurance begins
                      to cover more of their costs.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Limited to brand-name drugs
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      DTC programs focus exclusively on brand-name
                      medications that are still under patent protection.
                      If a generic version of your medication exists, the
                      generic will almost always be cheaper at a local
                      pharmacy. These programs are most valuable for
                      patients who need brand-name drugs that do not yet
                      have a generic equivalent.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      The manufacturer sets the price
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      While DTC prices are often lower than traditional
                      pharmacy prices, they are still set by the
                      manufacturer. There is no independent negotiation
                      or competitive bidding. Patients should compare the
                      DTC price against other options, including
                      insurance copays, discount programs, and pharmacy
                      cash prices, before assuming the manufacturer
                      price is the best available.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Not a substitute for comprehensive healthcare
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Some DTC platforms include telehealth prescribing
                      services. While convenient, these services connect
                      you with a provider who may not know your full
                      medical history. For patients with complex
                      conditions or those taking multiple medications,
                      working with a regular healthcare provider who
                      understands your complete picture is safer and more
                      appropriate.
                    </p>
                  </div>
                </div>
              </div>

              {/* DTC vs traditional comparison */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  DTC programs vs. traditional pharmacy: a side-by-side
                  comparison
                </h2>
                <div className="overflow-x-auto -mx-4 px-4">
                  <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          &nbsp;
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          DTC/DTP Program
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Traditional Pharmacy
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        {
                          label: "Pricing",
                          dtc: "Fixed cash price from manufacturer",
                          trad: "Varies by pharmacy and insurance plan",
                        },
                        {
                          label: "Insurance accepted",
                          dtc: "Usually no (cash-pay only)",
                          trad: "Yes",
                        },
                        {
                          label: "Prior authorization",
                          dtc: "Not required",
                          trad: "Often required for brand-name drugs",
                        },
                        {
                          label: "Delivery method",
                          dtc: "Mail-order to your door",
                          trad: "In-person pickup or mail-order",
                        },
                        {
                          label: "Drug interaction checks",
                          dtc: "Limited (mail-order pharmacy only)",
                          trad: "Comprehensive (full medication history)",
                        },
                        {
                          label: "Counts toward deductible",
                          dtc: "Usually no",
                          trad: "Yes",
                        },
                        {
                          label: "Drug selection",
                          dtc: "Brand-name only (manufacturer's portfolio)",
                          trad: "Brand-name and generic",
                        },
                        {
                          label: "Pharmacist relationship",
                          dtc: "No ongoing relationship",
                          trad: "Ongoing relationship with local pharmacist",
                        },
                      ].map((row) => (
                        <tr key={row.label} className="text-gray-600">
                          <td className="px-4 py-3 font-medium text-gray-800">
                            {row.label}
                          </td>
                          <td className="px-4 py-3">{row.dtc}</td>
                          <td className="px-4 py-3">{row.trad}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* How DirectRxGuide helps */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  How DirectRxGuide helps you navigate DTC drug programs
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The DTC/DTP landscape is growing quickly. With 11
                  manufacturer platforms and dozens of eligible medications,
                  finding the right program for your situation can be
                  overwhelming. Each platform has its own website, its own
                  pricing, and its own eligibility rules.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  DirectRxGuide is the first independent aggregator of
                  every active DTP program in the United States. No
                  pharmaceutical manufacturer funds, sponsors, or
                  influences this platform. We exist to help patients
                  and healthcare providers compare all available options
                  in one place.
                </p>
                <ul className="space-y-3">
                  {[
                    "Search by condition, drug name, or insurance status to see which programs may be available to you.",
                    "Compare prices across multiple manufacturer platforms side by side.",
                    "Understand eligibility requirements before you visit a manufacturer website.",
                    "Access updated program information daily, without needing to check each manufacturer platform individually.",
                    "Make informed decisions with no bias, no affiliate links, and no pharmaceutical industry influence.",
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5"
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
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {q}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 rounded-2xl p-6 sm:p-8 text-center">
                <h2 className="font-serif text-2xl text-gray-900 mb-3">
                  Find your direct-to-patient options
                </h2>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Use our free tool to see which DTC/DTP programs match
                  your condition and insurance status. No account required
                  and no personal data stored.
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
