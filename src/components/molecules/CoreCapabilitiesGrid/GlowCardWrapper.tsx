import { Box } from "@chakra-ui/react";
import React, { type FC, type ReactNode } from "react";

const GLOW_COLOR = "rgba(46, 211, 196, 0.65)";
const GLOW_RADIUS = "1400px";
const GLOW_FADE_END = "45%";

type GlowCardWrapperProps = {
  children: ReactNode;
  isActive?: boolean;
};

export const GlowCardWrapper: FC<GlowCardWrapperProps> = ({ children, isActive = false }) => (
  <Box
    _before={{
      background: `radial-gradient(${GLOW_RADIUS} circle at var(--glow-x, 50%) var(--glow-y, 50%), ${GLOW_COLOR} 0%, transparent ${GLOW_FADE_END})`,
      borderRadius: "inherit",
      content: "\"\"",
      inset: "-2px",
      opacity: isActive ? 0.9 : 0.35,
      pointerEvents: "none",
      position: "absolute",
      transition: "opacity 1s ease-out, background 0.25s ease-out",
      zIndex: 0
    }}
    borderRadius="l3"
    overflow="visible"
    position="relative"
    style={{
      "--glow-x": "50%",
      "--glow-y": "50%"
    } as React.CSSProperties}
    data-glow-card
  >
    {children}
  </Box>
);

GlowCardWrapper.displayName = "GlowCardWrapper";
