"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CallToActionSection() {
  // State for all fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCity, setCountryCity] = useState("");
  const [profession, setProfession] = useState("");
  const [organization, setOrganization] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState([]);
  const [specifyOther, setSpecifyOther] = useState("");
  const [experience, setExperience] = useState("");
  const [experienceDescription, setExperienceDescription] = useState("");
  const [motivation, setMotivation] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [contactAgreement, setContactAgreement] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Checkbox handler for areaOfInterest
  const handleAreaOfInterest = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setAreaOfInterest((prev) => [...prev, value]);
    } else {
      setAreaOfInterest((prev) => prev.filter((v) => v !== value));
    }
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    // Compose payload
    const payload = {
      fullName,
      email,
      phone,
      countryCity,
      profession,
      organization,
      areaOfInterest: specifyOther
        ? [...areaOfInterest, specifyOther]
        : areaOfInterest,
      experience,
      experienceDescription,
      motivation,
      referralSource,
      contactAgreement,
    };
    try {
      const res = await fetch(
        "https://remedius-backend.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setSuccess("Your application was submitted successfully!");
        toast.success("Your application was submitted successfully!", {
          position: "top-center",
          autoClose: 4000,
        });
        setFullName("");
        setEmail("");
        setPhone("");
        setCountryCity("");
        setProfession("");
        setOrganization("");
        setAreaOfInterest([]);
        setSpecifyOther("");
        setExperience("");
        setExperienceDescription("");
        setMotivation("");
        setReferralSource("");
        setContactAgreement(false);
      } else {
        setError(data.error || "Submission failed. Please try again.");
        toast.error(data.error || "Submission failed. Please try again.", {
          position: "top-center",
          autoClose: 4000,
        });
      }
    } catch (err) {
      setError("Network error. Please try again.");
      toast.error("Network error. Please try again.", {
        position: "top-center",
        autoClose: 4000,
      });
    }
    setLoading(false);
  };

  return (
    <section className="bg-gradient-to-br from-white to-gray-100 py-20 px-6">
      <ToastContainer />
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
          onSubmit={handleSubmit}
        >
          {/* Remove inline success/error messages, toast will handle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Country & City"
              className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={countryCity}
              onChange={(e) => setCountryCity(e.target.value)}
            />
          </div>

          <select
            className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
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
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />

          <fieldset className="space-y-2">
            <legend className="text-gray-950">Area of Interest</legend>
            <div className="flex flex-wrap text-gray-950 gap-4">
              <label className="flex items-center text-gray-950 space-x-2">
                <input
                  type="checkbox"
                  value="Python for Health Data"
                  checked={areaOfInterest.includes("Python for Health Data")}
                  onChange={handleAreaOfInterest}
                />
                <span>Python for Health Data</span>
              </label>
              <label className="flex items-center text-gray-950 space-x-2">
                <input
                  type="checkbox"
                  value="Machine Learning & Deep Learning"
                  checked={areaOfInterest.includes(
                    "Machine Learning & Deep Learning"
                  )}
                  onChange={handleAreaOfInterest}
                />
                <span>Machine Learning & Deep Learning</span>
              </label>
              <label className="flex items-center text-gray-950 space-x-2">
                <input
                  type="checkbox"
                  value="Medical AI"
                  checked={areaOfInterest.includes("Medical AI")}
                  onChange={handleAreaOfInterest}
                />
                <span>Medical AI</span>
              </label>
              <label className="flex items-center text-gray-950 space-x-2">
                <input
                  type="checkbox"
                  value="Data Visualization"
                  checked={areaOfInterest.includes("Data Visualization")}
                  onChange={handleAreaOfInterest}
                />
                <span>Data Visualization</span>
              </label>
              <label className="flex items-center text-gray-950 space-x-2">
                <input
                  type="checkbox"
                  value="Other"
                  checked={areaOfInterest.includes("Other")}
                  onChange={handleAreaOfInterest}
                />
                <span>Other</span>
              </label>
              <input
                type="text"
                placeholder="Specify Other"
                className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={specifyOther}
                onChange={(e) => setSpecifyOther(e.target.value)}
              />
            </div>
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="text-gray-950">
              Do you have any prior experience in coding or data science?
            </legend>
            <div className="flex items-center space-x-4">
              <label className="flex items-center text-gray-950 space-x-2">
                <input
                  type="radio"
                  name="experience"
                  value="Yes"
                  checked={experience === "Yes"}
                  onChange={(e) => setExperience(e.target.value)}
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center text-gray-950 space-x-2">
                <input
                  type="radio"
                  name="experience"
                  value="No"
                  checked={experience === "No"}
                  onChange={(e) => setExperience(e.target.value)}
                />
                <span>No</span>
              </label>
            </div>
            <textarea
              rows="4"
              placeholder="Briefly describe your experience (optional)"
              className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={experienceDescription}
              onChange={(e) => setExperienceDescription(e.target.value)}
            ></textarea>
          </fieldset>

          <textarea
            rows="4"
            placeholder="Why do you want to join this bootcamp? (2–4 sentences)"
            className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={motivation}
            onChange={(e) => setMotivation(e.target.value)}
          ></textarea>

          <select
            className="w-full border text-gray-950 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={referralSource}
            onChange={(e) => setReferralSource(e.target.value)}
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
            <input
              type="checkbox"
              required
              checked={contactAgreement}
              onChange={(e) => setContactAgreement(e.target.checked)}
            />
            <span>
              I agree to be contacted and receive updates from Remedius AILab.
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-[#0e6077] hover:bg-[#094b5b] text-white font-semibold py-3 rounded-md transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "APPLY TO JOIN BOOTCAMP"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
