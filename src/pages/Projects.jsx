import React from 'react'
import sweetsaudade from "../assets/sweetsaudade.png"
import municipal from "../assets/municpal.png"
import duarte from "../assets/duarte.png"
import portfolio from "../assets/portfolio.png"
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
    const projects = [
        { image: sweetsaudade, name: "Sweet Saudade", description: "A modern, fully responsive web application built to showcase and sell traditional Portuguese pastry products. The project emphasizes clean UI/UX design principles and efficient component state management for a seamless user experience.", stack: ["React", "CSS", "EmailJS", "Google Apps Script"], githubUrl: "https://github.com/guilhermeferreiragomes/sweet-saudade-frontend", liveUrl:"https://sweetsaudade.pt/"},
        { image: municipal, name: "MuniciPAL", description: "A full-stack ecosystem designed to streamline the reporting and resolution of urban incidents. The platform integrates citizens, municipal administrators, and field technicians through a robust three-tier client-server architecture.", stack: ["React", "React Native", "Tailwind", "Java", "Quarkus", "Docker"], githubUrl: "https://github.com/guilhermeferreiragomes/municipal", liveUrl: null},
        { image: portfolio, name: "Personal Portfolio", description: "A custom-built portfolio website, created entirely from scratch to showcase my work. This project serves as a practical demonstration of my development process, focusing on clean code, responsive design, and a user-friendly interface.", stack: ["React", "Tailwind"], githubUrl: "https://github.com/guilhermeferreiragomes/municipal", liveUrl: "https://www.portfoliogui.pt/" },
        { image: duarte, name: "Autohaus Duarte", description: "UI/UX design concept for an automotive importation platform, designed entirely in Figma. Built with a developer-first mindset optimized for future frontend development. Project currently in the high-fidelity prototyping phase.", stack: ["Figma"], githubUrl: null, liveUrl: null }


    ];

  return (
    <section className="py-20 w-full max-w-7xl mx-auto px-6">
        <h2 className='text-white text-5xl font-extrabold mb-12 text-center'>Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
            <div key={index} className="flex flex-col bg-[#1a191b] border border-amber-50/10 rounded-3xl overflow-hidden hover:border-amber-500 transition-all group">
    
                {/* Imagem */}
                <div className="h-64 overflow-hidden">
                    <img src={project.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-white text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="text-white/60 mb-4">{project.description}</p>
                    
                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((tech) => (
                            <span key={tech} className="text-xs bg-amber-50/5 text-[#b7a0e5] px-2 py-1 rounded">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="mt-auto flex gap-4 pt-4">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-white hover:text-amber-500 transition-colors">
                                <FiGithub /> Code
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-white hover:text-amber-500 transition-colors">
                                <FiExternalLink /> Live Demo
                            </a>
                        )}
                    </div>
                    
                </div>
            </div>      
        ))}
      </div>
      
      
    </section>
  )
}

export default Projects
