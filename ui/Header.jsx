import Link from "next/link";

export default function Header() {
  const links = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Testimonials",
    "Contact",
  ];

  return (
    <header className="w-full flex items-center justify-between px-4 py-4 md:px-8 text-white fixed top-0 left-0 right-0 z-50 ">
      <h1 className="text-sm sm:text-xl md:text-3xl font-bold">
        Famos Engineering
      </h1>

      <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
        {links.map((link) => (
          <Link
            key={link}
            href={`${link.toLowerCase()}`}
            className="text-sm md:text-base lg:text-lg hover:text-yellow-400 hover:scale-105 transition duration-100"
          >
            {link}
          </Link>
        ))}
      </nav>

      <Link
        href="#contact"
        className="bg-yellow-300 text-black w-fit px-4 py-2 rounded-3xl  hover:bg-yellow-400 transition duration-300"
      >
        Get in Touch
      </Link>
    </header>
  );
}
