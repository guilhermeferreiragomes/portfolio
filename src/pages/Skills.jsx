import React from 'react';
import { SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiQuarkus, SiFigma, SiGit, SiTypescript } from 'react-icons/si';
import { FaCss3Alt, FaJava } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "Quarkus", icon: <SiQuarkus className="text-blue-600" /> },
    { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
    { name: "Git", icon: <SiGit className="text-orange-600" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  ];

  return (
    <section className="py-20 w-full mx-auto px-6">
        <h2 className='text-white text-5xl font-extrabold mb-10 justify-center text-center'>My Tech Stack</h2>      
      <div className="flex flex-wrap justify-center gap-5 w-full">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3 px-5 py-3 border border-amber-50/20 rounded-xl bg-[#1a191b] text-lg text-white/80">
            <span className="text-xl">{skill.icon}</span>
            <span className="font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;