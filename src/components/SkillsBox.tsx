import Image from "next/image";

interface Skill {
  title: string;
  iconUrl?: string;
}

interface SkillsBoxProps {
  skills: Skill[];
  color?: string;
  className?: string;
  title?: string;
  titleClassName?: string;
}

function SkillsBox({
  skills,
  color,
  className,
  title,
  titleClassName,
}: SkillsBoxProps) {
  return (
    <div className={className || ""}>
      {title && <h2 className={titleClassName}>{title}</h2>}
      <div className="flex flex-row flex-wrap gap-2 gap-y-2 mt-2">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center gap-2 p-1 px-2 rounded-sm"
            style={{ backgroundColor: color || "#222222" }}
          >
            {skill.title}
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
