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
    "Find manufacturer patient assistance programs, copay cards, and free drug programs. No pharma bias. No sales pitch. Updated weekly.",
  metadataBase: new URL("https://directrxguide.com"),
  openGraph: {
    title: "DirectRxGuide — Direct drug programs, in one place.",
    description:
      "Find manufacturer patient assistance programs, copay cards, and free drug programs. No pharma bias.",
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
