import { FaCarSide } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="h-[60vh] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 flex flex-col md:flex-row items-center justify-between px-10 md:px-20">
      {/* Left Text */}
      <motion.div
        className="flex flex-col justify-center items-start space-y-4 md:ml-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold italic bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 tracking-wide">
          Welcome to Car Solution
        </h1>
        <p className="text-lg md:text-xl font-semibold italic text-gray-600 tracking-wide">
          Driving solutions for every journey
        </p>
        <NavLink
          to="/explore"
          className="mt-4 cursor-pointer hover:bg-black hover:text-white px-6 py-3 active:scale-[0.92] bg-red-500 text-white font-bold rounded-lg shadow-lg transition duration-300"
        >
          Explore Now To Ask Solution
        </NavLink>
      </motion.div>

      {/* Right Icon */}
      <motion.div
        className="mt-10 md:mt-0 flex justify-center items-center"
        animate={{
          x: ["-60%", "40%", "-50%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <FaCarSide size={180} className="text-gray-700" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
