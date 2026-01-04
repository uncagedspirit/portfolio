import React from "react";

function ProjectsSection() {
  return (
    <div className="px-16 pt-12 bg-amber-100 h-full flex flex-col">

      {/* self introduction section  */}
      <p className="text-gray-400 mt-8 mb-2 font-semibold text-sm">INTRO</p>
      <div className="w-[85%]">
        <p className="text-sm">
          Hello, I am Saakshi Kobarne, a computer science graduate from Pune
          University. I have deep interest in coding and have mostly explored
          technologies like Web development, full stack development, app
          development, AI and am also interested in quantum technologies.
        </p>
        <p className="text-sm">
          My journey began in a small startup scale company where I mostly used
          C++, ReactJs and JavaScript to build projects. Now I work with a finance
          based MNC, experimneting with AI and innovations in tech such as Quantum
          Computing.
        </p>
      </div>
    </div>
  );
}

export default ProjectsSection;
