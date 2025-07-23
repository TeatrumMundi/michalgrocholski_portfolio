"use client";

import { Typewriter } from "react-simple-typewriter";
import MediaButton from "@/components/home/MediaButton";
import NameBox from "@/components/home/NameBox";
import SkillsBox from "@/components/home/SkillsBox";
import { mediaButtons, skillsData } from "@/config/config";
import Image from "next/image";

function Home() {
  return (
    <div
      className="text-white grid min-h-screen p-5 grid-cols-1 sm:grid-cols-2"
      id="home"
    >
      <div className="flex flex-col items-center justify-center h-full mb-50">
        {/* Left Side */}
        <div className="w-full max-w-md text-left">
          <NameBox name="Michał Grocholski" />
          <h1 className="text-7xl font-bold mt-2">Full Stack</h1>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
            Developer
          </h2>
          <p className="mt-3">
            <Typewriter
              words={[
                "Hi! My name is Michał Grocholski.",
                "I'm a IT student located in Poland [Gdańsk].",
                "Welcome to my portfolio!",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <p className="mt-4 text-lg">Explore my projects and skills.</p>
          <div className="flex flex-row flex-wrap gap-y-2 gap-2 mt-6 bg-liquid-100 border border-border rounded-standard p-4">
            {mediaButtons.map((media) => (
              <MediaButton
                key={media.label}
                label={media.label}
                iconUrl={media.iconUrl}
                url={media.url}
              />
            ))}
          </div>
          <a href="/CV_Michał_Grocholski_2025_Q3.pdf" target="_blank" className="mt-6 inline-block px-6 py-3 bg-liquid-100 text-white rounded-standard hover:bg-liquid-200 hover:scale-105 transition-all duration-300 border border-border">
            <span>Download CV</span>
            <Image
              className="inline-block ml-2"
              src="/icons/cv.svg"
              alt="CV Icon"
              width={20}
              height={20}
              >
            </Image>
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-center justify-center h-full pt-20 pl-0 sm:pl-10">
        <div className="text-left">
          <h1 className="text-5xl">TechStack</h1>
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
    </div>
  );
}

export default Home;
