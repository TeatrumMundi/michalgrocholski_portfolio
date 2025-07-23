import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineContactMail } from "react-icons/md";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const section of sections) {
        const id = section.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-liquid rounded-3xl overflow-hidden border border-border backdrop-blur-xs">
      <div className="flex flex-row text-lg font-semibold ">
        {sections.map((section) => (
          <NavItem
            key={section.href}
            title={section.title}
            href={section.href}
            icon={section.icon}
            active={activeSection === section.href.replace("#", "")}
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
}

function NavItem({ title, href, active, icon }: NavItemProps) {
  const handleClick = (mouseEvent: React.MouseEvent<HTMLAnchorElement>) => {
    mouseEvent.preventDefault();
    const id = href.replace("#", "");
    const navElement = document.getElementById(id);
    if (navElement) {
      navElement.scrollIntoView({ behavior: "smooth" });
    }
    // Optionally, update the URL hash:
    window.history.replaceState(null, "", href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={
        `p-2 px-6 cursor-pointer transition-all duration-300 transform rounded-3xl ` +
        (active
          ? "text-teal-500 font-bold bg-teal-300/20 shadow-lg"
          : "text-white hover:bg-teal-200/10 hover:shadow-md")
      }
    >
      <span className="flex flex-col items-center justify-center gap-1">
        <span className="text-xl">{icon}</span>
        <span className="text-sm">{title}</span>
      </span>
    </a>
  );
}

export default Nav;
