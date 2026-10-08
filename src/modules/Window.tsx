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
}

function Window({
  title,
  children,
  width = "100%",
  height = "auto",
  bg,
  align = "left",
}: WindowProps) {
  return (
    <Box
      className="window"
      style={{ width, height }}
      bg={bg}
      ml={align === "left" ? undefined : "auto"}
      mr={align === "right" ? undefined : "auto"}
    >
      <Text className="window-title">{title}</Text>
      <Box className="window-body">{children}</Box>
    </Box>
  );
}

export default Window;
