"use client";

import { Typewriter } from "react-simple-typewriter";
import MediaButton from "@/components/MediaButton";
import NameBox from "@/components/NameBox";
import SkillsBox from "@/components/SkillsBox";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";

function HomePage() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white">
      <div className=" text-white grid min-h-screen p-5 grid-cols-1 sm:grid-cols-2" id="home">
      <Nav />

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
          <div className="flex flex-row flex-wrap gap-y-2 gap-2 mt-6 w-full">
            <MediaButton
              label="GitHub"
              iconUrl="/icons/github.svg"
              url="https://github.com/TeatrumMundi"
            />
            <MediaButton
              label="LinkedIn"
              iconUrl="/icons/linkedin.svg"
              url="https://www.linkedin.com/in/michal-grocholski/"
            />
            <MediaButton
              label="Facebook"
              iconUrl="/icons/facebook.svg"
              url="https://www.facebook.com/micha.grocholski1/"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-left">
          <h1 className="text-5xl">TechStack</h1>
          <SkillsBox
            title="Programming Languages"
            titleClassName="text-3xl mt-3 italic bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text"
            skills={[
              { title: "JavaScript", iconUrl: "/icons/js.svg" },
              { title: "TypeScript", iconUrl: "/icons/ts.svg" },
            ]}
            color="#78350f" // yellow-900
            className="mt-2"
          />
          <SkillsBox
            title="Frontend"
            titleClassName="text-3xl mt-3 italic bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400 text-transparent bg-clip-text"
            skills={[
              { title: "CSS", iconUrl: "/icons/css3.svg" },
              { title: "HTML", iconUrl: "/icons/html5.svg" },
              { title: "Tailwind", iconUrl: "/icons/tailwind.svg" },
              { title: "React", iconUrl: "/icons/react.svg" },
              { title: "Next.js", iconUrl: "/icons/next.svg" },
            ]}
            color="#172554" // blue-900
            className="mt-2"
          />
          <SkillsBox
            title="Backend"
            titleClassName="text-3xl mt-3 italic bg-gradient-to-r from-green-400 via-lime-500 to-emerald-500 text-transparent bg-clip-text"
            skills={[
              { title: "Node.js", iconUrl: "/icons/node-js.svg" },
              { title: "Rest API", iconUrl: "/icons/rest-api.svg" },
            ]}
            color="#052e16" // green-950
            className="mt-2"
          />
          <SkillsBox
            title="Database"
            titleClassName="text-3xl mt-3 italic bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text"
            skills={[
              { title: "Prisma", iconUrl: "/icons/prisma.svg" },
              { title: "PostgreSQL", iconUrl: "/icons/PostgreSQL.svg" },
              { title: "SQL Lite" },
            ]}
            color="#2e1065" // purple-950
            className="mt-2"
          />
          <SkillsBox
            title="Q/A Testing"
            titleClassName="text-3xl mt-3 italic bg-gradient-to-r from-pink-400 via-rose-500 to-red-400 text-transparent bg-clip-text"
            skills={[
              { title: "Postman", iconUrl: "/icons/postman.svg" },
              { title: "Unit Testing", iconUrl: "/icons/unit-test.svg" },
            ]}
            color="#831843" // pink-900
            className="mt-2"
          />
          <SkillsBox
            title="Other"
            titleClassName="text-3xl mt-3 italic bg-gradient-to-r from-gray-400 via-zinc-500 to-neutral-600 text-transparent bg-clip-text"
            skills={[
              { title: "Git", iconUrl: "/icons/git.svg" },
              { title: "GitHub", iconUrl: "/icons/github_skill.svg" },
              { title: "JIRA", iconUrl: "/icons/jira.svg" },
            ]}
            color="#111827" // gray-900
            className="mt-2"
          />
        </div>
      </div>
      </div>
      <Projects />
    </div>
  );
}

export default HomePage;
