"use client";

import { motion } from "framer-motion";
import { FaMobileAlt, FaTabletAlt, FaDesktop, FaVideo } from "react-icons/fa";

export default function BookAppointmentSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Left Icons */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6 w-[200px]"
        >
          <div className="bg-white shadow-md p-4 rounded-full flex items-center justify-center">
            <FaMobileAlt className="text-2xl text-[#004d66]" />
          </div>
          <div className="bg-white shadow-md p-4 rounded-full flex items-center justify-center">
            <FaTabletAlt className="text-2xl text-[#004d66]" />
          </div>
          <div className="bg-white shadow-md p-4 rounded-full flex items-center justify-center">
            <FaDesktop className="text-2xl text-[#004d66]" />
          </div>
          <div className="bg-white shadow-md p-4 rounded-full flex items-center justify-center">
            <FaVideo className="text-2xl text-[#004d66]" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#004d66]">
            Book <span className="text-orange-500">online</span> appointments
          </h2>
          <p className="text-gray-700 mt-4 max-w-md">
            Book an online appointment, 5 minute maximum waiting time, talk to a
            doctor through a video call or voice call within the RemediusLive
            Application. All this in the comfort of your home.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://live.remediushealth.africa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#004d66] text-white px-6 py-2 rounded-full hover:bg-[#00364d] transition inline-block text-center"
            >
              Book Now
            </a>
            <a
              href="https://live.remediushealth.africa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#004d66] text-white px-6 py-2 rounded-full hover:bg-[#00364d] transition inline-block text-center"
            >
              Urgent Care
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
