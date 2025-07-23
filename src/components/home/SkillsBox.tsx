import Image from "next/image";

interface Skill {
  title: string;
  iconUrl?: string;
}

interface SkillsBoxProps {
  skills: Skill[];
  className?: string;
  title?: string;
  titleClassName?: string;
}

function SkillsBox({
  skills,
  className,
  title,
  titleClassName,
}: SkillsBoxProps) {
  return (
    <div className={`backdrop-blur-md border border-border rounded-standard p-2 px-4 shadow-lg hover:shadow-xl transition-all duration-300 ${className} mt-2`}>
      {title && <h2 className={`text-3xl italic ${titleClassName}`}>{title}</h2>}
      <div className="flex flex-row flex-wrap gap-2 gap-y-2 mt-2">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center gap-2 p-2 px-3 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="text-white font-medium">{skill.title}</span>
            {skill.iconUrl && (
              <Image
                className="inline-block"
                src={skill.iconUrl}
                alt={`${skill.title} Icon`}
                width={20}
                height={20}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsBox;
