import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Ashutosh<span className="text-indigo-500">.</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Full-Stack Developer building scalable and modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition cursor-pointer">Home</li>
              <li className="hover:text-white transition cursor-pointer">About</li>
              <li className="hover:text-white transition cursor-pointer">Projects</li>
              <li className="hover:text-white transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              Connect
            </h4>
            <div className="flex gap-4 text-lg">
              <a href="#" className="hover:text-white transition">GitHub</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm border-t border-slate-800 pt-6">
          © {new Date().getFullYear()} Ashutosh Thakur. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
