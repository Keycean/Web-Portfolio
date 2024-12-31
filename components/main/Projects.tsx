"use client";
import React, { useRef } from "react";

const Projects = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: scrollContainer.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -scrollContainer.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const projects = [
    { img: "/NextWebsite.png", title: "Modern Next.js Portfolio", link: "https://your-next-portfolio.com" },
    { img: "/CardImage.png", title: "Interactive Cards", link: "https://your-card-website.com" },
    { img: "/SpaceWebsite.png", title: "Space Themed Website", link: "https://space-website.com" },
    { img: "/Ecommerce.png", title: "E-commerce Platform", link: "https://ecommerce-platform.com" },
    { img: "/BlogPlatform.png", title: "Blog Platform", link: "https://blog-platform.com" },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 py-20">
        My Projects
      </h1>
      <div className="relative w-full max-w-6xl">
        <div
          ref={scrollContainer}
          className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 snap-start flex flex-col items-center justify-center px-4"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[300px] object-cover mb-6"
              />
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg text-center"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Projects;
