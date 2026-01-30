import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center perspective-1500">
        
        {/* Left Content */}
        <div className="space-y-4">
          <p className="text-indigo-500 font-medium mb-3 tracking-wide animate-pulse">
            Hi, my name is
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 transform-gpu transition-transform hover:-translate-y-2 hover:scale-105">
            Ashutosh Thakur
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mt-2 hover:text-indigo-400 transition-colors">
            I build modern web applications.
          </h2>

          <p className="mt-6 text-slate-400 max-w-xl leading-relaxed text-lg">
            I’m a full-stack developer specializing in building scalable,
            high-performance web applications using <span className="text-indigo-400 font-semibold">React</span>, <span className="text-purple-400 font-semibold">Node.js</span>, <span className="text-pink-400 font-semibold">Express</span>, and <span className="text-green-400 font-semibold">MongoDB</span>.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl font-medium shadow-lg transform-gpu transition-transform hover:-translate-y-1 hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 border border-slate-600 hover:border-indigo-500 rounded-xl font-medium transition transform-gpu hover:-translate-y-1 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side (3D Code Card) */}
        <div className="hidden md:flex justify-center">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl w-full max-w-md transform-gpu transition-transform hover:-translate-y-3 hover:rotate-3 hover:scale-105">
            <pre className="text-sm text-slate-300 font-mono animate-pulse">
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
