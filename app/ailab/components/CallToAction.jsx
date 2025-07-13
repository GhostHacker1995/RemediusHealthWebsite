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
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Country & City"
              className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <select
            className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Current Profession</option>
            <option value="Medical Doctor">Medical Doctor</option>
            <option value="Nurse">Nurse</option>
            <option value="Midwife">Midwife</option>
            <option value="Specialist">Specialist</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Student">Student</option>
          </select>

          <input
            type="text"
            placeholder="Organization / Institution (optional)"
            className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <fieldset className="space-y-2">
            <legend className="text-gray-950">Area of Interest</legend>
            <div className="flex flex-wrap text-gray-950 gap-4">
              <label className="flex items-center text-gray-950 space-x-2">
                <input type="checkbox" value="Python for Health Data" />
                <span>Python for Health Data</span>
              </label>
              <label className="flex items-center text-gray-950 space-x-2">
                <input
                  type="checkbox"
                  value="Machine Learning & Deep Learning"
                />
                <span>Machine Learning & Deep Learning</span>
              </label>
              <label className="flex items-center text-gray-950 space-x-2">
                <input type="checkbox" value="Medical AI" />
                <span>Medical AI</span>
              </label>
              <label className="flex items-center text-gray-950 space-x-2">
                <input type="checkbox" value="Data Visualization" />
                <span>Data Visualization</span>
              </label>
              <label className="flex items-center text-gray-950 space-x-2">
                <input type="checkbox" value="Other" />
                <span>Other</span>
              </label>
              <input
                type="text"
                placeholder="Specify Other"
                className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="text-gray-950">
              Do you have any prior experience in coding or data science?
            </legend>
            <div className="flex items-center space-x-4">
              <label className="flex items-center text-gray-950 space-x-2">
                <input type="radio" name="experience" value="Yes" />
                <span>Yes</span>
              </label>
              <label className="flex items-center text-gray-950 space-x-2">
                <input type="radio" name="experience" value="No" />
                <span>No</span>
              </label>
            </div>
            <textarea
              rows="4"
              placeholder="Briefly describe your experience (optional)"
              className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </fieldset>

          <textarea
            rows="4"
            placeholder="Why do you want to join this bootcamp? (2–4 sentences)"
            className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <select
            className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">How did you hear about Remedius AILab?</option>
            <option value="Social media">Social media</option>
            <option value="Friend/relative">Friend/relative</option>
            <option value="Alumni">Alumni</option>
            <option value="Remedius Website">Remedius Website</option>
            <option value="Google">Google</option>
            <option value="Other">Other</option>
          </select>

          <label className="flex items-center text-gray-950 space-x-2">
            <input type="checkbox" required />
            <span>
              I agree to be contacted and receive updates from Remedius AILab.
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-[#0e6077] hover:bg-[#094b5b] text-white font-semibold py-3 rounded-md transition"
          >
            APPLY TO JOIN BOOTCAMP
          </button>
        </motion.form>
      </div>
    </section>
  );
}
