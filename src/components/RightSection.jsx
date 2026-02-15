import React from "react";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import TestimonialsSection from "./TestimonialsSection";
import ProjectsSection from "./ProjectsSection";

const Dash = () => (
  <div className="w-full border-t-2 border-dashed border-slate-300 dark:border-zinc-700" />
);

const Section = ({ children }) => (
  <div className="py-6 sm:py-8">
    {children}
  </div>
);

function RightSection() {
  return (
    <div className="bg-slate-100 dark:bg-zinc-900 min-h-full flex flex-col transition-colors duration-300">

      {/* Top spacer */}
      <div style={{ height: "10vw" }} />

      <Dash />

      {/* INTRO */}
      <div className="px-6 sm:px-10 lg:px-16">
        <Section>
          <p className="text-slate-900 dark:text-slate-200 mb-2 font-semibold text-sm tracking-wide">INTRO</p>
          <div className="w-full lg:w-[80%]">
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
              Hello, I am Saakshi, a computer science graduate from Pune University.
              I have deep interest in coding and have mostly explored technologies
              like Web development, full stack development, app development, AI and
              am also interested in quantum technologies.
            </p>
          </div>
        </Section>
      </div>

      <Dash />

      {/* PROJECTS */}
      <div className="px-6 sm:px-10 lg:px-16">
        <Section>
          <ProjectsSection />
        </Section>
      </div>

      <Dash />

      {/* EXPERIENCE */}
      <div className="px-6 sm:px-10 lg:px-16">
        <Section>
          <ExperienceSection />
        </Section>
      </div>

      <Dash />

      {/* EDUCATION */}
      <div className="px-6 sm:px-10 lg:px-16">
        <Section>
          <EducationSection />
        </Section>
      </div>

      <Dash />

      {/* TESTIMONIALS */}
      <div className="px-6 sm:px-10 lg:px-16">
        <Section>
          <TestimonialsSection />
        </Section>
      </div>

      <Dash />

      {/* Bottom spacer */}
      <div style={{ height: "10vw" }} />

    </div>
  );
}

export default RightSection;