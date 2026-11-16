import AboutMeCard from "./AboutMeCard";
import ExperienceCard from "./ExperienceCard";

function About() {
  return (
    <section className="min-h-screen px-6 py-16 mt-16 pb-24" id="about">
      <h2 className="text-5xl font-bold text-center animated-gradient">
        About me
      </h2>
      <p className="text-xl text-center mt-4 text-white/50">
        Get to know the person behind the code
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10 md:items-start">
        <AboutMeCard />
        <ExperienceCard />
      </div>
    </section>
  );
}

export default About;