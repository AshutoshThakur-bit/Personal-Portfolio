import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ SAME menu config (UNCHANGED)
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Apple-style Glass Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl
        rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
        
        <div className="flex items-center justify-between px-6 py-3">
          
          {/* Logo (clean Apple feel) */}
          <div className="text-lg font-semibold tracking-wide text-white">
            Portfolio<span className="text-indigo-400">.</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.path}
                  className="transition hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* Resume Button */}
            <li>
              <a
                href="/resume"
                className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md
                  text-white text-sm font-medium border border-white/30
                  transition hover:bg-white/30"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </div>
        </div>
      </nav>

      {/* Apple-style Bottom Sheet Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
          <div className="absolute bottom-0 w-full rounded-t-3xl
            bg-white/10 backdrop-blur-2xl border-t border-white/20 shadow-2xl">

            {/* iOS drag handle */}
            <div className="flex justify-center py-2">
              <div className="h-1 w-12 rounded-full bg-white/30" />
            </div>

            <ul className="flex flex-col items-center gap-6 py-6 text-white text-lg">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="transition hover:opacity-80"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <a
                href="/resume"
                className="mt-2 px-6 py-2 rounded-full bg-indigo-500
                  text-white font-medium shadow-lg"
              >
                Resume
              </a>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
