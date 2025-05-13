import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
        >
          Vishwa S
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-blue-400 text-lg font-medium transition-all duration-300
                relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full
                py-2"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-blue-400 transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300
                  text-lg font-medium px-4 py-3 rounded-lg hover:bg-blue-400/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;