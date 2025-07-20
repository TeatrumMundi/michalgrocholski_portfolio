"use client";

import { Typewriter } from "react-simple-typewriter";
import MediaButton from "@/components/MediaButton";
import NameBox from "@/components/NameBox";

function HomePage() {
  return (
    <div className="bg-[#121212] text-white grid min-h-screen grid-cols-2">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-full max-w-md text-left">
          <NameBox
            name="Michał Grocholski"
          />
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
          <div className="flex flex-row gap-2 mt-6">
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

      <div className="bg-amber-200">
        <h1>Skills</h1>
      </div>
    </div>
  );
}

export default HomePage;
