import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div id="about" className="bg-black text-green-400 font-mono flex items-center justify-center px-4 pb-55">
      <div className="bg-[#0f1117] p-10 rounded-xl shadow-lg w-full max-w-7xl">
        {/* Function header */}
        <div 
          className="flex items-center cursor-pointer text-2xl"
          onClick={toggleCollapse}
        >
          {isOpen ? <FaChevronDown className="mr-2" /> : <FaChevronRight className="mr-2" />}
          <span>
            function aboutMe() &#123;{!isOpen && '...'}
          </span>
        </div>

        {/* Function body */}
        {isOpen && (
          <div className="pl-6 mt-2 text-lg space-y-1">
            <div>const name = "Naailah";</div>
            <div>const role = "Software Engineering Student";</div>
            <div>const interests = ["Coding 💻", "Tech exploration 🔍", "Teamwork 🤝"];</div>
            <div>const goal = "Build useful & creative things that make a difference";</div>
          </div>
        )}

        {/* Closing brace - always on new line */}
        <div className="text-2xl mt-2 pl-2">
          <span>&#125;</span>
        </div>
      </div>
    </div>
  );
}
