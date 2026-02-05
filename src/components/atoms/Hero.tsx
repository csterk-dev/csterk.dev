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

export const Hero: FC<HeroProps> = ({
  ctaButtonVariant = "secondary",
  ctaScrollToId = "about"
}) => {
  const [heroWordIndex, setHeroWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroWordIndex(prev => (prev + 1) % HERO_CYCLE_WORDS.length);
    }, HERO_CYCLE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const scrollToSection = useCallback(() => {
    const el = document.getElementById(ctaScrollToId);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [ctaScrollToId]);

  return (
    <Box
      alignItems="center"
      as="section"
      display="flex"
      id="hero"
      justifyContent="center"
      minH={`calc(100dvh - ${HEADER_MIN_HEIGHT * 2}px)`}
      py={8}
      w="100%"
    >
      <Flex
        alignItems="center"
        flexDirection="column"
        gap={0}
        mx="auto"
        px={4}
        textAlign="center"
        w="100%"
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
          >
            Chris Sterkenburg
          </chakra.h1>
          <Text
            color="text.secondary"
            fontSize={{
              base: "lg",
              lg: "xl"
            }}
            mt={2}
            textAlign="center"
          >
            Creative Front-End Wizard & UI/UX Designer
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
              base: "2xl",
              lg: "3xl"
            }}
            lineHeight="1.4"
            textAlign="center"
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
                display="flex"
                flexDirection="column"
                style={{ transform: `translateY(-${heroWordIndex * 1.4}em)` }}
                transition="transform 0.5s ease-out"
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