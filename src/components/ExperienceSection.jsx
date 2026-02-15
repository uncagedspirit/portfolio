import React from 'react'
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "../data/experienceData";

function ExperienceSection() {
  return (
    <>
      <p className="text-slate-900 dark:text-slate-200 mb-2 font-semibold text-sm tracking-wide">EXPERIENCE</p>
      <div className="w-full lg:w-[85%] flex flex-col gap-3 sm:gap-4">
        {experienceData.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </>
  )
}

export default ExperienceSection