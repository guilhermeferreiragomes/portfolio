import React, { useState } from 'react';
import profilePic from "../assets/profilePic.jpg";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiDownload, FiCheck } from 'react-icons/fi';

const About = () => {
  const [downloaded, setDownloaded] = useState(false)

  const handleDownloadClick = () => {
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 1500)
  }

  return (
    <div className='flex flex-row items-center gap-10 w-max h-max p-10'>

      <div className='w-64 flex flex-col items-center justify-center p-6 border border-amber-50/30 rounded-3xl gap-2'>
        <img src={profilePic} className='w-40 h-40 rounded-full object-cover' alt="Guilherme Gomes" />
        <p className='pt-3 text-xl font-bold text-white text-center'>Guilherme Gomes</p>
        <p className='text-base font-light text-white/50'>University Student</p>
        
        <a 
          href="/report/GuilhermeGomesCV_en.pdf"
          download="GuilhermeGomesCV_en.pdf"
          onClick={handleDownloadClick}
          className='flex items-center gap-2 px-5 py-2.5 mt-2 border rounded-2xl font-medium transition-all duration-300 ease-in-out'
          style={{
            transform: downloaded ? 'scale(0.95)' : 'scale(1)',
            backgroundColor: downloaded ? '#22c55e' : '#1a191b',
            borderColor: downloaded ? '#22c55e' : 'rgba(255, 250, 235, 0.5)',
            color: downloaded ? '#120F17' : '#ffffff',
          }}
        >
          {downloaded ? <FiCheck className='w-5 h-5' /> : <FiDownload className='w-5 h-5' />}
          {downloaded ? 'Downloaded!' : 'Download CV'}
        </a>
      </div>

      <div className='flex-1 text-left'>
        <h2 className='text-white text-5xl font-extrabold mb-6'>About Me</h2>
        <p className='text-white/80 leading-7 mb-4 text-lg'>
          I'm Guilherme, a Software Developer currently finishing my degree. I love building digital products that are both functional and easy to use. 
          My path has been a mix of academic challenges and real-world projects. I enjoy the full development cycle, from backend systems with Java and Quarkus to building modern, responsive interfaces with React. 
          I'm always looking to bridge the gap between technical logic and user experience. <br />
          I'm currently looking for new opportunities, so let's connect!
        </p>
        <div className='flex flex-row items-center gap-4'>
            
            <a href="https://github.com/guilhermeferreiragomes" target="_blank" rel="noopener noreferrer">
                <div className='p-2 border border-amber-50/50 rounded-2xl bg-[#1a191b] w-max h-max cursor-pointer hover:bg-white/10 transition-colors'>
                    <FiGithub className='w-6 h-6 text-white' />
                </div>
            </a>
            
            <a href="https://www.linkedin.com/in/guilhermeffgomes/" target="_blank" rel="noopener noreferrer">
                <div className='p-2 border border-amber-50/50 rounded-2xl bg-[#1a191b] w-max h-max cursor-pointer hover:bg-white/10 transition-colors'>
                    <FiLinkedin className='w-6 h-6 text-white' />
                </div>
            </a>
            
        </div>
      </div>

    </div>
  )
}

export default About;