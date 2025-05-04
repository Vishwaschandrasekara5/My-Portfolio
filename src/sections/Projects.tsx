import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Attendance from '../assets/attendance.png';
import weather from '../assets/weather.png';
import Bookweb from '../assets/bookweb.png';
import Portfolio from '../assets/portfolio.png';
import Quizz from '../assets/quizz.png';
import Todo from '../assets/todo.png';
import Educom from '../assets/educom.png';
import Quotes from '../assets/quote.png';
import Bookapp from '../assets/bookapp.png';
import Arrow from '../assets/arrow.jpg';


const projectData = [
  {
    id: 1,
    title: 'Real Time Attendance Sytem',
description: 'Real-time attendance system using React and MongoDB for instant tracking, secure storage, and live updates.',
    image: Attendance,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB',],
    link: '#',
    github: '#',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Weather App',
description: 'Weather app using HTML, CSS, and Weather API to display real-time forecasts with clean, responsive design.',
    image: weather,
    technologies: ['Html', 'CSS', 'Weather API',],
    link: '#',
    github: '#',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'Book Store App',
description: 'Bookstore app built with React, TypeScript, Node.js, Express, and Tailwind CSS for smooth browsing and transactions.',
    image: Bookweb,
    technologies: ['Node.js', 'Express', 'React', 'TypeScript'],
    link: '#',
    github: '#',
    category: 'backend'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website to showcase projects and skills with interactive elements and smooth animations.',
    image: Portfolio,
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: '#',
    github: '#',
    category: 'frontend'
  },
  {
    id: 5,
    title: 'Quiz System',
description: 'Interactive quiz system using HTML, Bootstrap, and JavaScript for responsive design and dynamic question handling.',
    image: Quizz,
    technologies: ['HTML', 'Bootstrap', 'JavaScript'],
    link: '#',
    github: '#',
    category: 'fullstack'
  },
  {
    id: 6,
    title: 'To-Do Application',
description: 'To-do application built with HTML, CSS, and JavaScript for managing tasks with a responsive user interface.',
    image: Todo,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    github: '#',
    category: 'fullstack'
  },
  {
    id: 7,
    title: 'Edu-Com Site',
description: 'Fully responsive educational communication site developed using React and Tailwind CSS for seamless learning and collaboration.',
    image: Educom,
    technologies: ['React', 'Tailwind CSS', ],
    link: '#',
    github: '#',
    category: 'frontend'
  },
  {
    id: 8,
    title: 'Quotes Generator App',
    description: 'A mobile app that generates random inspirational quotes with a sleek and user-friendly interface.',
    image: Quotes,
    technologies: ['Flutter', 'Dart',],
    link: '#',
    github: '#',
    category: 'mobile'
  },
  {
    id: 9,
    title: 'Book Store App',
    description: 'A mobile app for browsing and purchasing books with a seamless shopping experience.',
    image: Bookapp,
    technologies: ['Flutter', 'Dart',],
    link: '#',
    github: '#',
    category: 'mobile'
  },
  {
    id: 10,
    title: 'Arrow Following Robot',
    description: 'An IoT project using Raspberry Pi, Python, and OpenCV to create a robot that follows directional arrows.',
    image: Arrow,
    technologies: ['Python', 'OpenCV', 'Raspberry Pi'],
    link: '#',
    github: '#',
    category: 'iot'
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projectData 
    : projectData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project reflects my passion for coding and problem-solving.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full transition-colors ${
                filter === 'all' 
                  ? 'bg-blue-400 text-white' 
                  : 'bg-[#1a2333] text-gray-300 hover:bg-[#1a2333]/70'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('frontend')}
              className={`px-5 py-2 rounded-full transition-colors ${
                filter === 'frontend' 
                  ? 'bg-blue-400 text-white' 
                  : 'bg-[#1a2333] text-gray-300 hover:bg-[#1a2333]/70'
              }`}
            >
              Frontend
            </button>
            <button 
              onClick={() => setFilter('backend')}
              className={`px-5 py-2 rounded-full transition-colors ${
                filter === 'backend' 
                  ? 'bg-blue-400 text-white' 
                  : 'bg-[#1a2333] text-gray-300 hover:bg-[#1a2333]/70'
              }`}
            >
              Backend
            </button>
            <button 
              onClick={() => setFilter('fullstack')}
              className={`px-5 py-2 rounded-full transition-colors ${
                filter === 'fullstack' 
                  ? 'bg-blue-400 text-white' 
                  : 'bg-[#1a2333] text-gray-300 hover:bg-[#1a2333]/70'
              }`}
            >
              Full Stack
            </button>
            <button 
              onClick={() => setFilter('mobile')}
              className={`px-5 py-2 rounded-full transition-colors ${
                filter === 'mobile' 
                  ? 'bg-blue-400 text-white' 
                  : 'bg-[#1a2333] text-gray-300 hover:bg-[#1a2333]/70'
              }`}
            >
              Mobile Apps
            </button>
            <button 
              onClick={() => setFilter('iot')}
              className={`px-5 py-2 rounded-full transition-colors ${
                filter === 'iot' 
                  ? 'bg-blue-400 text-white' 
                  : 'bg-[#1a2333] text-gray-300 hover:bg-[#1a2333]/70'
              }`}
            >
              IoT
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#1a2333] rounded-xl overflow-hidden border border-slate-700/50 shadow-lg transition-all duration-300 hover:shadow-blue-500/20 hover:translate-y-[-5px]"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-[#0B1120] px-2 py-1 rounded text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.github} 
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a 
                    href={project.link} 
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
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