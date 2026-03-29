import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllDrugs } from "@/lib/programs/slugs";

export const metadata: Metadata = {
  title:
    "All DTP Drug Programs — Direct-to-Patient Pricing & Eligibility | DirectRxGuide",
  description:
    "Browse every drug available through direct-to-patient (DTP) programs. Compare prices, eligibility, and savings across all major manufacturer platforms.",
  alternates: { canonical: "/drugs" },
  keywords: [
    "direct-to-patient drug programs",
    "DTP drug list",
    "prescription drug programs",
    "manufacturer drug pricing",
    "brand-name drug savings",
    "all DTP drugs",
  ],
  openGraph: {
    title:
      "All DTP Drug Programs — Direct-to-Patient Pricing | DirectRxGuide",
    description:
      "Browse every drug available through direct-to-patient programs. Compare prices and eligibility across all major manufacturer platforms.",
    url: "https://directrxguide.com/drugs",
    siteName: "DirectRxGuide",
    type: "website",
  },
};

export default function DrugsIndexPage() {
  const drugs = getAllDrugs();

  // Group drugs alphabetically
  const grouped = new Map<string, typeof drugs>();
  for (const drug of drugs) {
    const letter = drug.drugBrand[0].toUpperCase();
    if (!grouped.has(letter)) grouped.set(letter, []);
    grouped.get(letter)!.push(drug);
  }

  return (
    <>
      <Nav />
      <main>
        <section className="bg-gradient-to-b from-white via-white to-teal-50/30 pt-20 pb-12 sm:pt-24 sm:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
              <a href="/" className="hover:text-teal-600 transition-colors">
                Home
              </a>
              <span className="mx-1.5">/</span>
              <span className="text-gray-600">Drugs</span>
            </nav>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
              All DTP Drug Programs
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
              Browse every drug available through direct-to-patient (DTP)
              programs. Each page shows all available programs, pricing, and
              eligibility requirements.
            </p>

            <p className="mt-3 text-sm text-gray-400">
              {drugs.length} drugs across 12 manufacturer platforms
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Letter jump links */}
            <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-gray-100">
              {Array.from(grouped.keys()).map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium text-gray-600 bg-gray-50 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>

            {/* Drug listing by letter */}
            <div className="space-y-10">
              {Array.from(grouped.entries()).map(([letter, letterDrugs]) => (
                <div key={letter} id={`letter-${letter}`}>
                  <h2 className="font-serif text-2xl text-gray-900 mb-4 sticky top-16 bg-white py-2 z-10 border-b border-gray-100">
                    {letter}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {letterDrugs.map((drug) => (
                      <a
                        key={drug.slug}
                        href={`/drugs/${drug.slug}`}
                        className="group flex items-start justify-between gap-3 p-4 rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-sm transition-all"
                      >
                        <div className="min-w-0">
                          <p className="font-serif text-gray-900 group-hover:text-teal-700 transition-colors">
                            {drug.drugBrand}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5 truncate">
                            {drug.drugGeneric}
                          </p>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <p className="text-sm font-semibold text-teal-700 font-sans">
                            {drug.programs[0].priceDisplay}
                          </p>
                          <p className="text-[10px] text-gray-400 mt-0.5">
                            {drug.programs.length} program
                            {drug.programs.length !== 1 ? "s" : ""}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
