// src/components/Navbar.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* LEFT: Name + nav links */}
        <div className="flex items-center gap-10">
          <h1 className="text-3xl fancy-font">Naailah</h1>
          <ul className="flex gap-6 text-sm">
            <li><a href="#about" className="hover:text-gray-600">About</a></li>
            <li><a href="#experience" className="hover:text-gray-600">Projects</a></li>
            <li><a href="#experience" className="hover:text-gray-600">Highlights</a></li>
            <li><a href="#projects" className="hover:text-gray-600">Gallery</a></li>
          </ul>
        </div>

        {/* RIGHT: Social media icons */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/nhas0021" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/naailah-taqui-hasan-43182325b/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
