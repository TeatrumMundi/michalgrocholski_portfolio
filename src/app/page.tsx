"use client";

import Nav from "@/components/Nav";
import Home from "@/components/home/Home";
import Projects from "@/components/Projects";

function HomePage() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white">
      <Nav />
      <Home />
      <Projects />
    </div>
  );
}

export default HomePage;
