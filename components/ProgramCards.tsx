"use client";

type DTPProgram = {
  name: string;
  manufacturer: string;
  logo: string;
  drugs: string[];
  areas: string[];
  priceLabel: string;
  priceNote: string;
  since: string;
};

// Ordered by parent company market cap (largest first)
const programs: DTPProgram[] = [
  {
    name: "LillyDirect",
    manufacturer: "Eli Lilly",
    logo: "/logos/lilly.svg",
    drugs: ["Zepbound", "Emgality", "Humalog", "Humulin", "Basaglar", "Lyumjev", "Rezvoglar"],
    areas: ["Obesity", "Migraine", "Diabetes"],
    priceLabel: "From $299/mo",
    priceNote: "Zepbound self-pay, all doses from $299–$449",
    since: "Active since Jan 2024",
  },
  {
    name: "NovoCare Pharmacy",
    manufacturer: "Novo Nordisk",
    logo: "/logos/novo-nordisk.png",
    drugs: ["Wegovy (injection)", "Wegovy (tablet)", "Ozempic"],
    areas: ["Obesity", "Diabetes"],
    priceLabel: "From $25/mo",
    priceNote: "Wegovy or Ozempic with commercial insurance",
    since: "Active since Mar 2025",
  },
  {
    name: "J&J Direct",
    manufacturer: "Johnson & Johnson",
    logo: "/logos/jnj.webp",
    drugs: ["INVOKANA", "INVOKAMET", "INVOKAMET XR", "XARELTO"],
    areas: ["Diabetes", "Cardiology"],
    priceLabel: "From $197/mo",
    priceNote: "XARELTO cash price · all drugs self-pay only · phone enrollment",
    since: "Active since 2026",
  },
  {
    name: "Novartis Direct",
    manufacturer: "Novartis",
    logo: "/logos/novartis.png",
    drugs: ["Cosentyx", "Mayzent", "Rydapt", "Tabrecta"],
    areas: ["Immunology", "Neurology", "Oncology"],
    priceLabel: "From $3,434/mo",
    priceNote: "Cosentyx DTP cash price · 55% off list · insurance not accepted",
    since: "Active since Nov 2025",
  },
  {
    name: "AZ Patient Direct",
    manufacturer: "AstraZeneca",
    logo: "/logos/astrazeneca.png",
    drugs: ["Farxiga", "Xigduo XR", "Airsupra", "Bevespi Aerosphere"],
    areas: ["Diabetes", "Respiratory", "Cardiology"],
    priceLabel: "From $51/mo",
    priceNote: "Bevespi Aerosphere cash price · home delivery only",
    since: "Active since Sep 2025",
  },
  {
    name: "PfizerForAll",
    manufacturer: "Pfizer",
    logo: "/logos/pfizer.png",
    drugs: ["Zavzpret", "Paxlovid", "Eucrisa", "Xeljanz", "Xeljanz XR"],
    areas: ["Migraine", "Infectious Disease", "Dermatology", "Rheumatology"],
    priceLabel: "From $0/mo",
    priceNote: "Paxlovid free · Zavzpret savings card · Eucrisa from $158",
    since: "Active since Aug 2024",
  },
  {
    name: "AmgenNow",
    manufacturer: "Amgen",
    logo: "/logos/amgen.png",
    drugs: ["Repatha", "Aimovig", "Amjevita"],
    areas: ["Cardiology", "Migraine", "Rheumatology"],
    priceLabel: "Copay programs",
    priceNote: "Savings vary by eligibility",
    since: "Active since Oct 2025",
  },
  {
    name: "BMS Patient Connect",
    manufacturer: "Bristol Myers Squibb",
    logo: "/logos/bms.png",
    drugs: ["Sotyktu"],
    areas: ["Dermatology"],
    priceLabel: "$950/mo",
    priceNote: "Sotyktu cash price · insurance not accepted",
    since: "Active since Jan 2026",
  },
  {
    name: "ELIQUIS DTP Program",
    manufacturer: "Bristol-Myers Squibb + Pfizer",
    logo: "/logos/bms.png",
    drugs: ["Eliquis"],
    areas: ["Cardiology"],
    priceLabel: "From $10/mo",
    priceNote: "Savings card (insured) · $346/mo cash-pay",
    since: "Active since 2024",
  },
  {
    name: "GSK for You",
    manufacturer: "GSK",
    logo: "/logos/gsk.png",
    drugs: ["Advair Diskus", "Advair HFA", "Anoro Ellipta", "Arnuity Ellipta", "Incruse Ellipta", "Ventolin HFA", "Relenza", "Malarone"],
    areas: ["Respiratory", "Infectious Disease"],
    priceLabel: "From $25.80/mo",
    priceNote: "Ventolin HFA cash price · +$25 shipping/processing fee",
    since: "Active since 2024",
  },
  {
    name: "Boehringer Ingelheim Direct",
    manufacturer: "Boehringer Ingelheim",
    logo: "/logos/boehringer.png",
    drugs: ["Spiriva Respimat", "Striverdi Respimat", "Jentadueto", "Jentadueto XR"],
    areas: ["Respiratory", "Diabetes"],
    priceLabel: "From $35/mo",
    priceNote: "Spiriva Respimat, cash price",
    since: "Active since Sep 2025",
  },
];

/** Per-logo sizing to normalize visual weight across different aspect ratios */
const logoSizing: Record<string, string> = {
  "/logos/lilly.svg": "h-7 w-16",          // script mark, nearly square
  "/logos/novo-nordisk.png": "h-9 w-16",   // stacked bull icon, tall
  "/logos/pfizer.png": "h-8 w-24",         // icon + text, moderate
  "/logos/astrazeneca.png": "h-7 w-28",    // wide with icon
  "/logos/amgen.png": "h-7 w-24",          // wide wordmark
  "/logos/bms.png": "h-6 w-32",            // ultra-wide text
  "/logos/boehringer.png": "h-8 w-24",     // icon + stacked text
  "/logos/novartis.png": "h-7 w-28",       // wide with icon
  "/logos/gsk.png": "h-8 w-16",            // short chunky wordmark
  "/logos/jnj.webp": "h-9 w-20",           // stacked text, tall
};

const areaColors: Record<string, string> = {
  Obesity: "bg-amber-50 text-amber-700 border-amber-200",
  Diabetes: "bg-orange-50 text-orange-700 border-orange-200",
  Migraine: "bg-purple-50 text-purple-700 border-purple-200",
  Cardiology: "bg-red-50 text-red-700 border-red-200",
  Dermatology: "bg-pink-50 text-pink-700 border-pink-200",
  Respiratory: "bg-sky-50 text-sky-700 border-sky-200",
  "Infectious Disease": "bg-green-50 text-green-700 border-green-200",
  Immunology: "bg-violet-50 text-violet-700 border-violet-200",
  Neurology: "bg-blue-50 text-blue-700 border-blue-200",
  Oncology: "bg-rose-50 text-rose-700 border-rose-200",
  Rheumatology: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

function ProgramCard({ p, index }: { p: DTPProgram; index: number }) {
  return (
    <article className={`group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-slide-up stagger-${index + 1}`}>
      <div className="h-1 w-full bg-gradient-to-r from-teal-400 to-teal-600 opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col flex-1 p-6">
        {/* Header with logo */}
        <div className="mb-4">
          <div className={`${logoSizing[p.logo] || "h-8 w-28"} mb-3`}>
            <img
              src={p.logo}
              alt={`${p.manufacturer} logo`}
              className="h-full w-full object-contain object-left"
            />
          </div>
          <h3 className="font-serif text-xl text-gray-900 leading-snug mb-0.5">
            {p.name}
          </h3>
          <p className="text-xs text-gray-400 font-sans">{p.manufacturer} · {p.since}</p>
        </div>

        {/* Therapeutic areas */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.areas.map((area) => (
            <span
              key={area}
              className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
                areaColors[area] || "bg-gray-50 text-gray-600 border-gray-200"
              }`}
            >
              {area}
            </span>
          ))}
        </div>

        {/* Key drugs */}
        <div className="mb-4">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
            Key Medications
          </p>
          <div className="flex flex-wrap gap-1.5">
            {p.drugs.map((drug) => (
              <span
                key={drug}
                className="text-xs text-gray-600 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md"
              >
                {drug}
              </span>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="bg-teal-50 rounded-xl px-4 py-3 mb-5">
          <p className="text-lg font-semibold text-teal-700 font-sans">{p.priceLabel}</p>
          <p className="text-xs text-teal-600 mt-0.5">{p.priceNote}</p>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <a
            href="#eligibility"
            className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg border border-teal-500 text-teal-600 text-sm font-medium hover:bg-teal-500 hover:text-white hover:shadow-md hover:shadow-teal-100 active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            Find matching programs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProgramCards() {
  return (
    <section
      id="programs"
      className="py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50/50"
      aria-labelledby="programs-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-teal-600 uppercase tracking-widest mb-3">
            DTP Programs
          </p>
          <h2 id="programs-heading" className="font-serif text-3xl sm:text-4xl text-gray-900">
            Manufacturer programs, all in one place
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
            11 active direct-to-patient platforms — independently tracked and
            verified by a pharmacist.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <ProgramCard key={p.name} p={p} index={i} />
          ))}
        </div>

        {/* Nudge to Find My Options */}
        <div className="text-center mt-14 pt-10 border-t border-gray-100">
          <p className="text-gray-500 text-sm mb-4">
            Not sure which program fits your situation?
          </p>
          <a
            href="#eligibility"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition-colors shadow-sm shadow-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            Find My Options
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
