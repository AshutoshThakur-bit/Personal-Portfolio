import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black text-white flex items-center py-28 overflow-hidden"
    >
      {/* Ambient cinematic glow */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-indigo-400 text-sm tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2
            className="text-3xl md:text-5xl font-semibold
            text-transparent bg-clip-text
            bg-gradient-to-r from-white via-indigo-200 to-purple-400
            drop-shadow-[0_10px_40px_rgba(99,102,241,0.25)]"
          >
            Contact Me
          </h2>
          <p className="mt-5 text-white/60 max-w-xl mx-auto text-lg leading-relaxed">
            I’m currently open to new opportunities.  
            Feel free to reach out for projects, collaborations, or just a quick hello.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT — Info Glass Cards */}
          <div className="space-y-6 perspective-[2000px]">

            <div
              className="relative rounded-3xl p-7
              bg-white/10 backdrop-blur-2xl
              border border-white/20
              shadow-[0_25px_80px_rgba(0,0,0,0.6)]
              transform-gpu transition duration-500
              hover:-translate-y-4 hover:scale-105 hover:rotate-x-4 hover:rotate-y-4"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

              <h3 className="relative text-xl font-medium text-white mb-2">
                Let’s Talk
              </h3>
              <p className="relative text-white/60 leading-relaxed">
                Whether you have a project idea or want to hire a full-stack
                developer, I’d love to hear from you.
              </p>
            </div>

            <div
              className="relative rounded-3xl p-7 space-y-4
              bg-white/10 backdrop-blur-2xl
              border border-white/20
              shadow-[0_25px_80px_rgba(0,0,0,0.6)]
              transform-gpu transition duration-500
              hover:-translate-y-4 hover:scale-105 hover:rotate-x-4 hover:rotate-y-4"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

              <p className="relative text-white/70">
                📧 <span className="text-white/60">ashuuthakur001@email.com</span>
              </p>
              <p className="relative text-white/70">
                📍 <span className="text-white/60">India</span>
              </p>
              <p className="relative text-white/70">
                💼 <span className="text-white/60">Open to Remote</span>
              </p>
            </div>
          </div>

          {/* RIGHT — Glass Contact Form */}
          <form
            className="relative rounded-3xl p-8
            bg-white/10 backdrop-blur-2xl
            border border-white/20
            shadow-[0_35px_100px_rgba(0,0,0,0.75)]
            transform-gpu transition duration-500
            hover:-translate-y-4 hover:scale-105
            space-y-6"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

            <div className="relative">
              <label className="block text-sm mb-2 text-white/60">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl
                bg-black/40 border border-white/20 text-white
                focus:outline-none focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-400/30 transition"
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-2 text-white/60">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl
                bg-black/40 border border-white/20 text-white
                focus:outline-none focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-400/30 transition"
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-2 text-white/60">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl
                bg-black/40 border border-white/20 text-white
                focus:outline-none focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-400/30 transition"
              />
            </div>

            <button
              type="submit"
              className="relative w-full py-3 rounded-full font-medium
              bg-gradient-to-r from-indigo-500 to-purple-500
              shadow-[0_15px_40px_rgba(99,102,241,0.45)]
              transition transform hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(99,102,241,0.65)]"
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
