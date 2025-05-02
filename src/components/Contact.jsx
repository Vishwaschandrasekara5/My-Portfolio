import React from 'react'

function Contact() {
  return (
    <div className='lg:px-12 px-4'>
      <div className='text-headingcolor mb-20 text-center'>
        <p className='text-xl font-semibold mb-5'>Get in Touch</p>
        <h2 className='md:text-5xl text-4xl font-bold'>Contact Me</h2>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eius.</p>
      </div>

      <div className='md:w2/3 mx-auto mb-20'>
        <form>
            <div className='flex flex-col sm:flex-row gap-8 items-center mb-8'>
                <div className='sm:w-1/2 w-full'>
                   <label htmlFor="fname" className='text-base text-headingcolor w-full'>First Name</label>
                   <input type="text" id='fname' name='fname' className='block border border-primary rounded-lg py-2 mt-2 w-full'/> 
                </div>
                <div className='sm:w-1/2 w-full'>
                   <label htmlFor="lname" className='text-base text-headingcolor w-full'>last Name</label>
                   <input type="text" id='lname' name='lname' className='block border border-primary rounded-lg py-2 mt-2 w-full'/> 
                </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-8 items-center mb-8'>
                <div className='sm:w-1/2 w-full'>
                   <label htmlFor="email" className='text-base text-headingcolor w-full'>Email</label>
                   <input type="text" id='email' name='email' className='block border border-primary rounded-lg py-2 mt-2 w-full'/> 
                </div>
                <div className='sm:w-1/2 w-full'>
                   <label htmlFor="phone" className='text-base text-headingcolor w-full'>Phone Number</label>
                   <input type="text" id='phone' name='phone' className='block border border-primary rounded-lg py-2 mt-2 w-full'/> 
                </div>
            </div>

            <div className='w-full mb-8'>
                <label htmlFor="options" className='text-base text-headingcolor w-full'>Choose a topic</label>
                <select name="options" id="options" className='block border border-primary rounded-lg py-2 mt-2 w-full px-2'>
                    <option value="0">Select one...</option>
                    <option value="1">Web Design</option>
                    <option value="2">UI/UX Design</option>
                    <option value="3">Web Development</option>
                    <option value="4">Graphic Design</option>
                </select>
            </div>

            <div className='w-full mb-8'>
                <label htmlFor="message" className='text-base text-headingcolor w-full'>Message</label>
                <textarea name="message" id="" cols="30" rows="5" placeholder='Type your message' className='block border border-primary rounded-lg py-2 mt-2 w-full px-2'></textarea>
            </div>

            <div>
                <input type="checkbox" name='agree' id='agree' />
                <label htmlFor="agree" className='text-base text-headingcolor w-full ml-3 items-center'>I accept the terms</label>
            </div>

            <div className='w-36 mx-auto mt-8'>
                <input type="submit" value="Submit" className='btnPrimary bg-primary py-3 px-8 cursor-pointer w-full'/>
            </div>
        </form>

      </div>
    </div>
  )
}

export default Contact