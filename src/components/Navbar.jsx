import React from 'react';
import logo from "../assets/icon.png";

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full flex items-center justify-between px-40 py-6 z-50 pointer-events-auto bg-[#120F17]/20 backdrop-blur-md'> 
        
        <a href='#home' className='ml-10'>
            <img src={logo} alt="Logo GG" className="h-8 w-auto" />
        </a>

        <div className="flex items-center gap-10 mr-8">
            <a href='#about' className='text-white text-lg font-medium hover:text-white/70 transition-colors'>ABOUT</a>
            <a href='#skills' className='text-white text-lg font-medium hover:text-white/70 transition-colors'>SKILLS</a>
            <a href='#projects' className='text-white text-lg font-medium hover:text-white/70 transition-colors'>PROJECTS</a>
            <a href='#contact' className='text-white text-lg font-medium hover:text-white/70 transition-colors'>CONTACT</a>
        </div>
    </nav>
  )
}

export default Navbar;