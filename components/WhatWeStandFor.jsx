"use client";

import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className=" bg-[#f4fbfd]">
      <div className="text-center mb-12 bg-white p-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          <span className="text-[#f59e0b]">Empower your health,</span> Transform
          your life <br />
          <span>
            Discover Remedius, a gateway to complete <br />
            well-being with <span className="text-[#115b78]">Telemedicine</span>
          </span>
        </h2>
      </div>

      <div className="max-w-7xl  grid md:grid-cols-2 mx-5 md:mx-20 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-[#f59e0b] text-white uppercase py-1 px-3 rounded-full text-xs font-semibold mb-3">
            Who we are
          </span>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Who we are</h3>
          <p className="text-gray-700 mb-4">
            Pioneering a healthcare revival in Uganda, Remedius is your passport
            to personalized, world-class healthcare. Founded in 2023, our
            mission is to transform healthcare access through our digital health
            platform, connecting Ugandans with top healthcare services.
            RemediusLive offers consultations, symptom checking, and
            prescription management, while RemediusRx provides seamless pharmacy
            services.
          </p>
          <p className="text-gray-700 mb-6">
            Our core values are patient-centered care, innovation, and
            collaboration. By leveraging technology and partnerships, Remedius
            is committed to improving healthcare outcomes in Uganda.
          </p>
          <p className="text-gray-700 font-bold mb-6">
            Join us for a healthier, more vibrant future!
          </p>
          <button className="bg-[#115b78] text-white py-2 px-5 rounded-full hover:bg-[#115b78] transition">
            About Us
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="overflow-hidden">
            <Image
              src="/img/hero/rachel-01.png"
              alt="About Remedius"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="bg-[#115b78] py-12 mx-5 md:mx-20 mt-16 text-white shadow-xl rounded-br-[32px] rounded-bl-[32px]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center items-start">
          <div className="px-2">
            <Image
              src="/img/hero/icons-05.png"
              alt="Mission"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
            <p className="text-sm px-5">
              To bring healthcare into the digital age, making it more
              accessible and convenient for patients and healthcare providers.
            </p>
          </div>

          <div className="px-4 md:border-x border-[#e88f00]">
            <Image
              src="/img/hero/icons-06.png"
              alt="Vision"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
            <p className="text-sm px-5">
              To be at the forefront of the digital health revolution, shaping
              the future of healthcare through innovation.
            </p>
          </div>

          <div className="px-4">
            <Image
              src="/img/hero/icons-07.png"
              alt="Values"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Our Values</h4>
            <p className="text-sm px-5">
              Patient-centered care, Innovation, Empathy, Collaboration,
              Integrity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
