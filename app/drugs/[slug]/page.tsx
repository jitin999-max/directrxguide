import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllDrugs, getDrugBySlug } from "@/lib/programs/slugs";
import { FDA_INDICATIONS, INDICATION_COLORS } from "@/lib/programs/constants";
import ExitDisclaimerLink from "./ExitDisclaimerLink";

export function generateStaticParams() {
  return getAllDrugs().map((d) => ({ slug: d.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const drug = getDrugBySlug(params.slug);
  if (!drug) return {};

  const cheapest = drug.programs[0];
  const title = `${drug.drugBrand} (${drug.drugGeneric}) — DTP Programs & Pricing | DirectRxGuide`;
  const description = `Compare ${drug.programs.length} direct-to-patient program${drug.programs.length !== 1 ? "s" : ""} for ${drug.drugBrand} (${drug.drugGeneric}). Prices from ${cheapest.priceDisplay}. No insurance required for some programs.`;

  return {
    title,
    description,
    alternates: { canonical: `/drugs/${drug.slug}` },
    keywords: [
      drug.drugBrand,
      drug.drugGeneric,
      `${drug.drugBrand} price`,
      `${drug.drugBrand} without insurance`,
      `${drug.drugBrand} DTP program`,
      `${drug.drugBrand} direct-to-patient`,
      `${drug.drugBrand} cost`,
      `how to get ${drug.drugBrand}`,
      `cheapest ${drug.drugBrand}`,
      `${drug.drugBrand} savings`,
    ],
    openGraph: {
      title,
      description,
      url: `https://directrxguide.com/drugs/${drug.slug}`,
      siteName: "DirectRxGuide",
      type: "article",
    },
  };
}

export default function DrugPage({ params }: { params: { slug: string } }) {
  const nonce = headers().get("x-nonce") ?? undefined;
  const drug = getDrugBySlug(params.slug);
  if (!drug) notFound();

  const cheapest = drug.programs[0];
  const indications = FDA_INDICATIONS[cheapest.drugGenericKey];
  const platforms = Array.from(new Set(drug.programs.map((p) => p.platform)));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Drug",
    name: drug.drugBrand,
    alternateName: drug.drugGeneric,
    description: cheapest.fdaIndication,
    url: `https://directrxguide.com/drugs/${drug.slug}`,
    offers: drug.programs.map((p) => ({
      "@type": "Offer",
      name: p.programVariant,
      price: p.sortPrice,
      priceCurrency: "USD",
      seller: { "@type": "Organization", name: p.manufacturer },
      description: p.priceNotes,
    })),
  };

  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero */}
        <section className="bg-gradient-to-b from-white via-white to-teal-50/30 pt-20 pb-12 sm:pt-24 sm:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
              <a href="/" className="hover:text-teal-600 transition-colors">
                Home
              </a>
              <span className="mx-1.5">/</span>
              <a
                href="/drugs"
                className="hover:text-teal-600 transition-colors"
              >
                Drugs
              </a>
              <span className="mx-1.5">/</span>
              <span className="text-gray-600">{drug.drugBrand}</span>
            </nav>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
              {drug.drugBrand}
              <span className="block text-lg sm:text-xl font-sans text-gray-400 mt-2">
                ({drug.drugGeneric})
              </span>
            </h1>

            <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
              {cheapest.fdaIndication}
            </p>

            {/* Quick stats */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium px-3 py-1.5 rounded-full">
                {drug.programs.length} DTP program
                {drug.programs.length !== 1 ? "s" : ""}
              </div>
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium px-3 py-1.5 rounded-full">
                From {cheapest.priceDisplay}
              </div>
              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium px-3 py-1.5 rounded-full">
                {platforms.length} platform{platforms.length !== 1 ? "s" : ""}
              </div>
            </div>

            {/* FDA Indications */}
            {indications && (
              <div className="mt-6">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                  FDA-Approved Indications
                </p>
                <div className="flex flex-col gap-1.5">
                  {indications.map((ind) => (
                    <span
                      key={ind.label}
                      className={`inline-flex items-start px-2.5 py-1 rounded-lg text-xs leading-tight font-medium ${INDICATION_COLORS[ind.category]}`}
                    >
                      {ind.label}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Programs comparison */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-2">
              Available direct-to-patient (DTP) programs
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Sorted by price, lowest first. Always verify eligibility and
              pricing directly with the manufacturer.
            </p>

            <div className="space-y-4">
              {drug.programs.map((p, i) => (
                <article
                  key={p.id}
                  className={`bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                    i === 0
                      ? "border-teal-400 shadow-md ring-1 ring-teal-100"
                      : "border-gray-100 shadow-sm hover:shadow-md hover:border-teal-200"
                  }`}
                >
                  {i === 0 && (
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white text-xs font-semibold px-4 py-1.5 text-center">
                      Lowest price option
                    </div>
                  )}

                  <div className="p-5 sm:p-6">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div className="min-w-0">
                        <h3 className="font-serif text-lg text-gray-900 leading-snug">
                          {p.programVariant}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">
                          via {p.platform} &middot; {p.manufacturer}
                        </p>
                      </div>
                      {!p.dosePricing && (
                        <div className="text-left sm:text-right flex-shrink-0">
                          <p className="text-xl font-semibold text-teal-700 font-sans">
                            {p.priceDisplay}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Dose pricing */}
                    {p.dosePricing && p.dosePricing.length > 0 && (
                      <div className="bg-teal-50/60 rounded-xl px-4 py-3 mb-3">
                        <p className="text-[10px] font-medium text-teal-600 uppercase tracking-wider mb-2">
                          Price by Dose
                        </p>
                        <div className="space-y-1.5">
                          {p.dosePricing.map((dp) => (
                            <div
                              key={dp.dose}
                              className="flex items-center justify-between"
                            >
                              <span className="text-xs text-gray-600">
                                {dp.dose}
                              </span>
                              <span className="text-sm font-semibold text-teal-700 font-sans">
                                {dp.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Price notes */}
                    <p className="text-xs text-teal-600 mb-3">{p.priceNotes}</p>

                    {/* Eligibility */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <p className="text-xs font-medium text-gray-600 mb-1">
                        Eligibility
                      </p>
                      <p className="text-xs text-gray-500">
                        {p.eligibilityNotes}
                      </p>
                      {p.governmentCaveat && (
                        <p className="text-xs text-amber-600 mt-1.5">
                          {p.governmentCaveat}
                        </p>
                      )}
                      {p.stateExclusions.length > 0 && (
                        <p className="text-xs text-gray-400 mt-1">
                          Some benefits may not be available in:{" "}
                          {p.stateExclusions.join(", ")}
                        </p>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <ExitDisclaimerLink
                        href={p.platformUrl}
                        manufacturer={p.manufacturer}
                        drug={p.drugBrand}
                        platform={p.platform}
                      />
                      <p className="text-[10px] text-gray-400">
                        Last verified: {p.lastVerified}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600 mb-4">
              Not sure which {drug.drugBrand} program fits your situation?
            </p>
            <a
              href="/#eligibility"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition-colors shadow-sm shadow-teal-200"
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
        </section>
      </main>
      <Footer />
    </>
  );
}
