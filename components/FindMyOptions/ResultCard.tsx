"use client";

import { useState } from "react";
import type { InsuranceStatus } from "@/lib/programs/types";
import type { RankedResult } from "@/lib/programs/filters";
import { FDA_INDICATIONS, INDICATION_COLORS } from "@/lib/programs/constants";
import CaveatBadge from "./CaveatBadge";
import ExitDisclaimer from "./ExitDisclaimer";

/** Per-logo sizing to normalize visual weight across different aspect ratios */
const LOGO_SIZING: Record<string, string> = {
  "/logos/lilly.svg": "h-6 w-14",
  "/logos/novo-nordisk.png": "h-7 w-14",
  "/logos/pfizer.png": "h-6 w-20",
  "/logos/astrazeneca.png": "h-5 w-24",
  "/logos/amgen.png": "h-5 w-20",
  "/logos/bms.png": "h-5 w-28",
  "/logos/boehringer.png": "h-6 w-20",
  "/logos/novartis.png": "h-5 w-24",
  "/logos/gsk.png": "h-6 w-14",
  "/logos/jnj.webp": "h-7 w-16",
};

const PLATFORM_LOGOS: Record<string, string> = {
  LillyDirect: "/logos/lilly.svg",
  "NovoCare Pharmacy": "/logos/novo-nordisk.png",
  PfizerForAll: "/logos/pfizer.png",
  "ELIQUIS DTP Program": "/logos/bms.png",
  "AZ Patient Direct": "/logos/astrazeneca.png",
  AmgenNow: "/logos/amgen.png",
  "BMS Patient Connect": "/logos/bms.png",
  "Boehringer Ingelheim Direct": "/logos/boehringer.png",
  "Novartis Direct": "/logos/novartis.png",
  "GSK for You": "/logos/gsk.png",
  "J&J Direct": "/logos/jnj.webp",
};

export default function ResultCard({
  result,
  rank,
  insurance,
}: {
  result: RankedResult;
  rank: number;
  insurance: InsuranceStatus;
}) {
  const staggerClass = rank <= 11 ? `stagger-${rank}` : "";
  const [showDetails, setShowDetails] = useState(false);
  const [showVariants, setShowVariants] = useState(false);
  const p = result.primary;
  const isTop = rank <= 3;
  const isGovernment = insurance === "government";

  return (
    <article
      className={`flex flex-col bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 animate-slide-up ${staggerClass} ${
        rank === 1
          ? "border-yellow-400 shadow-lg ring-1 ring-yellow-200"
          : rank === 2
            ? "border-gray-300 shadow-lg ring-1 ring-gray-200"
            : rank === 3
              ? "border-amber-600 shadow-lg ring-1 ring-amber-200"
              : "border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5"
      }`}
    >
      {rank === 1 && (
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 text-xs font-semibold px-4 py-1.5 text-center">
          Best match for your selections
        </div>
      )}
      {rank === 2 && (
        <div className="bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 text-xs font-semibold px-4 py-1.5 text-center">
          2nd best match
        </div>
      )}
      {rank === 3 && (
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs font-semibold px-4 py-1.5 text-center">
          3rd best match
        </div>
      )}

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            {PLATFORM_LOGOS[p.platform] && (
              <div className={`${LOGO_SIZING[PLATFORM_LOGOS[p.platform]] || "h-6 w-24"} mb-2`}>
                <img
                  src={PLATFORM_LOGOS[p.platform]}
                  alt={`${p.manufacturer} logo`}
                  className="h-full w-full object-contain object-left"
                />
              </div>
            )}
            <h3 className="font-serif text-lg text-gray-900 leading-snug">
              {p.drugBrand}
              <span className="text-sm font-sans text-gray-400 ml-1.5">
                ({p.drugGeneric})
              </span>
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              via {p.platform} &middot; {p.manufacturer}
            </p>
          </div>
        </div>

        {/* Program variant */}
        <p className="text-xs text-gray-500 mb-3">{p.programVariant}</p>

        {/* FDA Indications */}
        {FDA_INDICATIONS[p.drugGenericKey] && (
          <div className="mb-3">
            <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1.5">FDA-Approved Indications</p>
            <div className="flex flex-col gap-1.5">
              {FDA_INDICATIONS[p.drugGenericKey].map((ind) => (
                <span
                  key={ind.label}
                  className={`inline-flex items-start px-2.5 py-1 rounded-lg text-[11px] leading-tight font-medium ${INDICATION_COLORS[ind.category]}`}
                >
                  {ind.label}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Caveat badge */}
        <div className="mb-3">
          <CaveatBadge
            handling={p.governmentInsuranceHandling}
            showForGovernment={isGovernment}
          />
        </div>

        {/* Price */}
        <div className="bg-teal-50 rounded-xl px-4 py-3 mb-4">
          <p className="text-lg font-semibold text-teal-700 font-sans">
            {p.priceDisplay}
          </p>
          <p className="text-xs text-teal-600 mt-0.5">{p.priceNotes}</p>
        </div>

        {/* Eligibility summary */}
        <p className="text-xs text-gray-500 mb-4">{p.eligibilityNotes}</p>

        {/* Expandable details */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors mb-3"
        >
          <svg
            className={`w-3 h-3 transition-transform ${showDetails ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {showDetails ? "Hide details" : "Full details"}
        </button>

        {showDetails && (
          <div className="text-xs text-gray-500 bg-gray-50 rounded-lg p-3 mb-3 space-y-2">
            <div>
              <p className="font-medium text-gray-600 mb-0.5">Indication</p>
              <p>{p.fdaIndication}</p>
            </div>
            {p.governmentCaveat && (
              <div>
                <p className="font-medium text-gray-600 mb-0.5">
                  Government insurance note
                </p>
                <p>{p.governmentCaveat}</p>
              </div>
            )}
            {p.stateExclusions.length > 0 && (
              <div>
                <p className="font-medium text-gray-600 mb-0.5">
                  State restrictions
                </p>
                <p>
                  Some benefits may not be available in:{" "}
                  {p.stateExclusions.join(", ")}
                </p>
              </div>
            )}
            <p className="text-gray-400">Last verified: {p.lastVerified}</p>
          </div>
        )}

        {/* Variants accordion */}
        {result.variants.length > 0 && (
          <div className="mb-3">
            <button
              onClick={() => setShowVariants(!showVariants)}
              className="flex items-center gap-1 text-xs font-medium text-teal-600 hover:text-teal-700 transition-colors"
            >
              <svg
                className={`w-3 h-3 transition-transform ${showVariants ? "rotate-90" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              See {result.variants.length} other option
              {result.variants.length > 1 ? "s" : ""} for {p.drugBrand}
            </button>

            {showVariants && (
              <div className="mt-2 space-y-2">
                {result.variants.map((v) => (
                  <div
                    key={v.id}
                    className="text-xs bg-gray-50 rounded-lg p-3 border border-gray-100"
                  >
                    <p className="font-medium text-gray-700">{v.programVariant}</p>
                    <p className="text-gray-500 mt-0.5">
                      {v.priceDisplay} &middot; {v.priceNotes}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CTA + disclaimer */}
        <div className="mt-auto space-y-2">
          <ExitDisclaimer
            href={p.platformUrl}
            manufacturer={p.manufacturer}
            className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg border border-teal-500 text-teal-600 text-sm font-medium hover:bg-teal-500 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            Visit Program
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </ExitDisclaimer>
          <p className="text-[10px] text-gray-400 text-center">
            Verify eligibility and pricing directly with {p.manufacturer}.
          </p>
        </div>
      </div>
    </article>
  );
}
