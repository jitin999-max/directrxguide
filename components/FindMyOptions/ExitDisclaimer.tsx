"use client";

import { useState, useCallback } from "react";

declare function gtag(...args: unknown[]): void;

interface ExitDisclaimerProps {
  href: string;
  manufacturer: string;
  drug?: string;
  platform?: string;
  children: React.ReactNode;
  className?: string;
}

function appendUtm(url: string): string {
  try {
    const u = new URL(url);
    u.searchParams.set("utm_source", "directrxguide");
    u.searchParams.set("utm_medium", "referral");
    u.searchParams.set("utm_campaign", "find_my_options");
    return u.toString();
  } catch {
    return url;
  }
}

export default function ExitDisclaimer({
  href,
  manufacturer,
  drug,
  platform,
  children,
  className = "",
}: ExitDisclaimerProps) {
  const [showModal, setShowModal] = useState(false);
  const taggedHref = appendUtm(href);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setShowModal(true);
    },
    []
  );

  return (
    <>
      <a
        href={taggedHref}
        onClick={handleClick}
        className={className}
        rel="noopener noreferrer"
      >
        {children}
      </a>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-xl text-gray-900 mb-3">
              You&apos;re leaving DirectRxGuide
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              You are about to visit <strong>{manufacturer}&apos;s</strong> website.
              DirectRxGuide is an independent information aggregator and is not
              affiliated with {manufacturer}.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              Eligibility, pricing, and program terms should be verified directly
              with the manufacturer. DirectRxGuide does not guarantee the accuracy
              of information on external sites.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Go Back
              </button>
              <a
                href={taggedHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition-colors"
                onClick={() => {
                  if (typeof gtag === "function") {
                    gtag("event", "outbound_click", {
                      manufacturer,
                      drug: drug || "",
                      platform: platform || "",
                      link_url: href,
                    });
                  }
                  setShowModal(false);
                }}
              >
                Continue
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
