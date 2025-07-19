"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setProductsDropdownOpen(false);
        setAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdowns when mobile menu closes
  useEffect(() => {
    if (!menuOpen) {
      setProductsDropdownOpen(false);
      setAboutDropdownOpen(false);
    }
  }, [menuOpen]);

  return (
    <>
      <nav className="px-0 sm:px-0 py-0 fixed top-0 left-0 w-full z-50 bg-transparent m-auto">
        <div className="max-w-7xl mx-5 md:mx-20 xl:mx-auto mt-4 bg-white rounded-full px-2 sm:px-2 py-1 sm:py-2 flex items-center justify-between shadow-none">
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
              <li className="relative group dropdown-container">
                <button
                  className="hover:text-[#0e6077] text-[18px] flex items-center gap-1"
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  onMouseEnter={() =>
                    window.innerWidth >= 640 && setProductsDropdownOpen(true)
                  }
                  onMouseLeave={() =>
                    window.innerWidth >= 640 && setProductsDropdownOpen(false)
                  }
                >
                  Products
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      productsDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    productsDropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  } absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200 z-50 sm:block ${
                    menuOpen
                      ? "relative mt-0 shadow-none border-none bg-gray-50"
                      : ""
                  }`}
                  onMouseEnter={() =>
                    window.innerWidth >= 640 && setProductsDropdownOpen(true)
                  }
                  onMouseLeave={() =>
                    window.innerWidth >= 640 && setProductsDropdownOpen(false)
                  }
                >
                  <Link
                    href="/remediushms"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#0e6077]"
                    onClick={() => {
                      setProductsDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Remedius HMS
                  </Link>
                  <Link
                    href="/pharmacy"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#0e6077]"
                    onClick={() => {
                      setProductsDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Remedius RX
                  </Link>
                  <Link
                    href="/consult"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#0e6077]"
                    onClick={() => {
                      setProductsDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Remedius Live
                  </Link>
                </div>
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
              <li className="relative group dropdown-container">
                <button
                  className="hover:text-[#0e6077] text-[18px] flex items-center gap-1"
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  onMouseEnter={() =>
                    window.innerWidth >= 640 && setAboutDropdownOpen(true)
                  }
                  onMouseLeave={() =>
                    window.innerWidth >= 640 && setAboutDropdownOpen(false)
                  }
                >
                  About Us
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      aboutDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    aboutDropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  } absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200 z-50 sm:block ${
                    menuOpen
                      ? "relative mt-0 shadow-none border-none bg-gray-50"
                      : ""
                  }`}
                  onMouseEnter={() =>
                    window.innerWidth >= 640 && setAboutDropdownOpen(true)
                  }
                  onMouseLeave={() =>
                    window.innerWidth >= 640 && setAboutDropdownOpen(false)
                  }
                >
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#0e6077]"
                    onClick={() => {
                      setAboutDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/careers"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#0e6077]"
                    onClick={() => {
                      setAboutDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Careers
                  </Link>
                </div>
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
