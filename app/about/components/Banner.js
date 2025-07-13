import Image from "next/image";

export default function AboutBanner() {
  return (
    <section className="relative sm:h-[100vh] h-[60vh] w-full overflow-hidden pt-50 pb-60 sm:pb-80">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/about/banner-about.jpg" // <-- update path if different
          alt="About Us"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-blue-900/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-white">
          HealthCare that follows you wherever you go
        </p>
      </div>
    </section>
  );
}
