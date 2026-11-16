import Image from "next/image";
import { experience } from "@/config/config";
import { useState } from "react";

function ExperienceCard() {
  const [expandedItems, setExpandedItems] = useState<number[]>([0]);

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-rose-300/10 rounded-standard p-6 border border-rose-300/20">
      <div className="flex flex-row justify-center items-center mb-6">
        <h3 className="text-2xl font-semibold text-rose-300">Experience</h3>
      </div>
      <div className="relative">
        {experience.map((exp, index) => {
          const isExpanded = expandedItems.includes(index);
          const isLast = index === experience.length - 1;

          return (
            <div key={`${exp.company}-${exp.startDate}`} className="relative flex gap-4">
              {/* Timeline Line and Dot */}
              <div className="relative flex flex-col items-center min-h-[64px] w-6">
                {/* Vertical line */}
                {!isLast && (
                  <div className="absolute left-1/2 top-4 -translate-x-1/2 w-0.5 h-full bg-rose-300/30 z-0"></div>
                )}
                {/* Dot aligned with header */}
                <div
                  className={`relative mt-3 w-3.5 h-3.5 rounded-full z-10 shrink-0 ${
                    exp.endDate === "Present"
                      ? "animated-gradient-bg ring-4 ring-rose-300/20"
                      : "bg-rose-300"
                  }`}
                ></div>
              </div>

              {/* Content */}
              <div className={`flex-1 ${isLast ? "pb-2" : "pb-8"}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex gap-1 shrink-0">
                    {exp.photoPath.map((photo: string, photoIndex: number) => (
                      <div
                        key={photoIndex}
                        className="relative w-8 h-8 flex-shrink-0 bg-white/10 rounded-sm overflow-hidden"
                      >
                        <Image
                          src={photo}
                          alt={`${exp.company} logo`}
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white/90 leading-snug">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-rose-300/80">{exp.company}</p>
                  </div>
                </div>

                {/* Display start and end dates */}
                <p className="text-xs text-white/50 mb-2">
                  {exp.startDate} – {exp.endDate}
                </p>

                {/* Description with expand/collapse functionality */}
                <div className="text-white/75 text-sm leading-relaxed">
                  {isExpanded && exp.highlights && exp.highlights.length > 0 ? (
                    <ul className="list-disc list-outside ml-4 space-y-2">
                      {exp.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className={isExpanded ? "" : "line-clamp-2"}>
                      {exp.desc}
                    </p>
                  )}

                  {(exp.desc.length > 120 ||
                    (exp.highlights && exp.highlights.length > 0)) && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(index)}
                      className="text-rose-300/80 hover:text-rose-300 text-xs mt-2 underline cursor-pointer"
                    >
                      {isExpanded ? "Show less" : "Show more"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceCard;
