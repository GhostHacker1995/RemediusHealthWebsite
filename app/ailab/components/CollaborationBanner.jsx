import React from "react";

function CollaborationBanner() {
  return (
    <div
      className="relative bg-cover bg-center text-center p-12"
      style={{
        backgroundImage: "url('/img/ailab/collaborate.jpg')",
        backgroundAttachment: "fixed", // Makes the image static
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>{" "}
      {/* Gradient overlay for better visibility */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-white">COLLABORATE</h2>
        <p className="text-lg text-gray-300 my-4">
          Partner with us to co-develop or deploy AI tools.
        </p>
        <button className="px-6 py-2 bg-gradient-to-r from-[#0e6178] via-[#0c4f63] to-[#0a3d4f] text-white rounded-md font-medium hover:from-[#0c4f63] hover:via-[#0a3d4f] hover:to-[#08303b] transition">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default CollaborationBanner;
