"use client";

import { Cpu, GraduationCap } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: <Cpu size={40} className="text-white group-hover:text-gradient" />,
    title: "AI system development",
    description:
      "We build AI tools that power smarter diagnostics, triage, risk assessment, and healthcare management. Whether it's maternal health, infectious disease prediction, or patient record intelligence, our systems are built for the African context. An experimentation and prototyping space for rapid design, testing, and validation of AI tools for health.",
  },
  {
    icon: (
      <GraduationCap
        size={40}
        className="text-white group-hover:text-gradient"
      />
    ),
    title: "Data science & AI training",
    description:
      "We run immersive bootcamps in Python for Health Data, Machine Learning & Deep Learning, Medical AI, and Data Visualization & Analytics. These programs are specifically designed for health professionals, medical students, tech enthusiasts, and researchers who are looking to enhance their skills and knowledge at the intersection of healthcare and technology.",
  },
];

export default function WhatWeDo() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current && entry.isIntersecting) {
            setIsVisible(true);
          }

          // Check for card animations
          cardRefs.current.forEach((cardRef, index) => {
            if (entry.target === cardRef && entry.isIntersecting) {
              setTimeout(() => {
                setCardsVisible((prev) => [...prev, index]);
              }, index * 200); // Stagger the animations
            }
          });
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardRefs.current.forEach((cardRef) => {
      if (cardRef) observer.observe(cardRef);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardRefs.current.forEach((cardRef) => {
        if (cardRef) observer.unobserve(cardRef);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-gray-800 py-24 px-4 overflow-hidden bg-gradient-to-b from-black via-gray-800 to-gray-50 flex flex-col items-center"
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/img/ailab/section-bg.png"
          alt="Background"
          fill
          className="w-full h-full object-cover opacity-15 pointer-events-none"
        />
      </div>

      <div
        className={`relative z-10 flex flex-col items-center mb-16 transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          What We Do
        </h2>
        <p className="text-lg md:text-xl text-white max-w-2xl text-center">
          Empowering healthcare with AI innovation, training, and real-world
          solutions for Africa.
        </p>
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        {services.map((service, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className={`group space-y-6 p-8 rounded-3xl bg-white/90 backdrop-blur-md shadow-xl border border-gray-200 flex flex-col items-center transition-all duration-700 ease-out hover:scale-105 hover:bg-gradient-to-br from-purple-600/20 to-pink-500/10 ${
              cardsVisible.includes(idx)
                ? "opacity-100 transform translate-y-0 scale-100"
                : "opacity-0 transform translate-y-12 scale-95"
            }`}
          >
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shadow-lg mb-4 transition-all duration-500 ease-out ${
                cardsVisible.includes(idx)
                  ? "transform rotate-0 scale-100"
                  : "transform rotate-12 scale-90"
              }`}
            >
              {service.icon}
            </div>
            <h3
              className={`text-2xl font-bold leading-snug text-center text-gray-800 transition-all duration-600 ease-out ${
                cardsVisible.includes(idx)
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4"
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`text-base text-gray-600 leading-relaxed text-center transition-all duration-700 ease-out ${
                cardsVisible.includes(idx)
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-6"
              }`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
