import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Menu config (IMPORTANT CHANGE)
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-gradient-to-r from-slate-900/95 via-indigo-900/90 to-purple-900/90 backdrop-blur-lg border-b border-slate-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between perspective-1500">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-white transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:rotate-6 hover:scale-105 text-shadow-lg">
          Portfolio<span className="text-indigo-400">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-slate-300">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="cursor-pointer transform-gpu transition duration-300 hover:-translate-y-2 hover:scale-110 hover:text-indigo-400 hover:shadow-[0_0_10px_rgba(79,70,229,0.6)]"
            >
              <a href={item.path}>{item.label}</a>
            </li>
          ))}

          {/* Resume Button */}
          <li>
            <a
              href="/resume"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg transition-transform transform-gpu hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:from-indigo-500 hover:to-purple-500"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer transform-gpu transition-transform hover:rotate-12 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-b from-slate-900/95 via-indigo-900/90 to-purple-900/90 backdrop-blur-lg border-t border-slate-800 shadow-inner flex flex-col items-center gap-4 py-4 text-slate-300">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="cursor-pointer transform-gpu transition duration-300 hover:-translate-y-1 hover:scale-105 hover:text-indigo-400 hover:shadow-[0_0_8px_rgba(79,70,229,0.5)]"
            >
              <a href={item.path}>{item.label}</a>
            </li>
          ))}

          <li>
            <a
              href="/resume"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg transition-transform transform-gpu hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:from-indigo-500 hover:to-purple-500"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
