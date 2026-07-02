import Image from "next/image";
import Mission from "@/sections/Mission";
import Vision from "@/sections/Vision";

export default function About() {
  return (
    <main className="bg-black pt-10 text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/famos2.JPG"
              alt="About Famos Engineering"
              width={500}
              height={400}
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            <span className="uppercase tracking-[0.3em] text-yellow-400 text-sm font-semibold">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Crafting Excellence <br />
              <span className="text-yellow-400">Together</span>
            </h2>

            <p className="text-gray-300 text-lg leading-8">
              At Famos Engineering, we are dedicated to delivering exceptional
              engineering and construction solutions that combine innovation,
              precision, and reliability.
            </p>

            <p className="text-gray-400 leading-8">
              Our experienced team works closely with clients to transform ideas
              into reality, ensuring every project is completed with the highest
              standards of quality, safety, and professionalism. Whether it's a
              residential, commercial, or industrial project, we are committed
              to building lasting value and trusted partnerships.
            </p>

            <button className="mt-4 px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <Mission />
      <Vision />
    </main>
  );
}
