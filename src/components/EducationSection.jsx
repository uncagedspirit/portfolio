import React from "react";
import educationData from "../data/educationData";

function EducationSection() {
  return (
    <>
      <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">
        EDUCATION
      </p>

      <div className="w-[85%] flex flex-col gap-3">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-slate-200 text-slate-900 rounded-2xl border-b-6 border-r-6 border-t border-l py-6 border-slate-800 shadow-lg px-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-lg leading-tight">
                  {edu.instituteName}
                </p>
                <p className="text-sm text-slate-700">
                  {edu.level} · {edu.specialization}
                </p>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-sm text-slate-700">{edu.duration}</p>
                <p className="text-sm font-bold text-slate-900">
                  {edu.scoreLabel}: {edu.scoreValue}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EducationSection;
