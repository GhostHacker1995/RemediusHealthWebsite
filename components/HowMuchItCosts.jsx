"use client";

import Image from "next/image";

const steps = [
  {
    title: "Single Consultation",
    description: "UGX 15,000 Virtual/physical consultations",
    icon: "/img/oneonone-01.png",
    badge: "01",
    badgeColor: "bg-[#0e6077]",
  },
  {
    title: "Chronic Care Package Subscription",
    description:
      "UGX 600,000 You get, Glucometer, BP Cuff, Unlimited virtual consultations Wellness examinations/mo Customized Health tips in our app e.t.c.",
    icon: "/img/chronicc-01.png",
    badge: "02",
    badgeColor: "bg-[#ea580c]",
  },
  {
    title: "Home/Office Visits",
    description: "UGX 60,000 per visit Additional costs of other medical",
    icon: "/img/homevisit.jpg",
    badge: "03",
    badgeColor: "bg-[#0e6077]",
  },
  {
    title: "Therapy Sessions",
    description: "UGX 50,000 per session",
    icon: "/img/therapy-01.png",
    badge: "04",
    badgeColor: "bg-[#ea580c]",
  },
];

export default function HowMuchItCosts() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h3 className="text-sm text-[#0e6077] font-semibold uppercase mb-2 tracking-wide">
          Work Process
        </h3>
        <h2 className="text-3xl font-bold text-gray-900 mb-14">
          How Much It Costs
        </h2>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 relative"
            >
              {/* Circular Image */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#0e6077] mb-4 shadow-md">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute -top-2 -right-2 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full ${step.badgeColor} shadow-lg`}
                >
                  {step.badge}
                </div>
              </div>

              {/* SVG Arrow with Alternating Curve - now outside and centered with image */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute right-[-60px] top-1/4 -translate-y-1/2 z-10">
                  <svg
                    width="120"
                    height="60"
                    viewBox="0 0 80 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <marker
                        id={`arrowhead-${index}`}
                        markerWidth="8"
                        markerHeight="8"
                        refX="7"
                        refY="4"
                        orient="auto"
                      >
                        <polygon points="0 0, 8 4, 0 8" fill="#ddd" />
                      </marker>
                    </defs>
                    <path
                      d={
                        index % 2 === 0
                          ? "M0 40 C30 20, 50 20, 75 40" // Upward arc
                          : "M0 20 C30 40, 50 40, 75 20" // Downward arc
                      }
                      stroke="#ddd"
                      strokeWidth="2"
                      fill="none"
                      markerEnd={`url(#arrowhead-${index})`}
                    />
                  </svg>
                </div>
              )}

              {/* Text */}
              <h4 className="text-lg font-semibold text-[#0e6077] mb-2">
                {step.title}
              </h4>
              <p className="text-sm text-gray-600 max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
