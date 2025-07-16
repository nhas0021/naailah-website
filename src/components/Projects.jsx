import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: false,
    });
  }, []);

  const projects = [
    {
      title: "VODSearch",
      image: "/images/vodsearch.png",
      description:
        "Software that watches live or archived videos and analyzes content in real time for highlights and trends.",
      link: "#",
    },
    {
      title: "Fast Endpoints",
      image: "/images/fastendpoints.png",
      description:
        "An open source project that is a developer-friendly alternative to traditional API endpoints.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="bg-[#690B22] text-[#F1E3D3] py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase playfair-font tracking-widest text-[#F1E3D3]">
          My Portfolio
        </p>
        <h2 className="text-4xl fancy-font font-extrabold text-[#E07A5F] mt-2 mb-4">
          Featured Projects
        </h2>
        <p className="soft-body text-base text-[#F1E3D3] max-w-2xl mb-12">
          A collection of things I’ve enjoyed working on, each one teaching me something new and helping me grow along the way.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="rounded-2xl bg-[#F1E3D3] text-[#1B4D3E] overflow-hidden shadow-xl transition-transform hover:scale-[1.015]"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <a
                  href={project.link}
                  className="absolute bottom-4 left-4 bg-[#690B22] text-white px-4 py-2 text-sm rounded hover:bg-[#E07A5F] transition-colors"
                >
                  View Project
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm soft-body">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
