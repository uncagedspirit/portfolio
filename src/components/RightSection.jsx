import React from "react";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import TestimonialsSection from "./TestimonialsSection";
import ProjectsSection from "./ProjectsSection";
import GitHubContributions from "./GitHubContributions";
import CommitTerminal from "./CommitTerminal";
import PortfolioFooter from "./PortfolioFooter";

const Dash = () => <div className="pf-divider" />;
const Section = ({ children }) => <div className="py-6 sm:py-8">{children}</div>;

function RightSection() {
  return (
    <div className="pf-bg-page min-h-full flex flex-col transition-colors duration-300">
      <div style={{ height: "10vw" }} />
      <Dash />

      {/* GitHub Contributions */}
      <div className="px-6 sm:px-10 lg:px-16">
        <Section>
          <GitHubContributions username="uncagedspirit" />
        </Section>
      </div>

      <Dash />

      {/* Intro */}
      <div className="px-6 sm:px-10 lg:px-16">
        <Section>
          <p className="pf-section-label">INTRO</p>
          <div className="w-full lg:w-[75%]">
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

      {/* Animated terminal sign-off */}
      <div className="px-6 sm:px-10 lg:px-16 py-8 sm:py-10">
        <CommitTerminal />
      </div>

      <Dash />
      <PortfolioFooter />

      <div style={{ height: "4vw" }} />
    </div>
  );
}

export default RightSection;