"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  {
    title: "RemediusLive",
    description: "Bringing remote live health consultations to you.",
    icon: "/img/hero/icons-01.png",
  },
  {
    title: "RemediusRx",
    description: "Your one-stop platform for pharmacy services.",
    icon: "/img/hero/icons-02.png",
  },
  {
    title: "RemediusHMS",
    description: "Elevate healthcare delivery using our EMR system.",
    icon: "/img/hero/icons-03.png",
  },
  {
    title: "RemediusAILab",
    description: "Building Africa’s next intelligent health systems.",
    icon: "/img/hero/icons-04.png",
  },
];

export default function HeroServicesSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="bg-[#dcf3fa] py-20 md:px-4 px-1 pt-40">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 hero-heading">
          HealthCare that follows you <br /> wherever you go
        </h2>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="bg-white shadow rounded-full md:p-3 p-2 hover:bg-gray-100"
          >
            <FaChevronLeft className="text-[#115b78]" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 shadow-md transition duration-300 ${
                  idx === current ? "block" : "hidden md:block"
                }`}
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#115b78] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {service.description}
                </p>
                <button className="bg-[#115b78] text-white py-2 px-4 rounded-full hover:bg-[#10485e] transition">
                  View Details
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-white shadow rounded-full md:p-3 p-2 hover:bg-gray-100"
          >
            <FaChevronRight className="text-[#115b78]" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {services.map((_, idx) => (
            <span
              key={idx}
              className={`block w-8 h-3 rounded-full transition duration-300 cursor-pointer ${
                idx === current ? "bg-[#115b78]" : "bg-[#99bfcf]"
              }`}
              onClick={() => setCurrent(idx)}
            ></span>
          ))}
        </div>

        <button
          className="mt-8 bg-[#115b78] text-white py-2 px-6 rounded-full hover:bg-[#10485e] transition"
          onClick={() => (window.location.href = "/about")}
        >
          Read More
        </button>
      </div>
    </section>
  );
}
