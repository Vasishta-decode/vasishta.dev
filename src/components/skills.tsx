import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'React', level: 90, color: 'from-blue-600 to-blue-400' },
  { name: 'JavaScript', level: 85, color: 'from-blue-500 to-blue-300' },
  { name: 'TypeScript', level: 80, color: 'from-blue-700 to-blue-500' },
  { name: 'Node.js', level: 75, color: 'from-blue-800 to-blue-600' },
  { name: 'HTML/CSS', level: 95, color: 'from-blue-400 to-blue-200' },
  { name: 'UI/UX Design', level: 70, color: 'from-blue-900 to-blue-700' },
];

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
          My Skills
        </h2>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-gray-50 dark:bg-black rounded-lg p-6 shadow-md transform hover:-translate-y-1 transition-transform duration-300 dark:border dark:border-[#414141]"
            >
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                <span className="text-gray-700 dark:text-white">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 dark:bg-[#414141]/30 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 200}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            Technologies I Work With
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Git'].map((tech) => (
              <div 
                key={tech}
                className="flex items-center justify-center p-4 bg-gray-50 dark:bg-black dark:border dark:border-[#414141] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-gray-700 dark:text-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;