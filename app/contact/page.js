"use client";

import axios from "axios";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import AboutBanner from "@/components/Banner";

export default function ContactPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
    };

    console.log("Form Data:", formData);
    try {
      const response = await axios.post(
        "https://remedius-server.onrender.com/send-email",
        formData
      );
      if (response.data.success) {
        alert("Your message has been sent successfully!");
      } else {
        alert("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      console.error("Error response:", error.response?.data);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <AboutBanner
        title={"Contact Us"}
        description={<p>Get in touch with us for any inquiries or support.</p>}
        href={"contact"}
      />
      <section className="bg-white text-gray-900 min-h-screen py-12 px-4 ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Let's connect</h2>
            <p className="text-gray-600">
              We’re a full-service team with experts ready to help. We’ll get in
              touch within 24 hours.
            </p>

            <div>
              <h4 className="font-semibold mb-2">Chat with us</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <MdMessage />{" "}
                  <a href="#" className="text-gray-700 hover:text-black">
                    Start a live chat
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope />{" "}
                  <a
                    href="mailto:example@example.com"
                    className="text-gray-700 hover:text-black"
                  >
                    Shoot us an email
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaLinkedin />{" "}
                  <a
                    href="https://linkedin.com"
                    className="text-gray-700 hover:text-black"
                  >
                    Message us on LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Call us</h4>
              <p className="text-sm text-gray-700">+256 760 207 718</p>
              <p className="text-sm text-gray-700">+256 758 553 488</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Visit us</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Nasana, 400m off Jenina Stage, </li>
                <li>Ganda, Wakiso, Uganda</li>
              </ul>
            </div>

            <div className="flex gap-4 text-xl text-gray-700 mt-4">
              {/* <a href="https://facebook.com" className="hover:text-black">
              <FaFacebook />
            </a> */}
              <a href="https://twitter.com" className="hover:text-black">
                <FaXTwitter />
              </a>
              <a href="https://instagram.com" className="hover:text-black">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="hover:text-black">
                <FaLinkedin />
              </a>
              {/* <a href="https://youtube.com" className="hover:text-black">
              <FaYoutube />
            </a> */}
            </div>
          </div>

          {/* Right side - Contact Form */}
          <form
            className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="you@gmail.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="+256 700 000 000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                name="message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Leave us a message..."
              ></textarea>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" id="privacy" />
              <label htmlFor="privacy">
                You agree to our friendly privacy policy.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#149099] text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Location Map Section */}
        <div className="mt-12">
          <h4 className="text-2xl font-bold mb-4">Our Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.123456789!2d32.567890!3d0.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb1234567890!2sNasana%2C%20Ganda%2C%20Wakiso%2C%20Uganda!5e0!3m2!1sen!2sug!4v1699999999999"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="text-gray-300 mt-4 text-center">
            Visit us at Nasana, 400m off Jenina Stage, Ganda, Wakiso, Uganda
          </p>
        </div>
      </section>
    </>
  );
}
