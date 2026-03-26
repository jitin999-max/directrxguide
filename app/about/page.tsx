import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — DirectRxGuide",
  description:
    "DirectRxGuide is an independent, pharmacist-built platform that aggregates every direct-to-patient prescription drug program in the United States. No pharma funding. No bias.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-white pt-20 pb-16 sm:pt-28 sm:pb-20 border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-widest mb-4">
              About
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-6">
              A neutral guide built by a pharmacist,{" "}
              <em className="not-italic italic" style={{ color: "#0D9E80" }}>
                for patients.
              </em>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              DirectRxGuide exists because patients deserve an independent resource —
              not a manufacturer storefront, not a government shortlist, and not a
              coupon platform with insurance ties. We built the tool we wished existed.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            {/* The problem */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                The problem we&apos;re solving
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Direct-to-patient (DTP) prescription programs have quietly transformed
                how Americans can access brand-name medications — manufacturers like
                Eli Lilly, Novo Nordisk, Pfizer, and AstraZeneca now sell directly to
                patients at cash prices, bypassing the traditional pharmacy and
                insurance system entirely.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Finding these programs is harder than it should be. TrumpRx.gov lists
                only drugs from manufacturers who signed Most Favored Nation deals.
                AmericasMedicines.com is funded by PhRMA. Every manufacturer shows
                only their own drugs. GoodRx was built for coupons, not DTP
                navigation. No single resource covers everything — until now.
              </p>
              <p className="text-gray-600 leading-relaxed">
                40% of Americans have skipped or delayed a prescription due to cost.
                Many of those patients may be eligible for a program that could make
                their medication free or dramatically cheaper — they just don&apos;t know
                it exists.
              </p>
            </div>

            {/* What we do */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                What DirectRxGuide does
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We aggregate every active manufacturer direct-to-patient program in
                one independent, pharmacist-verified directory — regardless of
                political deal status, manufacturer size, or ad spend.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Program directory",
                    body: "Comprehensive profiles for every active DTP platform — LillyDirect, NovoCare, PfizerForAll, AstraZeneca Direct, AmgenNow, and more — with current pricing, eligibility requirements, and enrollment guides.",
                  },
                  {
                    title: "Find My Options",
                    body: "A quick tool that matches patients to the programs they may be eligible for based on condition and insurance status — with no account required and no personal data stored.",
                  },
                  {
                    title: "Drug comparison tool",
                    body: "Side-by-side clinical and pricing comparison across DTP-available drugs within the same therapeutic area — the only independent tool of its kind.",
                  },
                  {
                    title: "Education hub",
                    body: "Plain-language guides for patients and clinical references for HCPs, all authored by a licensed pharmacist and reviewed regularly.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-0.5">{item.title}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Independence statement */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                Our independence commitment
              </h2>
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 space-y-3">
                {[
                  "No pharmaceutical manufacturer funds, sponsors, or influences this platform.",
                  "No manufacturer pays to be listed, ranked, or featured on this platform.",
                  "Program profiles are published based on public availability, not commercial relationships.",
                  "All outbound links to manufacturer sites include an exit disclaimer identifying the destination.",
                  "Any advertising or commercial relationships will be clearly disclosed and will never influence program rankings or editorial content.",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="text-sm text-teal-800 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Data freshness */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">
                How we keep data current
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Drug prices and program details change frequently. Every program
                profile displays a &ldquo;Last Verified&rdquo; date. Profiles not reviewed
                within 30 days are flagged as &ldquo;Pending Review&rdquo; until updated.
              </p>
              <p className="text-gray-600 leading-relaxed">
                All pricing data is sourced directly from manufacturer DTP sites and
                verified against publicly available FDA prescribing information. We do
                not rely on third-party data feeds or automated scraping — every entry
                is manually reviewed by a pharmacist.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="border-t border-gray-100 pt-10">
              <p className="text-xs text-gray-400 leading-relaxed">
                <strong className="text-gray-500">Medical disclaimer:</strong>{" "}
                DirectRxGuide does not provide medical advice. All content is for
                informational purposes only. Always consult your healthcare provider
                before making changes to your medications. DirectRxGuide is not a
                pharmacy, prescriber, or healthcare provider. Program eligibility,
                pricing, and availability are subject to change — verify current
                details directly with the manufacturer before enrolling.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
