import React from "react";

const Skills = () => {
  const allSkills = [
    "HTML",
    "CSS",
    "PHP",
    "Laravel",
    "JavaScript",
    "React",
    "Typescript",
    "Next",
    "Tailwind",
    "FramerMotion",
    "Node",
    "Express",
    "MySQL",
    "Postgres",
    "Firebase",
    "MongoDB",
    "Stripe",
    "Paypal",
    "TypeScript",
    "Python",
    "Git",
    "Linux",
    "WordPress",
    "Shadcn",
    "MaterialUI",
    "Chakra",
    "Redux",
    "Figma",
  ];

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-10 py-20 bg-transparent text-white overflow-hidden"
    >
      <h2 className="text-5xl font-bold mb-8">Skills</h2>

      <div className="bg-transparent text-white py-5 px-8 rounded shadow-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 justify-center">
        {allSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-transparent text-white py-2 px-2 rounded text-sm shadow-sm"
          >
            <img
              src={`/icons/${skill.toLowerCase().replace(/\s+/g, "-")}.png`}
              alt={skill}
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
            <span className="mt-2 text-center text-xs sm:text-sm">{skill}</span>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-[-10] opacity-30 bg-transparent">
        <video
          className="w-full h-full object-cover"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/redhole1.webm"
        />
      </div>
    </section>
  );
};

export default Skills;