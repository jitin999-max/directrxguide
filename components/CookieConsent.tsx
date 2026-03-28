"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

type Consent = "granted" | "denied" | null;

function getStoredConsent(): Consent {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem("cookie_consent");
  if (v === "granted" || v === "denied") return v;
  return null;
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const GA_ID = "G-6BTRBGBG3F";

export default function CookieConsent({ nonce }: { nonce?: string }) {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);
  const [loadGA, setLoadGA] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    setConsent(stored);
    if (stored === "granted") {
      setLoadGA(true);
    } else if (stored === null) {
      const t = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "granted");
    setConsent("granted");
    setVisible(false);
    setLoadGA(true);
  }

  function decline() {
    localStorage.setItem("cookie_consent", "denied");
    setConsent("denied");
    setVisible(false);
  }

  return (
    <>
      {/* GA scripts — only loaded after consent */}
      {loadGA && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
            nonce={nonce}
          />
          <Script id="ga4-init" strategy="afterInteractive" nonce={nonce}>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* Banner */}
      {consent === null && visible && (
        <div
          className="fixed bottom-0 inset-x-0 z-50 p-4 animate-slide-up"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 hidden sm:flex w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 items-center justify-center text-teal-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  We value your privacy
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We use cookies and Google Analytics to understand how visitors use
                  DirectRxGuide so we can improve the experience. No personally
                  identifiable information is ever collected.{" "}
                  <a href="/privacy" className="text-teal-600 underline hover:text-teal-700">
                    Privacy Policy
                  </a>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={decline}
                  className="px-4 py-2 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={accept}
                  className="px-4 py-2 text-xs font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-lg transition-colors shadow-sm shadow-teal-200"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
