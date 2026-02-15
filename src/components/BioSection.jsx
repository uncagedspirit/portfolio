import React, { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";
import { socialData } from "../data/socialData";
import { profileData } from "../data/profileData";
import { skillLogos } from "../data/skillLogos";
import ContactModal from "./ContactModal";
import { useTheme } from "../context/ThemeContext";

function BioSection() {
  const { name, email, about, roles, skills, languages } = profileData;
  const { isDark, toggleTheme } = useTheme();

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState("typing");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, skill) => {
    if (hoveredSkill === skill) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (phase === "typing") {
      if (displayedText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayedText(current.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), 1500);
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
    <div className="px-6 sm:px-8 lg:px-10 pt-8 lg:pt-12 bg-slate-50 dark:bg-zinc-950 h-full flex flex-col lg:border-r-2 lg:border-slate-900 dark:lg:border-zinc-700 transition-colors duration-300">

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Theme Toggle */}
      <div className="flex justify-end mb-2">
        <button
          onClick={toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-zinc-700 transition-all duration-300 shadow-sm text-base"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? "☀" : "☾"}
        </button>
      </div>

      <div className="flex-1">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4">
          <img src={profile} alt="profile" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">{name}</h1>
        <p className="text-gray-700 dark:text-slate-400 mb-4 h-6 text-sm sm:text-base">
          {displayedText} <span className="animate-pulse">|</span>
        </p>

        {/* ABOUT */}
        <p className="text-slate-900 dark:text-slate-200 mt-6 sm:mt-8 mb-2 font-semibold text-sm">ABOUT</p>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">{about}</p>

        {/* CONTACT */}
        <div className="flex items-center gap-2 mt-6 sm:mt-8 mb-2">
          <p className="text-slate-900 dark:text-slate-200 font-semibold text-sm">CONTACT</p>
          <button
            className="
              w-7 h-7 text-2xl flex items-center justify-center px-1 pb-1
              border border-slate-900 dark:border-zinc-500 rounded-full
              text-slate-900 dark:text-slate-200
              transition-colors duration-300
              hover:bg-slate-900 dark:hover:bg-zinc-200 hover:text-slate-300 dark:hover:text-zinc-900 hover:border-slate-300 dark:hover:border-zinc-200
            "
            onClick={() => setIsModalOpen(true)}
          >
            ↗
          </button>
        </div>
        <p className="text-sm sm:text-base break-all text-slate-700 dark:text-slate-300">email: {email}</p>

        {/* SKILLS */}
        <p className="text-slate-900 dark:text-slate-200 mt-6 sm:mt-8 mb-2 font-semibold text-sm">SKILLS</p>
        <div className="flex flex-wrap gap-1 relative">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-50 dark:bg-zinc-800 border border-slate-600 dark:border-zinc-500 px-1.5 py-0.5 rounded-lg text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 transition-colors text-slate-800 dark:text-slate-200"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              onMouseMove={(e) => handleMouseMove(e, skill)}
            >
              {skill}
            </span>
          ))}

          {hoveredSkill && skillLogos[hoveredSkill] && (
            <div
              className="fixed pointer-events-none z-50"
              style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px`, transform: "translate(-50%, -50%)" }}
            >
              <div className="bg-white dark:bg-zinc-800 rounded-full p-2 shadow-lg border-2 border-slate-300 dark:border-zinc-500 w-12 h-12 flex items-center justify-center">
                {skillLogos[hoveredSkill].startsWith("http") ? (
                  <img src={skillLogos[hoveredSkill]} alt={hoveredSkill} className="w-8 h-8 object-contain" />
                ) : (
                  <span className="text-2xl">{skillLogos[hoveredSkill]}</span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* LANGUAGES */}
        <p className="text-slate-900 dark:text-slate-200 mt-6 sm:mt-8 mb-2 font-semibold text-sm">LANGUAGES</p>
        <div className="flex flex-wrap gap-1 mb-6 lg:mb-0">
          {languages.map((language) => (
            <span key={language} className="bg-gray-50 dark:bg-zinc-800 border border-slate-600 dark:border-zinc-500 px-1.5 py-0.5 rounded-lg text-xs text-slate-800 dark:text-slate-200">
              {language}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-6 mb-6 lg:mb-0 bg-slate-200 dark:bg-zinc-800 p-3 sm:p-4 rounded-2xl border-t border-l border-b-4 border-r-4 border-slate-800 dark:border-zinc-500 shadow-lg transition-colors duration-300">
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
                  className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:opacity-70 transition-opacity dark:invert dark:brightness-90"
                  onClick={() => window.open(social.link, "_blank", "noopener,noreferrer")}
                />
                <div
                  className={`hidden lg:block absolute bottom-full mb-2 ${tooltipPosition}
                    bg-white dark:bg-zinc-800 border border-slate-400 dark:border-zinc-600 rounded-lg p-3 shadow-xl w-52
                    invisible opacity-0 group-hover:visible group-hover:opacity-100
                    transition-all duration-200 pointer-events-none z-10`}
                >
                  <div className="flex items-center gap-3">
                    <img src={social.profileImg} alt={`${social.name} profile`} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">{social.username}</p>
                      <p className="text-xs text-gray-600 dark:text-slate-400">{social.metaValue} {social.metaLabel}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-slate-300 mt-3">{social.bio}</p>
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