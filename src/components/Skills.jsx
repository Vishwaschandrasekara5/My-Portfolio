import React from 'react';

const skills = [
    {id: 1, name: "Strategy & Direction", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sit ad tempora unde esse itaque?", image: "src/assets/skill-1.png"},
    {id: 2, name: "Branding & Logo", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sit ad tempora unde esse itaque?", image: "src/assets/skill-2.png"},
    {id: 3, name: "UI & UX Design", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sit ad tempora unde esse itaque?", image: "src/assets/skill-3.png"},
    {id: 4, name: "Webflow Development", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sit ad tempora unde esse itaque?", image: "src/assets/skill-4.png"},
];

function Skills() {
  return (
    <div className='lg:mx:12 mx-4 py-32'>
      <div className='text-headingcolor mb-20'>
        <p className='text-xl font-semibold mb-5'>My Skills</p>
        <h2 className='md:text-5xl text-4xl font-bold'>My Expertise</h2>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {skills.map((skill) => {
          return (
            <div key={skill.id} className='bg-bgShade p-8 rounded-lg cursor-pointer hover:translate-y-4 transition-all duration-300 skillcard'>
              <img src={skill.image} alt="" className='w-14 h-14 bg-white rounded-lg shadow-md mb-7 p-3'/>
              <h3 className='text-2xl font-bold mb-4'>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
