import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projectData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking.',
    image: 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
    link: '#',
    github: '#',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'Weather Forecast API',
    description: 'RESTful API that provides accurate weather forecasts based on location using external weather data services.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Node.js', 'Express', 'OpenWeatherMap API', 'Jest'],
    link: '#',
    github: '#',
    category: 'backend'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website to showcase projects and skills with interactive elements and smooth animations.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: '#',
    github: '#',
    category: 'frontend'
  },
  {
    id: 5,
    title: 'Inventory Management System',
    description: 'A comprehensive system for tracking inventory levels, orders, sales, and deliveries for small businesses.',
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
    link: '#',
    github: '#',
    category: 'fullstack'
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'A real-time chat application allowing users to create chat rooms, send messages, and share media files.',
    image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
    link: '#',
    github: '#',
    category: 'fullstack'
  }
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