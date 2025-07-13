"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="px-0 sm:px-0 py-0 fixed top-0 left-0 w-full z-50 bg-transparent m-auto">
        <div className="max-w-7xl mx-5 sm:mx-20 mt-4 bg-white rounded-full px-2 sm:px-2 py-1 sm:py-2 flex items-center justify-between shadow-none">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/">
              <div className="relative w-40 h-15 sm:w-[180px] sm:h-[60px]">
                <Image
                  src="/img/Logos/RemediusMobileLogo.svg"
                  alt="Remedius Logo"
                  fill
                  sizes="(max-width: 640px) 96px, 150px"
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Center: Nav Links */}
          <div className="flex-1 flex justify-center">
            <ul
              className={`${
                menuOpen
                  ? "flex flex-col absolute top-16 left-0 w-full bg-white rounded-b-xl shadow-lg py-4 px-6 gap-4 items-start z-40 sm:static sm:flex-row sm:bg-transparent sm:shadow-none sm:py-0 sm:px-0 sm:gap-6 sm:items-center"
                  : "hidden sm:flex sm:flex-row sm:bg-transparent sm:shadow-none sm:py-0 sm:px-0 sm:gap-6 sm:items-center"
              } text-xs sm:text-sm text-gray-700 transition-all duration-200`}
            >
              <li>
                <Link
                  href="/consult"
                  className="hover:text-[#0e6077] text-[18px]"
                  onClick={() => setMenuOpen(false)}
                >
                  Consult Doctor
                </Link>
              </li>
              <li>
                <Link
                  href="/pharmacy"
                  className="hover:text-[#0e6077] text-[18px]"
                  onClick={() => setMenuOpen(false)}
                >
                  Pharmacy
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#0e6077] text-[18px]"
                  onClick={() => setMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/ailab"
                  className="hover:text-[#0e6077] text-[18px]"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-[#faa11b] font-bold">AI</span>Lab
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#0e6077] text-[18px]"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-[#0e6077] text-[18px]"
                  onClick={() => setMenuOpen(false)}
                >
                  Careers
                </Link>
              </li>
              <li className="block sm:hidden w-full">
                <Link
                  href="/contact"
                  className="block w-full px-3 py-2 border border-[#0e6077] text-[18px] text-[#0e6077] rounded hover:bg-[#0e6077] hover:text-white transition text-xs sm:text-sm text-center mt-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Hamburger for mobile */}
          <div className="flex sm:hidden items-center ml-2 mr-5">
            <button
              className="flex flex-col justify-center items-center w-8 h-8"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-[#0e6077] mb-1 transition-all ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#0e6077] mb-1 transition-all ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#0e6077] transition-all ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Right: Contact Button (desktop only) */}
          <div className="hidden sm:block mt-2 sm:mt-0 mr-10">
            <Link
              href="/contact"
              className="px-3 sm:px-4 py-2 border border-[#0e6077] text-[18px] text-[#0e6077] rounded hover:bg-[#0e6077] hover:text-white transition text-xs sm:text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
