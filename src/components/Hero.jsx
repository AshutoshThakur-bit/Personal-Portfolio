import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black text-white overflow-hidden"
    >
      {/* Cinematic background lights */}
      <div className="absolute inset-0">
        <div className="absolute -top-48 left-1/4 w-[700px] h-[700px] bg-indigo-500/20 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 -right-48 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT — Text content */}
        <div className="space-y-7">
          <p className="text-indigo-400 text-sm tracking-widest uppercase">
            Hi, my name is
          </p>

          {/* Hero Name — Apple showcase text */}
          <h1
            className="text-5xl md:text-7xl font-semibold leading-tight
            text-transparent bg-clip-text
            bg-gradient-to-br from-white via-indigo-200 to-purple-400
            drop-shadow-[0_20px_60px_rgba(99,102,241,0.35)]"
          >
            Ashutosh Thakur
          </h1>

          <h2 className="text-2xl md:text-4xl font-medium text-white/70">
            I build modern web applications.
          </h2>

          <p className="mt-6 max-w-xl text-white/60 text-lg leading-relaxed">
            I’m a full-stack developer specializing in building scalable,
            high-performance web applications using{" "}
            <span className="text-white font-medium">React</span>,{" "}
            <span className="text-white font-medium">Node.js</span>,{" "}
            <span className="text-white font-medium">Express</span>, and{" "}
            <span className="text-white font-medium">MongoDB</span>.
          </p>

          {/* CTA Buttons — floating premium */}
          <div className="mt-10 flex gap-5">
            <a
              href="/projects"
              className="px-8 py-3 rounded-full bg-white text-black font-medium
              shadow-[0_15px_40px_rgba(255,255,255,0.25)]
              transition transform hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(255,255,255,0.35)]"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-8 py-3 rounded-full border border-white/30
              text-white font-medium backdrop-blur-xl
              transition transform hover:-translate-y-1 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT — Cinematic 3D Glass Card */}
        <div className="hidden md:flex justify-center perspective-[2000px]">
          <div
            className="relative w-full max-w-md rounded-[28px]
            bg-white/10 backdrop-blur-2xl
            border border-white/20
            shadow-[0_40px_120px_rgba(0,0,0,0.7)]
            p-7
            transform-gpu transition duration-700
            hover:-translate-y-6 hover:scale-105
            hover:rotate-x-8 hover:rotate-y-8"
          >
            {/* Glass highlight */}
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

            <pre className="relative text-sm text-white/80 font-mono">
              <code>
{`const developer = {
  name: "Ashutosh",
  role: "Full Stack Developer",
  skills: ["React", "Node", "MongoDB"],
  passion: "Building scalable apps"
};`}
              </code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
