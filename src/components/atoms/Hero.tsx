"use client";

import { Box, Button, type ButtonProps, chakra, Flex, Text } from "@chakra-ui/react";
import { HEADER_MIN_HEIGHT } from "components/molecules/SiteLayout/HeaderNavbar";
import { type FC, useCallback, useEffect, useState } from "react";

interface HeroProps {
  /** CTA button variant. Default `primary`. */
  ctaButtonVariant?: ButtonProps["variant"];
  /** ID of the element to scroll into view when CTA is clicked. Default `about`. */
  ctaScrollToId?: string;
}

const HERO_CYCLE_WORDS = ["delights", "shines", "amazes", "wows", "impresses"];
const HERO_CYCLE_INTERVAL_MS = 5000;

const HERO_LINES_MEDIA_QUERY = "(max-width: 1024px)";

export const Hero: FC<HeroProps> = ({
  ctaButtonVariant = "secondary",
  ctaScrollToId = "about"
}) => {
  const [heroWordIndex, setHeroWordIndex] = useState(0);
  const [hideLines, setHideLines] = useState(() => (typeof window !== "undefined" ? window.matchMedia(HERO_LINES_MEDIA_QUERY).matches : false));

  useEffect(() => {
    const id = setInterval(() => {
      setHeroWordIndex(prev => (prev + 1) % HERO_CYCLE_WORDS.length);
    }, HERO_CYCLE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mql = window.matchMedia(HERO_LINES_MEDIA_QUERY);
      const handleChange = (e: MediaQueryListEvent) => setHideLines(e.matches);
      setHideLines(mql.matches);
      mql.addEventListener("change", handleChange);
      return () => mql.removeEventListener("change", handleChange);
    }
  }, []);

  const scrollToSection = useCallback(() => {
    const el = document.getElementById(ctaScrollToId);
    if (!el) return;
    const isNarrowViewport = window.matchMedia(HERO_LINES_MEDIA_QUERY).matches;
    const paddingTop = isNarrowViewport ? 24 : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_MIN_HEIGHT - paddingTop;
    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth"
    });
  }, [ctaScrollToId]);

  return (
    <Box
      alignItems="center"
      as="section"
      display="flex"
      id="hero"
      justifyContent="center"
      minH={`calc(100dvh - ${HEADER_MIN_HEIGHT * 2}px)`}
      position="relative"
      py={8}
      w="100%"
    >
      {/* Background gradient tracing lines (hidden on viewports ≤1024px) */}
      <chakra.svg
        as="svg"
        css={{
          opacity: 0.6,
          visibility: "visible",
          "@media (max-width: 1024px)": {
            opacity: 0,
            visibility: "hidden"
          },
          "&[data-hidden='true']": {
            opacity: 0,
            visibility: "hidden"
          }
        }}
        data-hidden={hideLines ? "true" : undefined}
        height="100%"
        left={0}
        pointerEvents="none"
        position="absolute"
        top={0}
        viewBox="0 0 1920 1080"
        width="100%"
        zIndex={0}
      >
        <defs>
          <linearGradient
            id="hero-line-gradient"
            x1="0%"
            x2="100%"
            y1="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="var(--gradient-trace-stop-1)" stopOpacity="1" />
            <stop offset="50%" stopColor="var(--gradient-trace-stop-2)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--gradient-trace-stop-3)" stopOpacity="1" />
          </linearGradient>
        </defs>
        {/* Line 1: hero-line-01.svg */}
        <chakra.g transform="translate(00, 80)">
          <chakra.path
            animation="trace-line-0"
            d="M0 74.9429H86.5L229 0.442871"
            fill="none"
            pathLength="100"
            stroke="url(#hero-line-gradient)"
            strokeLinecap="round"
            strokeWidth="6"
            style={{
              strokeDasharray: "100",
              strokeDashoffset: 100
            }}
          />
        </chakra.g>
        {/* Line 2: hero-line-02.svg */}
        <chakra.g transform="translate(200, 180)">
          <chakra.path
            animation="trace-line-1"
            d="M141.5 0.5H86.5L70.5 18H0"
            fill="none"
            pathLength="100"
            stroke="url(#hero-line-gradient)"
            strokeLinecap="round"
            strokeWidth="4"
            style={{
              strokeDasharray: "100",
              strokeDashoffset: 100
            }}
          />
        </chakra.g>
        {/* Line 3: hero-line-03.svg */}
        <chakra.g transform="translate(700, 60)">
          <chakra.path
            animation="trace-line-2"
            d="M478 0.5H151.5L120 22H0"
            fill="none"
            pathLength="100"
            stroke="url(#hero-line-gradient)"
            strokeLinecap="round"
            strokeWidth="6"
            style={{
              strokeDasharray: "100",
              strokeDashoffset: 100
            }}
          />
        </chakra.g>
        {/* Line 4: hero-line-04.svg */}
        <chakra.g transform="translate(1500, 100)">
          <chakra.path
            animation="trace-line-3"
            d="M0.27832 98L145.778 0.5H237.778"
            fill="none"
            pathLength="100"
            stroke="url(#hero-line-gradient)"
            strokeLinecap="round"
            strokeWidth="4"
            style={{
              strokeDasharray: "100",
              strokeDashoffset: 100
            }}
          />
        </chakra.g>
        {/* Line 5: hero-line-05.svg */}
        <chakra.g transform="translate(1800, 300)">
          <chakra.path
            animation="trace-line-4"
            d="M138.5 213.5L0.5 97V0"
            fill="none"
            pathLength="100"
            stroke="url(#hero-line-gradient)"
            strokeLinecap="round"
            strokeWidth="6"
            style={{
              strokeDasharray: "100",
              strokeDashoffset: 100
            }}
          />
        </chakra.g>
        {/* Line 6: hero-line-06.svg */}
        <chakra.g transform="translate(1650, 900)">
          <chakra.path
            animation="trace-line-5"
            d="M0.320801 79.5L94.8208 0.5H212.821"
            fill="none"
            pathLength="100"
            stroke="url(#hero-line-gradient)"
            strokeLinecap="round"
            strokeWidth="4"
            style={{
              strokeDasharray: "100",
              strokeDashoffset: 100
            }}
          />
        </chakra.g>
        {/* Line 7: hero-line-07.svg */}
        <chakra.g transform="translate(1450, 700)">
          <chakra.path
            animation="trace-line-6"
            d="M0.5 246.5V185.5L157.5 96V0"
            fill="none"
            pathLength="100"
            stroke="url(#hero-line-gradient)"
            strokeLinecap="round"
            strokeWidth="6"
            style={{
              strokeDasharray: "100",
              strokeDashoffset: 100
            }}
          />
        </chakra.g>
        {/* Line 8: hero-line-09.svg */}
        <chakra.g transform="translate(-100, 1000)">
          <chakra.path
            animation="trace-line-7"
            d="M0 21.9297H227.5L263.5 0.429688"
            fill="none"
            pathLength="100"
            stroke="url(#hero-line-gradient)"
            strokeLinecap="round"
            strokeWidth="4"
            style={{
              strokeDasharray: "100",
              strokeDashoffset: 100
            }}
          />
        </chakra.g>

        <chakra.g transform="translate(100, 700)">
          <chakra.path
            animation="trace-line-7"
            d="M330 221L255.5 165.5L113 160.5L0.5 69.5V0"
            fill="none"
            pathLength="100"
            stroke="url(#hero-line-gradient)"
            strokeLinecap="round"
            strokeWidth="5"
            style={{
              strokeDasharray: "100",
              strokeDashoffset: 100
            }}
          />
        </chakra.g>
      </chakra.svg>

      <Flex
        alignItems={{
          base: "flex-start",
          md: "center" 
        }}
        flexDirection="column"
        gap={0}
        mx="auto"
        position="relative"
        px={4}
        textAlign="center"
        w="100%"
        zIndex={1}
      >
        {/* 1. Title & role — staggered group */}
        <Box
          animation="fade-in"
          animationDelay="1s"
          animationDuration="0.5s"
          animationFillMode="both"
          display="flex"
          flexDirection="column"
        >
          <chakra.h1
            as="h1"
            fontFamily="heading"
            fontSize={{
              base: "5xl",
              lg: "8xl"
            }}
            letterSpacing="tight"
            lineHeight="1.1"
            textAlign={{
              base: "left",
              md: "center"
            }}
          >
            Chris Sterkenburg
          </chakra.h1>
          <Text
            color="text.secondary"
            fontSize={{
              base: "sm",
              lg: "xl"
            }}
            mt={2}
            textAlign={{
              base: "left",
              md: "center"
            }}
          >
            Creative Front-End Wizard & Product Designer
          </Text>
        </Box>

        {/* 2. Mission — staggered group */}
        <Box
          animation="fade-in"
          animationDelay="1.5s"
          animationDuration="0.5s"
          animationFillMode="both"
          my="4vh"
        >
          <Text
            color="text.secondary"
            fontSize={{
              base: "xl",
              lg: "3xl"
            }}
            lineHeight="1.4"
            textAlign={{
              base: "left",
              md: "center"
            }}
          >
            Designing software that doesn't just work, it
            {" "}
            <Box
              as="span"
              display="inline-block"
              h="1.4em"
              mt="-0.2em"
              overflow="hidden"
              verticalAlign="middle"
            >
              <Box
                as="span"
                css={{
                  transform: "translateY(var(--hero-word-offset))",
                  transition: "transform 0.5s ease-out"
                }}
                display="flex"
                flexDirection="column"
                style={{
                  "--hero-word-offset": `-${heroWordIndex * 1.4}em`
                } as React.CSSProperties}
              >
                {HERO_CYCLE_WORDS.map(word => (
                  <Box
                    key={word}
                    alignItems="center"
                    as="span"
                    borderRadius="sm"
                    color="accent.primary"
                    display="flex"
                    h="1.4em"
                    justifyContent="start"
                    minH="1.4em"
                    overflow="hidden"
                    px={1}
                  >
                    {word}
                  </Box>
                ))}
              </Box>
            </Box>
          </Text>
        </Box>

        {/* 3. CTA — staggered group */}
        <Box
          animation="fade-in"
          animationDelay="2s"
          animationDuration="0.5s"
          animationFillMode="both"
          mt={10}
          mx="auto"
        >
          <Button variant={ctaButtonVariant} onClick={scrollToSection}>
            Explore portfolio
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

Hero.displayName = "Hero";