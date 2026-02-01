import React, { useState } from "react";
import { projects } from "../data/projectsData";

import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import TestimonialsMarquee from "./TestimonialsMarquee";
import TestimonialsSection from "./TestimonialsSection";
import ProjectsSection from "./ProjectsSection";

function RightSection() {
  return (
    <div className="px-16 py-12 bg-slate-100 min-h-full flex flex-col">
      {/* INTRO Section */}
      <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">INTRO</p>
      <div className="w-[80%]">
        <p className="text-md">
          Hello, I am Saakshi, a computer science graduate from Pune University.
          I have deep interest in coding and have mostly exploslate technologies
          like Web development, full stack development, app development, AI and
          am also interested in quantum technologies.
        </p>
      </div>

      {/* PROJECTS Section */}
      <ProjectsSection />

      {/* EXPERIENCE section  */}
      <ExperienceSection />

      {/* EDUCATION section  */}
      <EducationSection />

      {/* TESTIMONIALS section  */}
      <TestimonialsSection />
    </div>
  );
}

export default RightSection;
