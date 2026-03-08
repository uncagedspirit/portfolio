import React from "react";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import TestimonialsSection from "./TestimonialsSection";
import ProjectsSection from "./ProjectsSection";
import GitHubContributions from "./GitHubContributions";

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

      {/* Git commit sign-off */}
      <div className="px-6 sm:px-10 lg:px-16 py-8 sm:py-10">
        <div className="w-full lg:w-full">
          <div className="pf-commit-terminal">
            {/* Terminal title bar */}
            <div className="pf-commit-terminal-bar">
              <div className="pf-commit-terminal-dot" style={{ backgroundColor: "#FF5F57" }} />
              <div className="pf-commit-terminal-dot" style={{ backgroundColor: "#FEBC2E" }} />
              <div className="pf-commit-terminal-dot" style={{ backgroundColor: "#28C840" }} />
              <span className="ml-2 text-[10px] text-gray-400 font-mono">terminal</span>
            </div>
            {/* Terminal body */}
            <div className="px-4 py-4 sm:py-5">
              <p className="text-[11px] sm:text-xs text-gray-400 font-mono mb-1">
                ~/portfolio <span className="text-green-400">master</span>
              </p>
              <p className="font-mono text-xs sm:text-sm">
                <span className="text-green-400">❯</span>
                {" "}
                <span className="text-gray-200">git commit -m </span>
                <span style={{ color: "#E8889A" }}>"Bye"</span>
              </p>
              <p className="font-mono text-[10px] sm:text-xs text-gray-500 mt-2">
                [master] 1 file changed · thanks for visiting ✦
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "10vw" }} />
    </div>
  );
}

export default RightSection;