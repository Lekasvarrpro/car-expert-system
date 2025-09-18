import React from "react";

const servicesData = [
  {
    title: "Car Diagnosis",
    description: "Detect issues in your car by describing the symptoms and get quick solutions.",
    icon: "🔧",
  },
  {
    title: "Battery Check",
    description: "Identify battery problems and get guidance on charging, jumpstarting, or replacement.",
    icon: "🔋",
  },
  {
    title: "Oil & Engine Care",
    description: "Learn about oil changes, engine leaks, and maintenance tips for long-lasting performance.",
    icon: "🛢️",
  },
  {
    title: "Brake & Transmission",
    description: "Check for worn-out brake pads, fluid levels, and transmission issues.",
    icon: "🚦",
  },
  {
    title: "EV & Hybrid Support",
    description: "Solutions for electric and hybrid cars including battery and charging issues.",
    icon: "⚡",
  },
  {
    title: "Sensor & ECU",
    description: "Detect faulty sensors or ECU errors and get recommended actions.",
    icon: "💻",
  },
];

const Service = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-red-600 mb-8">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
