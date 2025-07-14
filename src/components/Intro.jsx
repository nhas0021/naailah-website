import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaEnvelope } from 'react-icons/fa';

export default function Intro() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#690B22]">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-[#F1E3D3] tracking-widest mt-15">
          Hey there, I am
        </h1>

        <h1 className="text-5xl playfair-font text-[#E07A5F] tracking-widest mt-5">
          <Typewriter
            loop={true}
            words={['Naailah', 'curious and driven', 'still debugging life', 'always learning', 'here to make cool stuff!']}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2500}
          />
        </h1>

        <p className="max-w-8xl text-lg leading-relaxed px-3 text-[#F1E3D3] mt-20 soft-body">
          I'm a software engineering student who’s always up for trying something new.<br />
          I’m passionate about solving problems, working with others, and learning things that push me further.<br />
          Whether it’s debugging code or collaborating on a goal, I’m always aiming to grow and do my best. 🤝
        </p>

        <a href="mailto:hasannaailah@gmail.com">
          <button className="mt-8 px-6 py-3 text-[#F1E3D3] font-semibold border border-[#F1E3D3] rounded-lg flex items-center gap-2 hover:bg-[#F1E3D3] hover:text-[#690B22] transition-all mx-auto">
            <FaEnvelope />
            Contact Me!
          </button>
        </a>
      </div>
    </div>
  );
}
