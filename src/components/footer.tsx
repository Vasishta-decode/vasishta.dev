import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black py-8 border-t border-gray-200 dark:border-[#414141]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Portfolio Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Building beautiful digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">
                Email: zain.r.professional@gmail.com
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                Phone: +91 807-351-9760
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                Location: Tech Park, Brigade Road, Bangalore
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-[#414141]">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © 2025 Portfolio. Made with <span className="text-red-500">♥</span> by Vasishta R
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;