export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
}

export interface MediaButtonItem {
  label: string;
  iconUrl: string;
  url: string;
}

export interface SkillItem {
  title: string;
  iconUrl?: string;
}

export interface SkillCategory {
  title: string;
  className: string;
  titleClassName: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  desc: string;
  highlights?: string[];
  photoPath: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
}

export interface CertificationItem {
  code: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export const personalInfo = {
  name: "Michał Grocholski",
  title1: "Validation Platform Planner",
  title2: "& Systems Engineer",
  subtitle: "Systems & Platform Validation Engineer · Full Stack Developer",
  location: "Gdańsk, Poland",
  cvUrl: "/CV_Michał_Grocholski_2026_Q4.pdf",
  typewriterWords: [
    "Hi! My name is Michał Grocholski.",
    "Validation Platform Planner & Systems Engineer at Intel.",
    "M.Sc. IT Student & Full Stack Developer in Gdańsk.",
    "Welcome to my portfolio!",
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    title: "SMK Kalendarz",
    description:
      "A React app to manage and visualize periods (e.g., vacations, internships) on a calendar.",
    image: "/projects/smk_kalendarz.png",
    liveUrl: "https://smk-kalendarz.vercel.app/",
    githubUrl: "https://github.com/TeatrumMundi/smk-kalendarz",
    technologies: ["Next.js", "React", "Tailwind", "TypeScript"],
  },
  {
    id: 2,
    title: "Flow Manager",
    description:
      "FlowManager is a modern system for comprehensive project, personnel, work time, and operational cost management.",
    image: "/projects/flowManager.png",
    liveUrl: "https://flow-manager-ashen.vercel.app/",
    githubUrl: "https://github.com/TeatrumMundi/flow_manager",
    technologies: ["Next.js", "React", "Prisma", "Tailwind", "TypeScript"],
  },
];

export const mediaButtons: MediaButtonItem[] = [
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

export const skillsData: SkillCategory[] = [
  {
    title: "Programming & Scripting",
    className:
      "bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-red-500/10",
    titleClassName:
      "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text",
    skills: [
      { title: "TypeScript", iconUrl: "/icons/ts.svg" },
      { title: "JavaScript", iconUrl: "/icons/js.svg" },
      { title: "VBA & Power Query" },
      { title: "Linux & Windows Scripting" },
    ],
  },
  {
    title: "Frontend",
    className:
      "bg-gradient-to-r from-blue-400/10 via-cyan-500/10 to-green-400/10",
    titleClassName:
      "bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400 text-transparent bg-clip-text",
    skills: [
      { title: "React", iconUrl: "/icons/react.svg" },
      { title: "Next.js", iconUrl: "/icons/next.svg" },
      { title: "Tailwind", iconUrl: "/icons/tailwind.svg" },
      { title: "HTML", iconUrl: "/icons/html5.svg" },
      { title: "CSS", iconUrl: "/icons/css3.svg" },
    ],
  },
  {
    title: "Backend & Automation",
    className:
      "bg-gradient-to-r from-green-400/10 via-lime-500/10 to-emerald-500/10",
    titleClassName:
      "bg-gradient-to-r from-green-400 via-lime-500 to-emerald-500 text-transparent bg-clip-text",
    skills: [
      { title: "Node.js", iconUrl: "/icons/node-js.svg" },
      { title: "REST / JSON-RPC API", iconUrl: "/icons/rest-api.svg" },
      { title: "ETL Data Pipelines" },
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
      { title: "PostgreSQL", iconUrl: "/icons/postgresql.svg" },
      { title: "SQLite / SQL" },
    ],
  },
  {
    title: "Systems & QA Validation",
    className:
      "bg-gradient-to-r from-pink-400/10 via-rose-500/10 to-red-400/10",
    titleClassName:
      "bg-gradient-to-r from-pink-400 via-rose-500 to-red-400 text-transparent bg-clip-text",
    skills: [
      { title: "E2E & Regression Testing", iconUrl: "/icons/unit-test.svg" },
      { title: "Postman", iconUrl: "/icons/postman.svg" },
      { title: "BIOS/UEFI & OS Deployment" },
      { title: "Driver Validation (Intel RST)" },
    ],
  },
  {
    title: "ERP, Tools & Operations",
    className:
      "bg-gradient-to-r from-gray-400/10 via-zinc-500/10 to-neutral-600/10",
    titleClassName:
      "bg-gradient-to-r from-gray-400 via-zinc-500 to-neutral-600 text-transparent bg-clip-text",
    skills: [
      { title: "Git", iconUrl: "/icons/git.svg" },
      { title: "GitHub", iconUrl: "/icons/github_skill.svg" },
      { title: "JIRA & HSD-ES", iconUrl: "/icons/jira.svg" },
      { title: "Odoo ERP & SyteLine" },
      { title: "Confluence & Agile/Scrum" },
    ],
  },
];

export const contactInfo = {
  email: "michal3659@gmail.com",
  phone: "+48 530 270 402",
  location: "Gdańsk, Poland",
  availability: "Available for freelance projects and full-time opportunities",
};

export const aboutMe = {
  title: "About Me",
  description: `Systems & Platform Validation Engineer with 4.5+ years of experience at Intel across hardware/OS provisioning, BIOS/firmware configuration, and enterprise lab operations. Specialized in automating resource allocation and logistics tracking through Odoo and Infor SyteLine ERP systems and multi-API integrations (Jira, DHL, FedEx), as well as leading a 5-member validation operations team and scaling hardware infrastructure workflows. Alongside systems engineering, I hold a B.Eng. in Information Technology and am pursuing an M.Sc. in Web Application Development at WSB Merito Gdańsk — building modern, responsive full-stack applications with TypeScript, React, Next.js, and Tailwind CSS.`,
};

export const experience: ExperienceItem[] = [
  {
    title: "Validation Platform Planner & Systems Engineer",
    company: "Intel Technology Poland",
    startDate: "01/2025",
    endDate: "Present",
    desc: "Engineered automated ETL and reporting pipelines integrating Odoo, Jira, DHL, and FedEx APIs via Power Query/Excel, eliminating manual data entry and accelerating hardware logistics and resource forecasting. Coordinated graphics validation platform allocation across Infor SyteLine and Odoo ERP, partnering with core development teams on Odoo production rollouts and delivering technical onboarding. Directed end-to-end hardware logistics, requirement gathering, and daily task allocation for a 5-member operational validation team. Spearheaded Jira-based project tracking and weekly executive resource utilization reports while prototyping local AI-assisted workflows to automate operational triage.",
    highlights: [
      "Automated Multi-API Data Pipelines: Engineered automated ETL and reporting pipelines integrating Odoo, Jira, DHL, and FedEx APIs via Power Query/Excel, eliminating manual data entry and accelerating hardware logistics and resource forecasting.",
      "Production Deployment & Enablement: Coordinated graphics validation platform allocation across Infor SyteLine and Odoo ERP; partnered with core development teams on Odoo production rollouts and delivered technical onboarding to internal engineering teams.",
      "Cross-Functional Team Leadership: Directed end-to-end hardware logistics, requirement gathering, and daily task allocation for a 5-member operational validation team.",
      "Executive Analytics & AI Workflow Architecture: Spearheaded Jira-based project tracking and delivered weekly resource utilization reports to leadership, while prototyping local AI-assisted workflows to automate operational triage and reporting.",
    ],
    photoPath: ["/experience/intel.jpg"],
  },
  {
    title: "System Validation & Lab Support Engineer (Contracted by Experis)",
    company: "Intel Technology Poland",
    startDate: "05/2022",
    endDate: "12/2024",
    desc: "Executed end-to-end functional, compatibility, and regression test suites for Intel Rapid Storage Technology (RST) drivers, ensuring system stability and storage performance across multiple hardware configurations. Assembled, configured, and maintained dedicated validation platforms, performing component-level integration, BIOS/UEFI firmware flashing and tuning, and clean Windows/Linux OS deployments. Captured system telemetry and debug logs within Jira and HSD-ES to isolate complex hardware/driver regressions with software engineering teams, and built reproducible hardware/software test matrices to streamline lab turnaround times.",
    highlights: [
      "Storage Driver & System Validation: Executed end-to-end functional, compatibility, and regression test suites for Intel Rapid Storage Technology (RST) drivers, ensuring system stability and storage performance across multiple hardware configurations.",
      "Hardware & Firmware Provisioning: Assembled, configured, and maintained dedicated validation platforms, performing component-level integration, BIOS/UEFI firmware flashing and tuning, and clean Windows/Linux OS deployments.",
      "Root Cause Analysis & Defect Management: Captured system telemetry and debug logs within Jira and HSD-ES, collaborating closely with software engineering teams to isolate complex hardware/driver regressions and verify fixes.",
      "Test Environment Standardization: Built and documented reproducible hardware/software test matrices, streamlining lab turnaround times for multi-release validation cycles.",
    ],
    photoPath: ["/experience/experis.png", "/experience/intel.jpg"],
  },
  {
    title: "Electric Assistant",
    company: "G.Z.R.M SP. z o.o.",
    startDate: "02/2022",
    endDate: "05/2022",
    desc: "Assisted in assembling electrical enclosures, mounting electrical boxes, cable termination, and maintaining workshop organization and equipment inventory.",
    photoPath: ["/experience/gzrm.png"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "M.Sc. in Information Technology (Web Application Development)",
    institution: "Merito University (WSB Merito Gdańsk)",
    startDate: "03/2026",
    endDate: "Present (Expected 2028)",
  },
  {
    degree: "B.Eng. in Information Technology",
    institution: "Merito University (WSB Merito Gdańsk)",
    startDate: "10/2022",
    endDate: "02/2026",
  },
  {
    degree: "IT Technician (Technik Informatyk)",
    institution: "Zespół Szkół Łączności Nr 4 (Gdańsk)",
    startDate: "09/2016",
    endDate: "05/2021",
  },
];

export const certifications: CertificationItem[] = [
  {
    code: "EE.09",
    title: "Programming, Development, and Administration of Websites and Databases",
    issuer: "Central Examination Board (OKE)",
    year: "2021",
    description:
      "Certified competency in relational database design (SQL), backend scripting, and dynamic web application development.",
  },
  {
    code: "EE.08",
    title: "Assembly and Operation of Computer Systems, Peripherals, and Networks",
    issuer: "Central Examination Board (OKE)",
    year: "2020",
    description:
      "Certified competency in hardware diagnostics, component assembly, Windows/Linux server administration, and LAN configuration.",
  },
];
