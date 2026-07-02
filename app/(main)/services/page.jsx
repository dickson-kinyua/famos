export default function Services() {
  return (
    <main className="px-4 py-8 pt-10 flex flex-col items-center justify-between min-h-screen bg-[url('/images/bg.avif')] bg-cover bg-center bg-no-repeat relative">
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <span className="uppercase tracking-[0.35em] text-yellow-300 text-sm md:text-base font-medium">
          Our Services
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Famos <span className="text-yellow-300">Engineering</span>
        </h1>
        <p className="mt-6 text-gray-200 text-base md:text-xl max-w-3xl leading-8">
          We offer a wide range of engineering and construction services,
          including residential, commercial, and industrial projects. Our team
          is dedicated to delivering innovative solutions that meet the highest
          standards of quality and reliability.
        </p>
      </div>
    </main>
  );
}
