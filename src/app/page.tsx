"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const day = now.toLocaleDateString(undefined, { weekday: "long" });
      const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(`Today is ${day} ${time}`);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000); // Update every second
    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <main className="mx-auto container">
      {/* New Header Section */}
      <header className="flex items-center justify-between w-full py-6 px-6 text-white">
        <div>
          <h1 className="text-4xl md:text-8xl font-bold py-8">
            Welcome to <br />
            Sono Imaging
          </h1>
          <h3 className="md:text-4xl">
            Your partner in Excellence for Medical Imaging and Staffing.
          </h3>
        </div>
        <div className="bg-slate-300 bg-opacity-50 backdrop-blur-md rounded-full px-6 py-4 shadow-md text-white font-medium">
          <p>{currentTime}</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-100 rounded-t-xl pb-4">
        <div className="relative">
          <img
            src="/images/home/hero.jpg"
            alt="Hero Image"
            className="w-full rounded-t-lg object-cover h-[75vh]"
          />

          {/* Service Tiles */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
            <div className="bg-white bg-opacity-75 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Ultrasound Staffing</h3>
              <p className="text-sm text-gray-600 mb-4">
                Connect with top-tier ultrasound professionals for your
                facility.
              </p>
              <a
                href="/services"
                className="text-blue-600 font-medium flex items-center space-x-2 hover:underline"
              >
                <span>Learn More</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="bg-white bg-opacity-75 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Diagnostic Imaging</h3>
              <p className="text-sm text-gray-600 mb-4">
                Comprehensive diagnostic imaging services for accurate results.
              </p>
              <a
                href="/services"
                className="text-blue-600 font-medium flex items-center space-x-2 hover:underline"
              >
                <span>Learn More</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="bg-white bg-opacity-75 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Mobile Ultrasound</h3>
              <p className="text-sm text-gray-600 mb-4">
                Convenient on-site ultrasound services for your patients.
              </p>
              <a
                href="/services"
                className="text-blue-600 font-medium flex items-center space-x-2 hover:underline"
              >
                <span>Learn More</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="bg-white bg-opacity-75 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Nursing Classes</h3>
              <p className="text-sm text-gray-600 mb-4">
                Advance your career with our specialized nursing classes.
              </p>
              <a
                href="/nursing-classes"
                className="text-blue-600 font-medium flex items-center space-x-2 hover:underline"
              >
                <span>Learn More</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-12 bg-gray-800 text-white rounded-t-lg shadow-md -mt-4 z-10"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Image Placeholder */}
          <div className="flex-1">
            <img
              src="/images/home/doctors.jpg" // Replace with your image URL
              alt="Who We Are"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-3">Mission Statement</h2>
            <p className="mb-6 border-b border-slate-500"></p>
            <p className="text-lg mb-8">
              At Sono Staffing Solutions, our mission is to connect healthcare
              providers with skilled ultrasound professionals and provide
              state-of-the-art imaging services. We are dedicated to ensuring
              quality, reliability, and excellence in every aspect of medical
              imaging.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-12 bg-white rounded-lg shadow-sm">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card 1 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col">
              <div className="mb-6">
                <i className="fas fa-user-md text-4xl text-blue-900 mb-4"></i>
                <h3 className="text-xl font-bold mb-4">
                  Experienced Professionals
                </h3>
                <p className="text-gray-700">
                  Our team consists of highly skilled and certified
                  professionals with years of experience in the medical imaging
                  industry. We are committed to delivering exceptional service
                  and precision in every project we undertake, ensuring the best
                  outcomes for our clients.
                </p>
              </div>
              <button className="w-full mt-auto bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition">
                Learn More
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col">
              <div className="mb-6">
                <i className="fas fa-microscope text-4xl text-blue-900 mb-4"></i>
                <h3 className="text-xl font-bold mb-4">
                  State-of-the-Art Technology
                </h3>
                <p className="text-gray-700">
                  Utilizing cutting-edge imaging technology, we ensure accurate
                  diagnostics and unparalleled quality. From high-resolution
                  ultrasound machines to the latest diagnostic software, we are
                  equipped to meet the evolving needs of the healthcare
                  industry.
                </p>
              </div>
              <button className="w-full mt-auto bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition">
                Learn More
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col">
              <div className="mb-6">
                <i className="fas fa-cogs text-4xl text-blue-900 mb-4"></i>
                <h3 className="text-xl font-bold mb-4">Flexible Services</h3>
                <p className="text-gray-700">
                  We provide customizable solutions tailored to the unique
                  requirements of each client. Whether you need mobile imaging
                  services, on-site staffing, or remote diagnostic capabilities,
                  our flexibility ensures seamless integration into your
                  operations.
                </p>
              </div>
              <button className="w-full mt-auto bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 bg-gray-900 text-white rounded-lg shadow-md"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-start space-y-12 md:space-y-0 md:space-x-12">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-base mb-6 leading-relaxed">
              We service all of Southern California from Orange County and Los
              Angeles County!
            </p>
            <ul className="space-y-5">
              <li className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-xl text-blue-900"></i>
                <span className="text-sm">
                  123 Main Street, Orange County, CA
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <i className="fas fa-user text-xl text-blue-900"></i>
                <span className="text-sm">John Doe, Head of Operations</span>
              </li>
              <li className="flex items-center space-x-4">
                <i className="fas fa-envelope text-xl text-blue-900"></i>
                <a
                  href="mailto:info@sonostaffing.com"
                  className="text-sm text-blue-400 hover:underline"
                >
                  info@sonostaffing.com
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <i className="fas fa-phone text-xl text-blue-900"></i>
                <a
                  href="tel:+1234567890"
                  className="text-sm text-blue-400 hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <div className="h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/home/la.jpg"
                alt="Southern California"
                className="w-full h-full object-cover"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
