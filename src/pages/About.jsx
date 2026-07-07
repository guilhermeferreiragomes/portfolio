import React from 'react';
import profilePic from "../assets/profilePic.jpg";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";



const About = () => {
  return (
    <div className='flex flex-row items-center gap-10 w-max h-max p-10'>

      <div className='w-64 h-82 flex flex-col items-center justify-center p-6 border border-amber-50/30 rounded-3xl gap-2'>
        <img src={profilePic} className='w-40 h-40 rounded-full object-cover' alt="Guilherme Gomes" />
        <p className='pt-3 text-xl font-bold text-white text-center'>Guilherme Gomes</p>
        <p className='text-base font-light text-white/50'>University Student</p>
      </div>

      <div className='flex-1 text-left'>
        <h2 className='text-white text-5xl font-extrabold mb-6'>About Me</h2>
        <p className='text-white/80 leading-7 mb-4 text-lg'>
          I'm Guilherme, a Software Developer currently finishing my degree. I love building digital products that are both functional and easy to use. 
          My path has been a mix of academic challenges and real-world projects. I enjoy the full development cycle, from backend systems with Java and Quarkus to building modern, responsive interfaces with React. 
          I'm always looking to bridge the gap between technical logic and user experience. <br />
          I'm currently looking for new opportunities, so let's connect!
        </p>
        <div className='flex flex-row gap-4'>
            <a href="https://github.com/guilhermeferreiragomes" target="_blank" rel="noopener noreferrer">
                <div className='p-2 border border-amber-50/50 rounded-2xl bg-[#1a191b] w-max h-max cursor-pointer transition-all duration-300 ease-in-out hover:scale-110'>
                    <FiGithub className='w-6 h-6 text-white' />
                </div>
            </a>
            <a href="https://www.linkedin.com/in/guilhermeffgomes/" target="_blank" rel="noopener noreferrer">
                <div className='p-2 border border-amber-50/50 rounded-2xl bg-[#1a191b] w-max h-max cursor-pointer'>
                    <FiLinkedin className='w-6 h-6 text-white' />
                </div>
            </a>
        </div>
      </div>

    </div>
  )
}

export default About