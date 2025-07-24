import Image from "next/image";
import { aboutMe, personalInfo } from "@/config/config";
import { useEffect, useState } from "react";

function AboutMeCard() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    let currentHash = "";

    const checkHashAndStartTimer = () => {
      const newHash = window.location.hash;

      // Only proceed if hash actually changed
      if (newHash === currentHash) return;

      currentHash = newHash;

      // Clear existing timer
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      // Only reset message and start timer if we're entering the about section
      if (newHash === "#about") {
        // Reset message when entering about section
        setShowMessage(false);

        timer = setTimeout(() => {
          setShowMessage(true);
        }, 2500); // Trigger after 3 seconds
      } else {
        // Reset message when leaving about section
        setShowMessage(false);
      }
    };

    // Check immediately
    checkHashAndStartTimer();

    // Listen for hash changes (manual navigation)
    window.addEventListener("hashchange", checkHashAndStartTimer);

    // Listen for scroll events to catch navigation updates
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
    <div className="bg-liquid-100 rounded-standard p-6 border border-border">
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-48 h-48 mb-4">
          <Image
            src="/kadr-1.jpg"
            alt={personalInfo.name}
            fill
            className="rounded-standard object-cover object-top"
            priority
          />
        </div>
        <h3 className="text-xl text-center text-white/90 mb-2">
          {personalInfo.name}
        </h3>
      </div>
      <div className="flex flex-row justify-center items-center mb-4">
        <h3 className="text-2xl">{aboutMe.title}</h3>
      </div>
      <div className="relative">
        <p
          className={`text-white/80 leading-relaxed ${
            showMessage ? "blur-sm" : ""
          }`}
        >
          {aboutMe.description}
        </p>
        {showMessage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-rose-300 bg-liquid-200 px-4 py-2 rounded-standard border border-border">
              Who cares about it? Stop wasting time and check projects or
              experience!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutMeCard;
