import React, { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";
import { socialData } from "../data/socialData";

function BioSection() {
  const roles = [
    "Frontend Developer",
    "Web Developer",
    "App Developer",
    "Full Stack Developer",
    "AI Engineer",
    "JavaScript Developer",
    "Open Source Enthusiast",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (phase === "typing") {
      if (displayedText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayedText(current.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setPhase("deleting");
        }, 1500);
      }
    }

    if (phase === "deleting") {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(current.slice(0, displayedText.length - 1));
        }, 60);
      } else {
        setPhase("typing");
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, phase, roleIndex]);

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
      <div className="flex-1">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-2xl font-semibold">Saakshi</h1>
        <p className="text-gray-700 mb-4 h-6">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>

        <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">ABOUT</p>
        <p>
          Hello, I am Saakshi Kobarne, interested in learning fullstack and open
          to freelancing projects
        </p>

        <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">
          CONTACT
        </p>
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

      <div className="mt-auto bg-slate-200 p-4 -ml-8 -mr-8 mb-2 rounded-lg">
        <div className="flex justify-between items-center px-2">
          {socialData.map((social) => (
            <div key={social.key} className="relative group">
              <img
                src={social.icon}
                alt={social.name}
                className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
                onClick={() =>
                  window.open(social.link, "_blank", "noopener,noreferrer")
                }
              />

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white border-2 border-slate-300 rounded-lg p-3 shadow-lg w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                <p className="font-semibold text-sm">{social.username}</p>
                <p className="text-xs text-gray-600 mt-1">
                  {social.metaValue} {social.metaLabel}
                </p>
                <p className="text-xs text-gray-700 mt-2">{social.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BioSection;
