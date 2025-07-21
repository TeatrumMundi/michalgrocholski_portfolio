import React, { useEffect, useState } from "react";

const sections = [
  { title: "Home", href: "#home" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
  { title: "About", href: "#about" },
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
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex flex-row gap-3 text-lg font-semibold">
        {sections.map((section) => (
          <NavItem
            key={section.href}
            title={section.title}
            href={section.href}
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
  active?: boolean;
}

function NavItem({ title, href, active }: NavItemProps) {
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
        `bg-[#222222] border-x-4 p-2 max-h-10 cursor-pointer transition-all duration-300 skew-x-[-45deg] transform hover:scale-110 hover:rotate-4 ` +
        (active
          ? "border-amber-300 text-amber-300 font-bold"
          : "border-sky-300 text-white")
      }
    >
      <span className="skew-x-[45deg] px-2 flex items-center justify-center">
        {title}
      </span>
    </a>
  );
}

export default Nav;
