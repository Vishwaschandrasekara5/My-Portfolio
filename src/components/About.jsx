import React from 'react'
import banner2 from '../assets/banner2.jpg'

function About() {
  return (
    <div className='lg:mx-12 mx-4'>
      <div className='flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between py-10'>
        <div className='sm:w-1/2'>
          <img src={banner2} alt="" className='w-full sm:w-11/12' />
        </div>
        <div className='sm:w-1/2'>
        
        <p className='text-xl font-semibold mb-5'>About</p>
        <h2 className='md:text-5xl text-4xl font-bold'>About Me</h2>
        <p className='mt-8 md:pr-8 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, 
          at voluptas ipsam rerum possimus non praesentium rem vitae provident enim 
          qui expedita reiciendis nulla quas fugit temporibus dolorem pariatur excepturi. 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quis voluptate 
          <br/> <br />
          autem aliquam, suscipit error adipisci consectetur voluptatibus earum delectus? 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ducimus sequi 
        cupiditate minus quasi, quaerat pariatur possimus qui? Minus, ullam. 
        </p>
        <button className='btnPrimary'>Contact Me</button>
      
        </div>
      </div>
    </div>
  )
}

export default About