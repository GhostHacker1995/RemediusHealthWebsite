"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function JobDetails() {
  const router = useRouter();

  return (
    <section className="bg-[#eaf7f4] text-gray-900 min-h-screen py-16 px-6 pt-40">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => router.back()}
          className="text-sm text-[#0e6077] mb-6 hover:underline font-medium"
        >
          &larr; Back to Job Listings
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-4xl font-bold mb-2 text-[#0e6077]">
            Head of Platform & Community
          </h1>
          <div className="text-sm text-gray-600 mb-8">
            <span className="font-medium">Kampala, Uganda</span>
            <div className="flex gap-3 mt-3">
              <span className="bg-[#0e6077] text-white text-xs px-4 py-2 rounded-full font-medium">
                Full-time
              </span>
              <span className="bg-[#faa11b] text-white text-xs px-4 py-2 rounded-full font-medium">
                Remote
              </span>
            </div>
          </div>

          <div className="mb-10 space-y-8">
            <div className="bg-[#f0fcf8] rounded-lg p-6 border-l-4 border-[#0e6077]">
              <h2 className="text-2xl font-semibold text-[#0e6077] mb-4">
                About the Role
              </h2>

              <div className="space-y-4">
                <p className="text-gray-700 font-medium">
                  <strong className="text-[#0e6077]">
                    Key Responsibilities:
                  </strong>
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-3 ml-4">
                  <li>
                    <strong className="text-gray-800">
                      Community Strategy & Growth:
                    </strong>{" "}
                    Grow the TrailblzrGO Community across entrepreneurs,
                    investors, and tech enthusiasts globally.
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      Value Proposition & Perks:
                    </strong>{" "}
                    Manage perks, discounts, and gift bags through strategic
                    partnerships.
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      Platform Management:
                    </strong>{" "}
                    Oversee tech stack for a seamless member experience.
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      Engagement & Moderation:
                    </strong>{" "}
                    Moderate forums, host events, and build connections.
                  </li>
                  <li>
                    <strong className="text-gray-800">Content Curation:</strong>{" "}
                    Deliver webinars, insights, and resources to educate and
                    inspire.
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      Member-Led Initiatives:
                    </strong>{" "}
                    Empower members to lead sub-groups and meetups.
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      Feedback & Iteration:
                    </strong>{" "}
                    Continuously evolve the community based on input.
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      Marketing Collaboration:
                    </strong>{" "}
                    Work with marketing to grow subscriptions and affiliates.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#f0fcf8] rounded-lg p-6 border-l-4 border-[#faa11b]">
              <h3 className="text-xl font-semibold text-[#0e6077] mb-4">
                Requirements
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-3 ml-4">
                <li>
                  3+ years in community/platform management or similar roles.
                </li>
                <li>
                  Proven ability to grow and manage engaged online communities.
                </li>
                <li>
                  Familiarity with tools for CRM, forums, and digital
                  communities.
                </li>
                <li>
                  Strong interpersonal, moderation, and communication skills.
                </li>
                <li>Experience in negotiating and managing strategic perks.</li>
                <li>Organized, member-first, proactive mindset.</li>
                <li>
                  Passion for supporting founders across Africa and North
                  America.
                </li>
              </ul>
            </div>

            <div className="bg-[#f0fcf8] rounded-lg p-6 border-l-4 border-[#0e6077]">
              <h3 className="text-xl font-semibold text-[#0e6077] mb-4">
                About the Company
              </h3>
              <p className="text-gray-600">
                Remedius Mobile Health is a Uganda-based company advancing
                African and immigrant-led innovation. Our ecosystem blends
                venture building, mentorship, and community to fuel
                entrepreneurs with tools and perks to thrive globally.
              </p>
            </div>

            <div className="bg-[#f0fcf8] rounded-lg p-6 border-l-4 border-[#faa11b]">
              <h3 className="text-xl font-semibold text-[#0e6077] mb-4">
                The Opportunity
              </h3>
              <p className="text-gray-600">
                We are hiring a Head of Platform & Community to lead
                TrailblzrGO’s member experience. You will drive community
                growth, deliver value through perks, and cultivate an inclusive
                space that accelerates our mission:{" "}
                <strong className="text-[#0e6077]">
                  “Think local, disrupt global!”
                </strong>
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium transition">
              Apply Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
