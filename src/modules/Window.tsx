import { Box, Text } from "@mantine/core";
import type { CSSProperties, ReactNode } from "react";

import "./Window.css";

interface WindowProps {
  title: string;
  children: ReactNode;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  bg?: string;
  align?: "left" | "center" | "right";
  scroll?: boolean;
  style?: CSSProperties;
}

function Window({
  title,
  children,
  width = "100%",
  height = "auto",
  bg,
  align = "left",
  scroll = true,
  style,
}: WindowProps) {
  return (
    <Box
      className="window"
      style={{ width, height, ...style }}
      bg={bg}
      ml={align === "left" ? undefined : "auto"}
      mr={align === "right" ? undefined : "auto"}
    >
      <Text className="window-title">{title}</Text>
      <Box
        className="window-body"
        style={{ overflow: scroll ? "auto" : "hidden" }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Window;
