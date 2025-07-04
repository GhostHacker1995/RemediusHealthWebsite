"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const team = [
  {
    name: "Dr. Ahabwe Rachel",
    roles: ["OB/GYN", "Preventive Care"],
    image: "/img/team/Dr. Ahabwe Rachel.JPG",
  },
  {
    name: "Dr. Ayikoru",
    roles: ["Pediatrics", "Family Medicine"],
    image: "/img/team/Dr. Ayikoru.JPG",
  },
  {
    name: "Dr. Soro",
    roles: ["Cardiology", "Chronic Care"],
    image: "/img/team/Dr. Soro.JPG",
  },
  {
    name: "Dr. Tayebwa Chrispus",
    roles: ["Mental Health", "Telemedicine"],
    image: "/img/team/Dr. Tayebwa Chrispus.JPG",
  },
  {
    name: "Dr. Twanza",
    roles: ["Nutrition", "Community Care"],
    image: "/img/team/Dr. Twanza.JPG",
  },
  {
    name: "Dr. Mwebembezi",
    roles: ["General Medicine"],
    image: "/img/team/Dr.Mwebembezi.JPG",
  },
];

export default function OurTeam() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef();

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? team.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === team.length - 1 ? 0 : prev + 1));
  };

  // Automated slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev === team.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="bg-[#f8f6f1] px-2 py-10 font-serif text-[#111]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-2 items-center">
        {/* Text Section */}
        <div className="pr-2 lg:pr-2">
          <h2 className="text-2xl lg:text-3xl font-light leading-tight tracking-tight">
            MEET <span className="italic text-gray-400">OUR</span>{" "}
            <span className="font-bold">TEAM</span>
          </h2>
          <p className="mt-2 text-xs text-gray-700 max-w-xs">
            When you need fast and effective medical services, you can trust our
            team at Remedius Health.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative w-full max-w-[1100px] h-[650px] overflow-x-hidden flex items-center justify-center  mx-auto rounded-xl">
          {Array.from({ length: 4 }).map((_, relIdx) => {
            // relIdx: 0 = main, 1 = next, 2 = next+1, 3 = next+2
            const imgIdx = (index + relIdx) % team.length;
            let className =
              "absolute transition-all duration-700 overflow-hidden rounded-2xl border-2 border-white left-1/2 -translate-x-1/2 cursor-pointer";
            if (relIdx === 0) {
              className += " w-full max-w-[520px] h-[620px] z-30 scale-100";
            } else if (relIdx === 1) {
              className +=
                " w-[340px] h-[420px] z-20 scale-95 translate-x-[260px] opacity-80 blur-[1px]";
            } else if (relIdx === 2) {
              className +=
                " w-[220px] h-[320px] z-10 scale-90 translate-x-[440px] opacity-60 blur-[2px]";
            } else if (relIdx === 3) {
              className +=
                " w-[140px] h-[200px] z-0 scale-85 translate-x-[570px] opacity-40 blur-[3px]";
            }
            return (
              <div
                key={imgIdx}
                className={className}
                onClick={(e) => {
                  // Prevent click on main image from interfering with arrow buttons
                  if (relIdx !== 0) setIndex(imgIdx);
                }}
                tabIndex={0}
                aria-label={`Show ${team[imgIdx].name}`}
                role="button"
                style={{ outline: "none" }}
              >
                <Image
                  src={team[imgIdx].image}
                  alt={team[imgIdx].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 95vw, 520px"
                  priority={relIdx === 0}
                />
                {relIdx === 0 && (
                  <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="w-12 h-12 bg-white/80 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200 transition pointer-events-auto"
                      aria-label="Previous"
                      style={{ left: 0 }}
                    >
                      <ArrowLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="w-12 h-12 bg-white/80 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200 transition pointer-events-auto"
                      aria-label="Next"
                      style={{ right: 0 }}
                    >
                      <ArrowRight className="w-6 h-6 text-gray-700" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}

          {/* Info Card - always visible, not covered */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 p-6 rounded-xl max-w-[95vw] w-[420px] border border-gray-200 z-40 flex flex-col items-center">
            <h3 className="font-bold text-2xl text-gray-900 drop-shadow-sm text-center">
              {team[index].name}
            </h3>
            <div className="flex flex-wrap gap-2 mt-3 justify-center">
              {team[index].roles.map((role, i) => (
                <span
                  key={i}
                  className="text-xs border border-gray-300 bg-gray-50 px-3 py-1 rounded-full font-medium text-gray-700"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-8 right-8 text-base font-semibold text-gray-600 bg-white/80 px-4 py-2 rounded-full border border-gray-200 z-50">
            {index + 1} / {team.length}
          </div>
        </div>
      </div>
    </section>
  );
}
