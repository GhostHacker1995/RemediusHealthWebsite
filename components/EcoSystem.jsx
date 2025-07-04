"use client";

import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Remedius HMS",
    description:
      "Remedius' Hospital Management System manages hospitals or facilities, covering all essential hospital functions. Remedius HMS allows healthcare workers to manage patient data, vitals, lab tests, diagnostics, prescriptions, birth and death reports, pharmacy info, and drug inventory. It generates required reports and follows a patient's flow through clinical processes, capturing all details from arrival to departure.",
    secondary: "Comprehensive hospital management for better care.",
    image: "/img/hms.png",
    button: {
      text: "Learn more about HMS",
      href: "/ecosystem",
    },
  },
  {
    title: "Remedius Rx",
    description:
      "A streamlined pharmacy experience, connecting patients, doctors, and pharmacies. Secure prescription sharing and management ensures accurate medication dispensing with convenient delivery options, making it easier for patients to adhere to treatment plans. Combining telemedicine and pharmacy services, Remedius transforms healthcare in Uganda, focusing on convenience, accessibility, and personalized care, empowering Ugandans to manage their health.",
    secondary: "The service is free—you only pay for your medication.",
    image: "/img/rx.png",
    button: {
      text: "Learn more about Rx",
      href: "/ecosystem",
    },
  },
  {
    title: "Remedius Live",
    description:
      "Virtual consultations with healthcare professionals, providing quality care without the need for in-person visits. Seamless prescription management, allowing users to easily access and manage their medications. Create appointments, book home/office visits, and order for Lab tests in one platform.",
    secondary: "Quality care, anywhere, anytime.",
    image: "/img/live.png",
    button: {
      text: "Learn more about Live",
      href: "/ecosystem",
    },
  },
  {
    title: "Remedius AILab",
    description:
      "We empower communities with accessible health education resources, promoting wellness, prevention, and informed decision-making for all.",
    secondary: "Empowering communities with health education.",
    image: "/img/macro-eye-iris.jpg",
    button: {
      text: "Learn more about AILab",
      href: "/ecosystem",
    },
  },
];

export default function EcoSystem() {
  return (
    <section className="bg-[#eaf7f4] py-12 px-4 min-h-[60vh] flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16">
        {features.map((feature, idx) => {
          // Special hero style for Remedius AI Lab
          if (feature.title === "Remedius AILab") {
            return (
              <div
                key={feature.title}
                className="relative flex flex-col items-center justify-center min-h-[340px] rounded-3xl bg-gradient-to-br from-[#181f2a] to-[#1a2a3a] overflow-hidden shadow-2xl px-6 py-16"
              >
                {/* Subtle grid background */}
                <div
                  className="absolute inset-0 z-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* AI Lab image as background */}
                <div
                  className="absolute inset-0 z-0 opacity-40 bg-center bg-contain bg-fixed"
                  style={{
                    backgroundImage: `url(${feature.image})`,
                    // filter: "blur(2px)",
                  }}
                />
                <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                    {feature.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 mb-4">
                    {feature.description}
                  </p>
                  <p className="text-base text-gray-400 mb-8">
                    {feature.secondary}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href={feature.button.href}
                      className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-8 py-3 rounded-full text-base font-semibold shadow-md transition-colors"
                    >
                      {feature.button.text}
                    </Link>
                    <a
                      href="#demo"
                      className="border border-gray-400/60 text-white px-8 py-3 rounded-full text-base font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="12"
                          fill="white"
                          fillOpacity="0.1"
                        />
                        <path d="M10 8l6 4-6 4V8z" fill="white" />
                      </svg>
                      Watch Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          }
          // Alternate layout direction
          const flexDir = idx % 2 === 1 ? "md:flex-row-reverse" : "";
          return (
            <div
              key={feature.title}
              className={`flex flex-col md:flex-row items-center gap-12 rounded-3xl shadow-lg bg-white/80 p-8 ${flexDir}`}
            >
              {/* Left: Text Content */}
              <div className="flex-1 flex flex-col items-start gap-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-2">
                  {feature.title}
                </h1>
                <p className="text-lg text-gray-700 mb-2">
                  {feature.description}
                </p>
                <Link
                  href={feature.button.href}
                  className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-base font-semibold shadow-md transition-colors"
                >
                  {feature.button.text}
                </Link>
              </div>
              {/* Right: Image */}
              <div className="flex-1 flex justify-center items-center">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-2">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="object-contain w-[600px] h-[400px] rounded-xl"
                    priority={idx === 0}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
