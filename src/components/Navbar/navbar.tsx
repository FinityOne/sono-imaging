"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full p-4">
      {/* Logo Section */}
      <div className="flex items-center bg-white bg-opacity-50 backdrop-blur-md shadow-md p-3 rounded-lg">
        <Link href="/">
          <Image
            src="/logo/sono-logo-large.png"
            alt="Sono Staffing Logo"
            width={150}
            height={50}
          />
          <span className="sr-only">Sono Staffing</span>
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <button
        className="block md:hidden p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        <i className="fas fa-bars text-2xl text-blue-900"></i>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 justify-center ">
        <ul className="py-4 px-6 flex space-x-16 text-sm font-medium text-white bg-slate-400 bg-opacity-50 backdrop-blur-md shadow-md rounded-lg">
          <li>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="/locations" className="hover:underline">
              Locations
            </Link>
          </li>
          <li>
            <Link href="/nursing-classes" className="hover:underline">
              Nursing Classes
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Get in Touch Button (Desktop Only) */}
      <div className="hidden md:block">
        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-md shadow-md hover:bg-blue-800 transition"
        >
          Get in Touch
        </Link>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center h-screen">
          <button
            className="absolute top-4 right-4 p-2 text-3xl text-blue-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <i className="fas fa-times"></i>
          </button>
          <nav className="flex flex-col space-y-6 text-center text-xl font-medium text-blue-900">
            <Link href="/about" onClick={toggleMenu}>
              About Us
            </Link>
            <Link href="/services" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/locations" onClick={toggleMenu}>
              Locations
            </Link>
            <Link href="/nursing-classes" onClick={toggleMenu}>
              Nursing Classes
            </Link>
            <Link href="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
