import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "../components/Navbar/navbar"; // Client-side component
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sono Staffing Solutions | Excellence in Ultrasound Services",
  description:
    "Discover top-tier ultrasound staffing and services with Sono Staffing Solutions. We connect healthcare facilities with skilled professionals.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* FontAwesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className="bg-blue-600 text-gray-800 font-sans">
        {/* Navbar (Client-Side) */}
        <Navbar />
        <main className="mt-[80px]">{children}</main>
        <footer className="bg-white text-black py-8 mt-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
            {/* Left Section - Logo and Description */}
            <div className="flex flex-col items-start mb-6 md:mb-0 md:w-1/3">
              <Image
                src="/logo/sono-logo-large.png" // Replace with your actual logo path
                alt="Sono Staffing Logo"
                width={150}
                height={50}
                className="mb-4"
              />
              <p className="text-sm text-gray-600">
                Dedicated to providing exceptional ultrasound services and
                staffing solutions nationwide. We strive for excellence in
                connecting healthcare providers with top-tier professionals.
              </p>
              {/* Socials */}
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook text-xl text-gray-800 hover:text-blue-600"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter text-xl text-gray-800 hover:text-blue-400"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin text-xl text-gray-800 hover:text-blue-500"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-xl text-gray-800 hover:text-pink-500"></i>
                </a>
              </div>
            </div>

            {/* Right Section - Quick Links */}
            <div className="flex flex-col md:w-1/3">
              <h5 className="font-semibold text-lg mb-4">Quick Links</h5>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/about"
                  className="text-gray-800 hover:text-blue-600"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-gray-800 hover:text-blue-600"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-800 hover:text-blue-600"
                >
                  Contact
                </Link>
                <Link
                  href="/careers"
                  className="text-gray-800 hover:text-blue-600"
                >
                  Careers
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Sono Staffing Solutions. All
            rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
