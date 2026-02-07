import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white py-28 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-indigo-400 text-sm tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2
            className="text-3xl md:text-5xl font-semibold
            text-transparent bg-clip-text
            bg-gradient-to-r from-white via-indigo-200 to-purple-400
            drop-shadow-[0_10px_40px_rgba(99,102,241,0.25)]"
          >
            Who I Am
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Professional Text */}
          <div className="space-y-6 text-white/65 text-lg leading-relaxed">
            <p>
              I’m{" "}
              <span className="text-white font-medium">
                Ashutosh Thakur
              </span>
              , a passionate{" "}
              <span className="text-indigo-400 font-medium">
                Full-Stack Developer
              </span>{" "}
              with hands-on experience in building modern, scalable web
              applications.
            </p>

            <p>
              I specialize in the{" "}
              <span className="text-purple-400 font-medium">
                MERN Stack
              </span>{" "}
              — React, Node.js, Express, and MongoDB — and enjoy transforming
              complex problems into clean, efficient solutions.
            </p>

            <p>
              My focus is on writing maintainable code, designing intuitive user
              interfaces, and continuously improving through real-world
              projects.
            </p>

            <p>
              I’m actively looking for opportunities where I can contribute,
              learn, and grow as a software developer.
            </p>
          </div>

          {/* Right — Premium Glass Stat Cards */}
          <div className="grid grid-cols-2 gap-6 perspective-[2000px]">
            {[
              { title: "10+", label: "Projects Built" },
              { title: "1+", label: "Years Learning" },
              { title: "MERN", label: "Tech Stack" },
              { title: "Open", label: "To Work" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative rounded-3xl p-6 text-center
                bg-white/10 backdrop-blur-2xl
                border border-white/20
                shadow-[0_25px_80px_rgba(0,0,0,0.6)]
                transform-gpu transition duration-500
                hover:-translate-y-4 hover:scale-105
                hover:rotate-x-6 hover:rotate-y-6"
              >
                {/* Glass highlight */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                <h3 className="relative text-3xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-white/60 tracking-wide text-sm">
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
