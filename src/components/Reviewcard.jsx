import React, { useRef, useState } from 'react';
import star from '../assets/star.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
    {id:1, name:"Dianne Russell", company:"Starbucks", image:"/src/assets/person-1.jpeg", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at voluptas ipsam rerum possimus non praesentium"},
    {id:2, name:"Kristine Watson", company:"louvis Vuitton", image:"/src/assets/person-1.jpeg", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at voluptas ipsam rerum possimus non praesentium"},
    {id:3, name:"Kathryn Murphy", company:"McDonalds", image:"/src/assets/person-1.jpeg", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at voluptas ipsam rerum possimus non praesentium"},
    {id:4, name:"Dianne Russell", company:"Starbucks", image:"/src/assets/person-1.jpeg", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at voluptas ipsam rerum possimus non praesentium"},
    {id:5, name:"Kristine Watson", company:"louvis Vuitton", image:"/src/assets/person-1.jpeg", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at voluptas ipsam rerum possimus non praesentium"},
    {id:6, name:"Kathryn Murphy", company:"McDonalds", image:"/src/assets/person-1.jpeg", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at voluptas ipsam rerum possimus non praesentium"},
]



// import required modules


function Reviewcard() {
  return (
    <div>
         <Swiper
        slidesPerView={1}
        spaceBetween={10}
       
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
       {
        reviews.map((review)=>{
            return(
               <SwiperSlide key={review.id} className='border border-[#006B6A] p-8 rounded'>
                <div>
                   <div className='flex'>
                    <img src={star} alt="" className='w-8 h-8'/>
                    <img src={star} alt="" className='w-8 h-8'/>
                    <img src={star} alt="" className='w-8 h-8'/>
                    <img src={star} alt="" className='w-8 h-8'/>
                    <img src={star} alt="" className='w-8 h-8'/>
                   </div>
                    <p className='my-5'>{review.comment}</p>
                    <div className='flex items-center gap-4'>
                      <img src={review.image} alt="" className='h-10 w-10'/>
                        <div>
                          <p className='font-semibold'>{review.name}</p>
                          <p className='text-sm'>{review.company}</p>
                        </div>
                    </div>
                   
                </div>
               </SwiperSlide> 
            )
        })
       }
      </Swiper>
    </div>
  )
}

export default Reviewcard