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
      <body className="bg-gray-50 text-gray-800 font-sans">
        {/* Navbar (Client-Side) */}
        <Navbar />
        <main className="mt-[80px]">{children}</main>
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <Image
                src="/logo/sono-logo-large.png"
                alt="Sono Staffing Logo"
                width={10}
                height={50}
              />
              <p className="text-sm mt-2">
                Dedicated to providing exceptional ultrasound services and
                staffing solutions nationwide.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h5 className="font-semibold">Contact Us</h5>
              <p>
                Email:{" "}
                <a href="mailto:info@sonostaffing.com" className="underline">
                  info@sonostaffing.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+1234567890" className="underline">
                  +1 (234) 567-890
                </a>
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h5 className="font-semibold">Quick Links</h5>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
              <Link href="/services" className="hover:underline">
                Our Services
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sono Staffing Solutions. All
            rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
