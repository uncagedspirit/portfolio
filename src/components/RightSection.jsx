import React from "react";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import TestimonialsSection from "./TestimonialsSection";
import ProjectsSection from "./ProjectsSection";

const Dash = () => <div className="pf-divider" />;
const Section = ({ children }) => <div className="py-6 sm:py-8">{children}</div>;

function RightSection() {
  return (
    <div className="pf-bg-page min-h-full flex flex-col transition-colors duration-300">
      <div style={{ height: "10vw" }} />
      <Dash />

      <div className="px-6 sm:px-10 lg:px-16">
        <Section>
          <p className="pf-section-label">INTRO</p>
          <div className="w-full lg:w-[80%]">
            <p className="pf-body text-sm sm:text-base">
              Hello, I am Saakshi, a computer science graduate from Pune University.
              I have deep interest in coding and have mostly explored technologies like
              Web development, full stack development, app development, AI and am also
              interested in quantum technologies.
            </p>
          </div>
        </Section>
      </div>

      <Dash />
      <div className="px-6 sm:px-10 lg:px-16"><Section><ProjectsSection /></Section></div>

      <Dash />
      <div className="px-6 sm:px-10 lg:px-16"><Section><ExperienceSection /></Section></div>

      <Dash />
      <div className="px-6 sm:px-10 lg:px-16"><Section><EducationSection /></Section></div>

      <Dash />
      <div className="px-6 sm:px-10 lg:px-16"><Section><TestimonialsSection /></Section></div>

      <Dash />
      <div style={{ height: "10vw" }} />
    </div>
  );
}

export default RightSection;