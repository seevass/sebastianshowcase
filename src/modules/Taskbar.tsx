import { Button, Group, Text, Space } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileText,
  IconMail,
  IconUser,
  IconSparkles2Filled,
} from "@tabler/icons-react";
import type { ReactNode } from "react";
import Clock from "./Clock";
import { useEffect, useRef, useState } from "react";
import StartMenu from "./StartMenu";

import "./Taskbar.css";

const BASE_PATH = "/sebastianshowcase";

interface TaskbarLink {
  to: string;
  label: string;
  icon: ReactNode;
  isExternal?: boolean;
}

const links: TaskbarLink[] = [
  {
    to: "aboutme",
    label: "About",
    icon: <IconUser size={16} className="taskbar-icon" />,
  },
  {
    to: "resume.pdf",
    label: "Resume",
    icon: <IconFileText size={16} className="taskbar-icon" />,
  },
  {
    to: "https://www.linkedin.com/in/cruzseabass/",
    label: "LinkedIn",
    icon: <IconBrandLinkedin size={16} className="taskbar-icon" />,
    isExternal: true,
  },
  {
    to: "https://github.com/seevass",
    label: "GitHub",
    icon: <IconBrandGithub size={16} className="taskbar-icon" />,
    isExternal: true,
  },
  {
    to: "mailto:cruzseabass@gmail.com",
    label: "Contact",
    icon: <IconMail size={16} className="taskbar-icon" />,
  },
];

const hrefFor = ({ to, isExternal }: TaskbarLink) => {
  if (isExternal || to.startsWith("mailto:")) {
    return to;
  }

  if (to.endsWith(".pdf")) {
    return `${BASE_PATH}/${to}`;
  }

  return `${BASE_PATH}#${to}`;
};
//TODO: see if functionality can be moved to startmenu.tsx
function Taskbar() {
  const [startOpen, setStartOpen] = useState(false);
  const startMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target as Node)
      ) {
        setStartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Group h="100%" justify="space-between" wrap="nowrap" className="taskbar">
      <Group gap="xs" h="100%" wrap="nowrap" style={{ minWidth: 0 }}>
        <div className="start-menu-container" ref={startMenuRef}>
          <Button
            className="start-button"
            onClick={() => setStartOpen((open) => !open)}
          >
            <IconSparkles2Filled size={24} className="taskbar-icon" />
            <Space w="xs" />
            <Text fz="lg" fw={700} fs="italic">
              Start
            </Text>
          </Button>

          {startOpen && <StartMenu />}
        </div>

        <nav className="taskbar-links">
          {links.map((link) => (
            <a
              key={link.label}
              className="taskbar-link"
              href={hrefFor(link)}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
            >
              {link.icon}
              <Text className="taskbar-link-text">{link.label}</Text>
            </a>
          ))}
        </nav>
      </Group>

      <Clock />
    </Group>
  );
}

export default Taskbar;
