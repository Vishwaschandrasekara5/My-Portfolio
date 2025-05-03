import React from 'react';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 80 },
      { name: 'TypeScript', level: 50 },
      { name: 'Redux', level: 70 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'Java', level: 65 },
      { name: 'PHP', level: 60 },
    ],
  },
  {
    title: 'Database & Cloud',
    skills: [
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 80 },
      { name: 'AWS', level: 65 },
      { name: 'Firebase', level: 70 },
      { name: 'Docker', level: 60 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Agile/Scrum', level: 75 },
      { name: 'Testing', level: 70 },
      { name: 'UI/UX', level: 65 },
      { name: 'DevOps', level: 60 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#1a2333]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my academic journey and personal projects. Here's an overview of my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#0B1120]/60 rounded-xl p-6 shadow-lg border border-slate-700/50">
              <h3 className="text-xl font-bold mb-6 text-blue-400">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6">Other Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['GraphQL', 'Tailwind CSS', 'Jest', 'Next.js', 'Vue.js', 'SpringBoot', 'PostgreSQL', 
              'Redis', 'CI/CD', 'Kubernetes', 'Figma', 'WebSockets'].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-[#1a2333] text-gray-300 rounded-full border border-slate-600/50 hover:bg-blue-400/20 hover:border-blue-400/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;