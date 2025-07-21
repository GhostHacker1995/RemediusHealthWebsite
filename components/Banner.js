import Image from "next/image";
import Link from "next/link";

export default function AboutBanner({ title, description, href }) {
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

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:mt-30">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-3 banner-title">
          {title}
        </h1>
        <div>
          <Link
            href="/"
            className="text-lg md:text-xl text-blue-600 mb-2 underline hover:text-blue-800 transition"
          >
            Home
          </Link>{" "}
          <span className="text-gray-400">/</span>{" "}
          <Link
            href={`/${href}`}
            className="text-lg md:text-xl text-blue-600 mb-2 underline hover:text-blue-800 transition"
          >
            {href.charAt(0).toUpperCase() + href.slice(1)}
          </Link>
        </div>
        <p className="text-lg md:text-xl text-gray-300">{description}</p>
      </div>
    </section>
  );
}
