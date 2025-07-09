"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaComments,
  FaVideo,
  FaPhone,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";

export default function ConsultHero() {
  return (
    <section className="bg-white py-16 px-6 pt-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-6">
        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h4 className="text-sm font-medium text-orange-600">
            Remote care with RemediusLive
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Health <br />{" "}
            <span className="text-cyan-800">Our Priority!</span>
          </h1>
          <p className="text-gray-600 max-w-md">
            We aim to connect you to the best health care, anytime anywhere
          </p>
          <div className="flex flex-col gap-3">
            <button className="bg-white border border-gray-300 hover:border-cyan-800 text-cyan-800 font-medium py-2 px-6 rounded-lg shadow-sm transition w-65 flex items-center justify-center gap-2">
              <FaCalendarAlt className="text-sm" />
              Book Appointment today!
            </button>
            <button className="bg-white border border-gray-300 hover:border-cyan-800 text-cyan-800 font-medium py-2 px-6 rounded-lg shadow-sm transition w-65 flex items-center justify-center gap-2">
              <FaHome className="text-sm" />
              Book a home visit.
            </button>
          </div>

          <div className="flex gap-4 mt-4">
            <Image
              src="/img/consult/getitongoole-removebg-preview.png"
              alt="Get it on Google Play"
              width={150}
              height={45}
            />
            <Image
              src="/img/consult/getitonappstore-removebg-preview.png"
              alt="Download on the App Store"
              width={150}
              height={45}
            />
          </div>
        </motion.div>

        {/* Image Area */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center items-center w-full"
        >
          <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] relative">
            {/* Circular Image */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
              <Image
                src="/img/consult/Chirs.png"
                alt="Doctor"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Icons curved around the bottom of the circle */}
            <div className="absolute inset-0">
              {/* Left icon */}
              <div className="absolute bottom-2 left-14 md:left-20 bg-orange-400 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-orange-500 transition-all hover:scale-110">
                <FaComments className="text-lg md:text-xl" />
              </div>
              {/* Center icon */}
              <div className="absolute -bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-400 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-orange-500 transition-all hover:scale-110">
                <FaVideo className="text-lg md:text-xl" />
              </div>
              {/* Right icon */}
              <div className="absolute bottom-2 right-14 md:right-20 bg-orange-400 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-orange-500 transition-all hover:scale-110">
                <FaPhone className="text-lg md:text-xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
