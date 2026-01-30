import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6 perspective-1500">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium mb-2 tracking-wider">
            ABOUT ME
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Who I Am
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left Text */}
          <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
            <p>
              I’m{" "}
              <span className="text-white font-semibold">
                Ashutosh Thakur
              </span>
              , a passionate{" "}
              <span className="text-indigo-400 font-semibold">
                Full-Stack Developer
              </span>{" "}
              with hands-on experience in building modern, scalable web
              applications.
            </p>

            <p>
              I specialize in the{" "}
              <span className="text-purple-400 font-semibold">
                MERN Stack
              </span>{" "}
              — React, Node.js, Express, and MongoDB — and love turning complex
              problems into clean, efficient solutions.
            </p>

            <p>
              My focus is on writing maintainable code, crafting intuitive user
              interfaces, and continuously improving through real-world
              projects.
            </p>

            <p>
              I’m actively looking for opportunities where I can contribute,
              learn, and grow as a software developer.
            </p>
          </div>

          {/* Right Highlights (3D Cards) */}
          <div className="grid grid-cols-2 gap-6">

            {[
              { title: "10+", label: "Projects Built" },
              { title: "1+", label: "Years Learning" },
              { title: "MERN", label: "Tech Stack" },
              { title: "Open", label: "To Work" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 
                border border-slate-700 rounded-2xl p-6 text-center
                shadow-xl transform-gpu transition-all duration-300
                hover:-translate-y-3 hover:scale-105 hover:rotate-2
                hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]"
              >
                <h3 className="text-3xl font-extrabold text-indigo-400">
                  {item.title}
                </h3>
                <p className="text-slate-400 mt-2 tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
