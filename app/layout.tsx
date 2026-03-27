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

export const metadata: Metadata = {
  title: "DirectRxGuide — Every direct-to-patient drug program, in one place.",
  description:
    "No insurance denials. No pharmacy lines. Compare direct-to-patient drug programs from every major manufacturer — free, unbiased, and updated daily.",
  metadataBase: new URL("https://directrxguide.com"),
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
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
