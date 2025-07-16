import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div id="about" className="bg-[#1B4D3E] text-[#F1E3D3] font-mono flex items-center justify-center px-4 pb-28 pt-24">
      <div className="bg-[rgba(0,0,0,0.3)] p-10 rounded-xl shadow-lg w-full max-w-5xl transition-all">
        
        {/* Function header */}
        <div 
          className="flex items-center cursor-pointer text-2xl soft-body text-[#E07A5F]"
          onClick={toggleCollapse}
        >
          {isOpen ? <FaChevronDown className="mr-2" /> : <FaChevronRight className="mr-2" />}
          <span>
            function aboutMe() &#123;{!isOpen && '...'}
          </span>
        </div>

        {/* Expandable content */}
        <div
          className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[1000px] mt-6' : 'max-h-0'}`}
        >
          <div className="flex flex-col lg:flex-row gap-10 text-[#F1E3D3] mt-4">
            
            {/* Left column: About text */}
            <div className="flex-1 space-y-6 text-[1.05rem] leading-relaxed soft-body font-[500]">
              <p>
                I’m currently studying <span className="font-semibold text-[#F1E3D3]">Software Engineering (Honours) at Monash University</span>, with a strong interest in exploring different areas within tech, from frontend design to project management and data analytics.
              </p>

              <p className="text-[#E07A5F] font-semibold">Some of the technologies and tools I’ve been working with include:</p>
              <ul className="grid grid-cols-2 gap-x-8 list-disc pl-6">
                <li>JavaScript / React</li>
                <li>Python</li>
                <li>Java</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
                <li>Power BI</li>
                <li>Figma</li>
                <li>Jira / Monday.com / ClickUp</li>
              </ul>

              <p>
                Outside of coursework, I enjoy following trends in AI and cybersecurity, building personal projects (like this website!), and occasionally getting lost in a good psychological thriller or horror movie. When I’m not coding, you’ll probably find me listening to music, it’s one of my favourite ways to unwind and stay inspired.
              </p>
            </div>

            {/* Right column: Profile image */}
            <div className="flex-shrink-0">
              <img 
                src="/naailah.jpeg"
                alt="Naailah"
                className="w-72 h-80 object-top object-cover rounded-xl shadow-md mt-5"
              />
            </div>
          </div>
        </div>

        {/* Closing brace */}
        <div className="text-2xl mt-2 pl-1 text-[#E07A5F] soft-body">
          <span>&#125;</span>
        </div>
      </div>
    </div>
  );
}
