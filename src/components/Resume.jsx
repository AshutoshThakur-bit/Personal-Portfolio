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
  Frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
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
      className="relative min-h-screen bg-black text-white py-28 overflow-hidden"
    >
      {/* Ambient gradient */}
      <div className="absolute -top-32 left-1/3 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Ashutosh Thakur
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/60">
            New Delhi, India • ashuuthakur001@gmail.com • +91-8700377423
          </p>
        </div>

        {/* Section Wrapper */}
        <div className="space-y-24">

          {/* Summary */}
          <section>
            <h3 className="section-title">Professional Summary</h3>
            <p className="section-text">
              Full-Stack Developer (MERN) and Computer Applications undergraduate
              with experience building secure, scalable, and performance-optimized
              web applications. Strong in React.js, Node.js, Express.js, and MongoDB,
              with hands-on AI integration using Google Gemini API.
            </p>
          </section>

          {/* Projects */}
          <section>
            <h3 className="section-title">Projects</h3>
            <div className="space-y-8">
              {projects.map((proj, i) => (
                <div
                  key={i}
                  className="card hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]"
                >
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <h4 className="text-lg font-semibold">
                      {proj.name}
                      <span className="ml-2 text-sm text-white/50">
                        {proj.date}
                      </span>
                    </h4>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-400 text-sm hover:underline"
                    >
                      GitHub
                    </a>
                  </div>

                  <ul className="mt-4 space-y-2 text-white/70 list-disc list-inside">
                    {proj.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="section-title">Core Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([key, values]) => (
                <div key={key} className="card">
                  <h4 className="text-indigo-400 font-semibold mb-2">
                    {key}
                  </h4>
                  <p className="text-white/70 text-sm">
                    {values.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="section-title">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, i) => (
                <div key={i} className="card">
                  <h4 className="font-semibold">{edu.title}</h4>
                  <p className="text-white/60 text-sm">{edu.org}</p>
                  {edu.date && (
                    <p className="text-white/40 text-sm mt-1">
                      {edu.date}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h3 className="section-title">Languages</h3>
            <p className="text-white/70">Hindi, English</p>
          </section>

        </div>
      </div>

      {/* Utility styles */}
      <style jsx>{`
        .section-title {
          font-size: 1.75rem;
          font-weight: 600;
          color: #a5b4fc;
          margin-bottom: 1rem;
        }
        .section-text {
          color: rgba(255,255,255,0.7);
          line-height: 1.7;
          max-width: 900px;
        }
        .card {
          background: rgba(15,23,42,0.85);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 1rem;
          padding: 1.75rem;
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
        }
      `}</style>
    </section>
  );
};

export default Resume;
