"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Dr. Ahabwe Rachel",
    roles: ["OB/GYN", "Preventive Care"],
    description:
      "Dr. Rachel specializes in women's health and preventive medical programs with over 10 years of experience.",
    image: "/img/team/Dr. Ahabwe Rachel.JPG",
  },
  {
    name: "Dr. Ayikoru",
    roles: ["Pediatrics", "Family Medicine"],
    description:
      "Dr. Ayikoru is a compassionate pediatrician focused on child wellness and holistic family care.",
    image: "/img/team/Dr. Ayikoru.JPG",
  },
  {
    name: "Dr. Soro",
    roles: ["Cardiology", "Chronic Care"],
    description:
      "An experienced cardiologist improving outcomes for chronic patients through tech-enabled care.",
    image: "/img/team/Dr. Soro.JPG",
  },
  {
    name: "Dr. Tayebwa Chrispus",
    roles: ["Mental Health", "Telemedicine"],
    description:
      "Focused on mental health access and remote psychiatric support in underserved regions.",
    image: "/img/team/Dr. Tayebwa Chrispus.JPG",
  },
  {
    name: "Dr. Twanza",
    roles: ["Nutrition", "Community Care"],
    description:
      "Community-based nutritionist driving impact through food security and local outreach.",
    image: "/img/team/Dr. Twanza.JPG",
  },
  {
    name: "Dr. Mwebembezi",
    roles: ["General Medicine"],
    description:
      "General practitioner supporting primary care and mobile clinic initiatives.",
    image: "/img/team/Dr.Mwebembezi.JPG",
  },
];

export default function OurTeam() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const scrollContainerRef = useRef(null);

  const handleMouseEnter = (index) => {
    setFlippedIndex(index);
  };

  const handleMouseLeave = () => {
    setFlippedIndex(null);
  };

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

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
            <span className="block mt-1 text-sm text-gray-500">
              💡 Tap or hover on cards to learn more about each team member
            </span>
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
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(index)}
              className="flex-shrink-0 w-[280px] [perspective:1000px] cursor-pointer group relative"
            >
              {/* Flip indicator */}
              <div className="absolute top-2 right-2 z-20 bg-white/80 rounded-full p-1 shadow-md group-hover:bg-white/100 transition-all">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <div
                className={`relative w-full h-[360px] rounded-2xl shadow-xl transition-transform duration-700 [transform-style:preserve-3d] ${
                  flippedIndex === index ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden [backface-visibility:hidden]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-0 bg-white/90 px-4 py-3 text-center w-full">
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {member.roles.join(", ")}
                    </p>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-white rounded-2xl px-5 py-6 text-center flex flex-col justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {member.description}
                  </p>
                  <p className="text-xs text-gray-400">
                    {member.roles.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {team.map((member, index) => (
            <div
              key={`second-${index}`}
              onMouseEnter={() => handleMouseEnter(index + team.length)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(index + team.length)}
              className="flex-shrink-0 w-[280px] [perspective:1000px] cursor-pointer group relative"
            >
              {/* Flip indicator */}
              <div className="absolute top-2 right-2 z-20 bg-white/80 rounded-full p-1 shadow-md group-hover:bg-white/100 transition-all">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <div
                className={`relative w-full h-[360px] rounded-2xl shadow-xl transition-transform duration-700 [transform-style:preserve-3d] ${
                  flippedIndex === index + team.length ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden [backface-visibility:hidden]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-0 bg-white/90 px-4 py-3 text-center w-full">
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {member.roles.join(", ")}
                    </p>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-white rounded-2xl px-5 py-6 text-center flex flex-col justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {member.description}
                  </p>
                  <p className="text-xs text-gray-400">
                    {member.roles.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
