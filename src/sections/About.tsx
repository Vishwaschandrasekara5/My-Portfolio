import React from 'react';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl shadow-blue-500/20">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                4+ Yrs
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Software Engineering Undergraduate
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              I am a passionate fourth-year software engineering undergraduate with a strong foundation in both frontend and backend development. My journey in technology began with a curiosity about how digital solutions can solve real-world problems, which has evolved into a deep passion for creating elegant, efficient, and user-friendly applications.
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Throughout my academic journey, I've consistently applied theoretical knowledge to practical projects, participated in hackathons, and collaborated with diverse teams. I'm eager to bring my technical skills, creative problem-solving abilities, and collaborative mindset to a forward-thinking company where I can contribute to meaningful projects while continuing to grow as a developer.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-lg border border-slate-700/20">
                <h4 className="font-bold mb-1 text-white">Name:</h4>
                <p className="text-gray-100">Vishwa Sandun</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-lg border border-slate-700/20">
                <h4 className="font-bold mb-1 text-white">Email:</h4>
                <p className="text-gray-100">sandunv05@gmail.com</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-lg border border-slate-700/20">
                <h4 className="font-bold mb-1 text-white">Location:</h4>
                <p className="text-gray-100">Hanwella,Colombo</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-lg border border-slate-700/20">
                <h4 className="font-bold mb-1 text-white">Degree:</h4>
                <p className="text-gray-100">B.Sc. Software Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;