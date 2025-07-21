"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  { src: "/img/Logos/AIC.png", url: "https://www.africanimpact.ca/" },
  { src: "/img/Logos/DROP OFF LOGO.svg", url: "https://dropoffcouriers.com/" },
  { src: "/img/Logos/H2I.png", url: "https://h2i.utoronto.ca/" },
  {
    src: "/img/Logos/Hive Colab Logo - 2024 small.png",
    url: "https://hivecolab.org/",
  },
  { src: "/img/Logos/ICUBE-250x175px.png", url: "https://icubeutm.ca/" },
  { src: "/img/Logos/NobellumLogo.png", url: "https://www.nobellum.com/" },
  // { src: "/img/Logos/SANAA BRANDS.svg", url: "http://sanaa.co/" },
  { src: "/img/Logos/YSAU.png", url: "https://hivecolab.org/ysau" },
];

export default function PartnerCarousel() {
  const containerRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current && !isHovered.current) {
        const { scrollLeft, offsetWidth, scrollWidth } = containerRef.current;
        containerRef.current.scrollLeft = scrollLeft + 1;

        // Create a seamless loop by appending the first child to the end
        if (scrollLeft + offsetWidth >= scrollWidth) {
          containerRef.current.scrollLeft = 0;
        }
      }
    }, 30); // control scroll speed

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => {
    isHovered.current = true;
  };
  const handleMouseLeave = () => {
    isHovered.current = false;
  };

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center font-extrabold text-3xl md:text-4xl mb-8 tracking-tight drop-shadow-sm bg-gradient-to-r from-[#0A3A60] via-[#00B2A9] to-[#6DD5ED] bg-clip-text text-transparent animate-gradient-x">
          Our Partners and Supporters
        </h3>
        <div
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4"
        >
          {logos.map((logo, idx) => (
            <a
              key={idx}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              style={{ height: 60 }}
            >
              <div className="grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                <Image
                  src={logo.src}
                  alt={`Partner ${idx + 1}`}
                  width={140}
                  height={60}
                  className="object-contain h-[60px]"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
