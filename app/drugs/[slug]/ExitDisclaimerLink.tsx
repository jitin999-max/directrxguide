"use client";

import ExitDisclaimer from "@/components/FindMyOptions/ExitDisclaimer";

export default function ExitDisclaimerLink({
  href,
  manufacturer,
  drug,
  platform,
}: {
  href: string;
  manufacturer: string;
  drug: string;
  platform: string;
}) {
  return (
    <ExitDisclaimer
      href={href}
      manufacturer={manufacturer}
      drug={drug}
      platform={platform}
      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg border border-teal-500 text-teal-600 text-sm font-medium hover:bg-teal-500 hover:text-white transition-colors"
    >
      Visit Program
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </ExitDisclaimer>
  );
}
