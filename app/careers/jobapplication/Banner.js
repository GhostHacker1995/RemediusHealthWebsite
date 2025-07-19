import Image from "next/image";

export default function AboutBanner() {
  return (
    <section className="relative sm:h-[400px] h-[60vh] w-full overflow-hidden pt-50 pb-60 sm:pb-80">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/about/banner-about.jpg" // <-- update path if different
          alt="About Us"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 mt-30">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-3 banner-title">
          Work with Us
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          HealthCare that follows you wherever you go
        </p>
      </div>
    </section>
  );
}
