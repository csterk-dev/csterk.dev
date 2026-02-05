import { chakra, Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";



const TRACE_BORDER_ANIMATIONS = ["trace-border-0", "trace-border-1", "trace-border-2", "trace-border-3"] as const;
const GRADIENT_IDS = [
  "border-gradient-toolkit-0",
  "border-gradient-toolkit-1",
  "border-gradient-toolkit-2",
  "border-gradient-toolkit-3"
] as const;

type TraceBorderCardWrapperProps = {
  animation: typeof TRACE_BORDER_ANIMATIONS[number];
  children: ReactNode;
  gradientId: typeof GRADIENT_IDS[number];
  gridColumn: { base: string; lg: string };
  gridRow: { base: string; lg: string };
};

export const TraceBorderCardWrapper: FC<TraceBorderCardWrapperProps> = ({
  animation,
  children,
  gradientId,
  gridColumn,
  gridRow
}) => (
  <Flex
    borderRadius="md"
    gridColumn={gridColumn}
    gridRow={gridRow}
    overflow="hidden"
    p={1}
    position="relative"
  >
    <chakra.svg
      as="svg"
      height="100%"
      left={0}
      opacity={1}
      pointerEvents="none"
      position="absolute"
      top={0}
      width="100%"
      zIndex={3}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="var(--gradient-trace-stop-1)" stopOpacity="0.5" />
          <stop offset="50%" stopColor="var(--gradient-trace-stop-2)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--gradient-trace-stop-3)" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <chakra.rect
        animation={animation}
        fill="none"
        height="100%"
        pathLength="100"
        rx="8"
        stroke={`url(#${gradientId})`}
        strokeWidth="5"
        style={{
          strokeDasharray: "10 90",
          strokeDashoffset: 0
        }}
        width="100%"
      />
    </chakra.svg>
    {children}
  </Flex>
);
