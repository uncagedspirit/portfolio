import React, { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";
import { socialData } from "../data/socialData";
import { profileData } from "../data/profileData";

function BioSection() {
  const { name, email, about, roles, skills, languages } = profileData;

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
  }, [displayedText, phase, roleIndex, roles]);

  return (
    <div className="px-10 pt-12 bg-slate-50 h-full flex flex-col border border-slate-200 rounded-lg">
      <div className="flex-1">
        {/* Profile Picture */}
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name + Roles */}
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-gray-700 mb-4 h-6">
          {displayedText} <span className="animate-pulse">|</span>
        </p>

        {/* ABOUT */}
        <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">ABOUT</p>
        <p>{about}</p>

        {/* CONTACT */}
        <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">CONTACT</p>
        <p>email: {email}</p>

        {/* SKILLS */}
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

        {/* LANGUAGES */}
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

      {/* SOCIAL LINKS */}
      <div className="mt-6 bg-slate-200 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          {socialData.map((social, index) => {
            // Determine tooltip position based on icon index
            let tooltipPosition = '';
            if (index === 0) {
              // First icon - align tooltip to the right of the icon
              tooltipPosition = 'left-0';
            } else if (index === socialData.length - 1) {
              // Last icon - align tooltip to the left of the icon
              tooltipPosition = 'right-0';
            } else {
              // Middle icons - center the tooltip
              tooltipPosition = 'left-1/2 -translate-x-1/2';
            }

            return (
              <div key={social.key} className="relative group">
                {/* Social Icon */}
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
                  onClick={() =>
                    window.open(social.link, "_blank", "noopener,noreferrer")
                  }
                />

                {/* Tooltip - positioned above with smart alignment */}
                <div
                  className={`absolute bottom-full mb-2 ${tooltipPosition}
                    bg-white border-2 border-slate-300 rounded-lg p-3 shadow-xl w-52
                    invisible opacity-0 group-hover:visible group-hover:opacity-100
                    transition-all duration-200 pointer-events-none z-10`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={social.profileImg}
                      alt={`${social.name} profile`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">{social.username}</p>
                      <p className="text-xs text-gray-600">
                        {social.metaValue} {social.metaLabel}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 mt-3">{social.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BioSection;