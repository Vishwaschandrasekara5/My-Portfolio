import React from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { Github, Linkedin } from 'lucide-react';
import FloatingIcons from '../components/FloatingIcons';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-blue-900/20 to-[#0B1120] z-0"></div>
      
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <FloatingIcons />
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500/20"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Vishwa Sandun Chandrasekara
          </h1>
          <h2 className="text-xl md:text-3xl text-gray-300 mb-8">
            Software Engineering Undergraduate
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Passionate about building exceptional software solutions with cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-lg hover:shadow-blue-400/20"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-400/10 hover:bg-blue-400/20 text-white border border-blue-400/20 rounded-lg transition-colors"
            >
              Contact Me
            </a>
          </div>

          
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-400 transition-colors animate-bounce"
      >
        <ArrowDownCircle size={32} />
      </a>
    </section>
  );
};

export default Hero;