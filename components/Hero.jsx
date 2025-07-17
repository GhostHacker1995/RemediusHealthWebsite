"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    desc: "Bringing healthcare at your fingertips",
    icon: "/img/Logos/RemediusLiveLogo.svg",
    link: "/services/remediuslive",
  },
  {
    desc: "More than just pharmacies, your pharmacies",
    icon: "/img/Logos/RemediusRxLogo.svg",
    link: "/services/remediusrx",
  },
  {
    desc: "Enhance efficiency, elevate patient care with an EMR.",
    icon: "/img/Logos/remediusHMSCURRENT.svg",
    link: "/services/emr",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  // Auto-scroll effect
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Calculate visible items (wrap around)
  // Instead of slicing, render all cards in a row and animate translateX
  const getTranslateX = () => {
    // Each card is 18rem (w-72) + 1.5rem (gap-6) = 19.5rem per card
    // But gap is not added after last card, so we use only card width for translation
    return `-${currentIndex * 19.5}rem`;
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section className="relative bg-blue-50 overflow-hidden pt-35 pb-20">
      {/* Background decorative image (placeholder or actual) */}
      <div className="absolute inset-0">
        <Image
          src="/img/medicine.png"
          alt="Background decoration"
          fill
          className="object-contain opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h1
          className="text-4xl font-bold text-gray-900 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          HealthCare that follows you <br />
          wherever you go
        </h1>

        <div
          className="relative flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Left arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 p-2 rounded-full text-gray-950 font-black bg-white shadow hover:bg-gray-100 z-20"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            &#8592;
          </button>

          {/* Service Cards (animated row) */}
          <div
            className="overflow-hidden w-[900px]"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            {" "}
            {/* 3*288px = 864px, a bit more for gap */}
            <div
              className="flex gap-6 transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${getTranslateX()})` }}
            >
              {services.concat(services).map((service, index) => (
                // Duplicate array for infinite effect if needed
                <div
                  key={index}
                  className="w-72 bg-white rounded-xl shadow-md p-6 flex-shrink-0 transition-all duration-500"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={service.icon}
                      alt={`Service ${index % services.length}`}
                      width={96}
                      height={96}
                    />
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">{service.desc}</p>
                  <Link
                    href={service.link}
                    className="inline-block px-4 py-2 rounded-full text-sm text-white transition-colors duration-300"
                    style={{ backgroundColor: "#145c78" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#10485e")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#145c78")
                    }
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 p-2 rounded-full text-gray-950 font-black bg-white shadow hover:bg-gray-100 z-20"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            &#8594;
          </button>
        </div>

        {/* Bottom indicators */}
        <div
          className="mt-6 flex justify-center gap-2"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-3 w-6 rounded-full transition-all duration-300`}
              style={{
                borderRadius: "8px",
                backgroundColor: idx === currentIndex ? "#145c78" : "#b3d3df",
              }}
            />
          ))}
        </div>

        {/* See all button */}
        <Link
          href="/services"
          className="mt-10 inline-block px-6 py-3 rounded-full font-medium text-white transition-colors duration-300"
          style={{ backgroundColor: "#145c78" }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#10485e")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#145c78")
          }
          data-aos="fade-up"
          data-aos-delay="700"
        >
          See all services
        </Link>
      </div>
    </section>
  );
}
