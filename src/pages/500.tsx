import { SEOConfig } from "@atoms";
import { Box, Button, chakra, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useState } from "react";


const Site500: NextPage = () => {
  const router = useRouter();
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleGoHome = useCallback(() => router.replace("/"), [router]);

  return (
    <Fragment>
      <SEOConfig title="Internal server error" />
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
          {/* Background chaotic circuit lines (more erratic than 404) */}
          <chakra.svg
            as="svg"
            css={{
              opacity: 0.5
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
                id="error-line-gradient-500"
                x1="0%"
                x2="100%"
                y1="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(255, 107, 107, 0.7)" stopOpacity="0.8" />
                <stop offset="50%" stopColor="var(--gradient-trace-stop-2)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="rgba(255, 107, 107, 0.7)" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* Chaotic line 1 */}
            <chakra.g transform="translate(150, 100)">
              <chakra.path
                animation="trace-line-0"
                d="M0 50H150L200 100"
                fill="none"
                pathLength="100"
                stroke="url(#error-line-gradient-500)"
                strokeDasharray="100"
                strokeDashoffset={glitchActive ? "80" : "0"}
                strokeLinecap="round"
                strokeWidth="5"
                style={{
                  transition: "stroke-dashoffset 0.3s ease-out"
                }}
              />
            </chakra.g>
            {/* Chaotic line 2 */}
            <chakra.g transform="translate(1500, 150)">
              <chakra.path
                animation="trace-line-1"
                d="M0 0L120 60L150 100"
                fill="none"
                pathLength="100"
                stroke="url(#error-line-gradient-500)"
                strokeDasharray="100"
                strokeDashoffset={glitchActive ? "90" : "0"}
                strokeLinecap="round"
                strokeWidth="6"
                style={{
                  transition: "stroke-dashoffset 0.3s ease-out"
                }}
              />
            </chakra.g>
            {/* Chaotic line 3 */}
            <chakra.g transform="translate(250, 650)">
              <chakra.path
                animation="trace-line-2"
                d="M0 0V120H100L150 180"
                fill="none"
                pathLength="100"
                stroke="url(#error-line-gradient-500)"
                strokeDasharray="100"
                strokeDashoffset={glitchActive ? "75" : "0"}
                strokeLinecap="round"
                strokeWidth="7"
                style={{
                  transition: "stroke-dashoffset 0.3s ease-out"
                }}
              />
            </chakra.g>
            {/* Chaotic line 4 */}
            <chakra.g transform="translate(1400, 750)">
              <chakra.path
                animation="trace-line-3"
                d="M0 80L80 30L150 0H220"
                fill="none"
                pathLength="100"
                stroke="url(#error-line-gradient-500)"
                strokeDasharray="100"
                strokeDashoffset={glitchActive ? "85" : "0"}
                strokeLinecap="round"
                strokeWidth="5"
                style={{
                  transition: "stroke-dashoffset 0.3s ease-out"
                }}
              />
            </chakra.g>
            {/* Chaotic line 5 */}
            <chakra.g transform="translate(700, 400)">
              <chakra.path
                animation="trace-line-4"
                d="M0 0L50 50L100 30L150 80"
                fill="none"
                pathLength="100"
                stroke="url(#error-line-gradient-500)"
                strokeDasharray="100"
                strokeDashoffset={glitchActive ? "70" : "0"}
                strokeLinecap="round"
                strokeWidth="4"
                style={{
                  transition: "stroke-dashoffset 0.3s ease-out"
                }}
              />
            </chakra.g>
          </chakra.svg>

          {/* Content */}
          <VStack gap={8} position="relative" zIndex={1}>
            {/* Glitching 500 text with critical error styling */}
            <Box
              css={{
                position: "relative",
                "&::before": {
                  background: "radial-gradient(800px circle at 50% 50%, rgba(255, 107, 107, 0.3) 0%, rgba(46, 211, 196, 0.15) 40%, transparent 70%)",
                  borderRadius: "inherit",
                  content: "\"\"",
                  filter: "blur(50px)",
                  height: "100%",
                  left: "50%",
                  opacity: glitchActive ? 1 : 0.7,
                  pointerEvents: "none",
                  position: "absolute",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  transition: "opacity 0.3s ease-out",
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
                  animation: glitchActive ? "glitch-critical 0.3s ease-out" : undefined,
                  textShadow: glitchActive ?
                    "3px 3px 0 rgba(255,0,0,0.7), -3px -3px 0 rgba(0,255,255,0.7)" :
                    "none",
                  "@keyframes glitch-critical": {
                    "0%": { transform: "translate(0) skew(0deg)" },
                    "15%": { transform: "translate(-3px, 3px) skew(2deg)" },
                    "30%": { transform: "translate(3px, -3px) skew(-2deg)" },
                    "45%": { transform: "translate(-3px, -3px) skew(1deg)" },
                    "60%": { transform: "translate(3px, 3px) skew(-1deg)" },
                    "75%": { transform: "translate(-2px, 2px) skew(1.5deg)" },
                    "100%": { transform: "translate(0) skew(0deg)" }
                  }
                }}
                fontFamily="heading"
                fontSize={{
                  base: "8xl",
                  md: "9xl"
                }}
                fontWeight="bold"
                gradientFrom="red.400"
                gradientTo="brand.400"
                letterSpacing="tight"
                lineHeight="1"
                textAlign="center"
              >
                500
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
                System Overload
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
                Whoops, something crashed on my end. The server encountered an unexpected error and couldn't complete your request. Don't worry—it's not you, it's definitely me (or my code).
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
              Error code: ECONNREFUSED - Internal server malfunction
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Fragment>
  );
};

export default Site500;