import AboutMeCard from "./AboutMeCard";
import ExperienceCard from "./ExperienceCard";

function About() {
  return (
    <div className="min-h-screen px-6 mt-30" id="about">
      <h1 className="text-5xl text-center animated-gradient">About me</h1>
      <h2 className="text-xl text-center mt-4 text-white/50">
        Get to know the person behind the code
      </h2>
      <div className="grid grod-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10 md:items-start">
        <AboutMeCard />
        <ExperienceCard />
      </div>
    </div>
  );
}
export default About;