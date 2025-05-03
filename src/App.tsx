import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-[#0B1120] text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;