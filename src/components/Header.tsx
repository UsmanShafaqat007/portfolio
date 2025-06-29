import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#technical-skills', label: 'Technical Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate(`/${href}`);
      setIsMenuOpen(false);
      return;
    }

    // If we're on homepage, scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL with hash
      window.history.pushState(null, '', href);
    }
    setIsMenuOpen(false);
  };

  const handleAllProjects = () => {
    navigate('/projects');
    setIsMenuOpen(false);
  };

  // Handle initial hash navigation when component mounts or location changes
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold text-gray-900 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <span className="text-blue-600">U</span>sman
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleAllProjects}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
            >
              All Projects
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleAllProjects}
              className="block w-full text-left px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200 font-medium border-t border-gray-100 mt-2 pt-4"
            >
              All Projects
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;