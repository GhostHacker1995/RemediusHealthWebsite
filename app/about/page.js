import React from "react";
import AboutBanner from "./components/Banner";
import OurStorySection from "./components/Ourstory";
import CorporateSocialResponsibility from "./components/Csr";
import TeamCircleLayout from "./components/RemediusTeam";

function page() {
  return (
    <div>
      <AboutBanner />
      <OurStorySection />
      <CorporateSocialResponsibility />
      <TeamCircleLayout />
    </div>
  );
}

export default page;
