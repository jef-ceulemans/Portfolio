import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faReact, faJava, faDocker, faGithub,faGitlab, faFlutter, faJs } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";

function getLevelLabel(value) {
  if (value >= 85) return "Advanced";
  if (value >= 65) return "Intermediate";
  return "Beginner";
}

export default function Skills() {
   const SkillCard = ({ title, icon, level = 75 }) => {
    const levelLabel = getLevelLabel(level);
    return (
      <div className="bg-white/20 shadow-lg rounded-2xl p-3 border-1  border-yellow-500 hover:border-yellow-300 flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-white mb-3">
          {title} {icon}
        </h3>
        <div className="relative group w-full bg-gray-300 rounded-full h-2.5">
          <div
            className="bg-yellow-500 h-2.5 rounded-full transition-all duration-700"
            style={{ width: `${level}%` }}
          ></div>
          <span className="absolute left-1/2 -translate-x-1/2 -top-7 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-xs py-1 px-2 rounded transition-opacity"
            style={{ left: `calc(${level}% - 0.75rem)` }}>
              {level}%
          </span>
        </div>
        <div className="text-sm text-white mt-3 text-center ">{levelLabel}</div>
      </div>
    );
  };

  return (
    <section className="relative text-gray-200 py-16 px-6 sm:px-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-105 z-0 "
        style={{ backgroundImage: "url('src/assets/images/aboutMe/skills.jpg')" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h3 className="text-3xl mb-8">Skills</h3>

        <h4 className="text-2xl mb-4">Front-end</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <SkillCard title="Angular" icon={<FontAwesomeIcon icon={faAngular} />} level = {85} />
          <SkillCard title="React" icon={<FontAwesomeIcon icon={faReact}  />} level = {75} />
          <SkillCard title="HTML/CSS" icon={<FontAwesomeIcon icon={faCode} size="sm" />} level = {85} />
          <SkillCard title="JavaScript" icon={<FontAwesomeIcon icon={faJs} />} level = {80} />
          <SkillCard title="TypeScript" icon={<FontAwesomeIcon icon={faCode} size="sm" />} level = {85} />
          <SkillCard title="D3.JS" icon={<FontAwesomeIcon icon={faCode} size="sm" />} level = {90} />
          <SkillCard
            title="Tailwind"
            icon={
              <svg className="h-6 w-6 inline-block ml-2 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624
                C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624
                C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624
                c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624
                C10.337,13.382,8.976,12,6.001,12z"></path>
              </svg>
            } level = {85}
          />
        </div>

        <h4 className="text-2xl mb-4">Back-end & Databases</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <SkillCard title="Java" icon={<FontAwesomeIcon icon={faJava} />} level = {80}/>
          <SkillCard title=".NET" icon={<FontAwesomeIcon icon={faCode} size="sm" />} level = {85} />
          <SkillCard title="MongoDB" icon={<FontAwesomeIcon icon={faDatabase} />} level = {75} />
          <SkillCard title="MySQL" icon={<FontAwesomeIcon icon={faDatabase} />} level = {80} />
        </div>

        <h4 className="text-2xl mb-4">Mobile</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <SkillCard title="MAUI" icon={<FontAwesomeIcon icon={faMobileScreen} />} level = {60} />
          <SkillCard title="React Native" icon={<FontAwesomeIcon icon={faReact} />} level = {80} />
          <SkillCard title="Flutter" icon={<FontAwesomeIcon icon={faFlutter} />} level = {75}/>
        </div>

        {/* DevOps & Tools */}
        <h4 className="text-2xl mb-4">DevOps & Tools</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard title="Docker" icon={<FontAwesomeIcon icon={faDocker} /> }level = {70}/>
          <SkillCard title="Git" icon={
              <>
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                <FontAwesomeIcon icon={faGitlab} />
              </>
            }
            level = {80}
          />
        </div>
      </div>
    </section>
  );
}
