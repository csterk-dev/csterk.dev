import { SEOConfig } from "@atoms";
import { Box, Button, chakra, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useState } from "react";


const Site404: NextPage = () => {
  const router = useRouter();
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleGoHome = useCallback(() => router.replace("/"), [router]);

  return (
    <Fragment>
      <SEOConfig title="Page not found" />
      <Container>
        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          minH="calc(100dvh - 160px)"
          position="relative"
          py={12}
          w="100%"
        >
          {/* Background disconnected circuit lines */}
          <chakra.svg
            as="svg"
            css={{
              opacity: 0.4
            }}
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
                id="error-line-gradient"
                x1="0%"
                x2="100%"
                y1="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="var(--gradient-trace-stop-1)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="var(--gradient-trace-stop-2)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--gradient-trace-stop-3)" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            {/* Disconnected line 1 */}
            <chakra.g transform="translate(200, 150)">
              <chakra.path
                animation="trace-line-0"
                d="M0 50H200"
                fill="none"
                pathLength="100"
                stroke="url(#error-line-gradient)"
                strokeDasharray="100"
                strokeDashoffset={glitchActive ? "50" : "0"}
                strokeLinecap="round"
                strokeWidth="4"
                style={{
                  transition: "stroke-dashoffset 0.2s ease-out"
                }}
              />
            </chakra.g>
            {/* Disconnected line 2 */}
            <chakra.g transform="translate(1400, 200)">
              <chakra.path
                animation="trace-line-1"
                d="M0 0L150 80"
                fill="none"
                pathLength="100"
                stroke="url(#error-line-gradient)"
                strokeDasharray="100"
                strokeDashoffset={glitchActive ? "70" : "0"}
                strokeLinecap="round"
                strokeWidth="5"
                style={{
                  transition: "stroke-dashoffset 0.2s ease-out"
                }}
              />
            </chakra.g>
            {/* Disconnected line 3 */}
            <chakra.g transform="translate(300, 700)">
              <chakra.path
                animation="trace-line-2"
                d="M0 0V150L80 200"
                fill="none"
                pathLength="100"
                stroke="url(#error-line-gradient)"
                strokeDasharray="100"
                strokeDashoffset={glitchActive ? "60" : "0"}
                strokeLinecap="round"
                strokeWidth="6"
                style={{
                  transition: "stroke-dashoffset 0.2s ease-out"
                }}
              />
            </chakra.g>
            {/* Disconnected line 4 */}
            <chakra.g transform="translate(1500, 700)">
              <chakra.path
                animation="trace-line-3"
                d="M0 100L100 0H200"
                fill="none"
                pathLength="100"
                stroke="url(#error-line-gradient)"
                strokeDasharray="100"
                strokeDashoffset={glitchActive ? "80" : "0"}
                strokeLinecap="round"
                strokeWidth="4"
                style={{
                  transition: "stroke-dashoffset 0.2s ease-out"
                }}
              />
            </chakra.g>
          </chakra.svg>

          {/* Content */}
          <VStack gap={8} position="relative" zIndex={1}>
            {/* Glitching 404 text */}
            <Box
              css={{
                position: "relative",
                "&::before": {
                  background: "radial-gradient(800px circle at 50% 50%, rgba(46, 211, 196, 0.25) 0%, transparent 60%)",
                  borderRadius: "inherit",
                  content: "\"\"",
                  filter: "blur(40px)",
                  height: "100%",
                  left: "50%",
                  opacity: glitchActive ? 1 : 0.6,
                  pointerEvents: "none",
                  position: "absolute",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  transition: "opacity 0.2s ease-out",
                  width: "100%",
                  zIndex: -1
                }
              }}
              position="relative"
            >
              <Text
                as="h1"
                bgClip="text"
                bgGradient="to-br"
                css={{
                  animation: glitchActive ? "glitch-effect 0.2s ease-out" : undefined,
                  textShadow: glitchActive ?
                    "2px 2px 0 rgba(255,0,0,0.5), -2px -2px 0 rgba(0,255,255,0.5)" :
                    "none",
                  "@keyframes glitch-effect": {
                    "0%": { transform: "translate(0)" },
                    "20%": { transform: "translate(-2px, 2px)" },
                    "40%": { transform: "translate(2px, -2px)" },
                    "60%": { transform: "translate(-2px, -2px)" },
                    "80%": { transform: "translate(2px, 2px)" },
                    "100%": { transform: "translate(0)" }
                  }
                }}
                fontFamily="heading"
                fontSize={{
                  base: "8xl",
                  md: "9xl"
                }}
                fontWeight="bold"
                gradientFrom="brand.300"
                gradientTo="brand.500"
                letterSpacing="tight"
                lineHeight="1"
                textAlign="center"
              >
                404
              </Text>
            </Box>

            {/* Error message */}
            <VStack gap={3} maxW="600px" px={4}>
              <Text
                color="text.primary"
                fontSize={{
                  base: "2xl",
                  md: "3xl"
                }}
                fontWeight="semibold"
                textAlign="center"
              >
                Connection Lost
              </Text>
              <Text
                color="text.secondary"
                fontSize={{
                  base: "md",
                  md: "lg"
                }}
                lineHeight="moderate"
                textAlign="center"
              >
                Looks like you've ventured into uncharted territory. This page doesn't exist in the codebase—maybe it never did, or perhaps it's been refactored into the void.
              </Text>
            </VStack>

            {/* CTA Button */}
            <Box
              animation="fade-in"
              animationDelay="0.5s"
              animationDuration="0.5s"
              animationFillMode="both"
              mt={4}
            >
              <Button variant="secondary" onClick={handleGoHome}>
                Return to Home
              </Button>
            </Box>

            {/* Fun dev joke */}
            <Text
              color="text.muted"
              fontSize="sm"
              fontStyle="italic"
              mt={4}
              textAlign="center"
            >
              Error code: ENOENT - No such file or directory
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Fragment>
  );
};

export default Site404;