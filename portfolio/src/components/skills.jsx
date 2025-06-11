import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faReact, faJava, faDocker, faGithub, faGitlab, faFlutter, faJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";

function getLevelLabel(value) {
  if (value >= 85) return "Zeer gevorderd";
  if (value >= 65) return "Gevorderd";
  return "Beginnend";
}

export default function Skills() {
  const SkillCard = ({ title, icon, level = 75 }) => {
    const levelLabel = getLevelLabel(level);
    return (
      <div className=" border-white/30 backdrop-blur-md shadow-lg rounded-2xl p-3 border-1 relative flex flex-col justify-between hover:border-violet-400 transition-colors duration-200">
        <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40  " />

        <h3 className="text-lg font-semibold text-gray-200 mb-3 ">
          {icon} {title}
        </h3>
        <div className="relative group w-full bg-gray-300 rounded-full h-2.5">
          <div
            className="bg-violet-500 h-2.5 rounded-full transition-all duration-700"
            style={{ width: `${level}%` }}
          ></div>
          <span className="absolute left-1/2 -translate-x-1/2 -top-7 opacity-0 group-hover:opacity-100 pointer-events-none bg-gray-950 text-gray-200 text-xs py-1 px-2 rounded transition-opacity"
            style={{ left: `calc(${level}% - 0.75rem)` }}>
            {level}%
          </span>
        </div>
        <div className="text-sm text-yellow-500 font-semibold mt-3 text-center ">{levelLabel}</div>
      </div>
    );
  };

  return (
    <section className="bg-black/70 relative text-gray-200  pb-10 px-6 sm:px-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-105 z-0 "
      // style={{ backgroundImage: "url('/assets/images/aboutMe/skills.jpg')" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto p-8 sm:p-10 rounded-lg ">
        <h3 className="text-3xl text-violet-400 mb-8 text-center font-semibold">Skills</h3>

        <h4 className="text-2xl mb-4 text-violet-400">Front-end</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          <SkillCard title="Angular" icon={<FontAwesomeIcon icon={faAngular} />} level={90} />
          <SkillCard title="D3.JS" icon={<FontAwesomeIcon icon={faCode} size="sm" />} level={90} />
          <SkillCard title="TypeScript" icon={<FontAwesomeIcon icon={faCode} size="sm" />} level={85} />
          <SkillCard title="HTML/CSS" icon={<FontAwesomeIcon icon={faCode} size="sm" />} level={85} />
          <SkillCard
            title="Tailwind CSS"
            icon={
              <svg className="h-6 w-6 inline-block  text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624
                C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624
                C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624
                c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624
                C10.337,13.382,8.976,12,6.001,12z"></path>
              </svg>
            } level={85}
          />
          <SkillCard title="JavaScript" icon={<FontAwesomeIcon icon={faJs} />} level={80} />
          <SkillCard title="React" icon={<FontAwesomeIcon icon={faReact} />} level={75} />
        </div>

        <h4 className="text-2xl mb-4 text-violet-400">Back-end & Databases</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 mb-12">
          <SkillCard title=".NET" icon={<FontAwesomeIcon icon={faCode} size="sm" />} level={85} />
          <SkillCard title="Java" icon={<FontAwesomeIcon icon={faJava} />} level={80} />
          <SkillCard title="MySQL" icon={<FontAwesomeIcon icon={faDatabase} />} level={80} />
          <SkillCard title="Python" icon={<FontAwesomeIcon icon={faPython} size="sm" />} level={75} />
          <SkillCard title="MongoDB" icon={<FontAwesomeIcon icon={faDatabase} />} level={75} />
        </div>

        <h4 className="text-2xl mb-4 text-violet-400">Mobile</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 mb-12">
          <SkillCard title="React Native" icon={<FontAwesomeIcon icon={faReact} />} level={80} />
          <SkillCard title="Flutter" icon={<FontAwesomeIcon icon={faFlutter} />} level={75} />
          <SkillCard title="MAUI" icon={<FontAwesomeIcon icon={faMobileScreen} />} level={60} />

        </div>

        <h4 className="text-2xl mb-4 text-violet-400">DevOps & Tools</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6">
          <SkillCard title="Git" icon={
            <>
              <FontAwesomeIcon icon={faGithub} className="mr-1" />
              <FontAwesomeIcon icon={faGitlab} />
            </>
          }
            level={80}
          />
          <SkillCard title="Docker" icon={<FontAwesomeIcon icon={faDocker} />} level={70} />
        </div>
      </div>
    </section>
  );
}
