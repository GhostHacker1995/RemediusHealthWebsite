"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function RemediusFooter() {
  return (
    <footer
      className="bg-[#0e6077] text-white font-sans relative overflow-hidden"
      style={{
        backgroundImage: "url('/img/Footer 2-new-02.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="max-w-7xl mx-auto">
        {/* Top Call to Action */}
        <div className="border-b border-white/10 py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-light text-center md:text-left">
            Let’s make healthcare smarter, together.
          </h3>
          <form className="flex w-full md:w-auto max-w-md border border-white/20 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 text-black placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-[#0e6077] px-6 font-semibold hover:bg-gray-100"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Bottom Grid */}
        <div className="py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + About */}
          <div>
            <h4 className="font-bold text-lg mb-2">Remedius Health</h4>
            <p className="text-sm text-white/80">
              Revolutionizing healthcare delivery across Africa through AI,
              digital care, and community empowerment.
            </p>
            {/* Add socials Icon */}
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.linkedin.com/company/remedius-mobile-health/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/RemediusHealth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-xl"
                aria-label="X (Twitter)"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/remediushealth/?igsh=Znp0cTM4NjBtdHIw#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold mb-3 text-white/90">Services</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/consult">Doctor Consultations</Link>
              </li>
              <li>
                <Link href="/pharmacy">E-Pharmacy</Link>
              </li>
              <li>
                <Link href="/ailab">AI Lab</Link>
              </li>
              <li>
                <Link href="/remediushms">Hospital Management System</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-3 text-white/90">Quick Links</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">Meet the Team</Link>
              </li>
              {/* <li>
                <Link href="/partners">Partners</Link>
              </li> */}
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="flex flex-col gap-3">
            <h5 className="font-semibold mb-3 text-white/90 flex items-center gap-2">
              <span>Stay Connected</span>
            </h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-lg" />
                <a
                  href="mailto:info@remediushealth.africa"
                  className="hover:underline"
                >
                  info@remediushealth.africa
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-lg" />
                <a href="tel:+256760207718" className="hover:underline">
                  +256 760 207 718
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-lg" />
                <a href="tel:+256758553488" className="hover:underline">
                  +256 758 553 488
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-lg" />
                <span>
                  Nasana, 400m off Jenina Stage, Ganda, Wakiso, Uganda
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 py-6 px-6 md:flex-row flex-col md:px-12 text-center text-sm text-white/60 flex justify-between items-center">
          <span>
            &copy; {new Date().getFullYear()} Remedius Mobile Health. All rights
            reserved.
          </span>
          <div className="space-x-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
