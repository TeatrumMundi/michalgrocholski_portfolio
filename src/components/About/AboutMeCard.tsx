import Image from "next/image";
import {
  aboutMe,
  personalInfo,
  education,
  certifications,
} from "@/config/config";
import { useEffect, useState } from "react";

function AboutMeCard() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let currentHash = "";

    const checkHashAndStartTimer = () => {
      const newHash = window.location.hash;

      if (newHash === currentHash) return;

      currentHash = newHash;

      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      if (newHash === "#about") {
        setShowMessage(false);

        timer = setTimeout(() => {
          setShowMessage(true);
        }, 2500);
      } else {
        setShowMessage(false);
      }
    };

    checkHashAndStartTimer();

    window.addEventListener("hashchange", checkHashAndStartTimer);
    window.addEventListener("scroll", checkHashAndStartTimer, {
      passive: true,
    });

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      window.removeEventListener("hashchange", checkHashAndStartTimer);
      window.removeEventListener("scroll", checkHashAndStartTimer);
    };
  }, []);

  return (
    <div className="bg-liquid-100 rounded-standard p-6 border border-border space-y-6">
      <div>
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-48 h-48 mb-4">
            <Image
              src="/kadr-1.jpg"
              alt={personalInfo.name}
              fill
              sizes="192px"
              className="rounded-standard object-cover object-top"
              priority
            />
          </div>
          <h3 className="text-xl font-semibold text-center text-white/90">
            {personalInfo.name}
          </h3>
          <p className="text-sm text-teal-300/80 mt-1">
            {personalInfo.subtitle}
          </p>
        </div>

        <div className="flex flex-row justify-center items-center mb-3">
          <h4 className="text-2xl font-semibold">{aboutMe.title}</h4>
        </div>

        <div className="relative">
          <p
            className={`text-white/80 leading-relaxed transition-all duration-300 ${
              showMessage ? "blur-sm select-none" : ""
            }`}
          >
            {aboutMe.description}
          </p>
          {showMessage && (
            <div className="absolute inset-0 flex items-center justify-center p-2">
              <div className="text-center text-rose-300 bg-liquid-200 backdrop-blur-md px-4 py-3 rounded-standard border border-border shadow-lg">
                <p>
                  Who cares about it? Stop wasting time and check projects or
                  experience!
                </p>
                <button
                  type="button"
                  onClick={() => setShowMessage(false)}
                  className="mt-2 text-xs text-white/80 hover:text-white underline cursor-pointer"
                >
                  Read anyway
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Education */}
      <div className="pt-4 border-t border-border">
        <h4 className="text-xl font-semibold text-teal-300 mb-3">Education</h4>
        <div className="space-y-3">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-white/5 p-3 rounded-cell border border-white/10"
            >
              <p className="text-sm font-semibold text-white/90">
                {edu.degree}
              </p>
              <p className="text-xs text-teal-300/80 mt-0.5">
                {edu.institution}
              </p>
              <p className="text-xs text-white/50 mt-0.5">
                {edu.startDate} – {edu.endDate}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="pt-4 border-t border-border">
        <h4 className="text-xl font-semibold text-teal-300 mb-3">
          Certifications
        </h4>
        <div className="space-y-3">
          {certifications.map((cert) => (
            <div
              key={cert.code}
              className="bg-white/5 p-3 rounded-cell border border-white/10"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  {cert.code}
                </span>
                <span className="text-xs text-white/50">
                  {cert.issuer} • {cert.year}
                </span>
              </div>
              <p className="text-sm font-medium text-white/90 mt-1.5">
                {cert.title}
              </p>
              <p className="text-xs text-white/65 mt-1 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMeCard;
