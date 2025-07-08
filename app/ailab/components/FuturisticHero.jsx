"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FuturisticHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-black overflow-hidden text-white flex items-center justify-center px-4 py-24">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute top-1/4 left-[10%] w-40 h-40 animate-spin-slow"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          <Image
            src="/img/ailab/circle-left.png"
            alt="background ring"
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-[8%] w-32 h-32 animate-spin-slow"
          animate={{ rotate: [360, 0] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          <Image
            src="/img/ailab/circle-right.png"
            alt="background ring"
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-[5%] w-84 h-84 animate-pulse"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Image
            src="/img/ailab/circle-bottom.png"
            alt="background ring"
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400">
            Remedius
          </span>{" "}
          <span className="text-[#F9A01B]"> AI</span>Lab
        </h1>
        <p className="mt-6 text-gray-300 text-base md:text-lg">
          Remedius AILab is the innovation branch of Remedius, focused on
          applying Artificial Intelligence (AI), Machine Learning (ML), and Data
          Science to solve Africa’s healthcare challenges. We are not just
          training professionals we're building intelligent health systems.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-6 py-2 rounded-md text-sm hover:bg-gray-200 transition">
            Join us today →
          </button>
          {/* <button className="border border-white text-white px-6 py-2 rounded-md text-sm hover:bg-white hover:text-black transition">
            Build AI →
          </button> */}
        </div>
      </div>
    </section>
  );
}
