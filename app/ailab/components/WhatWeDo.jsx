"use client";

import { Cpu, GraduationCap } from "lucide-react";
import Image from "next/image";

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
  return (
    <section className="relative text-white py-24 px-4 overflow-hidden bg-[#04080f] flex flex-col items-center">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/img/ailab/section-bg.png"
          alt="Background"
          fill
          className="w-full h-full object-cover opacity-20 pointer-events-none"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          What We Do
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-center">
          Empowering healthcare with AI innovation, training, and real-world
          solutions for Africa.
        </p>
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group space-y-6 p-8 rounded-3xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20 flex flex-col items-center transition-transform hover:scale-105 hover:bg-gradient-to-br from-purple-600/30 to-pink-500/20"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shadow-lg mb-4">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold leading-snug text-center">
              {service.title}
            </h3>
            <p className="text-base text-gray-200 leading-relaxed text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
