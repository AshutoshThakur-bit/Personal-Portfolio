import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";

import Contact from "./components/Contact";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import TechStack from "./components/TechStack";
import Resume from "./components/Resume";

const App = () => {
  return (
    <Router>
      {/* Global Navbar */}
      <Navbar />
      
      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills/" element={<TechStack/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>

      {/* Global Footer */}
      <Footer/>
    </Router>
  );
};

export default App;
