"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const coreValues = [
  {
    title: "Innovation",
    description: "We think beyond limits to solve real problems.",
  },
  {
    title: "Inclusivity",
    description: "We believe in democratizing access to health and tech.",
  },
  {
    title: "Impact",
    description: "Everything we do is designed to improve lives.",
  },
  {
    title: "Integrity",
    description: "We value transparency, ethics, and open collaboration.",
  },
];

export default function AboutUsSection() {
  return (
    <section className="relative bg-gray-50 text-gray-900 py-24 px-6 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/img/bg-grid.svg')] bg-cover bg-center z-0" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 inline-block bg-clip-text text-transparent"
        >
          About Remedius AILab
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-3xl text-gray-700 mb-0"
          >
            Remedius AILab was born from the urgent need to bridge Africa’s
            healthcare and technology divide. As part of the broader Remedius
            health ecosystem, AILab connects data scientists, medical
            professionals, researchers, and technologists with one mission: to
            drive innovation through intelligence.
            <br />
            <br />
            We develop AI-powered tools, build local capacity, and push the
            boundaries of what technology can do for health particularly in
            low-resource settings.
          </motion.p>
          <div className="relative flex items-center justify-center">
            <div className="animated-gradient-border p-[3px] rounded-2xl shadow-lg">
              <div className="bg-white rounded-2xl overflow-hidden">
                <img
                  src="/img/ailab/ai-chip.png"
                  alt="Remedius AILab Hero"
                  className="w-full h-full object-cover rounded-2xl mix-blend-multiply shadow-2xl"
                  style={{
                    filter:
                      "drop-shadow(0 8px 32px rgba(80, 80, 200, 0.25)) blur(0.5px) saturate(1.2)",
                    maxWidth: "22rem",
                    minWidth: "180px",
                    aspectRatio: "1/1",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Vision
            </h3>
            <p className="text-gray-600">
              To become Africa’s leading hub for healthcare AI innovation,
              education, and research.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Mission
            </h3>
            <p className="text-gray-600">
              To equip African health professionals and technologists with the
              skills and tools to create transformative AI solutions that
              improve health outcomes across the continent.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex flex-col gap-3 border border-gray-200 hover:border-purple-400 transition"
              >
                <CheckCircle className="w-6 h-6 text-purple-400" />
                <h4 className="font-medium text-gray-900">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
