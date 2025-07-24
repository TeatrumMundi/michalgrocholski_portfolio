import Image from "next/image";
import { experience } from "@/config/config";
import { useState } from "react";

function ExperienceCard() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-rose-300/10 rounded-standard p-6 border border-rose-300/20">
      <div className="flex flex-row justify-center items-center mb-6">
        <h3 className="text-2xl text-rose-300">Experience</h3>
      </div>
      <div className="relative">
        {experience.map((exp, index) => (
          <div key={index} className="relative flex gap-4">
            {/* Timeline Line and Dot */}
            <div className="relative flex flex-col items-center min-h-[64px] w-6">
              {/* Vertical line */}
              {index < experience.length && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-rose-300/30 z-0"></div>
              )}
              {/* Dot in the middle */}
                <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-rose-300  z-10 
                    ${exp.endDate === "Present" 
                    ? "animated-gradient-bg" 
                    : "rounded-standard"}`}>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex gap-1">
                  {exp.photoPath.map((photo: string, photoIndex: number) => (
                    <div
                      key={photoIndex}
                      className="relative w-8 h-8 flex-shrink-0 bg-white/10 rounded-sm overflow-hidden"
                    >
                      <Image
                        src={photo}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white/90">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-rose-300/80">{exp.company}</p>
                </div>
              </div>

              {/* Display start and end dates */}
              <p className="text-xs text-white/50 mb-2">
                {exp.startDate} - {exp.endDate}
              </p>

              {/* Description with expand/collapse functionality */}
              <div className="text-white/70 text-sm leading-relaxed">
                <p
                  className={
                    expandedItems.includes(index) ? "" : "line-clamp-2"
                  }
                >
                  {exp.desc}
                </p>
                {exp.desc.length > 120 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-rose-300/80 hover:text-rose-300 text-xs mt-1 underline"
                  >
                    {expandedItems.includes(index) ? "Show less" : "Show more"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;
