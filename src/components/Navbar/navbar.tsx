"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full p-4">
      {/* Logo Section */}
      <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-md px-4 py-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/sono-logo-large.png"
            alt="Sono Staffing Logo"
            width={150}
            height={50}
          />
          <span className="sr-only">Sono Staffing</span>
        </Link>
      </div>

      {/* Centered Links Section */}
      <nav className="flex-1 flex justify-center ">
        <ul className="py-4 px-6 flex space-x-12 text-sm font-medium text-white bg-slate-300 bg-opacity-25 backdrop-blur-md rounded-lg">
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

      {/* Get in Touch Button */}
      <div>
        <Link
          href="/contact"
          className="px-10 py-4 bg-white text-blue-900 font-semibold rounded-md shadow-md hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
