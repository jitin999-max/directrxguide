"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100/80"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-1.5">
            <span className="font-serif text-xl text-gray-900 tracking-normal transition-colors group-hover:text-gray-700">
              Direct<span style={{ color: "#0D9E80" }}>Rx</span>Guide
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {[
              { label: "Find My Options", href: "/#eligibility" },
              { label: "DTP Programs", href: "/#programs" },
              { label: "Drug Prices", href: "/drugs" },
              { label: "Learn", href: "/learn" },
              { label: "About", href: "/about" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm text-gray-600 hover:text-teal-600 transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#eligibility"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 hover:shadow-md hover:shadow-teal-200 active:scale-[0.97] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              Find My Options
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${mobileOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className="border-t border-gray-100 py-3 space-y-1"
            aria-label="Mobile navigation"
          >
            {[
              { label: "Find My Options", href: "/#eligibility" },
              { label: "DTP Programs", href: "/#programs" },
              { label: "Drug Prices", href: "/drugs" },
              { label: "Learn", href: "/learn" },
              { label: "About", href: "/about" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 pb-1 px-2">
              <a
                href="/#eligibility"
                className="block text-center px-4 py-2 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Find My Options
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
