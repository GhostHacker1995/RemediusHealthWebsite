"use client";

import Link from "next/link";
import { whatWeTreat } from "@/app/services";
import { useEffect, useState } from "react";

export default function WhatWeTreat() {
  const [treatment, setTreatment] = useState([]);

  const fetchTreatments = async () => {
    try {
      const response = await whatWeTreat();
      setTreatment(response);
    } catch (error) {
      console.error("Error fetching treatments:", error);
    }
  };

  useEffect(() => {
    fetchTreatments();
  }, []);

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
        {treatment.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col overflow-hidden"
          >
            {/* Image Section */}
            <div className="w-full h-40 relative">
              <img
                src={item.itemImage.url}
                alt={item.itemTitle}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text Section */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-semibold text-[#0e6077] mb-3">
                  {item.itemTitle}
                </h3>
                <div
                  className="text-sm text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: item.itemDescription.html,
                  }}
                ></div>
              </div>
              <Link
                href="https://live.remediusmobilehealth.africa/"
                className="mt-6 inline-block bg-[#0e6077] text-white text-center text-sm px-4 py-2 rounded-md font-medium hover:bg-[#094b5b] transition"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
