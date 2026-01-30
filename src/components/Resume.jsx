import React from "react";

const projects = [
  {
    name: "Books E-Commerce Platform",
    date: "Feb 2025",
    link: "https://github.com/AshutoshThakur-bit/BOOK-E-Commerce-Project.git",
    points: [
      "Built production-ready full-stack e-commerce platform supporting 100+ users",
      "Implemented secure authentication using JWT and bcrypt",
      "Developed responsive UI and admin dashboard",
      "Optimized performance to sub-3-second load time",
    ],
  },
  {
    name: "AI-Powered Code Reviewer",
    date: "Aug 2025",
    link: "https://github.com/AshutoshThakur-bit/CODE-REVIEW.git",
    points: [
      "Developed AI-based code review system using Google Gemini API",
      "Provided intelligent refactoring and optimization feedback",
      "Reduced manual code review effort through automation",
    ],
  },
  {
    name: "Real-Time Live Tracking System",
    date: "Jan 2025",
    link: "https://github.com/AshutoshThakur-bit/LiveTracking",
    points: [
      "Built real-time tracking system with sub-second updates",
      "Implemented JWT authentication and role-based access control",
      "Improved backend performance by 35%",
    ],
  },
];

const skills = {
  Frontend: [
    "React.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
  ],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB (Schema Design, Indexing, TTL)"],
  Security: ["JWT", "bcrypt", "Role-Based Access Control"],
  Realtime: ["Redux", "WebSockets", "Socket.io"],
  Tools: ["Google Gemini API", "Git", "GitHub", "Postman"],
  Languages: ["Java", "JavaScript"],
};

const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    org: "Royal Educational Institute, Ghaziabad",
    date: "2023 – 2026 (Expected)",
  },
  {
    title: "Senior Secondary (Class XII, CBSE)",
    org: "Science Stream",
    date: "2023",
  },
  {
    title: "Secondary (Class X, CBSE)",
    org: "2021",
    date: "",
  },
];

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6 perspective-1500">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Ashutosh Thakur
          </h2>
          <p className="text-slate-400 mt-2">
            New Delhi, India • ashuuthakur001@gmail.com • +91-8700377423
          </p>
        </div>

        {/* Professional Summary */}
        <section className="mb-20">
          <h3 className="text-2xl font-semibold text-indigo-400 mb-4">
            Professional Summary
          </h3>
          <p className="text-slate-300 leading-relaxed">
            Full-Stack Developer (MERN) and Computer Applications undergraduate
            with strong experience in building secure, scalable, and
            performance-optimized web applications. Proficient in React.js,
            Node.js, Express.js, and MongoDB, with hands-on experience integrating
            AI solutions using Google Gemini API. Skilled in system design, REST
            API development, authentication, and real-time applications.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h3 className="text-2xl font-semibold text-indigo-400 mb-10">
            Projects
          </h3>
          <div className="space-y-10">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="bg-slate-900/80 border border-slate-700 rounded-2xl p-8
                transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h4 className="text-xl font-bold">
                  {proj.name}{" "}
                  <span className="text-slate-400 text-sm">
                    ({proj.date})
                  </span>
                </h4>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 text-sm underline"
                >
                  GitHub Repository
                </a>
                <ul className="list-disc list-inside mt-4 text-slate-300 space-y-2">
                  {proj.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h3 className="text-2xl font-semibold text-indigo-400 mb-10">
            Core Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([key, values]) => (
              <div
                key={key}
                className="bg-slate-900/80 border border-slate-700 rounded-xl p-6
                transform-gpu transition hover:-translate-y-1"
              >
                <h4 className="text-indigo-400 font-semibold mb-3">
                  {key}
                </h4>
                <p className="text-slate-300">
                  {values.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h3 className="text-2xl font-semibold text-indigo-400 mb-10">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="bg-slate-900/80 border border-slate-700 rounded-xl p-6
                transform-gpu transition hover:-translate-y-1"
              >
                <h4 className="font-bold">{edu.title}</h4>
                <p className="text-slate-400">{edu.org}</p>
                {edu.date && (
                  <p className="text-slate-500">{edu.date}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section>
          <h3 className="text-2xl font-semibold text-indigo-400 mb-4">
            Languages
          </h3>
          <p className="text-slate-300">Hindi, English</p>
        </section>

      </div>
    </section>
  );
};

export default Resume;
