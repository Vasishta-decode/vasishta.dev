import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, default to light mode if not set
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Handle system theme changes - but don't automatically switch
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      // Don't automatically switch theme based on system preference
      // User must explicitly choose dark mode
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-200 transform-gpu ${
        scrolled 
          ? 'backdrop-blur-lg shadow-lg bg-white/80 dark:bg-gray-900/80'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200 bg-clip-text text-transparent"
        >
          Vasishta
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className={`transition-all duration-300 relative ${
                scrolled
                  ? 'text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400'
                  : 'text-gray-100 hover:text-white after:absolute after:w-0 after:h-[2px] after:bg-white after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors duration-300 ${
              scrolled
                ? 'bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-neutral-700'
                : 'bg-gray-100/10 text-gray-100 hover:bg-gray-100/20'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 mr-2 rounded-full transition-colors duration-300 ${
              scrolled
                ? 'bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-100'
                : 'bg-gray-100/10 text-gray-100'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-gray-700 dark:text-gray-100 focus:outline-none`}
            aria-label="Open menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-gray-900 transition-all duration-200 ease-in-out transform-gpu rounded-bl-[2rem] rounded-br-[2rem] ${
          isOpen ? 'max-h-screen opacity-100 shadow-xl' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;