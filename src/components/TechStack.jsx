import React from "react";

const techStack = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "REST APIs"],
  languages: ["JavaScript", "Java", "Python"],
  database: ["MongoDB","MySQL"],
  tools: ["Git", "GitHub", "Postman", "VS Code"],
};

const TechStack = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black text-white py-28 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-indigo-400 font-medium tracking-widest mb-2">
            TECH STACK
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Skills & Tools
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-lg">
            Technologies I use to build scalable, production-ready applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(techStack).map(([category, skills], index) => (
            <div
              key={index}
              className="group bg-white/[0.03] backdrop-blur-xl
              border border-white/[0.08] rounded-2xl p-8
              transition-all duration-300
              hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]"
            >
              <h3 className="text-xl font-semibold mb-6 text-indigo-400 capitalize tracking-wide">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full text-sm font-medium
                    bg-white/[0.04] text-white/70
                    border border-white/[0.08]
                    transition-all duration-300
                    group-hover:border-indigo-500/40
                    hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600
                    hover:text-white hover:-translate-y-1
                    hover:shadow-[0_0_18px_rgba(99,102,241,0.45)]"
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
