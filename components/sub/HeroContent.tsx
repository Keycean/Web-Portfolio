"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";

const hoverEffect = {
  color: ["#ff0000", "#ff6600", "#ffffff"], // Red to orange to white
  x: [0, -2, 2, -1, 1, 0], // Shaking effect
  transition: { duration: 0.4 },
};

const underlineEffect = {
  backgroundColor: "#ff6600",
  scaleX: 1,
  transition: { duration: 0.3, ease: "easeInOut" },
};

const rotationAnimation = {
  animate: {
    rotate: [0, 360], // Rotate from 0 to 360 degrees
  },
  transition: {
    duration: 10, // 10 seconds for a full rotation
    ease: "linear",
    repeat: Infinity, // Infinite rotation
  },
};

const HeroContent: React.FC = () => {
  // Function to make words interactive
  const interactiveText = (text: string): JSX.Element[] =>
    text.split(" ").map((word: string, index: number) => (
      <motion.span
        key={index}
        whileHover={hoverEffect}
        className="inline-block cursor-pointer relative"
      >
        {word}
        {/* Underline animation */}
        <motion.span
          className="absolute left-0 bottom-0 h-[2px] w-full bg-transparent origin-left"
          whileHover={underlineEffect}
          initial={{ scaleX: 0 }}
        />
        &nbsp;
      </motion.span>
    ));

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Hi Section */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>{interactiveText("Hi,")}</span>
        </motion.div>

        {/* I am Keycean Section */}
        <motion.div
          variants={slideInFromLeft(0.6)}
          className="text-6xl font-bold text-white bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 max-w-[600px]"
        >
          {interactiveText("I am Keycean")}
        </motion.div>

        {/* Web Developer Section */}
        <motion.div
          variants={slideInFromLeft(0.7)}
          className="text-6xl font-bold text-white"
        >
          {interactiveText("web developer")}
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Developer with knowledge in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          variants={slideInFromLeft(1)}
          className="py-2 bg-gradient-to-r from-red-500 to-orange-500 text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Contact Me!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <motion.div
          {...rotationAnimation} // Add rotation animation here
          className="flex items-center justify-center"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            className=""
            height={650}
            width={650}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
