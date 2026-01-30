import React from "react";

const projects = [
  {
    title: "Farmer Marketplace",
    description:
      "A full-stack MERN application that connects farmers directly with customers. Features authentication, orders, dashboard, and analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/AshutoshThakur-bit/Local-Farmer-App.git",
    
  },
  {
    title: "Books E-Commerce Website",
    description:
      "A full-stack e-commerce platform for buying and selling books with secure authentication, product management, cart, orders, and admin dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/AshutoshThakur-bit/BOOK-E-Commerce-Project.git",
    
  },
  {
    title: "AI Code Review System",
    description:
      "An AI-powered code review platform using Google Gemini API to analyze code, suggest optimizations, and improve code quality automatically.",
    tech: ["React", "Node.js", "Express", "Google Gemini API"],
    github: "https://github.com/AshutoshThakur-bit/CODE-REVIEW.git",
    
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern and responsive developer portfolio built with React and Tailwind CSS showcasing projects, skills, and contact information.",
    tech: ["React", "Tailwind CSS"],
    github: "#",
    
  },
];


const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-indigo-500 font-medium mb-2">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Projects
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Here are some of the projects I’ve built to sharpen my skills and
            solve real-world problems.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-indigo-500 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-slate-800 rounded-full text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
                >
                  GitHub →
                </a>
               
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;
