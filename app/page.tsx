import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhatIsDTP from "@/components/WhatIsDTP";
import Footer from "@/components/Footer";

const FindMyOptions = dynamic(() => import("@/components/FindMyOptions"), {
  loading: () => <div className="min-h-[600px]" />,
});

const ProgramCards = dynamic(() => import("@/components/ProgramCards"), {
  loading: () => <div className="min-h-[800px]" />,
});

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <FindMyOptions />
        <WhatIsDTP />
        <ProgramCards />
      </main>
      <Footer />
    </>
  );
}
