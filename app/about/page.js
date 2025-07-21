import React from "react";
import OurStorySection from "./components/Ourstory";
import CorporateSocialResponsibility from "./components/Csr";
import TeamCircleLayout from "./components/RemediusTeam";
import AboutBanner from "@/components/Banner";

function page() {
  return (
    <div>
      <AboutBanner
        title={"About Us"}
        description={"Learn more about RemediusRx"}
        href={"about"}
      />
      <OurStorySection />
      <CorporateSocialResponsibility />
      <TeamCircleLayout />
    </div>
  );
}

export default page;
