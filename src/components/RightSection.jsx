import React from "react";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import TestimonialsSection from "./TestimonialsSection";
import ProjectsSection from "./ProjectsSection";

function RightSection() {
  return (
    <div className="px-6 sm:px-10 lg:px-16 py-8 sm:py-10 lg:py-12 bg-slate-100 dark:bg-zinc-900 min-h-full flex flex-col transition-colors duration-300">
      <p className="text-slate-900 dark:text-slate-200 mt-4 sm:mt-6 lg:mt-8 mb-2 font-semibold text-sm">INTRO</p>
      <div className="w-full lg:w-[80%]">
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
          Hello, I am Saakshi, a computer science graduate from Pune University.
          I have deep interest in coding and have mostly explored technologies
          like Web development, full stack development, app development, AI and
          am also interested in quantum technologies.
        </p>
      </div>

      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <TestimonialsSection />
    </div>
  );
}

export default RightSection;