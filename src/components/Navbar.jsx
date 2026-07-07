import React from 'react'
import logo from "../assets/icon.png"

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full flex items-center justify-between px-40 py-6 z-50 pointer-events-auto bg-[#120F17]/20 backdrop-blur-md'> 
        
        {/* Logo à esquerda, com margem extra */}
        <a href='#home' className='ml-10'>
            <img src={logo} alt="Logo GG" className="h-8 w-auto" />
        </a>

        {/* Links à direita, com margem extra */}
        <div className="flex gap-10 mr-8">
            <a href='#about' className='text-white text-lg font-medium'>ABOUT</a>
            <a href='#skills' className='text-white text-lg font-medium'>SKILLS</a>
            <a href='#projects' className='text-white text-lg font-medium'>PROJECTS</a>
            <a href='#contact' className='text-white text-lg font-medium'>CONTACT</a>
        </div>
    </nav>
  )
}

export default Navbar