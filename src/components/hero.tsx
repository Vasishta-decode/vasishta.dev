import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-600 to-black dark:from-[#0f172a] dark:via-gray-900 dark:to-black rounded-b-[15px] transform-gpu">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-400 dark:bg-blue-500 rounded-full filter blur-3xl animate-blob transform-gpu"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600 dark:bg-blue-600 rounded-full filter blur-3xl animate-blob animation-delay-2000 transform-gpu"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-700 dark:bg-blue-700 rounded-full filter blur-3xl animate-blob animation-delay-4000 transform-gpu"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-gray-300 mb-6 opacity-0 animate-fade-in-up transform-gpu">
            <span className="bg-gradient-to-r from-blue-200 to-white dark:from-gray-300 dark:to-gray-200 bg-clip-text text-transparent">
              Creative Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 dark:text-gray-400 mb-10 opacity-0 animate-fade-in-up animation-delay-300 transform-gpu">
            I build beautiful, functional, and responsive websites with modern technologies.
          </p>
          <div className="opacity-0 animate-fade-in-up animation-delay-600 transform-gpu">
            <a 
              href="#projects" 
              className="inline-block px-8 py-4 bg-white text-black font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 hover:scale-105"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white dark:text-gray-400 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;