import React from "react";
import FuturisticHero from "./components/FuturisticHero";
import WhatWeDo from "./components/WhatWeDo";
import AboutUsSection from "./components/About";
import WhyWeMatter from "./components/WhyWeMatter";
import AIBootcampSection from "./components/Bootcamp";
import CallToActionSection from "./components/CallToAction";

function page() {
  return (
    <div>
      <FuturisticHero />
      <WhatWeDo />
      <AboutUsSection />
      <WhyWeMatter />
      <AIBootcampSection />
      <CallToActionSection />
    </div>
  );
}

export default page;
