import React from "react";
import educationData from "../data/educationData";

function EducationSection() {
  return (
    <>
      <p className="pf-section-label">EDUCATION</p>
      <div className="w-full lg:w-[85%] flex flex-row gap-3 flex-wrap">
        {educationData.map((edu, index) => (
          <div key={index} className="pf-card-sm flex-1 min-w-35 py-4 sm:py-5 px-3 sm:px-4 transition-colors duration-300">
            <p className="pf-heading-sm leading-tight">{edu.instituteName}</p>
            <p className="pf-muted mt-0.5">{edu.level}</p>
            <p className="pf-muted">{edu.specialization}</p>
            <p className="pf-muted mt-1">{edu.duration}</p>
            <p className="pf-body-sm font-bold mt-1">{edu.scoreLabel}: {edu.scoreValue}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default EducationSection;