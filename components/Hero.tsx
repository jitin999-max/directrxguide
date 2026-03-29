"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import type { RankedResult } from "@/lib/programs/filters";
import { FDA_INDICATIONS, INDICATION_COLORS } from "@/lib/programs/constants";
import ExitDisclaimer from "./FindMyOptions/ExitDisclaimer";

export default function Hero() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<RankedResult[]>([]);
  const [searchedDrug, setSearchedDrug] = useState("");
  const [drugNames, setDrugNames] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fetch drug names once on mount
  useEffect(() => {
    fetch("/api/drugs")
      .then((r) => r.json())
      .then((d) => setDrugNames(d.names ?? []))
      .catch(() => {});
  }, []);

  const filtered = useMemo(() => {
    if (query.trim().length < 2) return [];
    return drugNames
      .filter((name) => name.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 6);
  }, [query, drugNames]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleSearch(drugName: string) {
    setQuery(drugName);
    setOpen(false);
    setSearchedDrug(drugName);

    fetch(`/api/drugs?q=${encodeURIComponent(drugName)}`)
      .then((r) => r.json())
      .then((d) => setSearchResults(d.results ?? []))
      .catch(() => setSearchResults([]));
  }

  function handleClear() {
    setQuery("");
    setSearchedDrug("");
    setSearchResults([]);
    setOpen(false);
    inputRef.current?.focus();
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-teal-50/30 pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-teal-50 opacity-60 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-teal-50 opacity-40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-medium px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            12 DTP Platforms · Updated Daily · Free to Use
          </div>
          <a
            href="#what-is-dtp"
            className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full hover:border-teal-300 hover:text-teal-700 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            What is DTP?
          </a>
        </div>

        {/* Main headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] tracking-tight text-balance max-w-4xl mx-auto animate-slide-up">
          Every direct-to-patient drug program,{" "}
          <em className="not-italic italic" style={{ color: "#0D9E80" }}>
            in one place.
          </em>
        </h1>

        {/* Tagline */}
        <p className="mt-5 text-base sm:text-lg text-gray-500 font-sans tracking-wide animate-slide-up stagger-2">
          No insurance denials. No pharmacy lines.{" "}
          <br className="sm:hidden" />
          Just direct-to-door prescriptions.
        </p>

        {/* Sub-description */}
        <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-slide-up stagger-3">
          We aggregate every manufacturer direct-to-patient program so patients
          and providers can find, compare, and access them instantly.
        </p>

        {/* Search bar */}
        <div className="mt-10 max-w-xl mx-auto animate-slide-up stagger-4" ref={containerRef}>
          <div className="relative z-50">
            <div
              className={`flex items-center bg-white border rounded-xl shadow-sm transition-all duration-200 ${
                open && filtered.length > 0
                  ? "border-teal-400 ring-2 ring-teal-100 rounded-b-none"
                  : "border-gray-200 hover:border-teal-300 focus-within:border-teal-400 focus-within:ring-2 focus-within:ring-teal-100"
              }`}
            >
              <svg className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpen(true);
                  if (searchedDrug) {
                    setSearchedDrug("");
                    setSearchResults([]);
                  }
                }}
                onFocus={() => setOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && filtered.length > 0) {
                    handleSearch(filtered[0]);
                  }
                }}
                placeholder="Search by drug name (e.g. Zepbound, Ozempic, Eliquis)..."
                className="flex-1 py-3.5 px-3 text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-none"
                aria-label="Search programs"
                aria-autocomplete="list"
                aria-expanded={open && filtered.length > 0}
              />
              {query && (
                <button
                  onClick={handleClear}
                  className="mr-2 p-1.5 text-gray-400 hover:text-gray-600 rounded-full transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button
                onClick={() => {
                  if (filtered.length > 0) handleSearch(filtered[0]);
                  else if (query.trim()) handleSearch(query.trim());
                }}
                className="flex-shrink-0 mr-1.5 my-1.5 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Search
              </button>
            </div>

            {/* Suggestions dropdown */}
            {open && filtered.length > 0 && !searchedDrug && (
              <ul className="absolute z-50 w-full bg-white border border-teal-400 border-t-0 rounded-b-xl shadow-lg overflow-hidden">
                {filtered.map((item) => (
                  <li key={item} role="option" aria-selected={false}>
                    <button
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSearch(item);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 flex items-center gap-2.5 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                      </svg>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p className="mt-2.5 text-xs text-gray-400">
            {drugNames.length > 0 ? `${drugNames.length} drugs` : "Loading drugs"} available across 11 DTP platforms
          </p>
        </div>

        {/* Search results */}
        {searchedDrug && (
          <div className="mt-8 max-w-2xl mx-auto animate-slide-up">
            {searchResults.length > 0 ? (
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  {searchResults.length} program{searchResults.length !== 1 ? "s" : ""} found for{" "}
                  <span className="font-semibold text-teal-600">{searchedDrug}</span>
                </p>
                {searchResults.map((r) => (
                  <SearchResultCard key={r.primary.id} result={r} />
                ))}
                <p className="text-[10px] text-gray-400 text-center pt-2">
                  Showing default pricing. Use{" "}
                  <a href="#eligibility" className="text-teal-600 underline">
                    Find My Options
                  </a>{" "}
                  for results tailored to your insurance status.
                </p>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                <p className="text-sm text-gray-600">
                  No DTP programs found for &ldquo;{searchedDrug}&rdquo;.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Try a different drug name or use{" "}
                  <a href="#eligibility" className="text-teal-600 underline">
                    Find My Options
                  </a>{" "}
                  to search by condition.
                </p>
              </div>
            )}
          </div>
        )}

        {/* CTA row */}
        {!searchedDrug && (
          <div className="relative z-0 mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up stagger-5">
            <a
              href="#eligibility"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm transition-all duration-200 shadow-sm shadow-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              Find My Options
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              Browse Programs
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

/** Compact result card for search results */
function SearchResultCard({ result }: { result: RankedResult }) {
  const p = result.primary;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300 p-5 text-left overflow-hidden">
      <div className="flex items-start justify-between gap-4">
        {/* Drug info */}
        <div className="min-w-0">
          <h3 className="font-serif text-lg text-gray-900 leading-snug">
            {p.drugBrand}
            <span className="text-sm font-sans text-gray-400 ml-1.5">
              ({p.drugGeneric})
            </span>
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            via {p.platform} · {p.manufacturer}
          </p>
          <p className="text-xs text-gray-500 mt-1.5">{p.programVariant}</p>
        </div>

        {/* Price — single line when no dose tiers */}
        {!p.dosePricing && (
          <div className="text-right flex-shrink-0">
            <p className="text-lg font-semibold text-teal-700 font-sans whitespace-nowrap">
              {p.priceDisplay}
            </p>
          </div>
        )}
      </div>

      {/* Dose pricing table */}
      {p.dosePricing && p.dosePricing.length > 0 && (
        <div className="mt-3 bg-teal-50/60 rounded-xl px-4 py-3">
          <p className="text-[10px] font-medium text-teal-600 uppercase tracking-wider mb-2">Price by Dose</p>
          <div className="space-y-1.5">
            {p.dosePricing.map((dp) => (
              <div key={dp.dose} className="flex items-center justify-between">
                <span className="text-xs text-gray-600">{dp.dose}</span>
                <span className="text-sm font-semibold text-teal-700 font-sans">{dp.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FDA Indications */}
      {FDA_INDICATIONS[p.drugGenericKey] && (
        <div className="mt-3 pt-3 border-t border-gray-100">
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

      {/* Price notes */}
      {p.priceNotes && (
        <p className="text-xs text-teal-600 mt-2">{p.priceNotes}</p>
      )}

      {/* Eligibility + CTA */}
      <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center gap-3">
        <p className="text-xs text-gray-500 flex-1">{p.eligibilityNotes}</p>
        <ExitDisclaimer
          href={p.platformUrl}
          manufacturer={p.manufacturer}
          drug={p.drugBrand}
          platform={p.platform}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-teal-500 text-teal-600 text-xs font-medium hover:bg-teal-500 hover:text-white transition-colors flex-shrink-0"
        >
          Visit Program
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </ExitDisclaimer>
      </div>

      {/* Variants */}
      {result.variants.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-400 mb-2">
            {result.variants.length} other option{result.variants.length > 1 ? "s" : ""} available
          </p>
          <div className="space-y-1.5">
            {result.variants.map((v) => (
              <div key={v.id} className="flex items-center justify-between text-xs bg-gray-50 rounded-lg px-3 py-2">
                <span className="text-gray-600">{v.programVariant}</span>
                <span className="text-teal-700 font-medium">{v.priceDisplay}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
