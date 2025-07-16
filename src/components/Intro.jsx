import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaEnvelope } from 'react-icons/fa';

export default function Intro() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-[#690B22] overflow-hidden">

      {/* 🔴 SVG Background Blobs (with animation) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 960 540"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full scale-[2.5] sm:scale-[2] md:scale-[1.6] lg:scale-[1.5] xl:scale-[1.3]"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect x="0" y="0" width="960" height="540" fill="#690B22"></rect>
          <defs>
            <linearGradient id="grad1_0" x1="43.8%" y1="100%" x2="100%" y2="0%">
              <stop offset="14.44%" stopColor="#e07a5f" />
              <stop offset="85.55%" stopColor="#e07a5f" />
            </linearGradient>
            <linearGradient id="grad1_1" x1="43.8%" y1="100%" x2="100%" y2="0%">
              <stop offset="14.44%" stopColor="#e07a5f" />
              <stop offset="85.55%" stopColor="#a44340" />
            </linearGradient>
            <linearGradient id="grad1_2" x1="43.8%" y1="100%" x2="100%" y2="0%">
              <stop offset="14.44%" stopColor="#690b22" />
              <stop offset="85.55%" stopColor="#a44340" />
            </linearGradient>
            <linearGradient id="grad2_0" x1="0%" y1="100%" x2="56.3%" y2="0%">
              <stop offset="14.44%" stopColor="#e07a5f" />
              <stop offset="85.55%" stopColor="#e07a5f" />
            </linearGradient>
            <linearGradient id="grad2_1" x1="0%" y1="100%" x2="56.3%" y2="0%">
              <stop offset="14.44%" stopColor="#a44340" />
              <stop offset="85.55%" stopColor="#e07a5f" />
            </linearGradient>
            <linearGradient id="grad2_2" x1="0%" y1="100%" x2="56.3%" y2="0%">
              <stop offset="14.44%" stopColor="#a44340" />
              <stop offset="85.55%" stopColor="#690b22" />
            </linearGradient>
          </defs>

          <g
            transform="translate(700, 300)"
            style={{ animation: 'blobFloat 8s ease-in-out infinite' }}
          >
            <path d="M-432 0C-418.2 -56.5 -404.4 -113.1 -376 -155.8C-347.7 -198.4 -304.8 -227.3 -270.1 -270.1C-235.4 -313 -209 -369.8 -165.3 -399.1C-121.7 -428.4 -60.8 -430.2 0 -432L0 0Z" fill="#872931" />
            <path d="M-288 0C-278.8 -37.7 -269.6 -75.4 -250.7 -103.8C-231.8 -132.3 -203.2 -151.5 -180.1 -180.1C-157 -208.6 -139.3 -246.5 -110.2 -266.1C-81.1 -285.6 -40.6 -286.8 0 -288L0 0Z" fill="#c25e4f" />
            <path d="M-144 0C-139.4 -18.8 -134.8 -37.7 -125.3 -51.9C-115.9 -66.1 -101.6 -75.8 -90 -90C-78.5 -104.3 -69.7 -123.3 -55.1 -133C-40.6 -142.8 -20.3 -143.4 0 -144L0 0Z" fill="#e07a5f" />
          </g>

          <g
            transform="translate(0, 0)"
            style={{ animation: 'blobFloatReverse 10s ease-in-out infinite' }}
          >
            <path d="M432 0C398.6 46.5 365.2 93.1 345.5 143.1C325.8 193.2 319.8 246.7 292.7 292.7C265.7 338.7 217.6 377.2 165.3 399.1C113 421.1 56.5 426.5 0 432L0 0Z" fill="#872931" />
            <path d="M288 0C265.7 31 243.5 62 230.4 95.4C217.2 128.8 213.2 164.5 195.2 195.2C177.1 225.8 145.1 251.4 110.2 266.1C75.4 280.7 37.7 284.4 0 288L0 0Z" fill="#c25e4f" />
            <path d="M144 0C132.9 15.5 121.7 31 115.2 47.7C108.6 64.4 106.6 82.2 97.6 97.6C88.6 112.9 72.5 125.7 55.1 133C37.7 140.4 18.8 142.2 0 144L0 0Z" fill="#e07a5f" />
          </g>
        </svg>
      </div>

      {/* 📝 Intro Text */}
      <div className="text-center z-10 px-4">
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

        <p className="max-w-4xl text-lg leading-relaxed px-3 text-[#F1E3D3] mt-20 soft-body mx-auto">
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
