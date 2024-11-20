import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Ultrasound Staffing",
      description:
        "Connect with top-tier ultrasound professionals for your facility.",
      image: "/images/services/staffing.jpg",
      link: "/services",
    },
    {
      title: "Diagnostic Imaging",
      description:
        "Comprehensive diagnostic imaging services for accurate results.",
      image: "/images/services/imaging.jpg",
      link: "/services",
    },
    {
      title: "Mobile Ultrasound",
      description: "Convenient on-site ultrasound services for your patients.",
      image: "/images/services/mobile.jpg",
      link: "/services",
    },
    {
      title: "Nursing Classes",
      description: "Advance your career with our specialized nursing classes.",
      image: "/images/services/nursing.jpg",
      link: "/nursing-classes",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <header
        className="relative h-[75vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home/hero.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            Sono Staffing Solutions
          </h1>
          <p className="text-xl md:text-3xl font-light mb-8">
            Your Partner in Excellence for Medical Imaging and Staffing.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded hover:bg-blue-800 transition"
          >
            Get in Touch
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-8">
            At Sono Staffing Solutions, we specialize in connecting healthcare
            providers with skilled ultrasound professionals and delivering
            state-of-the-art imaging services.
          </p>
          <Link
            href="/about"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded hover:bg-blue-800 transition"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">
                Experienced Professionals
              </h3>
              <p className="text-gray-600">
                Our team comprises certified and experienced imaging experts.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">
                State-of-the-Art Technology
              </h3>
              <p className="text-gray-600">
                We use cutting-edge equipment for accurate diagnostics.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">Flexible Services</h3>
              <p className="text-gray-600">
                Our mobile and on-site solutions fit your needs seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">
            We're here to help! Reach out to us for any inquiries or services.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="tel:+1234567890"
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded hover:bg-gray-200 transition"
            >
              Call Us
            </a>
            <a
              href="mailto:info@sonostaffing.com"
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded hover:bg-gray-200 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
