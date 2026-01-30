import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white flex items-center py-24"
    >
      <div className="max-w-6xl mx-auto px-6 w-full perspective-1500">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium tracking-wider mb-2">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Contact Me
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-lg">
            I’m currently open to new opportunities.  
            Feel free to reach out for projects, collaborations, or just a quick hello.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Info Cards */}
          <div className="space-y-6">
            <div
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/60
              backdrop-blur-lg border border-slate-700 rounded-2xl p-6
              shadow-xl transform-gpu transition-all duration-300
              hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-400">
                Let’s Talk
              </h3>
              <p className="text-slate-400">
                Whether you have a project idea or want to hire a full-stack
                developer, I’d love to hear from you.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/60
              backdrop-blur-lg border border-slate-700 rounded-2xl p-6
              space-y-4 shadow-xl transform-gpu transition-all duration-300
              hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.35)]"
            >
              <p className="text-slate-300">
                📧 <span className="text-slate-400">ashutosh@email.com</span>
              </p>
              <p className="text-slate-300">
                📍 <span className="text-slate-400">India</span>
              </p>
              <p className="text-slate-300">
                💼 <span className="text-slate-400">Open to Remote</span>
              </p>
            </div>
          </div>

          {/* Right Form */}
          <form
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/60
            backdrop-blur-lg border border-slate-700 rounded-2xl p-8
            shadow-2xl transform-gpu transition-all duration-300
            hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_35px_rgba(99,102,241,0.35)]
            space-y-6"
          >
            <div>
              <label className="block text-sm mb-2 text-slate-400">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-slate-950/70 border border-slate-700
                rounded-xl focus:outline-none focus:border-indigo-500
                focus:ring-2 focus:ring-indigo-500/30 transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-slate-400">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-slate-950/70 border border-slate-700
                rounded-xl focus:outline-none focus:border-indigo-500
                focus:ring-2 focus:ring-indigo-500/30 transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-slate-400">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 bg-slate-950/70 border border-slate-700
                rounded-xl focus:outline-none focus:border-indigo-500
                focus:ring-2 focus:ring-indigo-500/30 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold
              bg-gradient-to-r from-indigo-600 to-purple-600
              hover:from-indigo-500 hover:to-purple-500
              shadow-lg transform-gpu transition-all duration-300
              hover:-translate-y-1 hover:scale-105
              hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
