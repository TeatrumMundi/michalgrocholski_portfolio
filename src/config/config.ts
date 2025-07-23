export const projects = [
  {
    id: 1,
    title: "Chrono Shifter",
    description:
      "Application for tracking and displaying League of Legends player profiles, match history, and statistics",
    image: "/projects/chronoShifter.png", // Add your project screenshots
    liveUrl: "https://www.chrono-shifter.com/",
    githubUrl: "https://github.com/TeatrumMundi/ChronoShifter",
    technologies: ["Next.js", "React", "Prisma", "Tailwind", "TypeScript"],
  },
  {
    id: 2,
    title: "SMK Kalendarz",
    description:
      "A React app to manage and visualize periods (e.g., vacations, internships) on a calendar.",
    image: "/projects/smk_kalendarz.png",
    liveUrl: "https://smk-kalendarz.vercel.app/",
    githubUrl: "https://github.com/TeatrumMundi/smk-kalendarz",
    technologies: ["Next.js", "React", "Tailwind", "TypeScript"],
  },
  {
    id: 3,
    title: "Flow Manager",
    description:
      "FlowManager is a modern system for comprehensive project, personnel, work time, and operational cost management.",
    image: "/projects/flowManager.png",
    liveUrl: "https://www.flow-manager.pl/",
    githubUrl: "https://github.com/TeatrumMundi/flow_manager",
    technologies: ["Next.js", "React", "Prisma", "Tailwind", "TypeScript"],
  },
];

export const mediaButtons = [
  {
    label: "GitHub",
    iconUrl: "/icons/github.svg",
    url: "https://github.com/TeatrumMundi",
  },
  {
    label: "LinkedIn",
    iconUrl: "/icons/linkedin.svg",
    url: "https://www.linkedin.com/in/michal-grocholski/",
  },
  {
    label: "Facebook",
    iconUrl: "/icons/facebook.svg",
    url: "https://www.facebook.com/micha.grocholski1/",
  },
];

export const skillsData = [
  {
    title: "Programming Languages",
    className:
      "bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-red-500/10",
    titleClassName:
      "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text",
    skills: [
      { title: "JavaScript", iconUrl: "/icons/js.svg" },
      { title: "TypeScript", iconUrl: "/icons/ts.svg" },
    ],
  },
  {
    title: "Frontend",
    className:
      "bg-gradient-to-r from-blue-400/10 via-cyan-500/10 to-green-400/10",
    titleClassName:
      "bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400 text-transparent bg-clip-text",
    skills: [
      { title: "CSS", iconUrl: "/icons/css3.svg" },
      { title: "HTML", iconUrl: "/icons/html5.svg" },
      { title: "Tailwind", iconUrl: "/icons/tailwind.svg" },
      { title: "React", iconUrl: "/icons/react.svg" },
      { title: "Next.js", iconUrl: "/icons/next.svg" },
    ],
  },
  {
    title: "Backend",
    className:
      "bg-gradient-to-r from-green-400/10 via-lime-500/10 to-emerald-500/10",
    titleClassName:
      "bg-gradient-to-r from-green-400 via-lime-500 to-emerald-500 text-transparent bg-clip-text",
    skills: [
      { title: "Node.js", iconUrl: "/icons/node-js.svg" },
      { title: "Rest API", iconUrl: "/icons/rest-api.svg" },
    ],
  },
  {
    title: "Database",
    className:
      "bg-gradient-to-r from-purple-400/10 via-fuchsia-500/10 to-pink-500/10",
    titleClassName:
      "bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text",
    skills: [
      { title: "Prisma", iconUrl: "/icons/prisma.svg" },
      { title: "PostgreSQL", iconUrl: "/icons/PostgreSQL.svg" },
      { title: "SQL Lite" },
    ],
  },
  {
    title: "Q/A Testing",
    className:
      "bg-gradient-to-r from-pink-400/10 via-rose-500/10 to-red-400/10",
    titleClassName:
      "bg-gradient-to-r from-pink-400 via-rose-500 to-red-400 text-transparent bg-clip-text",
    skills: [
      { title: "Postman", iconUrl: "/icons/postman.svg" },
      { title: "Unit Testing", iconUrl: "/icons/unit-test.svg" },
    ],
  },
  {
    title: "Other",
    className:
      "bg-gradient-to-r from-gray-400/10 via-zinc-500/10 to-neutral-600/10",
    titleClassName:
      "bg-gradient-to-r from-gray-400 via-zinc-500 to-neutral-600 text-transparent bg-clip-text",
    skills: [
      { title: "Git", iconUrl: "/icons/git.svg" },
      { title: "GitHub", iconUrl: "/icons/github_skill.svg" },
      { title: "JIRA", iconUrl: "/icons/jira.svg" },
    ],
  },
];
