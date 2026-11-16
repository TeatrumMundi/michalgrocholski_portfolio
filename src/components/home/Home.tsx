"use client";

import { Typewriter } from "react-simple-typewriter";
import MediaButton from "@/components/home/MediaButton";
import NameBox from "@/components/home/NameBox";
import SkillsBox from "@/components/home/SkillsBox";
import { personalInfo, mediaButtons, skillsData } from "@/config/config";
import Image from "next/image";
import { MdOutlineLocationOn } from "react-icons/md";

function Home() {
  return (
    <section
      className="text-white grid min-h-screen px-6 py-28 sm:py-24 grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center"
      id="home"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Left Side */}
        <div className="w-full max-w-md text-left">
          <NameBox name={personalInfo.name} />
          <h1 className="text-6xl sm:text-7xl font-bold mt-3 leading-tight">
            <span className="block">{personalInfo.title1}</span>
            <span className="block text-5xl sm:text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
              {personalInfo.title2}
            </span>
          </h1>
          <p className="text-sm sm:text-base text-teal-300/90 font-medium mt-2">
            {personalInfo.subtitle}
          </p>
          <div className="flex items-center gap-2 mt-2 text-white/80">
            <MdOutlineLocationOn className="text-xl text-teal-400 shrink-0" />
            <span>{personalInfo.location}</span>
          </div>
          <p className="mt-4 min-h-[3rem] text-white/90">
            <Typewriter
              words={personalInfo.typewriterWords}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <p className="mt-2 text-lg text-white/80">
            Explore my projects, experience, and technical skills.
          </p>
          <div className="flex flex-row flex-wrap gap-2 mt-6 bg-liquid-100 border border-border rounded-standard p-4">
            {mediaButtons.map((media) => (
              <MediaButton
                key={media.label}
                label={media.label}
                iconUrl={media.iconUrl}
                url={media.url}
              />
            ))}
          </div>
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center px-6 py-3 bg-liquid-100 text-white rounded-standard hover:bg-liquid-200 hover:scale-105 transition-all duration-300 border border-border"
          >
            <span>Download CV</span>
            <Image
              className="inline-block ml-2"
              src="/icons/cv.svg"
              alt="CV Icon"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-left w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">TechStack</h2>
          {skillsData.map((skillCategory) => (
            <SkillsBox
              key={skillCategory.title}
              title={skillCategory.title}
              titleClassName={skillCategory.titleClassName}
              skills={skillCategory.skills}
              className={skillCategory.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
