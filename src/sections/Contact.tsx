import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              I'm interested in freelance opportunities and full-time positions. However, if you have other requests or questions, don't hesitate to contact me.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#1a2333] p-3 rounded-full mr-4">
                  <MapPin className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Hanwella</h4>
                  <p className="text-gray-400">Colombo, Sri lanka</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#1a2333] p-3 rounded-full mr-4">
                  <Mail className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-400">sandunv05@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#1a2333] p-3 rounded-full mr-4">
                  <Phone className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-400">+94 76 927 9791</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-6 text-blue-400">Follow Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Vishwaschandrasekara5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#1a2333] p-3 rounded-full hover:bg-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/vishwa-s-chandrasekara" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#1a2333] p-3 rounded-full hover:bg-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:sandunv05@gmail.com" 
                className="bg-[#1a2333] p-3 rounded-full hover:bg-blue-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                  className="w-full bg-[#1a2333] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required
                  className="w-full bg-[#1a2333] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  required
                  className="w-full bg-[#1a2333] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <div>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  required
                  rows={5}
                  className="w-full bg-[#1a2333] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-8 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-lg transition-all hover:shadow-lg hover:shadow-blue-400/30 flex items-center justify-center"
              >
                <Send size={18} className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;