"use client";
import Image from "next/image";
import { useState } from "react";

const team = [
  {
    name: "Dr. Mwebembezi Joshua",
    title: "Founder & C.E.O",
    image: "/img/team/joshua.png",
    description:
      "A licensed medical doctor,, Software Engineer, and artificial intelligence expert. His multidisciplinary expertise drives the development of innovative digital health and AI solutions.",
  },
  {
    name: "Dr. Tayebwa Chrispus",
    title: "Co-Founder, COO",
    image: "/img/team/Chirs.png",
    description:
      "An experienced medical doctor, Data Scientist with expertise in patient-centered care and health service innovation",
  },
  {
    name: "Dr. Ahabwe Rachel",
    title: "Co-Founder, CAO",
    image: "/img/team/rachel.png",
    description:
      "Dr. Ahabwe Rachel is a medical doctor and entrepreneur with dual degrees in Medicine & Surgery and Biomedical Sciences from Makerere University.",
  },
  {
    name: "Dr. Soro David",
    title: "Co-Founder, CTO",
    image: "/img/team/Soro.png",
    description:
      "Dr. Soro David is a licensed medical doctor and data scientist with a passion for leveraging digital health to improve healthcare across Africa",
  },
  {
    name: "Dr. Ashraf Wandera",
    title: "Chief Pharmacist",
    image: "/img/team/ashiraf.png",
    description:
      "A fully qualified Ugandan pharmacist with expertise in pharmaceutical manufacturing, regulatory affairs, and hospital pharmacy management.",
  },
  {
    name: "Dr. Twanza Peninah",
    title: "Medical Doctor",
    image: "/img/teams/Dr. Twanza.JPG",
    description:
      "Dedicated to providing high-quality clinical care and supporting health outreach.",
  },
  {
    name: "Dr. Masiga Marion Sharon",
    title: "Medical Doctor",
    image: "/img/team/Marion.png",
    description:
      "Focused on patient care and building trust through reliable digital consultations.",
  },
  {
    name: "Dr. Ayikoru Grace",
    title: "Medical Doctor",
    image: "/img/teams/Dr. Ayikoru.JPG",
    description:
      "Committed to improving community health through accessible telemedicine.",
  },
];

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const teamChunks = chunkArray(team, 3);

export default function TeamCardLayout() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-950">
        Meet the Remedius Team
      </h2>
      {teamChunks.map((chunk, chunkIndex) => (
        <div
          key={chunkIndex}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8"
        >
          {chunk.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg text-center transition-transform hover:scale-105 overflow-hidden w-full"
            >
              <div className="relative overflow-hidden h-90 mx-auto">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="mt-4 text-xl font-bold text-gray-800 px-2">
                {member.name}
              </h4>
              <p className="text-sm text-[#149099] font-medium px-2">
                {member.title}
              </p>
              <p className="mt-2 text-gray-600 text-sm text-left p-4">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      ))}

      {selectedMember && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center transition-opacity"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white p-6 shadow-xl max-w-md text-center transform scale-95 hover:scale-100 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedMember.image}
              alt={selectedMember.name}
              width={200}
              height={200}
              className="object-cover mx-auto shadow-md"
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
