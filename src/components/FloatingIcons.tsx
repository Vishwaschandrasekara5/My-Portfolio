import React from 'react';

// Programming languages and technologies
const technologies = [
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Java', color: '#007396' },
  { name: 'HTML', color: '#E34F26' },
  { name: 'CSS', color: '#1572B6' },
  { name: 'PHP', color: '#777BB4' },
  { name: 'C++', color: '#00599C' },
  { name: 'SQL', color: '#4479A1' },
  { name: 'Git', color: '#F05032' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'GraphQL', color: '#E10098' },
];

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="absolute rounded-lg px-3 py-2 font-mono text-sm font-bold"
          style={{
            backgroundColor: `${tech.color}20`,
            color: tech.color,
            border: `1px solid ${tech.color}40`,
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            animation: `float ${20 + Math.random() * 30}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
          }}
        >
          {tech.name}
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;