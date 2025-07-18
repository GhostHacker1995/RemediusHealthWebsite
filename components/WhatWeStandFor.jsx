"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhatWeStandFor() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-16 bg-white">
      <h3
        className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-15"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <span className="text-[#faa11b]">Empower your health,</span> Transform
        your life <br /> Discover Remedius, a gateway to complete well-being
        with Telemedicine
      </h3>
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Content */}
        <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="200">
          <div
            className="inline-block px-4 py-1 mb-4 text-sm font-medium text-white bg-gradient-to-r from-[#faa11b] to-[#ff5e00] rounded-full"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            What we stand for
          </div>
          <h2
            className="text-4xl font-extrabold text-gray-900 mb-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Unleash Your Potential
          </h2>
          <p
            className="text-gray-600 mb-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Pioneering a healthcare revival in Uganda, Remedius is your passport
            to personalized, world-class healthcare. Founded in 2023, our
            mission is to transform healthcare access through our digital health
            platform, connecting Ugandans with top healthcare services.
            RemediusLive offers consultations, symptom checking, and
            prescription management, while RemediusRx provides seamless pharmacy
            services. Our core values are patient-centered care, innovation, and
            collaboration. By leveraging technology and partnerships, Remedius
            is committed to improving healthcare outcomes in Uganda. Join us for
            a healthier, more vibrant future.
          </p>

          <div
            className="bg-gray-50 rounded-xl p-2 sm:p-4 shadow-sm mb-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="text-sm text-gray-900 font-bold mb-2">
              Our Mission
            </div>
            {/* <h3 className="text-xl font-semibold text-gray-900 mb-4">
              
            </h3> */}
            <p className="text-gray-600 text-sm mb-4">
              To bring healthcare into the digital age, making it more
              accessible and convenient for patients and healthcare provider
            </p>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div
                className="bg-white rounded-lg p-2 sm:p-4 shadow text-center border-2 border-[#faa11b] relative overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#fff6e6] rounded-full opacity-60 z-0"></div>
                <div className="flex justify-center mb-2 relative z-10">
                  {/* Eye icon for Vision */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#faa11b"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M1.5 12s3.75-7.5 10.5-7.5S22.5 12 22.5 12 18.75 19.5 12 19.5 1.5 12 1.5 12z"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#faa11b"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 relative z-10">
                  Our Vision
                </h4>
                <p className="text-sm text-gray-600 relative z-10">
                  To be at the forefront of the digital health revolution,
                  shaping the future of healthcare through innovation.
                </p>
              </div>
              <div
                className="bg-white rounded-lg p-2 sm:p-4 shadow text-center border-2 border-[#00b386] relative overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#e6fff6] rounded-full opacity-60 z-0"></div>
                <div className="flex justify-center mb-2 relative z-10">
                  {/* Heart icon for Values */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#00b386"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21C12 21 4.5 14.36 4.5 9.75C4.5 7.12665 6.62665 5 9.25 5C10.7682 5 12.1372 5.80964 12.8571 7.01471C13.5769 5.80964 14.9459 5 16.4643 5C19.0876 5 21.2143 7.12665 21.2143 9.75C21.2143 14.36 12 21 12 21Z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 relative z-10">
                  Our Values
                </h4>
                <ul className="flex flex-col items-start gap-y-1 text-sm text-gray-600 mt-2 relative z-10 pl-4">
                  <li className="inline-flex items-center">
                    <span className="font-semibold text-[#00b386] mr-1">•</span>
                    Patient-centered care
                  </li>
                  <li className="inline-flex items-center">
                    <span className="font-semibold text-[#00b386] mr-1">•</span>
                    Innovation
                  </li>
                  <li className="inline-flex items-center">
                    <span className="font-semibold text-[#00b386] mr-1">•</span>
                    Empathy
                  </li>
                  <li className="inline-flex items-center">
                    <span className="font-semibold text-[#00b386] mr-1">•</span>
                    Collaboration
                  </li>
                  <li className="inline-flex items-center">
                    <span className="font-semibold text-[#00b386] mr-1">•</span>
                    Integrity
                  </li>
                </ul>
              </div>
            </div>

            {/* <Link
              href="/about"
              className="inline-block mt-6 text-white bg-black px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
            >
              Learn More →
            </Link> */}
          </div>
        </div>

        {/* Right Image */}
        <div
          className="lg:w-1/2 relative rounded-xl overflow-hidden flex justify-center items-center"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src="/img/about.png"
            alt="Team Meeting"
            width={500}
            height={333}
            className="rounded-xl w-full max-w-[400px] h-auto object-cover"
            priority
          />
          {/* <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:scale-110 transition">
            ▶
          </button> */}
        </div>
      </div>
    </section>
  );
}
