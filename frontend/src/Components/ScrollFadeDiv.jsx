import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ScrollFadeSection = ({ imgSrc, content, reverse }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" }); // detects in view
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={`h-[40vh] ml-20 w-[90vw] flex shadow-lg shadow-gray-400 bg-gray-200 justify-between items-center rounded-lg mt-60 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      <div>
        <img
          src={imgSrc}
          className="ml-10 mr-30 rounded-full"
          height={400}
          width={280}
        />
      </div>
      <div className="w-[50vw] mr-10 ml-10 font-semibold font-sans text-lg tracking-[2.5px] break-words">
        <p>{content}</p>
      </div>
    </motion.div>
  );
};

const ScrollFadeDiv = () => {
  return (
    <div>
      <p className="text-2xl font-bold text-center relative top-40 text-slate-500">
        Online Solution
      </p>

      <ScrollFadeSection
        imgSrc="/img1.jpg"
        content="Helps you manage all your car-related needs from the comfort of your home. Whether you are looking to book a new car, schedule maintenance, find the perfect car solution, or access expert advice, we make it simple and convenient. With an easy-to-use platform, you can browse a wide range of cars, compare features, and make informed decisions without any hassle."
        reverse={false}
      />

      <p className="text-2xl font-bold text-center relative top-40 text-slate-500">
        Over 30+ cars solutions
      </p>

      <ScrollFadeSection
        imgSrc="/img2.png"
        content="30 different car solutions designed to meet every need of car owners and enthusiasts. Whether you are looking for car maintenance, booking services, repair solutions, or expert guidance, our platform has it all.  
                Each solution is tailored for convenience, reliability, and efficiency, allowing you to compare options, choose the best fit, and handle everything from the comfort of your home. With our extensive range, you get access to comprehensive car services without the hassle, saving both time and effort while ensuring quality care for your vehicle."
        reverse={true}
      />

      <p className="text-2xl font-bold text-center relative top-40 text-slate-500">
        Every Solution is handled
      </p>

      <ScrollFadeSection
        imgSrc="/img3.jpg"
        content="Every car that comes to us is handled with atmost care. Our team of experts ensures that each vehicle receives the best solutions available, from routine maintenance and repairs to performance enhancements and customizations.  
            We combine experience, advanced tools, and quality standards to deliver reliable and efficient services. With our solutions, your car stays in peak condition, giving you peace of mind and confidence on the road. Quality, safety, and satisfaction are our top priorities for every vehicle we service."
        reverse={false}
      />
    </div>
  );
};

export default ScrollFadeDiv;
