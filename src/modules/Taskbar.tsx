import { Button, Group, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileText,
  IconMail,
  IconUser,
} from "@tabler/icons-react";
import type { ReactNode } from "react";

import "./Taskbar.css";

const BASE_PATH = "/sebastianshowcase"; // Global base path for GitHub Pages

interface TaskbarLink {
  to: string;
  label: string;
  icon: ReactNode;
  isExternal?: boolean;
}

const links: TaskbarLink[] = [
  { to: "aboutme", label: "About", icon: <IconUser size={16} /> },
  { to: "resume.pdf", label: "Resume/CV", icon: <IconFileText size={16} /> },
  {
    to: "https://www.linkedin.com/in/cruzseabass/",
    label: "LinkedIn",
    icon: <IconBrandLinkedin size={16} />,
    isExternal: true,
  },
  {
    to: "https://github.com/seevass",
    label: "GitHub",
    icon: <IconBrandGithub size={16} />,
    isExternal: true,
  },
  {
    to: "mailto:cruzseabass@gmail.com",
    label: "Contact",
    icon: <IconMail size={16} />,
  },
];

const hrefFor = ({ to, isExternal }: TaskbarLink) =>
  isExternal || to.startsWith("mailto:")
    ? to
    : to.endsWith(".pdf")
      ? `${BASE_PATH}/${to}`
      : `${BASE_PATH}#${to}`;

function Taskbar() {
  return (
    <Group h="100%" justify="space-between" wrap="nowrap" className="taskbar">
      <Group gap="xs" h="100%" wrap="nowrap" style={{ minWidth: 0 }}>
        <Button className="start-button">start</Button>

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
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </Group>

      <Text className="taskbar-clock">12:00 PM</Text>
    </Group>
  );
}

export default Taskbar;
