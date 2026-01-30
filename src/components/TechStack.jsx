import React from "react";

const techStack = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "REST APIs"],
  languages: ["JavaScript", "Java", "Python"],
  database: ["MongoDB"],
  tools: ["Git", "GitHub", "Postman", "VS Code"],
};

const TechStack = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6 perspective-1500">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium tracking-wider mb-2">
            TECH STACK
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Skills & Tools
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-lg">
            Technologies I use to build scalable, high-performance applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {Object.entries(techStack).map(([category, skills], index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/60
              backdrop-blur-lg border border-slate-700 rounded-2xl p-8
              shadow-xl transform-gpu transition-all duration-300
              hover:-translate-y-4 hover:scale-105 hover:rotate-1
              hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]"
            >
              <h3 className="text-xl font-semibold mb-6 text-indigo-400 capitalize tracking-wide">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full text-sm font-medium
                    bg-slate-800/80 text-slate-300
                    border border-slate-700
                    transition-all duration-300 transform-gpu
                    hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600
                    hover:text-white hover:-translate-y-1 hover:scale-105
                    hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TechStack;
