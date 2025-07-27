import React from "react";
import FuturisticHero from "./components/FuturisticHero";
import WhatWeDo from "./components/WhatWeDo";
import AboutUsSection from "./components/About";
import WhyWeMatter from "./components/WhyWeMatter";
import AIBootcampSection from "./components/Bootcamp";
import CallToActionSection from "./components/CallToAction";
import CollaborateSupport from "./components/CollaborateSupport";
import CollaborationBanner from "./components/CollaborationBanner";
import AboutBanner from "./components/Banner";
import AiCourses from "./components/AiCourses";

function page() {
  return (
    <div>
      {/* <AboutBanner /> */}
      <FuturisticHero />
      <WhatWeDo />
      <AboutUsSection />
      <WhyWeMatter />
      <AIBootcampSection />
      <AiCourses />
      <CallToActionSection />
      <CollaborationBanner />
      <CollaborateSupport />
    </div>
  );
}

export default page;
