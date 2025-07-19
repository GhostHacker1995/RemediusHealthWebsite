"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function JobApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form:", form);
    alert("Application submitted successfully!");
    // Integrate with backend or form handling service here.
  };

  return (
    <>
      <section className="bg-gradient-to-b from-[#faa11b] to-white py-16 px-6 min-h-screen pt-40">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-lg border border-[#0e6077]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold mb-8 text-[#0e6077] text-center"
          >
            Join Our Team
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#0e6077] font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full border text-gray-950 border-[#0e6077] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#faa11b]"
              />
            </div>

            <div>
              <label className="block text-[#0e6077] font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full border text-gray-950 border-[#0e6077] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#faa11b]"
              />
            </div>

            <div>
              <label className="block text-[#0e6077] font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full border text-gray-950 border-[#0e6077] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#faa11b]"
              />
            </div>

            <div>
              <label className="block text-[#0e6077] font-semibold mb-2">
                Upload Resume (PDF or DOC)
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                placeholder="Upload your resume"
                className="w-full border text-gray-950 border-[#0e6077] px-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#faa11b]"
              />
            </div>

            <div>
              <label className="block text-[#0e6077] font-semibold mb-2">
                Cover Message (Optional)
              </label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us why you're a great fit..."
                className="w-full border text-gray-950 border-[#0e6077] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#faa11b]"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#0e6077] text-white font-bold px-8 py-3 rounded-full hover:bg-[#faa11b] transition duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
