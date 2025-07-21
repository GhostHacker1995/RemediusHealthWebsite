"use client";

import { useState } from "react";
import AboutBanner from "@/components/Banner";

const jobListings = [
  {
    title: "Head of Cloud Engineering & AI",
    location: "Kampala, Uganda",
    type: "Full-time",
    workspace: "On-site",
  },
  {
    title: "Head of No-Code & Low-Code Development",
    location: "Kampala, Uganda",
    type: "Part-time",
    workspace: "Remote",
  },
  {
    title: "Student Success & Community Engagement Manager",
    location: "Kampala, Uganda",
    type: "Contract",
    workspace: "On-site",
  },
  {
    title: "Venture Builder / Program Manager, VentureForge Accelerator",
    location: "Kampala, Uganda",
    type: "Full-time",
    workspace: "Remote",
  },
];

export default function JobsPage() {
  const [jobType, setJobType] = useState("");
  const [workspace, setWorkspace] = useState("");

  const filteredJobs = jobListings.filter(
    (job) =>
      (jobType === "" || job.type === jobType) &&
      (workspace === "" || job.workspace === workspace)
  );

  return (
    <>
      <AboutBanner
        title={"Work with Us"}
        description={"Join our team and make a difference"}
        href={"careers"}
      />
      <section className="min-h-screen bg-[#eaf7f4] text-gray-900 py-5 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          {/* <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-[#0e6077]"
          >
            Job Listings
          </motion.h2> */}

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4 text-sm">
            <select
              className="bg-white border border-[#0e6077] rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0e6077]"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="">Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>

            <select
              className="bg-white border border-[#0e6077] rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0e6077]"
              value={workspace}
              onChange={(e) => setWorkspace(e.target.value)}
            >
              <option value="">Select Workspace</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
            </select>

            <button
              className="text-[#0e6077] border border-[#0e6077] px-4 py-2 rounded-lg hover:bg-[#0e6077] hover:text-white transition-all"
              onClick={() => {}}
            >
              Search Jobs
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-left">
          <p className="mb-6 text-sm text-gray-600">
            Number of jobs found: {filteredJobs.length}
          </p>

          <div className="space-y-4">
            {filteredJobs.map((job, i) => (
              <div
                key={i}
                className="border border-[#0e6077]/20 p-5 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white hover:bg-[#f0fcf8] hover:border-[#0e6077]/40 transition-all shadow-sm"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#0e6077] mb-1">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600">{job.location}</p>
                </div>
                <button className="mt-4 sm:mt-0 bg-[#faa11b] hover:bg-[#e8910f] text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm transition-all">
                  View Job
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
