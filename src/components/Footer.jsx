import React from 'react'
import logo from '../assets/logo.png'
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-bgShade py-28 md:px-12 px-4'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-20'>
        <a href="" className='flex-shrink-0'><img src={logo} alt="" /></a>
        <div className='flex flex-col sm:flex-row md:items-center gap-4 flex-wrap'>
          <a href="/" className='block hover:text-gray-400 py-2  px-4 '>Home</a>
          <a href="/" className='block hover:text-gray-400 py-2  px-4 '>Portfolio</a>
          <a href="/" className='block hover:text-gray-400 py-2  px-4 '>About Me</a>
          <a href="/" className='block hover:text-gray-400 py-2  px-4 '>Contact</a>
          <a href="/" className='block hover:text-gray-400 py-2  px-4 '>Testimonials</a>
        </div>

        <div className='flex items-center gap-4 '>
          <FaFacebookF className='cursor-pointer hover:translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
          <FaInstagram className='cursor-pointer hover:translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
          <FaLinkedin className='cursor-pointer hover:translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
          <FaTwitter className='cursor-pointer hover:translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
        </div>

      </div>
      <hr />
      <div className='mt-10 flex flex-col md:flex-row justify-between gap-8'>
        <p>Made With 🩷  by Airdoken</p>
        <div className='space-x-6'>
          <a href=""className='hover:text-gray-400'>Privacy Policy</a>
          <a href=""className='hover:text-gray-400'>Terms of Services</a>
          <a href=""className='hover:text-gray-400'>Cookies Settings</a>
        </div>
      </div>
    </div>
  )
}

export default Footer