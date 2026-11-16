import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineContactMail } from "react-icons/md";
import React, { useEffect, useState, useRef } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { GoHome } from "react-icons/go";

const sections = [
  { title: "Home", href: "#home", icon: <GoHome /> },
  {
    title: "Projects",
    href: "#projects",
    icon: <AiOutlineFundProjectionScreen />,
  },
  { title: "Contact", href: "#contact", icon: <MdOutlineContactMail /> },
  { title: "About", href: "#about", icon: <CiCircleInfo /> },
];

function Nav() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const previousSectionRef = useRef<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      const navHeight = 140;

      // Find the section that is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const id = section.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navHeight) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);

      if (current && current !== previousSectionRef.current) {
        window.history.replaceState(null, "", `#${current}`);
        previousSectionRef.current = current;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-liquid-100 rounded-3xl overflow-hidden border border-border backdrop-blur-md shadow-lg max-w-[95vw]"
    >
      <div className="flex flex-row text-lg font-semibold">
        {sections.map((section) => (
          <NavItem
            key={section.href}
            title={section.title}
            href={section.href}
            icon={section.icon}
            active={activeSection === section.href.replace("#", "")}
            onSelect={(id) => setActiveSection(id)}
          />
        ))}
      </div>
    </nav>
  );
}

interface NavItemProps {
  title: string;
  href: string;
  icon?: React.ReactNode;
  active?: boolean;
  onSelect?: (id: string) => void;
}

function NavItem({ title, href, active, icon, onSelect }: NavItemProps) {
  const handleClick = (mouseEvent: React.MouseEvent<HTMLAnchorElement>) => {
    mouseEvent.preventDefault();
    const id = href.replace("#", "");
    onSelect?.(id);
    const navElement = document.getElementById(id);
    if (navElement) {
      const navHeight = 120;
      const elementPosition =
        navElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - navHeight);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    window.history.replaceState(null, "", href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-current={active ? "page" : undefined}
      className={
        `py-2 px-3 sm:px-6 cursor-pointer transition-all duration-300 transform rounded-3xl ` +
        (active
          ? "text-teal-400 font-bold bg-teal-300/20 shadow-lg"
          : "text-white hover:bg-teal-200/10 hover:shadow-md")
      }
    >
      <span className="flex flex-col items-center justify-center gap-1">
        <span className="text-xl">{icon}</span>
        <span className="text-xs sm:text-sm">{title}</span>
      </span>
    </a>
  );
}

export default Nav;
