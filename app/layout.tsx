import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://directrxguide.com/#organization",
      name: "DirectRxGuide",
      url: "https://directrxguide.com",
      description:
        "An independent, pharmacist-built aggregator of every direct-to-patient prescription drug program in the United States.",
      foundingDate: "2026",
      knowsAbout: [
        "direct-to-patient drug programs",
        "direct-to-consumer prescription drugs",
        "prescription drug savings",
        "brand-name drug discounts",
        "prescription drugs without insurance",
        "manufacturer drug programs",
        "patient assistance programs",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://directrxguide.com/#website",
      url: "https://directrxguide.com",
      name: "DirectRxGuide",
      description:
        "Compare direct-to-patient drug programs from every major manufacturer. Free, unbiased, and updated daily.",
      publisher: { "@id": "https://directrxguide.com/#organization" },
    },
  ],
};

export const metadata: Metadata = {
  title: "DirectRxGuide — Every direct-to-patient drug program, in one place.",
  description:
    "No insurance denials. No pharmacy lines. Compare direct-to-patient drug programs from every major manufacturer — free, unbiased, and updated daily.",
  metadataBase: new URL("https://directrxguide.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DirectRxGuide — Every direct-to-patient drug program, in one place.",
    description:
      "No insurance denials. No pharmacy lines. Compare direct-to-patient drug programs from every major manufacturer — free, unbiased, and updated daily.",
    url: "https://directrxguide.com",
    siteName: "DirectRxGuide",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
