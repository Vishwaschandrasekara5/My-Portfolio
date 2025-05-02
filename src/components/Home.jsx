import React from 'react';
import banner from '../assets/banner.jpg';

function Home() {
  return (
    <div className='mt-32 bg-bgShade'>
      <div className='lg:px-12 px-4  flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5'>
      <div className='md:w-1/2 w-full'>
        <img src={banner} alt="" className=' w-full' />
      </div>
        
        <div className='md:w-1/2 w-full mt-5'>
          <h3 className='text-xl text-headingcolor font-semibold mb-5'>Hey, I am Vishwa</h3>
          <h1 className='md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px] mb-5'>I Create <span className='text-primary'>product design</span> and brand experience</h1>
          <p className='text-body text-2xl leading-9 mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nam magnam ut, recusandae odit quasi.</p>
          <button className='btnPrimary'>Get In Touch</button>
        </div>
       
      </div>
      
    </div>
  );
}

export default Home;
