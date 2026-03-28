import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "What Are Direct-to-Patient Drug Programs? How They Work, What They Cost, and What to Watch Out For — DirectRxGuide",
  description:
    "Direct-to-patient (DTP) prescription drug programs allow you to purchase brand-name medications directly from manufacturers, often at lower prices. Learn how they work, who qualifies, and what to know before enrolling.",
  alternates: { canonical: "/learn/direct-to-patient-programs-explained" },
  keywords: [
    "direct-to-patient drug programs",
    "DTP prescription programs",
    "direct-to-consumer prescription drugs",
    "buy prescription drugs from manufacturer",
    "LillyDirect",
    "PfizerForAll",
    "NovoCare",
    "prescription drug savings",
    "how to get cheaper prescription drugs",
    "brand-name drug discounts",
    "prescription drugs without insurance",
    "manufacturer direct prescriptions",
    "direct-to-patient pharmacy",
    "DTP programs explained",
    "most favored nation drug pricing",
  ],
  openGraph: {
    title:
      "What Are Direct-to-Patient Drug Programs? — DirectRxGuide",
    description:
      "Direct-to-patient programs allow you to purchase brand-name medications directly from manufacturers at lower prices. Learn how they work, who qualifies, and what to watch out for.",
    url: "https://directrxguide.com/learn/direct-to-patient-programs-explained",
    siteName: "DirectRxGuide",
    type: "article",
    publishedTime: "2026-03-28T00:00:00Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What Are Direct-to-Patient Drug Programs? How They Work, What They Cost, and What to Watch Out For",
  description:
    "Direct-to-patient (DTP) prescription drug programs allow you to purchase brand-name medications directly from manufacturers, often at lower prices. Learn how they work, who qualifies, and what to know before enrolling.",
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
      "https://directrxguide.com/learn/direct-to-patient-programs-explained",
  },
};

export default function DTPExplainedArticle() {
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
              What are direct-to-patient drug programs?{" "}
              <em
                className="not-italic italic"
                style={{ color: "#0D9E80" }}
              >
                And should you use one?
              </em>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Pharmaceutical manufacturers are now selling brand-name
              prescription drugs directly to patients, often at significantly
              lower prices than what you would pay at a pharmacy. Here is
              what you need to know.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
              <time dateTime="2026-03-28">March 28, 2026</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="space-y-12">
              {/* The short version */}
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                <h2 className="font-serif text-xl text-gray-900 mb-3">
                  The short version
                </h2>
                <ul className="space-y-2">
                  {[
                    "Direct-to-patient (DTP) programs allow you to purchase certain prescription drugs straight from the manufacturer, delivered to your door.",
                    "Prices are often dramatically lower than what you would pay at a pharmacy, even with insurance.",
                    "You still need a prescription from a doctor. These programs do not replace your healthcare provider.",
                    "There are real trade-offs: your local pharmacist may not know what you are taking, and costs may not count toward your insurance deductible.",
                    "DirectRxGuide tracks every active DTP program so you can compare options in one place.",
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

              {/* What are DTP programs */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  What is a direct-to-patient drug program?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A direct-to-patient (DTP) prescription drug program is a way
                  for pharmaceutical manufacturers to sell medications directly
                  to you, bypassing the traditional system of pharmacies,
                  insurance middlemen, and pharmacy benefit managers.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Instead of picking up your medication at a local pharmacy
                  and paying whatever price your insurance (or lack of
                  insurance) dictates, you order through a
                  manufacturer-operated platform. The medication ships to your
                  door, often through a contracted mail-order pharmacy, at a
                  fixed price set by the manufacturer.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Major programs include LillyDirect (Eli Lilly), NovoCare
                  (Novo Nordisk), PfizerForAll (Pfizer), AstraZeneca Patient
                  Direct, AmgenNow, and BMS Patient Connect, among others.
                  As of March 2026, DirectRxGuide tracks 11 active DTP
                  platforms covering dozens of brand-name drugs.
                </p>
              </div>

              {/* How they work */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  How do DTP programs work?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Despite the word &ldquo;direct,&rdquo; these programs do not
                  eliminate every step between you and your medication. Here is
                  the typical process:
                </p>
                <ol className="space-y-4">
                  {[
                    {
                      step: "Get a prescription",
                      detail:
                        "You still need a valid prescription from a licensed healthcare provider. Some platforms offer affiliated telehealth services to make this easier.",
                    },
                    {
                      step: "Visit the manufacturer platform",
                      detail:
                        "Go to the manufacturer's DTP website (for example, LillyDirect.com). You will typically create an account and enter your prescription information.",
                    },
                    {
                      step: "Choose your medication and pay",
                      detail:
                        "The platform displays the fixed price. In many cases, this is a cash price, meaning you pay out of pocket regardless of your insurance status.",
                    },
                    {
                      step: "Medication ships to your door",
                      detail:
                        "The manufacturer fulfills your order through a contracted mail-order pharmacy. Most programs ship to all 50 states.",
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

              {/* Who benefits most */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  Who benefits most from DTP programs?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  DTP programs can save money for a wide range of patients, but
                  some people stand to benefit more than others:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Uninsured patients",
                      body: "If you do not have health insurance, DTP prices are almost always lower than the retail cash price at a pharmacy. Some programs offer medications at a fraction of the list price.",
                    },
                    {
                      title: "Patients with high deductibles",
                      body: "If your insurance has a high deductible or high coinsurance for brand-name drugs, the DTP price may be cheaper than your out-of-pocket cost through insurance, especially early in the year before you have met your deductible.",
                    },
                    {
                      title: "Patients on expensive brand-name medications",
                      body: "DTP programs focus on brand-name drugs that are still under patent. These are typically the most expensive medications, and the savings can be substantial, sometimes thousands of dollars per year.",
                    },
                    {
                      title: "Patients who value convenience",
                      body: "Medications are delivered to your door. No pharmacy lines, no waiting, and no insurance pre-authorization delays.",
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
                <p className="text-gray-600 leading-relaxed mt-4">
                  Roughly 8% of Americans are uninsured, and nearly one in
                  four working-age adults are underinsured, meaning their
                  insurance does not adequately cover their medication
                  costs. For many of these patients, DTP programs offer a
                  meaningful alternative.
                </p>
              </div>

              {/* What to watch out for */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  What to watch out for
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  DTP programs can save you money, but they come with
                  trade-offs you should understand before enrolling:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Your local pharmacist may not know what you are taking
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      When you fill a prescription at your local pharmacy,
                      your pharmacist has a record of all your medications.
                      They check for drug interactions, duplicate therapies,
                      and dosing problems. When you order through a DTP
                      program, your medication is dispensed by a separate
                      mail-order pharmacy that does not share records
                      with your local pharmacy. This means your local
                      pharmacist may have an incomplete picture of your
                      medication list, which can lead to missed interactions
                      or safety issues.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Costs may not count toward your insurance deductible
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Most DTP programs operate on a cash-pay basis, meaning
                      your payment does not go through insurance. That
                      means the money you spend on a DTP program typically
                      will not count toward your annual deductible or
                      out-of-pocket maximum. For some patients, this could
                      mean paying more overall if it prevents them from
                      reaching their deductible threshold.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Your doctor&apos;s records may not be updated
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Medications ordered through DTP platforms may not
                      automatically appear in your doctor&apos;s electronic
                      health records, especially if the prescription and
                      dispensing happen outside of your health system. Make
                      sure to inform your doctor about any medications you
                      are receiving through a DTP program.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Only brand-name drugs are available
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      DTP programs focus exclusively on brand-name
                      medications, typically expensive drugs that are still
                      under patent. If a generic version of your medication
                      exists, it will almost always be cheaper to fill at a
                      local pharmacy. DTP programs are not a replacement for
                      generic drugs.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">
                      Telehealth prescribing may not be right for everyone
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Some DTP platforms include built-in telehealth services
                      to make obtaining a prescription faster. While convenient,
                      this can mean a provider who does not know your
                      full medical history is prescribing your medication.
                      For complex conditions or patients taking multiple
                      medications, an in-person visit with your regular
                      doctor is usually safer.
                    </p>
                  </div>
                </div>
              </div>

              {/* DTP vs pharmacy vs insurance */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  DTP programs vs. pharmacy vs. insurance: how do they compare?
                </h2>
                <div className="overflow-x-auto -mx-4 px-4">
                  <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          &nbsp;
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          DTP Program
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Local Pharmacy
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                          Insurance
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        {
                          label: "Price",
                          dtp: "Fixed cash price set by manufacturer",
                          pharmacy: "Varies by pharmacy",
                          insurance: "Copay/coinsurance after deductible",
                        },
                        {
                          label: "Delivery",
                          dtp: "Mail-order to your door",
                          pharmacy: "In-person pickup",
                          insurance: "In-person or mail-order",
                        },
                        {
                          label: "Drug interactions checked",
                          dtp: "By mail-order pharmacy only",
                          pharmacy: "Yes, full medication history",
                          insurance: "Yes, through pharmacy",
                        },
                        {
                          label: "Counts toward deductible",
                          dtp: "Usually no",
                          pharmacy: "Yes",
                          insurance: "Yes",
                        },
                        {
                          label: "Drugs available",
                          dtp: "Brand-name only",
                          pharmacy: "Brand and generic",
                          insurance: "Based on formulary",
                        },
                        {
                          label: "Prior authorization needed",
                          dtp: "No",
                          pharmacy: "Sometimes",
                          insurance: "Often for brand-name drugs",
                        },
                      ].map((row) => (
                        <tr key={row.label} className="text-gray-600">
                          <td className="px-4 py-3 font-medium text-gray-800">
                            {row.label}
                          </td>
                          <td className="px-4 py-3">{row.dtp}</td>
                          <td className="px-4 py-3">{row.pharmacy}</td>
                          <td className="px-4 py-3">{row.insurance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* How to decide */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  How to decide if a DTP program is right for you
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Consider the following questions:
                </p>
                <ul className="space-y-3">
                  {[
                    "Is my medication available through a DTP program? Use our Find My Options tool to check.",
                    "Is the DTP price lower than what I currently pay? Compare the program price against your current out-of-pocket cost, including copay, coinsurance, and deductible.",
                    "Am I comfortable with mail-order delivery? If you prefer face-to-face interaction with a pharmacist, a DTP program may not be the right fit.",
                    "Will my doctor and pharmacist know I am using this program? Inform both. Ask your pharmacist to note it in your profile so they can still check for interactions.",
                    "Does a generic version of my drug exist? If so, the generic is almost certainly cheaper. DTP programs make the most sense for brand-name drugs without a generic alternative.",
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

              {/* The bigger picture */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                  The bigger picture
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  DTP programs are part of a larger shift in how prescription
                  drugs are sold in the United States. In May 2025, an
                  executive order directed the Department of Health and Human
                  Services to explore direct-to-consumer purchasing pathways
                  at &ldquo;most-favored-nation&rdquo; prices, which are prices tied to
                  what other high-income countries pay for the same drugs.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The idea is straightforward: bypass the middlemen (insurance
                  companies, pharmacy benefit managers) and allow patients to buy
                  directly from manufacturers at lower prices. For some
                  patients, this works. However, health policy researchers have
                  noted that DTP models do not fix the root causes of high
                  drug prices in the U.S. Instead, they add a new purchasing channel
                  on top of an already complex system.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  That is exactly why tools like DirectRxGuide exist. As DTP
                  programs multiply across manufacturers, patients need a
                  single, independent place to compare what is available,
                  understand the trade-offs, and find the option that makes
                  the most sense for their situation, without being steered by
                  any single manufacturer.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 rounded-2xl p-6 sm:p-8 text-center">
                <h2 className="font-serif text-2xl text-gray-900 mb-3">
                  Find your direct-to-patient options
                </h2>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Use our free tool to see which DTP programs match your
                  condition and insurance status. No account required and no
                  personal data stored.
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
