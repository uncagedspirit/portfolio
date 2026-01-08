import React from "react";
import profile from "../assets/profile.jpg";

function BioSection() {
  const skills = [
    "JavaScript",
    "HTML/CSS",
    "Python",
    "ReactJs",
    "NodeJs",
    "Frontend development",
  ];
  const languages = ["English", "Hindi", "Marathi"];

  return (
    <div className="px-10 pt-12 bg-slate-50 h-full border-3 border-slate-200 flex flex-col">
      {/* Main content */}
      <div className="flex-1">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-2xl font-semibold">Saakshi</h1>
        <p className="text-gray-700 mb-4">
          Full Stack Developer | Open Source Enthusiast
        </p>

        <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">ABOUT</p>
        <p>
          Hello, I am Saakshi Kobarne, interested in learning fullstack and open
          to freelancing projects
        </p>

        <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">CONTACT</p>
        <p>email: saakshi@mail.com</p>

        <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">SKILLS</p>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-50 border-2 border-slate-200 px-2 py-1 rounded-xl text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">
          LANGUAGES
        </p>
        <div className="flex flex-wrap gap-1">
          {languages.map((language) => (
            <span
              key={language}
              className="bg-gray-50 border-2 border-slate-200 px-2 py-1 rounded-xl text-sm"
            >
              {language}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom box */}
      <div className="mt-auto bg-slate-200 p-4 -ml-8 -mr-8 mb-2 rounded-lg text-center">
        TODO: Add logos of social profiles
      </div>
    </div>
  );
}

export default BioSection;
