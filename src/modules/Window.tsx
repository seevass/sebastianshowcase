import { Box, Text } from "@mantine/core";
import type { CSSProperties, ReactNode } from "react";
import { IconMinus, IconX } from "@tabler/icons-react";

import "./Window.css";

interface WindowProps {
  title: string;
  children: ReactNode;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  minWidth?: CSSProperties["minWidth"];
  minHeight?: CSSProperties["minHeight"];
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
  minWidth,
  minHeight,
  bg,
  align = "left",
  scroll = true,
  style,
}: WindowProps) {
  return (
    <Box
      className="window"
      style={{ width, height, minWidth, minHeight, ...style }}
      bg={bg}
      ml={align === "left" ? undefined : "auto"}
      mr={align === "right" ? undefined : "auto"}
    >
      <Text className="window-title" fz="md">
        <span className="window-title-text">{title}</span>
        <span className="window-controls" aria-hidden="true">
          <span>
            <IconMinus className="window-icon-min" size={12} stroke={6} />
          </span>
          <span>
            <span className="window-icon-max" />
          </span>
          <span>
            <IconX size={18} stroke={4} />
          </span>
        </span>
      </Text>
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
