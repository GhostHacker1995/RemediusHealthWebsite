"use client";

import { motion } from "framer-motion";

export default function CollaborateSupport() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-6 overflow-hidden border-y border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-10 relative z-10 text-center">
        <div className="w-full md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-gray-900 mb-4"
          >
            SUPPORT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-700"
          >
            At Remedius AILab, your support directly fuels the future of African
            healthcare innovation. Whether you’re a donor, foundation, company,
            or individual, your contribution can drive real impact across the
            continent.
          </motion.p>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px] opacity-10 z-0" />
    </section>
  );
}
