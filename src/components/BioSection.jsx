import React, { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";
import { socialData } from "../data/socialData";
import { profileData } from "../data/profileData";
import ContactModal from "./ContactModal";

function BioSection() {
  const { name, email, about, roles, skills, languages } = profileData;

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState("typing");

  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="px-6 sm:px-8 lg:px-10 pt-8 lg:pt-12 bg-slate-50 h-full flex flex-col lg:border-r-2 lg:border-slate-900">

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="flex-1">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4">
          <img src={profile} alt="profile" className="w-full h-full object-cover"/>
        </div>

        <h1 className="text-xl sm:text-2xl font-semibold">{name}</h1>
        <p className="text-gray-700 mb-4 h-6 text-sm sm:text-base">
          {displayedText} <span className="animate-pulse">|</span>
        </p>

        {/* ABOUT */}
        <p className="text-slate-900 mt-6 sm:mt-8 mb-2 font-semibold text-sm">ABOUT</p>
        <p className="text-sm sm:text-base">{about}</p>

        {/* CONTACT */}
        <div className="flex items-center gap-2 mt-6 sm:mt-8 mb-2">
          <p className="text-slate-900 font-semibold text-sm">CONTACT</p>

          <button
            className="
              w-7 h-7 text-2xl flex items-center justify-center px-1 pb-1
              border border-slate-900 rounded-full 
              text-slate-900 
              transition-colors duration-300
              hover:bg-slate-900 hover:text-slate-300 hover:border-slate-300
            "
            onClick={() => setIsModalOpen(true)}
          >
            ↗
          </button>
        </div>

        <p className="text-sm sm:text-base break-all">email: {email}</p>

        {/* SKILLS */}
        <p className="text-slate-900 mt-6 sm:mt-8 mb-2 font-semibold text-sm">SKILLS</p>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill) => (
            <span key={skill} className="bg-gray-50 border border-slate-600 px-1.5 py-0.5 rounded-lg text-xs">
              {skill}
            </span>
          ))}
        </div>

        {/* LANGUAGES */}
        <p className="text-slate-900 mt-6 sm:mt-8 mb-2 font-semibold text-sm">LANGUAGES</p>
        <div className="flex flex-wrap gap-1 mb-6 lg:mb-0">
          {languages.map((language) => (
            <span key={language} className="bg-gray-50 border border-slate-600 px-1.5 py-0.5 rounded-lg text-xs">
              {language}
            </span>
          ))}
        </div>
      </div>

      <div
        className="
          mt-6 mb-6 lg:mb-0
          bg-slate-200
          p-3 sm:p-4
          rounded-2xl
          border-t border-l
          border-b-4 border-r-4 border-slate-800
          shadow-lg
        "
      >
        <div className="flex justify-between items-center">
          {socialData.map((social, index) => {
            let tooltipPosition = "";
            if (index === 0) tooltipPosition = "left-0";
            else if (index === socialData.length - 1) tooltipPosition = "right-0";
            else tooltipPosition = "left-1/2 -translate-x-1/2";

            return (
              <div key={social.key} className="relative group">
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:opacity-70 transition-opacity"
                  onClick={() =>
                    window.open(social.link, "_blank", "noopener,noreferrer")
                  }
                />

                <div
                  className={`hidden lg:block absolute bottom-full mb-2 ${tooltipPosition}
                    bg-white border border-slate-400 rounded-lg p-3 shadow-xl w-52
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