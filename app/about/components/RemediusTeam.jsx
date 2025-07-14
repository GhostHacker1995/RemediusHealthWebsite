"use client";
import Image from "next/image";
import { useState } from "react";

const team = [
  {
    name: "Dr. Mwebembezi Joshua",
    title: "Founder & C.E.O",
    image: "/img/team/joshua.png",
    description:
      "Dr. Mwebembezi Joshua is a licensed medical professional with experience in the healthcare industry. With a background in general medicine, software engineering, and artificial intelligence, he is passionate about making healthcare more accessible. Dr. Mwebembezi has developed innovative, AI-driven solutions to challenges faced by patients and providers. As founder of Remedius Mobile Health, he is committed to advancing telemedicine and digital health technologies across the region.",
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
      "Dr. Ahabwe Rachel is a medical doctor by profession & entrepreneur. She holds a Bachelor’s Degree in Medicine and Surgery from Makerere University and Bachelor's Degree in biomedical sciences from the same university .She is currently the Chief Administrative Officer of Remedius Mobile health and a practicing general practitioner at the same digital clinic.",
  },
  {
    name: "Dr. Soro David",
    title: "Co-Founder, CTO",
    image: "/img/team/Soro.png",
    description:
      "Dr. Soro David is licensed medical doctor with over two years’ experience offering healthcare to the communities of south-western Uganda. He is passionate about leveraging digital health technologies to achieve universal health coverage in Africa. He holds a Bachelor’s Degree in Medicine and Surgery from Gulu University.",
  },
  {
    name: "Dr. Ashraf Wandera",
    title: "Chief Pharmacist",
    image: "/img/team/ashiraf.png",
    description:
      "Ashraf Wandera is a Ugandan fully registered pharmacist with enormous experience and expertise in various pharmaceutical fields like pharmaceutical manufacturing, Drug regulatory and compliance affairs, hospital pharmacy management practices i.e. dispensing, hospital supply chain management. Currently I am working with Bellazuri Ltd as the production and supervising pharmacist.",
  },
  {
    name: "Dr. Twanza Peninah",
    title: "Medical Officer",
    image: "/img/team/Dr. Twanza.JPG",
    description:
      "Dedicated to providing high-quality clinical care and supporting health outreach.",
  },
  {
    name: "Dr. Masiga Marion Sharon",
    title: "Medical Officer",
    image: "/img/team/Marion.png",
    description:
      "Focused on patient care and building trust through reliable digital consultations.",
  },
  {
    name: "Dr. Ayikoru Grace",
    title: "Medical Officer",
    image: "/img/teams/Dr. Ayikoru.JPG",
    description:
      "Committed to improving community health through accessible telemedicine.",
  },
];

export default function TeamCardLayout() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [expandedMember, setExpandedMember] = useState(null);

  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-950">
        Meet the Remedius Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-lg text-center transition-transform hover:scale-105 rounded-br-[80px] overflow-hidden ${
              expandedMember === index ? "h-auto" : "h-[480px]"
            }`}
          >
            <div className="relative overflow-hidden h-60 mx-auto">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="object-cover w-full h-full rounded-br-[80px]"
              />
            </div>
            <h6 className="mt-4 text-xl font-bold text-gray-800 px-2">
              {member.name}
            </h6>
            <p className="text-sm text-[#149099] font-medium px-2">
              {member.title}
            </p>
            <p className="mt-2 text-gray-600 text-sm text-left p-4">
              {expandedMember === index
                ? member.description
                : `${member.description.slice(0, 50)}...`}
            </p>
            {expandedMember !== index && (
              <button
                className="mb-2 px-4 py-2 bg-[#149099] text-white text-sm font-semibold rounded hover:bg-[#0f6d6d] transition-colors"
                onClick={() => setExpandedMember(index)}
              >
                Show More
              </button>
            )}
            {expandedMember === index && (
              <button
                className="mt-4 px-2 py-2 mb-4 bg-[#149099] text-white text-sm font-semibold rounded hover:bg-[#0f6d6d] transition-colors"
                onClick={() => setExpandedMember(null)}
              >
                Show Less
              </button>
            )}
          </div>
        ))}
      </div>

      {selectedMember && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center transition-opacity"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-xl max-w-md text-center transform scale-95 hover:scale-100 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedMember.image}
              alt={selectedMember.name}
              width={200}
              height={200}
              className="object-cover rounded-[10px] mx-auto shadow-md"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-800">
              {selectedMember.name}
            </h3>
            <p className="text-sm text-blue-600 font-medium">
              {selectedMember.title}
            </p>
            <p className="mt-2 text-gray-600 text-sm">
              {selectedMember.description}
            </p>
            <button
              className="mt-2 text-blue-500 text-sm font-semibold underline hover:text-blue-700 transition-colors"
              onClick={() => setSelectedMember(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
