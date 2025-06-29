import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Linkedin, Mail } from 'lucide-react';
import profile from '../assets/profile.jpeg';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 overflow-hidden">
            <img 
              src={profile} 
              alt="Profile" 
              className="w-full h-full rounded-full transition-transform duration-300 ease-in-out cursor-pointer"
              style={{
                transform: 'scale(1) translateY(0)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.5) translateY(8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
              }}
            />
          </div>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Muhammad Usman
          <span className="block text-blue-600">Shafaqat</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Full-Stack Developer & AI Solutions Architect
          <span className="block mt-2 text-lg">
            Specializing in modern web technologies, AI/ML systems, and enterprise applications
          </span>
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={scrollToAbout}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore My Work
          </button>
          
          <div className="flex items-center gap-4">
            <a
              href="mailto:m.usmanshafaqat@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-gray-700 hover:text-blue-600"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohammad-usman-b02923165/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://www.linkedin.com/in/mohammad-usman-b02923165/', '_blank', 'noopener,noreferrer');
              }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={20} />
            </a>

          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;