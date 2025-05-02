import React from 'react';

const experiences = [
  {
    id: 1,
    position: 'Software Engineering Intern',
    company: 'Tech Solutions Inc.',
    duration: 'May 2024 - Present',
    description: 'Working on developing and maintaining web applications using React, Node.js, and MongoDB. Collaborating with a team of developers to implement new features and fix bugs.',
    responsibilities: [
      'Developed responsive user interfaces using React and Material UI',
      'Implemented RESTful APIs using Node.js and Express',
      'Participated in code reviews and agile development processes',
      'Optimized database queries for improved application performance'
    ]
  },
  {
    id: 2,
    position: 'Web Development Intern',
    company: 'Digital Creations',
    duration: 'June 2023 - August 2023',
    description: 'Assisted in the development of client websites using HTML, CSS, JavaScript, and WordPress. Worked closely with designers to implement UI/UX designs.',
    responsibilities: [
      'Created responsive layouts using HTML5, CSS3, and Bootstrap',
      'Customized WordPress themes according to client requirements',
      'Optimized website performance and loading speeds',
      'Implemented SEO best practices for better search engine visibility'
    ]
  },
  {
    id: 3,
    position: 'Junior Developer',
    company: 'University Research Lab',
    duration: 'January 2023 - May 2023',
    description: 'Contributed to research projects by developing software tools for data analysis and visualization. Worked with Python and various scientific libraries.',
    responsibilities: [
      'Developed data processing scripts using Python and Pandas',
      'Created interactive data visualizations using Matplotlib and Plotly',
      'Implemented machine learning algorithms for data analysis',
      'Documented code and research findings for publication'
    ]
  },
];

const Education = [
  {
    id: 1,
    degree: 'B.Sc. in Software Engineering',
    institution: 'University Name',
    duration: '2021 - 2025 (Expected)',
    description: 'Focusing on software design, development methodologies, and computer science fundamentals. Maintaining a GPA of 3.8/4.0.',
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
    degree: 'High School Diploma',
    institution: 'High School Name',
    duration: '2017 - 2021',
    description: 'Graduated with honors. Participated in various programming competitions and technology clubs.',
    coursework: [
      'Computer Science',
      'Mathematics',
      'Physics',
      'English'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#1a2333]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-400 flex items-center">
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                <span className="text-sm">👨‍💻</span>
              </span>
              Professional Experience
            </h3>
            
            <div className="relative border-l-2 border-slate-700 pl-8 ml-3 space-y-10">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-[#0B1120]"></div>
                  <div className="bg-[#0B1120]/60 p-6 rounded-xl shadow-lg border border-slate-700/50">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-400 flex items-center">
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                <span className="text-sm">🎓</span>
              </span>
              Education
            </h3>
            
            <div className="relative border-l-2 border-slate-700 pl-8 ml-3 space-y-10">
              {Education.map((edu) => (
                <div key={edu.id} className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-[#0B1120]"></div>
                  <div className="bg-[#0B1120]/60 p-6 rounded-xl shadow-lg border border-slate-700/50">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;