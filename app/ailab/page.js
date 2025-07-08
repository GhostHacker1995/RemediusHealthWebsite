import React from "react";
import FuturisticHero from "./components/FuturisticHero";
import WhatWeDo from "./components/WhatWeDo";
import AboutUsSection from "./components/About";

function page() {
  return (
    <div>
      <FuturisticHero />
      <WhatWeDo />
      <AboutUsSection />
    </div>
  );
}

export default page;
