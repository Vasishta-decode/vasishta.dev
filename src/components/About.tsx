import React from 'react';
import profileImage from '../img/HemanthR.jpg'; 


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
            About Me
          </h2>
          
          <div className="bg-white dark:bg-black rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-bl from-blue-600 to-blue-900 p-8 flex flex-col justify-center items-center">
                <div className="w-48 h-48 rounded-full border-4 border-white overflow-hidden mb-6 group">
                  <img 
                    src={profileImage}
                    alt="Profile" 
                    className="w-full h-full object-cover transition-transform duration-500 transform-gpu group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">Vasishta R</h3>
                <p className="text-blue-100 text-center">Full Stack Developer</p>
              </div>
              
              <div className="md:w-2/3 p-8 dark:bg-black">
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-white mb-4">
                    I'm a passionate full-stack developer with over 2+ years of experience creating beautiful, 
                    functional, and user-centered digital experiences. I'm constantly exploring new technologies 
                    and techniques to push the boundaries of what's possible on the web.
                  </p>
                  <p className="text-gray-700 dark:text-white mb-4">
                    With a background in both design and development, I bring a unique perspective to each project, 
                    ensuring that aesthetics and functionality work in perfect harmony. I believe in writing clean, 
                    maintainable code and creating intuitive user experiences.
                  </p>
                  <p className="text-gray-700 dark:text-white">
                    When I'm not coding, you can find me hiking in the mountains of caffines, experimenting with new cooking recipes, 
                    or reading about emerging technologies and design trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;