"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaGithub,
  FaDatabase,
  FaBrain,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiOpencv,
  SiJupyter,
  SiStreamlit,
  SiFlask,
  SiFirebase,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

const technologies = [
  { name: "Python", icon: <FaPython className="text-4xl text-yellow-500" /> },
  { name: "Pandas", icon: <SiPandas className="text-4xl text-pink-500" /> },
  { name: "NumPy", icon: <SiNumpy className="text-4xl text-blue-500" /> },
  {
    name: "Scikit-learn",
    icon: <SiScikitlearn className="text-4xl text-orange-500" />,
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow className="text-4xl text-orange-600" />,
  },
  { name: "OpenCV", icon: <SiOpencv className="text-4xl text-purple-500" /> },
  { name: "NLTK", icon: <FaBrain className="text-4xl text-green-500" /> },
  { name: "Jupyter", icon: <SiJupyter className="text-4xl text-orange-400" /> },
  {
    name: "VS Code",
    icon: <FaLaptopCode className="text-4xl text-blue-600" />,
  },
  {
    name: "Streamlit",
    icon: <SiStreamlit className="text-4xl text-red-400" />,
  },
  { name: "Flask", icon: <SiFlask className="text-4xl text-gray-700" /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-4xl text-yellow-400" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-4xl text-blue-800" />,
  },
  { name: "MySQL", icon: <SiMysql className="text-4xl text-blue-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-4xl text-black" /> },
];

export default function AIBootcampSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8"
        >
          AI Bootcamp Portal
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12"
        >
          Our Bootcamp Portal is your gateway to becoming a health-AI
          professional. We train learners in practical, project-based AI
          development that targets real healthcare challenges.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Participants gain access to section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-500 p-3 rounded-full mr-4">
                <FaLaptopCode className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Participants gain access to:
              </h3>
            </div>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start"
              >
                <div className="bg-blue-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">
                  Instructor-led video sessions
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start"
              >
                <div className="bg-blue-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">
                  Code walkthroughs and datasets
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start"
              >
                <div className="bg-blue-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">
                  Assignments and health-focused projects
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-start"
              >
                <div className="bg-blue-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">
                  Peer discussions and expert mentorship
                </span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Core skills section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-green-500 p-3 rounded-full mr-4">
                <FaBrain className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Core skills you will learn:
              </h3>
            </div>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start"
              >
                <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">
                  Python Programming for Data Science
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start"
              >
                <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">
                  Health Data Cleaning and Analysis
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-start"
              >
                <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">
                  Machine Learning Fundamentals
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-start"
              >
                <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">
                  Deep Learning for medical imaging
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex items-start"
              >
                <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">
                  NLP for EMRs and clinical notes
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="flex items-start"
              >
                <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">
                  AI Models for Disease Prediction & Risk Profiling
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex items-start"
              >
                <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">
                  Ethics & Responsible AI in Healthcare
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex items-start"
              >
                <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">
                  Deployment of AI Models
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Technologies Used
          </h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            At Remedius AILab, our bootcamps and projects are powered by the
            most effective and widely adopted technologies in the health AI
            ecosystem.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md hover:bg-white transition"
              >
                {tech.icon}
                <span className="mt-2 text-sm font-medium text-gray-700">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
