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
      <header className="flex flex-col md:flex-row items-start justify-between w-full py-6 px-6 text-white bg-blue-600">
        <div className="my-5">
          <h1 className="text-5xl md:text-9xl font-bold mb-4">
            Welcome to Sono Imaging
          </h1>
          <h3 className="text-lg md:text-2xl">
            Your partner in Excellence for Medical Imaging and Staffing.
          </h3>
        </div>
        <div className="mt-4 bg-slate-400 bg-opacity-50 rounded-md px-4 py-2 shadow-md text-white font-medium">
          <p>{currentTime}</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-100 rounded-t-xl pb-8">
        <div className="relative">
          <img
            src="/images/home/hero.jpg"
            alt="Hero Image"
            className="w-full rounded-t-lg object-cover h-[50vh] md:h-[75vh]"
          />

          {/* Service Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 md:absolute md:inset-x-0 md:bottom-0">
            {[
              {
                title: "Ultrasound Staffing",
                description: "Connect with top-tier ultrasound professionals.",
                link: "/services",
              },
              {
                title: "Diagnostic Imaging",
                description: "Accurate and comprehensive diagnostic imaging.",
                link: "/services",
              },
              {
                title: "Mobile Ultrasound",
                description: "Convenient on-site ultrasound services.",
                link: "/services",
              },
              {
                title: "Nursing Classes",
                description: "Advance your career with our nursing classes.",
                link: "/nursing-classes",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-90 backdrop-blur-md p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-700 mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-12 bg-gray-800 text-white rounded-t-lg shadow-md"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Image Placeholder */}
          <div className="flex-1">
            <img
              src="/images/home/doctors.jpg"
              alt="Who We Are"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Mission Statement
            </h2>
            <p className="text-sm md:text-lg">
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
      <section id="benefits" className="py-8 bg-white rounded-lg shadow-md">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card Examples */}
            {[
              {
                icon: "fas fa-user-md",
                title: "Experienced Professionals",
                description:
                  "Our team consists of highly skilled and certified professionals with years of experience in the medical imaging industry.",
              },
              {
                icon: "fas fa-microscope",
                title: "State-of-the-Art Technology",
                description:
                  "We utilize cutting-edge imaging technology to ensure accurate diagnostics and unparalleled quality.",
              },
              {
                icon: "fas fa-cogs",
                title: "Flexible Services",
                description:
                  "We provide customizable solutions tailored to the unique requirements of each client.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col"
              >
                <i
                  className={`${benefit.icon} text-blue-600 text-3xl mb-4`}
                ></i>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-700 text-sm mb-4">
                  {benefit.description}
                </p>
                <Link
                  href="/services"
                  className="mt-auto bg-blue-600 text-white py-2 px-4 text-center rounded-lg hover:bg-blue-700 transition"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
