import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    id: 1,
    position: 'Deputy Subcommittee Head of Volunteering Engagement',
    company: 'IEEE Computer Society - SLTC Research University',
    duration: '2023 - 2024',
    description: 'Led volunteering initiatives and engagement activities for the IEEE Computer Society branch.',
    responsibilities: [
      'Coordinated volunteer activities and community engagement programs',
      'Managed team of volunteers for various events and projects',
      'Developed strategies to increase member participation',
      'Collaborated with other IEEE branches for joint initiatives'
    ]
  },
  {
    id: 2,
    position: 'Technical Team Head - Ideanix Generation 01',
    company: 'IEEE Computer Society - SLTC Research University',
    duration: '2023',
    description: 'Led the technical aspects of Ideanix Generation 01 event, ensuring smooth execution of all technical requirements.',
    responsibilities: [
      'Managed technical infrastructure and requirements',
      'Coordinated with cross-functional teams',
      'Supervised technical setup and troubleshooting',
      'Ensured successful event execution'
    ]
  },
  {
    id: 3,
    position: 'Program Team Head - Codemania v.4',
    company: 'IEEE Computer Society - SLTC Research University',
    duration: '2024',
    description: 'Led the program team for Codemania v.4, a flagship coding competition event.',
    responsibilities: [
      'Designed and planned event program structure',
      'Coordinated with participants and judges',
      'Managed event timeline and activities',
      'Ensured smooth execution of the competition'
    ]
  },
  {
    id: 4,
    position: 'Program Team Member',
    company: 'Career Fest 2023 - IEEE Computer Society SLTC',
    duration: '2023',
    description: 'Contributed to the successful execution of Career Fest 2023.',
    responsibilities: [
      'Assisted in event planning and coordination',
      'Supported participant engagement activities',
      'Helped in program execution and management',
      'Collaborated with team members for event success'
    ]
  },
  {
    id: 5,
    position: 'Program Team Member - inspiHer v.2',
    company: 'IEEE WIE Branch - SLTC Research University',
    duration: '2024',
    description: 'Contributed to the women in engineering initiative through inspiHer v.2 program.',
    responsibilities: [
      'Supported program planning and execution',
      'Engaged in promoting women in engineering',
      'Assisted in event coordination',
      'Contributed to participant engagement activities'
    ]
  },
  {
    id: 6,
    position: 'Media Unit Member',
    company: 'SLTC Research University',
    duration: '2023 - 2024',
    description: 'Active member of the university media unit, contributing to various media initiatives.',
    responsibilities: [
      'Created and managed media content',
      'Supported event documentation',
      'Assisted in university media campaigns',
      'Collaborated with media team members'
    ]
  }
];

const Education = [
  {
    id: 1,
    degree: 'B.Sc. Hons in Software Engineering',
    institution: 'Sri Lanka Technological Campus',
    duration: '2022 - 2026 (Expected)',
    description: 'Focusing on software design, development methodologies, and computer science fundamentals.',
    coursework: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Database Systems',
      'Web Development',
      'Software Engineering Principles'
    ]
  },
  {
    id: 2,
    degree: 'Higher Education',
    institution: 'Rajasinghe Central College',
    duration: '2013 - 2020',
    description: 'Completed Advanced Level in the Technology stream. Served as the main organizer of the Technology Society in the school year 2020.',
    coursework: [
      'Engineering Technology',
      'Science for Technology',
      'Pure Mathematics',
      'English'
    ]
  },
  {
    id: 3,
    degree: 'English Language Diploma',
    institution: 'British Way English Academy',
    duration: '2018',
    description: 'Completed the diploma with a Merit Pass, focusing on advanced English language skills.',
    coursework: [
      'Advanced Grammar',
      'Speaking and Listening Skills',
      'Writing Techniques',
      'Presentation Skills'
    ]
  }
];

const Experience = () => {
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
  
  return (
    <motion.section 
      id="experience" 
      className="py-20 relative overflow-hidden"
      style={{
        perspective: "1000px"
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#1a2333] via-[#1a2333] to-[#151d2a]"
        style={{
          rotateX: rotate,
          scale: scale,
          y: backgroundY
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a2333]/80 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 text-blue-400 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                <span className="text-sm">🤝</span>
              </span>
              Volunteering Experience
            </motion.h3>
            
            <div className="relative border-l-2 border-slate-700 pl-8 ml-3 space-y-10">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id} 
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute -left-[41px] top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-[#0B1120]"></div>
                  <motion.div 
                    className="bg-[#0B1120]/60 p-6 rounded-xl shadow-lg border border-slate-700/50 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                    whileHover={{
                      rotateX: 5,
                      rotateY: -5,
                      z: 50
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <h4 className="text-xl font-bold text-white">{exp.position}</h4>
                      <span className="text-blue-400 font-medium">{exp.duration}</span>
                    </div>
                    <h5 className="text-lg text-gray-300 mb-4">{exp.company}</h5>
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 text-blue-400 flex items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                <span className="text-sm">🎓</span>
              </span>
              Education
            </motion.h3>
            
            <div className="relative border-l-2 border-slate-700 pl-8 ml-3 space-y-10">
              {Education.map((edu, index) => (
                <motion.div 
                  key={edu.id} 
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute -left-[41px] top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-[#0B1120]"></div>
                  <motion.div 
                    className="bg-[#0B1120]/60 p-6 rounded-xl shadow-lg border border-slate-700/50 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                    whileHover={{
                      rotateX: 5,
                      rotateY: 5,
                      z: 50
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <span className="text-blue-400 font-medium">{edu.duration}</span>
                    </div>
                    <h5 className="text-lg text-gray-300 mb-4">{edu.institution}</h5>
                    <p className="text-gray-400 mb-4">{edu.description}</p>
                    <h6 className="font-semibold text-gray-300 mb-2">Key Coursework:</h6>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      {edu.coursework.map((course, idx) => (
                        <li key={idx}>{course}</li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;