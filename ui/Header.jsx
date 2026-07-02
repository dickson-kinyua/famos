"use client";

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Testimonials",
    "Contact",
  ];

  return (
    <header className="w-full flex items-center justify-between px-4 py-4 md:px-8 text-white relative z-50">
      <h1 className="text-sm sm:text-xl md:text-3xl font-bold">
        Famos Engineering
      </h1>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsMenuOpen(true)} className="lg:hidden">
        <FaBars className="text-2xl cursor-pointer" />
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
        {links.map((link) => (
          <Link
            key={link}
            href={`/${link.toLowerCase()}`}
            className={`text-sm md:text-base lg:text-lg hover:text-yellow-400 hover:scale-105 transition ${
              pathname === `/${link.toLowerCase()}` ? "text-yellow-400" : ""
            }`}
          >
            {link}
          </Link>
        ))}
      </nav>

      <Link
        href="#contact"
        className="hidden sm:block bg-yellow-300 text-black px-4 py-2 rounded-3xl hover:bg-yellow-400 transition"
      >
        Get in Touch
      </Link>

      {/* Overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold">Famos</h2>

          <button onClick={() => setIsMenuOpen(false)}>
            <FaTimes className="text-2xl" />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-6">
          {links.map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg hover:text-yellow-400 transition ${
                pathname === `/${link.toLowerCase()}` ? "text-yellow-400" : ""
              }`}
            >
              {link}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 bg-yellow-300 text-black py-3 rounded-full text-center font-semibold hover:bg-yellow-400 transition"
          >
            Get in Touch
          </Link>
        </nav>
      </aside>
    </header>
  );
}
