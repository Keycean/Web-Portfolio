"use client";
import React, { useEffect } from "react";
import Head from "next/head";

const Projects = () => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper(".swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    // Apply inline styles to navigation buttons
    const nextButton = document.querySelector(".swiper-button-next") as HTMLElement;
    const prevButton = document.querySelector(".swiper-button-prev") as HTMLElement;

    if (nextButton) {
      nextButton.style.color = "orange"; // Change arrow color
      nextButton.style.fontSize = "24px"; // Optional: Adjust size
    }

    if (prevButton) {
      prevButton.style.color = "orange"; // Change arrow color
      prevButton.style.fontSize = "24px"; // Optional: Adjust size
    }

    return () => {
      swiper.destroy(); // Cleanup Swiper instance
    };
  }, []);

  const projects = [
    {
      img: "/NextWebsite.png",
      title: "Modern Next.js Portfolio",
      description: "",
      link: "https://your-next-portfolio.com",
    },
    {
      img: "/CardImage.png",
      title: "Interactive Cards",
      description: "",
      link: "https://your-card-website.com",
    },
    {
      img: "/SpaceWebsite.png",
      title: "Space Themed Website",
      description: "",
      link: "https://space-website.com",
    },
    {
      img: "/Ecommerce.png",
      title: "E-commerce Platform",
      description: " ",
      link: "https://ecommerce-platform.com",
    },
    {
      img: "/BlogPlatform.png",
      title: "Blog Platform",
      description: "",
      link: "https://blog-platform.com",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 " id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 py-20">
        My Projects
      </h1>
      <div className="swiper w-full max-w-6xl px-10 ">
        <div className="swiper-wrapper">
          {projects.map((project, index) => (
            <div key={index} className="swiper-slide">
              <div className="flex flex-col items-center justify-center px-0  ">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[300px] object-cover mb-10"
                />
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-500 text-center">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-6 py-2 mb-10 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg text-center"
                >
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default Projects;
