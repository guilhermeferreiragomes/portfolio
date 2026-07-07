import React from 'react';
import TextType from '../components/TextType';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <main className="w-full">
      <section id='home' className="grid h-dvh w-full place-items-center">
          <div className="flex flex-col items-center text-center">  
          <h2 className="text-4xl font-medium text-white">Hello, I'm</h2>
          <h1 className="m-6 text-6xl font-bold text-white tracking-[.17em]">
            GUILHERME GOMES
          </h1>
          <h2 className="text-3xl font-medium text-white/25">Software Developer</h2>
          <TextType 
            className="text-2xl font-light text-white/25" 
            text={["Turning ideas into code", "Robust web solutions", "Intuitive user interfaces"]}
            typingSpeed={60}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </div>
      </section>

      <section id='about' className="min-h-dvh w-full flex items-center justify-center">
        <About />
      </section>
      <section id='skills' className="min-h-dvh w-full flex items-center justify-center">
        <Skills />
      </section>
      <section id='projects' className="min-h-dvh w-full flex items-center justify-center">
        <Projects />
      </section>
      <section id='contact' className="min-h-dvh w-full flex items-center justify-center">
        <Contact />
      </section>
      
    </main>
  );
};

export default Home;