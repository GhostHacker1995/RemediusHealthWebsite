"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const team = [
  {
    name: "Dr. Mwebembezi Joshua",
    title: "Founder & C.E.O",
    image: "/img/team/joshua.png",
    description:
      "Dr. Mwebembezi Joshua is a licensed medical professional with experience in the healthcare industry. With a background in general medicine, software engineering, and artificial intelligence, he is passionate about making healthcare more accessible. Dr. Mwebembezi has developed innovative, AI-driven solutions to challenges faced by patients and providers. As founder of Remedius Mobile Health, he is committed to advancing telemedicine and digital health technologies across the region.",
  },
  {
    name: "Dr. Tayebwa Chrispus",
    title: "Co-Founder, COO",
    image: "/img/team/Chirs.png",
    description:
      "Dr. Tayebwa Chrispus is a renowned healthcare professional with a passion for patient-centered care. With years of experience, Dr. Tayebwa has dedicated his career to finding new and innovative ways to improve the quality of healthcare services available to patients across Uganda. As the co-founder of Remedius Mobile Health, Dr. Tayebwa has been instrumental in the development and implementation of cutting-edge telemedicine and digital health solutions.",
  },
  {
    name: "Dr. Ahabwe Rachel",
    title: "Co-Founder, CAO",
    image: "/img/team/rachel.png",
    description:
      "Dr. Ahabwe Rachel is a medical doctor by profession & entrepreneur. She holds a Bachelor's Degree in Medicine and Surgery from Makerere University and Bachelor's Degree in biomedical sciences from the same university .She is currently the Chief Administrative Officer of Remedius Mobile health and a practicing general practitioner at the same digital clinic.",
  },
  {
    name: "Dr. Soro David",
    title: "Co-Founder, CTO",
    image: "/img/team/Soro.png",
    description:
      "Dr. Soro David is licensed medical doctor with over two years' experience offering healthcare to the communities of south-western Uganda. He is passionate about leveraging digital health technologies to achieve universal health coverage in Africa. He holds a Bachelor's Degree in Medicine and Surgery from Gulu University.",
  },
];

export default function OurTeam() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust speed as needed
    let isHovered = false;
    let animationFrameId;

    const autoScroll = () => {
      if (!isHovered) {
        scrollAmount += scrollSpeed;
        const maxScroll = scrollContainer.scrollWidth / 2; // Half because we duplicated content
        if (scrollAmount >= maxScroll) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    autoScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="bg-[#f8f6f1] px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Meet our team</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            Our dedicated professionals are the heart of Remedius.
          </p>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
        >
          {/* First set of team members */}
          {team.map((member, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-[280px] cursor-pointer group relative"
            >
              <div className="relative w-full h-[360px] rounded-2xl shadow-xl">
                <div className="bg-white rounded-2xl overflow-hidden h-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-0 bg-white/90 px-4 py-3 text-center w-full">
                    <h6 className="font-normal text-gray-800 text-lg">
                      {member.name}
                    </h6>
                    <p className="text-sm text-gray-500">{member.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {team.map((member, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-[280px] cursor-pointer group relative"
            >
              <div className="relative w-full h-[360px] rounded-2xl shadow-xl">
                <div className="bg-white rounded-2xl overflow-hidden h-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-0 bg-white/90 px-4 py-3 text-center w-full">
                    <h6 className="font-normal text-gray-800 text-lg">
                      {member.name}
                    </h6>
                    <p className="text-sm text-gray-500">{member.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
