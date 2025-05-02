import React from 'react'
import Reviewcard from './Reviewcard'

function Testimonials() {
  return (
    <div className='lg:px-12 px-4 my-32 bg-bgShade py-32'>
       <div className='text-headingcolor mb-20'>
        <p className='text-xl font-semibold mb-5'>Client Feedback</p>
        <h2 className='md:text-5xl text-4xl font-bold'>Customer Testmonials</h2>
      </div>

      <Reviewcard/>
      
      </div>
  )
}

export default Testimonials