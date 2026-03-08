import React from 'react'
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "../data/experienceData";

function ExperienceSection() {
  return (
    <>
      <p className="pf-section-label">EXPERIENCE</p>
      <div className="w-full lg:w-full flex flex-col gap-3 sm:gap-4">
        {experienceData.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </>
  )
}

export default ExperienceSection