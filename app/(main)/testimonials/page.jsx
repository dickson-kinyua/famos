export default function Testimonials() {
  return (
    <main className="bg-black pt-10 text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center">
            What Our Clients Say
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-300 text-lg leading-8">
                "Famos Engineering transformed our vision into reality. Their
                expertise and dedication were evident in every step of the
                project. We couldn't be happier with the results!"
              </p>
              <p className="mt-4 text-yellow-300 font-semibold">
                - John Doe, CEO of XYZ Corp
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-300 text-lg leading-8">
                "The team at Famos Engineering is exceptional. Their attention
                to detail and commitment to quality made our project a success.
                Highly recommended!"
              </p>
              <p className="mt-4 text-yellow-300 font-semibold">
                - Jane Smith, Project Manager at ABC Ltd
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-300 text-lg leading-8">
                "Working with Famos Engineering was a pleasure. Their innovative
                solutions and professional approach exceeded our expectations.
                We look forward to future collaborations."
              </p>
              <p className="mt-4 text-yellow-300 font-semibold">
                - Michael Johnson, Director of DEF Inc
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
