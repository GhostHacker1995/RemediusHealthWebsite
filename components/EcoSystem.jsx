"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: "Remedius Live",
    description:
      "Virtual consultations with healthcare professionals, providing quality care without the need for in-person visits. Seamless prescription management, allowing users to easily access and manage their medications. Create appointments, book home/office visits, and order for Lab tests in one platform.",
    secondary: "Quality care, anywhere, anytime.",
    image: "/img/live.png",
    button: {
      text: "Learn more about Live",
      href: "/consult",
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
      href: "/pharmacy",
    },
  },
  {
    title: "Remedius HMS",
    description:
      "Remedius' Hospital Management System manages hospitals or facilities, covering all essential hospital functions. Remedius HMS allows healthcare workers to manage patient data, vitals, lab tests, diagnostics, prescriptions, birth and death reports, pharmacy info, and drug inventory. It generates required reports and follows a patient's flow through clinical processes, capturing all details from arrival to departure.",
    secondary: "Comprehensive hospital management for better care.",
    image: "/img/hms.png",
    button: {
      text: "Learn more about HMS",
      href: "/remediushms",
    },
  },
  {
    title: "Remedius AILab",
    description:
      "Remedius AILab is the innovation branch of Remedius, focused on applying Artificial Intelligence (AI), Machine Learning (ML), and Data Science to solve Africa’s healthcare challenges.",
    secondary:
      "We are not just training professionals we're building intelligent health systems",
    image: "/img/macro-eye-iris.jpg",
    button: {
      text: "Learn more about AILab",
      href: "/ailab",
    },
  },
];

export default function EcoSystem() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#eaf7f4] to-[#cfe9e6] py-16 px-6 min-h-[70vh] flex flex-col items-center justify-center">
      <span className="inline-block bg-[#f59e0b] text-white uppercase py-1 px-3 rounded-full text-xs font-semibold mb-3">
        Our Services
      </span>
      <h1 className="text-5xl font-extrabold text-gray-800 mb-12 tracking-wide text-center">
        The Remedius Eco System
      </h1>
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-20">
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
                  <h2 className="text-4xl md:text-2xl font-bold text-[#fff]">
                    {feature.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-200 mb-4">
                    {feature.description}
                  </p>
                  <p className="text-base text-gray-400 mb-8">
                    {feature.secondary}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href={feature.button.href}
                      className="bg-[#f59f0a] hover:bg-[#f59f0b] text-white px-8 py-3 rounded-full text-base font-semibold shadow-md transition-colors"
                    >
                      {feature.button.text}
                    </Link>
                    <a
                      href="https://www.youtube.com/@RemediusMobileHealth"
                      target="_blank"
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
                      Watch Demos
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
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Left: Text Content */}
              <div
                className="flex-1 flex flex-col items-start gap-6"
                data-aos="fade-right"
                data-aos-delay={idx * 100 + 200}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-2">
                  {feature.title}
                </h2>
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
              <div
                className="flex-1 flex justify-center items-center"
                data-aos="fade-left"
                data-aos-delay={idx * 100 + 400}
              >
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
