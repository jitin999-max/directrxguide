import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import FindMyOptions from "@/components/FindMyOptions";
import WhatIsDTP from "@/components/WhatIsDTP";
import ProgramCards from "@/components/ProgramCards";
import Footer from "@/components/Footer";

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
