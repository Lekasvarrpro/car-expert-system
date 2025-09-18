import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import ScrollFadeDiv from "./Components/ScrollFadeDiv";
import HeroSection from "./Components/Herosection";

import Cars from "./pages/Cars";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Header */}
      <div className="h-[14vh] bg-white text-wrap border-b-1 flex items-center justify-between gap-10 ">
        <img src="/LOGO.png" height={"100px"} width={"100px"} />
        <div className="flex gap-10  p-2 ">
          <NavLink className="hover:underline hover:underline-offset-20 font-semibold text-lg tracking-[1px]" to="/">Home</NavLink>
          <NavLink className="hover:underline hover:underline-offset-20 font-semibold text-lg tracking-[1px]" to="/cars">Cars</NavLink>
          <NavLink className="hover:underline hover:underline-offset-20 font-semibold text-lg tracking-[1px]" to="/about">About</NavLink>
          <NavLink className="hover:underline hover:underline-offset-20 font-semibold text-lg tracking-[1px]" to="/services">Services</NavLink>
          <NavLink className="hover:underline hover:underline-offset-20 font-semibold text-lg tracking-[1px]" to="/contact">Contact</NavLink>
        </div>
        <div className="mr-10 cursor-pointer rounded-full p-2 border-b-2 hover:bg-black hover:text-white">
          <FaUserCircle size={30} />
        </div>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<><HeroSection /><ScrollFadeDiv /></>} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore/>} />
      </Routes>
    </div>
  );
}

export default App;
