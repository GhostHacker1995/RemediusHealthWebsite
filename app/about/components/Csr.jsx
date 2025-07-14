"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CorporateSocialResponsibility() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const csrItems = [
    {
      title: "Healthcare Accessibility",
      description:
        "We collaborate with local organizations and government entities to extend quality healthcare services to underserved communities. By offering subsidized telemedicine services and health education programs, we empower individuals and communities to take control of their health.",
    },
    {
      title: "Education and Skill Development",
      description:
        "Remedius supports educational programs that focus on healthcare and technology. We provide opportunities for students and young professionals to gain experience through internships, scholarships, and mentorship programs.",
    },
    {
      title: "Environmental Sustainability",
      description:
        "We strive to minimize our environmental impact by promoting eco-friendly practices within our organization and encouraging the adoption of sustainable healthcare solutions.",
    },
    {
      title: "Community Engagement",
      description:
        "We actively participate in community-building activities, health campaigns, and partnerships with local organizations to raise awareness about health issues and promote overall well-being.",
    },
    {
      title: "Employee Volunteerism",
      description:
        "Remedius encourages our employees to give back to their communities through volunteerism. We organize company-wide volunteer events and support individual volunteering efforts, fostering a culture of compassion and social responsibility.",
    },
  ];

  return (
    <section className="bg-[#121212] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          At Remedius Mobile Health, we recognize the importance of being
          socially responsible and giving back to the communities we serve. Our
          CSR initiatives promote a healthier, more equitable, and sustainable
          future for Uganda.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {csrItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1e1e1e] to-[#2c2c2c] p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl text-left w-full max-w-sm"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold mb-3 uppercase text-white tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
