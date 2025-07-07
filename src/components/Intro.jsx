import React from 'react';
import { useGlitch } from 'react-powerglitch';
import { FaEnvelope } from 'react-icons/fa';

export default function Intro() {
  const glitch = useGlitch({
    playMode: 'always',         // or 'hover'
    timing: {
      duration: 2000,
      iterations: Infinity,
      easing: 'ease-in-out',
    },
    glitchTimeSpan: {
      start: 0.1,
      end: 0.3,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.15,
      amplitudeY: 0.15,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });

  return (
  <div className="flex items-center justify-center h-screen bg-black">
    <div className="text-center">
      <h1 className="text-4xl font-extrabold text-white tracking-widest mt-30">
        Hey there, It's
      </h1>
      <h1
        ref={glitch.ref}
        className="text-5xl font-extrabold text-white uppercase tracking-widest mt-5"
      >
        Naailah
      </h1>

      <p className="max-w-5xl text-lg leading-relaxed px-6 text-white mt-20">
            I'm a student who’s curious, driven, and always up for trying something new.<br />
            I’m passionate about solving problems, working with others, and learning things that push me further.<br />
            Whether it’s debugging code or collaborating on a team goal, I’m always aiming to grow and do my best. 🤝
      </p>

      <a href="mailto:hasannaailah@gmail.com">
        <button className="mt-8 px-6 py-3 text-white font-semibold border border-white rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition-all animate-fadeIn mx-auto">
            <FaEnvelope />
            Contact Me!
        </button>
      </a>
    </div>
  </div>
);
}
