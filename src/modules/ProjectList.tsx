import React, { useEffect } from "react";
import "./ProjectList.css";
import { Text, NavLink } from "@mantine/core";

type ProjectListTuple = [href: string, label: string, video: string];

interface ProjectListProps {
  title?: string | undefined;
  links: ProjectListTuple[];
  setVideoSrc: (videoSrc: string) => void;
  style?: React.CSSProperties;
}

const BASE_PATH = "/sebastianshowcase";

const ProjectList: React.FC<ProjectListProps> = ({
  title,
  links,
  setVideoSrc,
  style,
}) => {
  const adjustedHref = (href: string) => `${BASE_PATH}#${href}`;

  // Preload videos on mount (optional but helpful if you're using autoplay/hover)
  useEffect(() => {
    links.forEach(([_, __, video]) => {
      const videoEl = document.createElement("video");
      videoEl.src = video;
    });
  }, [links]);

  return (
    <div style={{ ...style }}>
      <Text className="projectLinkTitle">{title}</Text>
      {links.map(([href, label, video]) => (
        <NavLink
          key={href}
          className="projectLink"
          styles={{ label: { fontSize: "var(--mantine-h2-font-size)" } }}
          href={adjustedHref(href)}
          label={label}
          onMouseEnter={() => setVideoSrc(video)}
        />
      ))}
    </div>
  );
};

export default ProjectList;
