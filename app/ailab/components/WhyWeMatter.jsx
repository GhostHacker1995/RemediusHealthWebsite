"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, BrainCircuit } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Clinical-Driven Innovation",
    description:
      "We build AI tools that drive real outcomes at the point of care, not just prototypes.",
  },
  {
    icon: BrainCircuit,
    title: "Next-Gen AI Leadership",
    description:
      "We train Africa's future AI scientists and engineers in applied health AI.",
  },
  {
    icon: Users,
    title: "Collaborative Intelligence",
    description:
      "We bridge local expertise with global partnerships to amplify impact.",
  },
];

export default function WhyWeMatter() {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Why Remedius <span className="text-[#F9A01B]">AI</span>Lab Matters
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-600 mb-12"
        >
          Africa has the world’s youngest population, a growing burden of
          disease, and an evolving digital landscape. Yet we lack the homegrown
          health technologies and skilled personnel needed to bridge this gap.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-left hover:shadow-xl hover:border-indigo-400 transition duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 text-white mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
