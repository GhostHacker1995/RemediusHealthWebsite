"use client";

import { motion } from "framer-motion";

export default function CallToActionSection() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
        >
          GET INVOLVED
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 mb-10 max-w-xl mx-auto"
        >
          LEARN: Join the Bootcamp and start building your career in health AI.
          Register below to get started.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white shadow-xl rounded-xl p-8 max-w-2xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Your Background (e.g., Med Student, Data Scientist)"
            className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            rows="4"
            placeholder="Tell us why you're interested"
            className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#0e6077] hover:bg-[#094b5b] text-white font-semibold py-3 rounded-md transition"
          >
            Register Now
          </button>
        </motion.form>
      </div>
    </section>
  );
}
