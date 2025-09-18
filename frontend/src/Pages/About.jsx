import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-red-600 mb-6">About Us</h1>

      {/* Description */}
      <div className="max-w-3xl text-center text-gray-700 space-y-4">
        <p>
          Welcome to <span className="font-semibold text-red-500">CarExpert</span> — your ultimate car solution platform! 
          We help car owners diagnose issues, explore car models, and get quick solutions for common car problems.
        </p>
        <p>
          Our mission is to make car maintenance simple and accessible for everyone. Whether you're a beginner or a car enthusiast, 
          our platform provides easy-to-understand guidance for a wide variety of car brands and models.
        </p>
        <p>
          Using AI-driven solutions, we help identify potential issues based on your car's symptoms and provide practical solutions, 
          saving time and money.
        </p>
      </div>

      {/* Optional image */}
      <img
        src="/public/img1.jpg"
        alt="Cars Illustration"
        className="mt-8 w-full max-w-lg rounded-xl shadow-lg"
      />
    </div>
  );
};

export default About;
