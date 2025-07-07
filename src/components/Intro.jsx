import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaEnvelope } from 'react-icons/fa';

export default function Intro() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white tracking-widest mt-15">
          Hey there, I am
        </h1>

        <h1 className="text-5xl font-extrabold text-white tracking-widest mt-5">
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

        <p className="max-w-5xl text-lg leading-relaxed px-6 text-white mt-20">
          I'm a software engineering student who’s always up for trying something new.<br />
          I’m passionate about solving problems, working with others, and learning things that push me further.<br />
          Whether it’s debugging code or collaborating on a team goal, I’m always aiming to grow and do my best. 🤝
        </p>

        <a href="mailto:hasannaailah@gmail.com">
          <button className="mt-8 px-6 py-3 text-white font-semibold border border-white rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition-all mx-auto">
            <FaEnvelope />
            Contact Me!
          </button>
        </a>
      </div>
    </div>
  );
}
