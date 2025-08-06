"use client";

import { useEffect, useState } from "react";
import { howMuchDoesItCost } from "@/app/services";

export default function HowMuchItCosts() {
  const [steps, setSteps] = useState([]);

  const fetchSteps = async () => {
    try {
      const data = await howMuchDoesItCost();
      const formattedSteps = data.map((item) => ({
        title: item.itemName,
        description: item.priceAndDescription.html.replace(/<[^>]*>/g, ""), // Remove HTML tags
        icon: item.itemIcon.url,
        badge: item.id.slice(-2), // Extract last two characters of ID as badge
        badgeColor: "bg-[#0e6077]", // Default badge color
      }));
      setSteps(formattedSteps);
    } catch (error) {
      console.error("Error fetching steps:", error);
    }
  };

  useEffect(() => {
    fetchSteps();
  }, []);

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
                <img
                  src={step.icon}
                  alt={step.title}
                  className="object-cover w-full h-full rounded-full"
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
