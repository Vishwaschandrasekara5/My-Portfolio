import React from 'react'
import { FaDribbble } from "react-icons/fa";
import arrow from '../assets/arrow.png'


function Portfolio() {
    const projects = [
        {"id":1, "name":"Ahuse", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, at voluptas ipsam rerum", "image":"/src/assets/pic-1.jpeg"},
        {"id":2, "name":"App Dashboard", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, at voluptas ipsam rerum", "image":"/src/assets/pic-1.jpeg"},
        {"id":3, "name":"Easy Rent", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, at voluptas ipsam rerum", "image":"/src/assets/pic-1.jpeg"}
    ]
   
   

    return (
        <div className='lg:mx-12 mx-4 my-32'>
           <div className='flex flex-col md:flex-row justify-between mb-20 gap-8 md:items-center'>
           <div className='text-headingcolor '>
                <p className='text-xl font-semibold mb-5'>Recent Projects</p>
                <h2 className='md:text-5xl text-4xl font-bold'>My Portfolio</h2>
            </div>
            <div>
                <button className='btnPrimary bg-dribble py-5'><FaDribbble className='w-6 h-6 inline-block mr-2 '/>Visit My Dribble</button>
            </div>
           </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
             {
              projects.map((project) => {
                return (
            <div key={project.id} className='shadow-xl rounded-lg cursor-pointer'>
                <img src={project.image} alt="" className='w-[600px] hover:scale-90 transition-all duration-300'/>
                  <div className='p-8'>
                    <h3 className='text-2xl font-semibold mb-2 text-headingcolor'>{project.name}</h3>
                    <p className='text-body mb-4'>{project.description}</p>
                    <a href="/" className='underline underline-offset-4 hover:text-primary'>View in Dribble <img src={arrow} alt="" className='w-3 inline-block ml-3'/> </a>
                  </div>
            </div>
        );
    })
}

            </div>
        </div>
    );
}

export default Portfolio;
