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
  { src: "/img/Logos/SANAA BRANDS.svg", url: "http://sanaa.co/" },
  { src: "/img/Logos/YSAU.png", url: "https://hivecolab.org/ysau" },
];

export default function PartnerCarousel() {
  const containerRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current && !isHovered.current) {
        containerRef.current.scrollLeft += 1;
        if (
          containerRef.current.scrollLeft + containerRef.current.offsetWidth >=
          containerRef.current.scrollWidth
        ) {
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
      <h3 className="text-center font-extrabold text-3xl md:text-4xl mb-8 tracking-tight drop-shadow-sm bg-gradient-to-r from-[#0A3A60] via-[#00B2A9] to-[#6DD5ED] bg-clip-text text-transparent animate-gradient-x">
        As seen on
      </h3>
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-12 scrollbar-hide px-4 transition-all [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {logos.map((logo, idx) => (
          <a
            key={idx}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center justify-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
    </section>
  );
}
