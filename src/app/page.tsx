"use client";

import Nav from "@/components/Nav";
import Home from "@/components/home/Home";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

function HomePage() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white">
      <Nav />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default HomePage;
