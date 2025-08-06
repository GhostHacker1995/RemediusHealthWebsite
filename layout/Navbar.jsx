"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HomeIcon } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setProductsDropdownOpen(false);
        setAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Desktop & Mobile Top Navbar */}
      <nav className="px-0 sm:px-0 py-0 fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-5 md:mx-20 xl:mx-auto mt-4 bg-white rounded-full px-4 sm:px-6 py-2 flex items-center justify-between shadow">
          {/* Logo */}
          <Link href="/">
            <div className="relative w-36 h-10 md:w-44 md:h-12">
              <Image
                src="/img/Logos/RemediusMobileLogo.svg"
                alt="Remedius Logo"
                fill
                sizes="(max-width: 768px) 96px, 150px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-6 text-[18px] text-gray-700 items-center">
            <li>
              <Link href="/" className="hover:text-[#0e6077]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/consult" className="hover:text-[#0e6077]">
                Consult Doctor
              </Link>
            </li>
            <li>
              <Link href="/pharmacy" className="hover:text-[#0e6077]">
                Pharmacy
              </Link>
            </li>
            <li className="relative dropdown-container">
              <button
                className="hover:text-[#0e6077] flex items-center gap-1"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
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
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 w-48 z-50">
                  <Link
                    href="/remediushms"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Remedius HMS
                  </Link>
                  <Link
                    href="/pharmacy"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Remedius RX
                  </Link>
                  <Link
                    href="/consult"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Remedius Live
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link href="/ailab" className="hover:text-[#0e6077]">
                <span className="text-[#faa11b] font-bold">AI</span>Lab
              </Link>
            </li>
            <li className="relative dropdown-container">
              <button
                className="hover:text-[#0e6077] flex items-center gap-1"
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
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
              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 w-48 z-50">
                  <Link
                    href="/about"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/careers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Careers
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/contact"
                className="px-4 py-2 border border-[#0e6077] rounded-full bg-[#0e6077] text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-8 h-8 flex flex-col justify-center items-center"
            >
              <span className="block w-6 h-0.5 bg-[#0e6077] mb-1"></span>
              <span className="block w-6 h-0.5 bg-[#0e6077] mb-1"></span>
              <span className="block w-6 h-0.5 bg-[#0e6077]"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 flex flex-col justify-between h-screen overflow-y-auto">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                <Image
                  src="/img/Logos/RemediusMobileLogo.svg"
                  alt="Remedius Logo"
                  width={100}
                  height={100}
                />
              </h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-gray-950"
              >
                ×
              </button>
            </div>
            {/* Mobile Nav Items */}
            <ul className="space-y-4 text-lg font-medium text-gray-950">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-100 text-gray-950"
                >
                  <span>
                    <HomeIcon size={20} />
                  </span>{" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/consult"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-gray-100 block"
                >
                  Consult Doctor
                </Link>
              </li>
              <li>
                <Link
                  href="/pharmacy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-gray-100 block"
                >
                  Pharmacy
                </Link>
              </li>
              {/* Products Dropdown for Mobile */}
              <li>
                <button
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 flex justify-between items-center"
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
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
                {productsDropdownOpen && (
                  <ul className="ml-4 mt-2 space-y-2">
                    <li>
                      <Link
                        href="/remediushms"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 rounded hover:bg-gray-100"
                      >
                        Remedius HMS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pharmacy"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 rounded hover:bg-gray-100"
                      >
                        Remedius RX
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/consult"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 rounded hover:bg-gray-100"
                      >
                        Remedius Live
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/ailab"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-gray-100 block"
                >
                  <span className="text-[#faa11b] font-bold">AI</span>Lab
                </Link>
              </li>
              {/* About Us Dropdown for Mobile */}
              <li>
                <button
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 flex justify-between items-center"
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
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
                {aboutDropdownOpen && (
                  <ul className="ml-4 mt-2 space-y-2">
                    <li>
                      <Link
                        href="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 rounded hover:bg-gray-100"
                      >
                        Our Story
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 rounded hover:bg-gray-100"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-gray-100 block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <Link
              href="/call"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center bg-[#135b78] text-white py-4 rounded-xl font-semibold"
            >
              Book a Call →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
