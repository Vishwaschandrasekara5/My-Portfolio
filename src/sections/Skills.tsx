import { useState, useEffect } from 'react';

const skills = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
      }, 2000); // Decreased duration to 2 seconds for faster animation
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my academic journey and personal projects.
          </p>
        </div>

        <div 
          className="relative h-[400px] overflow-hidden mx-auto max-w-5xl" // Increased height and added max width
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute w-full flex items-center justify-center" style={{ top: '50%', transform: 'translateY(-50%)' }}>
            {skills.map((skill, index) => {
              const position = (index - currentIndex + skills.length) % skills.length;
              const isCenter = position === 0;
              const offset = position < skills.length / 2 ? position : position - skills.length;
              const distance = Math.abs(offset);
              
              return (
                <div
                  key={skill.name}
                  className="absolute transition-all duration-300 transform" // Decreased duration from 500 to 300
                  style={{
                    transform: `translateX(${offset * 150}px) scale(${isCenter ? 1.8 : Math.max(0.7, 1 - distance * 0.25)})`,
                    opacity: isCenter ? 1 : Math.max(0.2, 0.7 - distance * 0.2),
                    zIndex: isCenter ? 10 : Math.max(0, 10 - distance),
                    pointerEvents: isCenter ? 'auto' : 'none',
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className={`p-4 rounded-xl ${isCenter ? 'bg-[#1a2333]/50 backdrop-blur-sm' : ''}`}>
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className={`w-20 h-20 ${isCenter ? 'filter drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]' : ''}`}
                        style={{ filter: skill.name === 'AWS' ? 'brightness(0) invert(1)' : undefined }}
                      />
                    </div>
                    <span 
                      className={`mt-4 text-sm transition-all duration-500 
                        ${isCenter ? 'text-blue-400 font-bold text-lg' : 'text-gray-400'}`}
                    >
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;