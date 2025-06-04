import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Using URL import for images with spaces in filename
import dashboardImg from '../img/UI Dashboard.png';
import modernbusinessImg from '../img/Modern-Business.png';
import canobeachImg from '../img/canobeach.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'UI Dashboard',
    description: 'A modern and responsive UI dashboard with a clean interface. Features include dark mode support, interactive charts, real-time analytics, and customizable widgets. Built with React and styled using Tailwind CSS.',
    image: dashboardImg,
    tags: ['React', 'Tailwind CSS', 'Dashboard UI', 'Responsive Design'],
    demoUrl: 'https://learning-dashboard-green.vercel.app/',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Modern Business',
    description: 'A modern business website with a clean interface. Features include dark mode support, interactive charts, real-time analytics, and customizable widgets. Built with React and styled using Tailwind CSS.',
    image: modernbusinessImg,
    tags: ['React', 'Socket.io', 'PostgreSQL', 'Express'],
    demoUrl: 'https://modern-business-ashen.vercel.app/',
    githubUrl: '#'
  },
   
  {
    id: 3,
    title: 'Luxury by the beach',
    description: 'A luxury beach resort website with a clean interface. Features include dark mode support, interactive charts, real-time analytics, and customizable widgets. Built with React and styled using Tailwind CSS.',
    image: canobeachImg,
    tags: ['React', 'API Integration', 'CSS'],
    demoUrl: 'https://canobeach-qgzz.vercel.app/',
    githubUrl: '#'
  },
  /*
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A portfolio website showcasing my projects and skills. Built with React and Tailwind CSS.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg',
    tags: ['React', 'Tailwind CSS'],
    demoUrl: '#',
    githubUrl: '#'
  }
  */
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const tags = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags)))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
          My Projects
        </h2>

        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === tag
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-black dark:border dark:border-[#414141] text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-[#414141]/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => window.open(project.demoUrl, '_blank', 'noopener,noreferrer')}
              className="bg-white dark:bg-black dark:border dark:border-[#414141] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 transform-gpu group cursor-pointer"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 transform-gpu group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-end transform-gpu">
                  <div className="p-6 w-full">
                    <div className="flex justify-end space-x-4" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors duration-200"
                        aria-label="View Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors duration-200"
                        aria-label="View on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-white/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-[#414141]/30 dark:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;