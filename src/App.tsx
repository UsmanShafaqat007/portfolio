import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './components/AllProjects';

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechnicalSkills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function AllProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <AllProjects />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;