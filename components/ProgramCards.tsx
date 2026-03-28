"use client";

import { useState } from "react";
import Image from "next/image";
import ExitDisclaimer from "./FindMyOptions/ExitDisclaimer";

type DrugInfo = {
  name: string;
  price: string;
  note: string;
  url: string;
};

type DTPProgram = {
  name: string;
  manufacturer: string;
  logo: string;
  drugs: DrugInfo[];
  areas: string[];
  since: string;
};

// Ordered by parent company market cap (largest first)
const programs: DTPProgram[] = [
  {
    name: "LillyDirect",
    manufacturer: "Eli Lilly",
    logo: "/logos/lilly.svg",
    drugs: [
      { name: "Zepbound", price: "From $299/mo", note: "Self-pay, all doses $299–$449", url: "https://www.lilly.com/lillydirect/medicines/zepbound" },
      { name: "Emgality", price: "As low as $35/mo", note: "Savings card with commercial insurance", url: "https://www.lilly.com/lillydirect/medicines/emgality" },
      { name: "Humalog", price: "As low as $35/mo", note: "Savings card with commercial insurance", url: "https://www.lilly.com/lillydirect/medicines/humalog" },
      { name: "Humulin", price: "As low as $35/mo", note: "Savings card with commercial insurance", url: "https://www.lilly.com/lillydirect/medicines/humulin" },
      { name: "Basaglar", price: "As low as $35/mo", note: "Savings card with commercial insurance", url: "https://www.lilly.com/lillydirect/medicines/basaglar" },
      { name: "Lyumjev", price: "As low as $35/mo", note: "Savings card with commercial insurance", url: "https://www.lilly.com/lillydirect/medicines/lyumjev" },
      { name: "Rezvoglar", price: "As low as $35/mo", note: "Savings card with commercial insurance", url: "https://www.lilly.com/lillydirect/medicines/rezvoglar" },
    ],
    areas: ["Obesity", "Migraine", "Diabetes"],
    since: "Active since Jan 2024",
  },
  {
    name: "NovoCare Pharmacy",
    manufacturer: "Novo Nordisk",
    logo: "/logos/novo-nordisk.png",
    drugs: [
      { name: "Wegovy (injection)", price: "From $199/mo", note: "Self-pay cash price, $199–$349/mo", url: "https://www.novocare.com/pharmacy.html" },
      { name: "Wegovy (tablet)", price: "From $149/mo", note: "Self-pay cash price, $149–$299/mo", url: "https://www.novocare.com/pharmacy.html" },
      { name: "Ozempic", price: "From $199/mo", note: "Self-pay cash price, $199–$499/mo", url: "https://www.novocare.com/pharmacy.html" },
    ],
    areas: ["Obesity", "Diabetes"],
    since: "Active since Mar 2025",
  },
  {
    name: "J&J Direct",
    manufacturer: "Johnson & Johnson",
    logo: "/logos/jnj.webp",
    drugs: [
      { name: "XARELTO", price: "$197/mo", note: "Cash-pay, self-pay only", url: "https://www.jnjdirect.com" },
      { name: "INVOKANA", price: "$225/mo", note: "Cash-pay, self-pay only", url: "https://www.jnjdirect.com" },
      { name: "INVOKAMET", price: "$225/mo", note: "Cash-pay, self-pay only", url: "https://www.jnjdirect.com" },
      { name: "INVOKAMET XR", price: "$225/mo", note: "Cash-pay, self-pay only", url: "https://www.jnjdirect.com" },
    ],
    areas: ["Diabetes", "Cardiology"],
    since: "Active since 2026",
  },
  {
    name: "Novartis Direct",
    manufacturer: "Novartis",
    logo: "/logos/novartis.png",
    drugs: [
      { name: "Cosentyx", price: "From $1,717/mo", note: "DTP cash price, 55% off list", url: "https://www.cosentyx.com/all/treatment-cost/direct-to-patient" },
      { name: "Mayzent", price: "From $42/pack", note: "Copay program with insurance", url: "https://mayzent.myaspn.com/" },
      { name: "Rydapt", price: "$2,909/pack", note: "56-count pack, cash price", url: "https://rydapt.myaspn.com/" },
      { name: "Tabrecta", price: "From $2,650/pack", note: "56-count pack, cash price", url: "https://tabrecta.myaspn.com/" },
    ],
    areas: ["Immunology", "Neurology", "Oncology"],
    since: "Active since Nov 2025",
  },
  {
    name: "AZ Patient Direct",
    manufacturer: "AstraZeneca",
    logo: "/logos/astrazeneca.png",
    drugs: [
      { name: "Bevespi", price: "$51/inhaler", note: "Cash price, home delivery only", url: "https://www.azpatientdirect.com/bevespi/home" },
      { name: "Farxiga", price: "$181.59/mo", note: "Cash price, home delivery only", url: "https://www.azpatientdirect.com/farxiga/home" },
      { name: "Xigduo XR", price: "$181.59/mo", note: "Cash price, home delivery only", url: "https://www.azpatientdirect.com/xigduo/home" },
      { name: "Airsupra", price: "$201/inhaler", note: "Cash price, home delivery only", url: "https://www.azpatientdirect.com/airsupra/home" },
    ],
    areas: ["Diabetes", "Respiratory", "Cardiology"],
    since: "Active since Sep 2025",
  },
  {
    name: "PfizerForAll",
    manufacturer: "Pfizer",
    logo: "/logos/pfizer.png",
    drugs: [
      { name: "Paxlovid", price: "$0 (free)", note: "Free COVID-19 treatment", url: "https://www.pfizerforall.com" },
      { name: "Zavzpret", price: "$0/mo", note: "Savings card, commercial insurance", url: "https://www.zavzpret.com/save" },
      { name: "Eucrisa", price: "From $158", note: "Cash price varies by size", url: "https://www.goodrx.com/eucrisa?utm_source=pfe" },
      { name: "Xeljanz", price: "As low as $0/mo", note: "Copay card with insurance, $1,518/mo cash", url: "https://www.goodrx.com/xeljanz?utm_source=pfe" },
      { name: "Xeljanz XR", price: "As low as $0/mo", note: "Copay card with insurance, $3,204/mo cash", url: "https://www.goodrx.com/xeljanz-xr?utm_source=pfe" },
    ],
    areas: ["Migraine", "Infectious Disease", "Dermatology", "Rheumatology"],
    since: "Active since Aug 2024",
  },
  {
    name: "AmgenNow",
    manufacturer: "Amgen",
    logo: "/logos/amgen.png",
    drugs: [
      { name: "Repatha", price: "From $25/mo", note: "Copay card with insurance, $239/mo cash", url: "https://www.amgennow.com" },
      { name: "Aimovig", price: "From $49/mo", note: "Copay card with insurance, $299/mo cash", url: "https://www.amgennow.com" },
      { name: "Amjevita", price: "As low as $0/mo", note: "Copay card with insurance, $299/mo cash", url: "https://www.amgennow.com" },
    ],
    areas: ["Cardiology", "Migraine", "Rheumatology"],
    since: "Active since Oct 2025",
  },
  {
    name: "BMS Patient Connect",
    manufacturer: "Bristol Myers Squibb",
    logo: "/logos/bms.png",
    drugs: [
      { name: "Sotyktu", price: "$950/mo", note: "Cash price, insurance not accepted", url: "https://www.bmspatientconnect.com/sotyktu" },
    ],
    areas: ["Dermatology"],
    since: "Active since Jan 2026",
  },
  {
    name: "ELIQUIS DTP Program",
    manufacturer: "Bristol-Myers Squibb + Pfizer",
    logo: "/logos/bms.png",
    drugs: [
      { name: "Eliquis", price: "From $10/mo", note: "Savings card with insurance, $346/mo cash", url: "https://www.eliquis.bmscustomerconnect.com/assets/commercial/us/eliquisbmscustomerconnect/en/pdf/dtp_eliquis.pdf" },
    ],
    areas: ["Cardiology"],
    since: "Active since 2024",
  },
  {
    name: "GSK for You",
    manufacturer: "GSK",
    logo: "/logos/gsk.png",
    drugs: [
      { name: "Ventolin HFA", price: "$25.80/inhaler", note: "Cash price + $25 shipping fee", url: "https://gskforyou.com/programs/direct-to-you/" },
      { name: "Advair Diskus", price: "From $35/inhaler", note: "Cash price, $35–$64", url: "https://gskforyou.com/programs/direct-to-you/" },
      { name: "Arnuity Ellipta", price: "From $78/inhaler", note: "Cash price, $78–$104", url: "https://gskforyou.com/programs/direct-to-you/" },
      { name: "Advair HFA", price: "From $125/inhaler", note: "Cash price, $125–$220", url: "https://gskforyou.com/programs/direct-to-you/" },
      { name: "Incruse Ellipta", price: "$134.20/inhaler", note: "Cash price", url: "https://gskforyou.com/programs/direct-to-you/" },
      { name: "Anoro Ellipta", price: "$222.94/inhaler", note: "Cash price", url: "https://gskforyou.com/programs/direct-to-you/" },
      { name: "Relenza", price: "$27.90/pack", note: "Flu treatment, cash price", url: "https://gskforyou.com/programs/direct-to-you/" },
      { name: "Malarone", price: "$92.74/pack", note: "Malaria prevention, cash price", url: "https://gskforyou.com/programs/direct-to-you/" },
    ],
    areas: ["Respiratory", "Infectious Disease"],
    since: "Active since 2024",
  },
  {
    name: "Boehringer Ingelheim Direct",
    manufacturer: "Boehringer Ingelheim",
    logo: "/logos/boehringer.png",
    drugs: [
      { name: "Spiriva Respimat", price: "As low as $35/mo", note: "Cash price", url: "https://www.boehringer-ingelheim.com/us/direct/medicines/spiriva-respimat" },
      { name: "Striverdi Respimat", price: "$35/mo", note: "Cash-only, insurance cannot be used", url: "https://www.boehringer-ingelheim.com/us/direct/medicines/striverdi-respimat" },
      { name: "Jentadueto", price: "$55/mo", note: "Cash-only, insurance cannot be used", url: "https://www.boehringer-ingelheim.com/us/direct/medicines/jentadueto" },
      { name: "Jentadueto XR", price: "$55/mo", note: "Cash-only, insurance cannot be used", url: "https://www.boehringer-ingelheim.com/us/direct/medicines/jentadueto-xr" },
    ],
    areas: ["Respiratory", "Diabetes"],
    since: "Active since Sep 2025",
  },
];

/** Per-logo sizing to normalize visual weight across different aspect ratios */
const logoSizing: Record<string, string> = {
  "/logos/lilly.svg": "h-7 w-16",
  "/logos/novo-nordisk.png": "h-9 w-16",
  "/logos/pfizer.png": "h-8 w-24",
  "/logos/astrazeneca.png": "h-7 w-28",
  "/logos/amgen.png": "h-7 w-24",
  "/logos/bms.png": "h-6 w-32",
  "/logos/boehringer.png": "h-8 w-24",
  "/logos/novartis.png": "h-7 w-28",
  "/logos/gsk.png": "h-8 w-16",
  "/logos/jnj.webp": "h-9 w-20",
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
  const [selectedDrug, setSelectedDrug] = useState(0);
  const drug = p.drugs[selectedDrug];

  return (
    <article className={`group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-slide-up stagger-${index + 1}`}>
      <div className="h-1 w-full bg-gradient-to-r from-teal-400 to-teal-600 opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col flex-1 p-6">
        {/* Header with logo */}
        <div className="mb-4">
          <div className={`${logoSizing[p.logo] || "h-8 w-28"} relative mb-3`}>
            <Image
              src={p.logo}
              alt={`${p.manufacturer} logo`}
              fill
              sizes="112px"
              className="object-contain object-left"
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

        {/* Clickable drug tabs */}
        <div className="mb-4">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
            Select a Medication
          </p>
          <div className="flex flex-wrap gap-1.5">
            {p.drugs.map((d, i) => (
              <button
                key={d.name}
                onClick={() => setSelectedDrug(i)}
                className={`text-xs px-2.5 py-1 rounded-lg border transition-all duration-200 ${
                  selectedDrug === i
                    ? "bg-teal-500 text-white border-teal-500 shadow-sm"
                    : "text-gray-600 bg-gray-50 border-gray-100 hover:border-teal-300 hover:text-teal-700"
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>

        {/* Price — updates based on selected drug */}
        <div className="bg-teal-50 rounded-xl px-4 py-3 mb-5 transition-all duration-200">
          <p className="text-lg font-semibold text-teal-700 font-sans">{drug.price}</p>
          <p className="text-xs text-teal-600 mt-0.5">{drug.name} · {drug.note}</p>
        </div>

        {/* CTA — links to selected drug's URL */}
        <div className="mt-auto">
          <ExitDisclaimer
            href={drug.url}
            manufacturer={p.manufacturer}
            drug={drug.name}
            platform={p.name}
            className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg border border-teal-500 text-teal-600 text-sm font-medium hover:bg-teal-500 hover:text-white hover:shadow-md hover:shadow-teal-100 active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            Visit {drug.name} Program
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </ExitDisclaimer>
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
