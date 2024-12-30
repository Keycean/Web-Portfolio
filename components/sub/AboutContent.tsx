"use client";
import React, { useEffect, useState } from "react";

const AboutContent = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollingTimeout, setScrollingTimeout] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Clear the timeout if it's already set
      if (scrollingTimeout) {
        clearTimeout(scrollingTimeout);
      }

      // Show the content while scrolling
      setIsScrolling(true);

      // Set a timeout to hide the content after scrolling stops
      const timeout = window.setTimeout(() => {
        setIsScrolling(false);
      }, 10000); // Delay for hiding content after 1 second of inactivity

      setScrollingTimeout(timeout);
    };

    const handleResize = () => {
      // Hide content during zoom/resize
      setIsScrolling(false);
    };

    // Attach scroll and resize event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup event listeners and timeout on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (scrollingTimeout) {
        clearTimeout(scrollingTimeout);
      }
    };
  }, [scrollingTimeout]);

  return (
    <div
      id="about-me-content"
      className={`relative z-[2] flex flex-col items-center justify-center text-center text-white px-4 py-16 transition-opacity duration-700 ${
        isScrolling ? "opacity-100 animate-fade-in" : "opacity-0 animate-fade-out"
      }`}
    >
      {/* Introduction Section */}
      <div>
        <h1 className="text-4xl font-bold mt-2 mb-4">About Me</h1>
        <p className="max-w-2xl text-base md:text-lg leading-7">
          Passionate and forward-thinking web developer dedicated to staying at the forefront
          of technology trends. Committed to continuous learning, eagerly exploring new
          frameworks, libraries, and tools to enhance my skill set and deliver innovative
          solutions.
        </p>
      </div>

      {/* Skills Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-10 px-4">
        <div className="bg-transparent   border-2 border-red-400 transition-colors rounded-lg p-6 w-72 text-center">
          <img
            src="/icons/glowing1.png"
            alt="Front-End Development"
            className="w-50 h-40 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold">Front-End Development</h3>
          <p className="text-sm mt-2">
            Adopting new frameworks to satisfy changing needs, ensuring browser compatibility,
            visually appealing, and user-friendly interfaces.
          </p>
        </div>

        <div className="bg-transparent   border-2 border-red-400 transition-colors rounded-lg p-6 w-72 text-center">
          <img
            src="/icons/glowing2.png"
            alt="Responsive Design"
            className="w-50 h-40 mx-auto mb-4"  
          />
          <h3 className="text-lg font-semibold">Responsive Design</h3>
          <p className="text-sm mt-2">
            Implementing design principles to ensure websites adapt seamlessly to different
            devices for an optimal user experience.
          </p>
        </div>

        <div className="bg-transparent   border-2 border-red-400 transition-colors rounded-lg p-6 w-72 text-center">
          <img
            src="/icons/glowing3.png"
            alt="Back-End Development"
            className="w-55 h-40 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold">Back-End Development</h3>
          <p className="text-sm mt-2">
            Leveraging modern approaches to ensure scalability, security, and seamless
            communication with front-end interfaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
