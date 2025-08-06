import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar";
import RemediusFooter from "@/layout/Footer";
import { FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Remedius Health – Telemedicine, E-Pharmacy, Health AI & Clinical IT in Uganda",
  description:
    "Remedius Health provides accessible telemedicine, affordable e-pharmacy services, AI-powered healthcare solutions, and clinical IT solutions to revolutionize healthcare delivery in Uganda and beyond.",
  keywords:
    "Remedius, Health AI Uganda, Telemedicine, Online Doctor Uganda, E-Pharmacy, Clinical IT Solutions, Digital Health Africa, Healthcare Innovation",
  authors: [{ name: "Remedius Mobile Health" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.remediushealth.africa/",
    title:
      "Remedius Health – Telemedicine, E-Pharmacy, Health AI & Clinical IT in Uganda",
    description:
      "Remedius Health provides accessible telemedicine, affordable e-pharmacy services, AI-powered healthcare solutions, and clinical IT solutions to revolutionize healthcare delivery in Uganda and beyond.",
    images: [
      "https://ap-south-1.graphassets.com/cmcuj09i200sz07o6a2lh3zhm/output=format:jpg/resize=width:830/cmdzuxuvi28nw07pe1dn0gvvl",
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://www.remediushealth.africa/",
    title: "Remedius Health – Digital Healthcare & AI Solutions",
    description:
      "Accessible telemedicine, affordable e-pharmacy, and AI-powered clinical IT solutions transforming healthcare in Uganda.",
    images: [
      "https://ap-south-1.graphassets.com/cmcuj09i200sz07o6a2lh3zhm/output=format:jpg/resize=width:830/cmdzuxuvi28nw07pe1dn0gvvl",
    ],
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <RemediusFooter />
        <a
          href="https://wa.me/256758553488?text=Hello%20Remedius%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <FaWhatsapp size={24} />
        </a>
      </body>
    </html>
  );
}

/* Add this CSS to globals.css */
