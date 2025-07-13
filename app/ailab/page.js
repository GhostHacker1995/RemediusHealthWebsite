import React from "react";
import FuturisticHero from "./components/FuturisticHero";
import WhatWeDo from "./components/WhatWeDo";
import AboutUsSection from "./components/About";
import WhyWeMatter from "./components/WhyWeMatter";
import AIBootcampSection from "./components/Bootcamp";
import CallToActionSection from "./components/CallToAction";
import CollaborateSupport from "./components/CollaborateSupport";
import CollaborationBanner from "./components/CollaborationBanner";

function page() {
  return (
    <div>
      <FuturisticHero />
      <WhatWeDo />
      <AboutUsSection />
      <WhyWeMatter />
      <AIBootcampSection />
      <CallToActionSection />
      <CollaborationBanner />
      <CollaborateSupport />
    </div>
  );
}

export default page;
