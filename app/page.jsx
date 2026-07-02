import Link from "next/link";
import Header from "@/ui/Header";

export default function Home() {
  return (
    <main className="px-4 py-8 flex flex-col items-center justify-between min-h-screen bg-[url('/images/bg.avif')] bg-cover bg-center bg-no-repeat relative">
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/55"></div> */}
      <Header />
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <span className="uppercase tracking-[0.35em] text-yellow-300 text-sm md:text-base font-medium">
          Building the Future
        </span>

        <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Famos <span className="text-yellow-300">Engineering</span>
        </h1>

        <p className="mt-6 text-gray-200 text-base md:text-xl max-w-3xl leading-8">
          Passionate engineers delivering innovative construction,
          infrastructure, and engineering solutions that bring your vision to
          life with quality, precision, and reliability.
        </p>

        <Link
          href="#services"
          className="mt-10 bg-yellow-300 text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 hover:scale-105 transition duration-300"
        >
          Explore Our Services
        </Link>
      </div>
    </main>
  );
}
