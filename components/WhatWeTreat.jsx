"use client";

import Image from "next/image";
import Link from "next/link";

const treatments = [
  {
    title: "Chronic Care Management",
    description:
      "We help patients manage chronic conditions like diabetes, hypertension, and heart disease via RemediusLive telemedicine and personalized care plans.",
    cta: "Book Appointment",
    image: "/img/Wetreat/chronic.jpg",
  },
  {
    title: "Common Illnesses and Injuries",
    description:
      "Get virtual care for colds, flu, minor injuries, and everyday health issues — without leaving home.",
    cta: "Book Appointment",
    image: "/img/Wetreat/commonill.jpg",
  },
  {
    title: "Mental Health Services",
    description:
      "Access therapy and counseling for anxiety, depression, stress, and more from experienced mental health professionals.",
    cta: "Book Appointment",
    image: "/img/Wetreat/mental.jpg",
  },
  {
    title: "Preventive Care and Wellness",
    description:
      "Receive guidance on healthy living, exercise, nutrition, and disease prevention strategies with a personalized wellness plan.",
    cta: "Book Appointment",
    image: "/img/Wetreat/prevent.jpg",
  },
  {
    title: "Women's Health",
    description:
      "We support women through reproductive care, menopause, and gynecological issues — across every stage of life.",
    cta: "Book Appointment",
    image: "/img/Wetreat/woman.jpg",
  },
  {
    title: "Men's Health",
    description:
      "We address men’s health concerns like prostate health, ED, and mental well-being with expert, confidential care.",
    cta: "Book Appointment",
    image: "/img/Wetreat/men.png",
  },
];

export default function WhatWeTreat() {
  return (
    <section className="bg-[#f4f8f9] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">What We Treat</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At Remedius, we offer a wide range of healthcare services to meet the
          diverse needs of our patients — delivered with compassion and
          expertise.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {treatments.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col overflow-hidden"
          >
            {/* Image Section */}
            <div className="w-full h-40 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-semibold text-[#0e6077] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <Link
                href="/appointments"
                className="mt-6 inline-block bg-[#0e6077] text-white text-sm px-4 py-2 rounded-md font-medium hover:bg-[#094b5b] transition"
              >
                {item.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {/* <div className="text-center mt-12">
        <Link
          href="/services"
          className="bg-[#0e6077] text-white font-medium px-6 py-3 rounded-md hover:bg-[#094b5b] transition"
        >
          Explore All We Treat
        </Link>
      </div> */}
    </section>
  );
}
