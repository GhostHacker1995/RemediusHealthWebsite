"use client";
import AboutBanner from "@/components/Banner";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaUserShield,
  FaGlobeAfrica,
  FaUserMd,
  FaClock,
  FaHeadset,
  FaRobot,
  FaDollarSign,
  FaCheckCircle,
} from "react-icons/fa";

function page() {
  const features = [
    {
      title: "Mobile App Version",
      description:
        "Manage your facility using your smartphone anywhere, anytime.",
      icon: (
        <FaMobileAlt className="text-red-500 text-3xl mb-4 animate-pulse" />
      ),
    },
    {
      title: "Frontend Hospital Website",
      description:
        "Included custom hospital site to enhance your digital presence.",
      icon: (
        <FaGlobeAfrica className="text-green-500 text-3xl mb-4 animate-pulse" />
      ),
    },
    {
      title: "Patient Portal",
      description: "Enable patients to view health records and stay connected.",
      icon: (
        <FaUserMd className="text-purple-500 text-3xl mb-4 animate-pulse" />
      ),
    },
    {
      title: "Security Guaranteed",
      description: "We ensure 100% data protection and secure system access.",
      icon: (
        <FaUserShield className="text-blue-500 text-3xl mb-4 animate-pulse" />
      ),
    },
    {
      title: "24/7 Support",
      description: "Our team is always available to assist you, any time.",
      icon: <FaHeadset className="text-pink-500 text-3xl mb-4 animate-pulse" />,
    },
    {
      title: "System Uptime",
      description:
        "Enjoy 99.9% system availability and performance reliability.",
      icon: <FaClock className="text-yellow-500 text-3xl mb-4 animate-pulse" />,
    },
    {
      title: "AI Integration",
      description: "Smart tools powered by AI to support decision-making.",
      icon: <FaRobot className="text-indigo-500 text-3xl mb-4 animate-pulse" />,
    },
    {
      title: "Affordable Pricing",
      description: "High-end features offered at low cost for all facilities.",
      icon: (
        <FaDollarSign className="text-teal-500 text-3xl mb-4 animate-pulse" />
      ),
    },
  ];

  const modules = [
    "Doctor Database",
    "Prescription Management",
    "Appointment Management",
    "Human Resource Database",
    "Hospital Accounting",
    "Financial Reporting",
    "Pharmacy Management",
    "Doctors Schedule Management",
    "Email Module",
    "Notice Module",
    "Patient Timeline",
    "Lab report Template",
    "SMS Management",
    "Telemedicine",
    "Payment gateway",
    "Invoicing",
    "Patient Medical History",
    "Patient Medical Records",
    "Prescription management & CDSS",
    "Patient Payment History",
    "User Activity Report",
    "Auto Email and SMS",
    "Google Meet Video Conference Gateway",
  ];

  return (
    <div>
      <AboutBanner
        title={"An Amazing Medical system"}
        description={
          "A system that makes a solid contribution to the goals and objectives of your organisation."
        }
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center top-40 sm:top-155 ">
        <Image
          src="/img/hms.png"
          alt="Our Story"
          width={800}
          height={300}
          className="rounded-lg"
        />
      </div>

      <section className="bg-gray-50 py-20 px-4 pt-30 sm:pt-110">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose <span className="text-[#f59e0b]">RemediusHMS</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition duration-300 border border-gray-100"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section One: Explore Features */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-800"
          >
            <h2 className="text-3xl font-bold mb-4">
              Streamlining the hospital workflow faster and better!
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              This is a Hospital Management System from Remedius Mobile Health &
              is the Ultimate solution for managing single or multiple hospitals
              or medical facilities. Every core essential part of a hospital is
              included in the system.
            </p>
            <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
              Start free trial
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/img/HMS/REMEDIUS MOBILE HEALTH.png"
              alt="Advanced HMS UI"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Section Two: Streamlining Workflow */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <Image
              src="/img/HMS/REMEDIUS MOBILE HEALTH 2.png"
              alt="Workflow UI"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-800 order-1 md:order-2"
          >
            <h2 className="text-3xl font-bold mb-4">
              Explore more advanced features.
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Remedius HMS enables healthcare workers to manage patient’s bio
              data, Record patient vitals, Record laboratory tests and results,
              Record patient diagnostic information, Record patients’
              prescriptions and dosage information, Record birth reports and
              death reports, Manage pharmacy information & drug Inventory.
              Generate all required reports on an annual or monthly basis.
              Remedius HMS follows the logical flow of a patient in a
              conventional health facility. Upon arrival, a patient goes through
              all the different clinical processes as directed by the health
              workers. & all details are captured and entered.
            </p>
            <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
              Start free trial
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section Three: Modules */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            System <span className="text-blue-600">Modules</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
              >
                <FaCheckCircle className="text-green-500 mt-1" />
                <p className="text-gray-700 font-medium">{module}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Four: Call to Action */}
      <section className="bg-gray-800 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want More Information?
          </h2>
          <p className="mb-8">
            Download our detailed brochure for more insights into Remedius HMS,
            or contact us directly for personalized support and inquiries.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/img/HMS/Remedius HMS.pdf"
              className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-md shadow hover:bg-gray-100 transition duration-300"
              download
            >
              Download Brochure
            </a>

            <a
              href="/contact"
              className="bg-transparent border border-white font-semibold py-2 px-6 rounded-md hover:bg-white hover:text-gray-800 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
