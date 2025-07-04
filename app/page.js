import EcoSystem from "@/components/EcoSystem";
import HeroSection from "@/components/Hero";
import HowMuchItCosts from "@/components/HowMuchItCosts";
import OurTeam from "@/components/OurTeam";
import PartnerCarousel from "@/components/Partner";
import WhatWeStandFor from "@/components/WhatWeStandFor";
import WhatWeTreat from "@/components/WhatWeTreat";
import React from "react";

function page() {
  return (
    <>
      <HeroSection />
      <WhatWeStandFor />
      <EcoSystem />
      <WhatWeTreat />
      <HowMuchItCosts />
      <OurTeam />
      <PartnerCarousel />
    </>
  );
}

export default page;
