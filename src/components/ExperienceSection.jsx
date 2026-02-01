import React from 'react'

import ExperienceCard from "./ExperienceCard";
import { experienceData } from "../data/experienceData";

function ExperienceSection() {
  return (
    <>
    <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">EXPERIENCE</p>
      <div className="w-[85%] flex flex-col gap-4">
        {experienceData.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
        </>
  )
}

export default ExperienceSection