"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo/sono-logo-large.png"
            alt="Sono Staffing Logo"
            width={250}
            height={50}
          />
          <span className="sr-only">Sono Staffing</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="text-sm font-medium hover:underline">
            About Us
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium hover:underline focus:outline-none">
              Services
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-2 w-screen max-w-md rounded-md overflow-hidden">
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/services#staffing" className="hover:underline">
                  Ultrasound Staffing
                </Link>
                <Link href="/services#imaging" className="hover:underline">
                  Diagnostic Imaging
                </Link>
                <Link href="/services#mobile" className="hover:underline">
                  Mobile Ultrasound
                </Link>
                <Link href="/nursing-classes" className="hover:underline">
                  Nursing Classes
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/locations"
            className="text-sm font-medium hover:underline"
          >
            Locations
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="p-6 space-y-4">
            <Link
              href="/about"
              className="block text-sm font-medium hover:underline"
            >
              About Us
            </Link>
            <details className="group">
              <summary className="block text-sm font-medium cursor-pointer hover:underline">
                Services
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/services#staffing"
                  className="block hover:underline"
                >
                  Ultrasound Staffing
                </Link>
                <Link
                  href="/services#imaging"
                  className="block hover:underline"
                >
                  Diagnostic Imaging
                </Link>
                <Link href="/services#mobile" className="block hover:underline">
                  Mobile Ultrasound
                </Link>
                <Link href="/nursing-classes" className="block hover:underline">
                  Nursing Classes
                </Link>
              </div>
            </details>
            <Link
              href="/locations"
              className="block text-sm font-medium hover:underline"
            >
              Locations
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
