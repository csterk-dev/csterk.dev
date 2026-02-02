import { FC } from "react";
import { Box, chakra, Flex } from "@chakra-ui/react";
import NextImage from "next/image";


const IMAGE_WIDTH = 1425;
const IMAGE_HEIGHT = 1816;

export const ProfilePictureOutlineCard: FC = () => (
  <Flex
    aspectRatio={`${IMAGE_WIDTH} / ${IMAGE_HEIGHT}`}
    borderRadius="md"
    className="group"
    justify="center"
    maxW="400px"
    overflow="hidden"
    p={1}
    position="relative"
    w="100%"
  >
    {/* Animated tracing border */}
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
          id="border-gradient-profile-pic"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4EECC2" stopOpacity="1" />
          <stop offset="50%" stopColor="#1ED9AA" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0FC3A0" stopOpacity="1" />
        </linearGradient>
      </defs>
      <chakra.rect
        animation="trace-border"
        fill="none"
        height="100%"
        pathLength="100"
        rx="8"
        stroke="url(#border-gradient-profile-pic)"
        strokeWidth="10"
        style={{
          strokeDasharray: "10 90",
          strokeDashoffset: 0
        }}
        width="100%"
      />
    </chakra.svg>

    <Box
      borderRadius="md"
      height="100%"
      overflow="hidden"
      position="relative"
      width="100%"
    >
      <NextImage
        alt="Profile picture of Chris"
        sizes="(max-width: 400px) 100vw, 400px"
        src="/static/images/chris.png"
        style={{
          objectFit: "contain",
          userSelect: "none"
        }}
        fill
      />
    </Box>
  </Flex>
);