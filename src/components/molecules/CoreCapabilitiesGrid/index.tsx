/**
 * Core Capabilities grid with cursor-tracking glow.
 *
 * Glow is driven by a document-level mousemove listener (only when the grid is in viewport)
 * so there is no "exit" event on the container—position updates continuously. That avoids
 * a pulse when the cursor leaves: we never paint full glow at center then switch to ambient.
 *
 * Active (full) vs ambient (soft) glow is based on whether the cursor is inside the
 * container rect; we only call setState when that crosses the boundary to limit re-renders.
 */

import { CoreCapabilityCard } from "@atoms";
import { Box, BoxProps, Card, Grid, GridItem, Text } from "@chakra-ui/react";
import { useIntersectionObserver } from "@utils";
import { type FC, useCallback, useEffect, useRef, useState } from "react";
import { FaCode, FaHandshake, FaHeart, FaRocket, FaShield } from "react-icons/fa6";
import { GlowCardWrapper } from "./GlowCardWrapper";

const GLOW_CARD_SELECTOR = "[data-glow-card]";

export const CoreCapabilitiesGrid: FC<Omit<BoxProps, "ref">> = (props) => {
  const [isCursorInContainer, setIsCursorInContainer] = useState(false);

  /** Only run glow logic when the grid is in/near viewport (Intersection Observer). */
  const {
    elementRef: containerRef,
    isVisible: inViewport
  } = useIntersectionObserver({
    rootMargin: "50px",
    threshold: 0,
    triggerOnce: false
  });

  /** Track previous "cursor in container" so we only setState when it flips (avoids re-renders on every mousemove). */
  const wasInsideRef = useRef(false);

  /**
   * Document-level handler: update each card's glow position (--glow-x, --glow-y) from
   * cursor position relative to that card, and set isCursorInContainer only when the
   * cursor crosses the container boundary.
   */
  const handleGlobalMouseMove = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>(GLOW_CARD_SELECTOR);
    const x = e.clientX;
    const y = e.clientY;

    cards.forEach((cardEl) => {
      const rect = cardEl.getBoundingClientRect();
      cardEl.style.setProperty("--glow-x", `${x - rect.left}px`);
      cardEl.style.setProperty("--glow-y", `${y - rect.top}px`);
    });

    const containerRect = container.getBoundingClientRect();
    const inside =
      x >= containerRect.left
      && x <= containerRect.right
      && y >= containerRect.top
      && y <= containerRect.bottom;

    if (inside !== wasInsideRef.current) {
      wasInsideRef.current = inside;
      setIsCursorInContainer(inside);
    }
  }, [containerRef]);

  /**
   * When in viewport: attach document mousemove so glow tracks cursor globally.
   * When out of viewport: remove listener, reset to ambient and center glow (50% 50%).
   */
  useEffect(() => {
    if (!inViewport) {
      wasInsideRef.current = false;
      setIsCursorInContainer(false);
      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll<HTMLElement>(GLOW_CARD_SELECTOR);
        cards.forEach((el) => {
          el.style.setProperty("--glow-x", "50%");
          el.style.setProperty("--glow-y", "50%");
        });
      }
      return;
    }

    document.addEventListener("mousemove", handleGlobalMouseMove, { passive: true });
    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [inViewport, handleGlobalMouseMove, containerRef]);

  return (
    <Box
      ref={containerRef}
      w="100%"
      {...props}
    >
      <Grid
        gapX={8}
        gapY={20}
        justifyItems="center"
        templateColumns={{
          base: "1fr",
          md: "1fr",
          lg: "repeat(3, minmax(0, 1fr))"
        }}
        templateRows={{
          base: "auto",
          lg: "repeat(2, minmax(0, 1fr))"
        }}
      >
        <GridItem
          colSpan={1}
          colStart={{
            base: 1,
            lg: 1
          }}
          rowSpan={1}
          rowStart={{
            base: 1,
            lg: 1
          }}
        >
          <GlowCardWrapper isActive={isCursorInContainer}>
            <Card.Root
              maxW="280px"
              minH="250px"
              position="relative"
              zIndex={1}
            >
              <CoreCapabilityCard
                description="Driving products from initial prototyping and high-fidelity mockups to final coding and deployment."
                icon={<FaRocket />}
                title="The Full Product Lifecycle"
              />
            </Card.Root>
          </GlowCardWrapper>
        </GridItem>

        <GridItem
          colSpan={1}
          colStart={{
            base: 1,
            lg: 2
          }}
          rowSpan={1}
          rowStart={{
            base: 2,
            lg: 1
          }}
        >
          <GlowCardWrapper isActive={isCursorInContainer}>
            <Card.Root
              maxW="280px"
              minH="250px"
              position="relative"
              zIndex={1}
            >
              <CoreCapabilityCard
                description="Removing friction points to ensure every interface is intuitive, accessible, and tailored to real needs."
                icon={<FaHeart />}
                title="User-Centric Design"
              />
            </Card.Root>
          </GlowCardWrapper>
        </GridItem>

        <GridItem
          colSpan={1}
          colStart={{
            base: 1,
            lg: 3
          }}
          rowSpan={1}
          rowStart={{
            base: 3,
            lg: 1
          }}
        >
          <GlowCardWrapper isActive={isCursorInContainer}>
            <Card.Root
              maxW="280px"
              minH="250px"
              position="relative"
              zIndex={1}
            >
              <CoreCapabilityCard
                description={(
                  <>
                    Building responsive, scalable interfaces using
                    {" "}
                    <Text as="span" fontWeight="medium">React.js</Text>
                    ,
                    {" "}
                    <Text as="span" fontWeight="medium">Next.js</Text>
                    , and modern JavaScript frameworks.
                  </>
                )}
                icon={<FaCode />}
                title="Technical Engineering"
              />
            </Card.Root>
          </GlowCardWrapper>
        </GridItem>

        <GridItem
          colSpan={1}
          colStart={{
            base: 1,
            lg: 1
          }}
          rowSpan={1}
          rowStart={{
            base: 4,
            lg: 2
          }}
        >
          <GlowCardWrapper isActive={isCursorInContainer}>
            <Card.Root
              maxW="280px"
              minH="250px"
              position="relative"
              zIndex={1}
            >
              <CoreCapabilityCard
                description="Rigorous testing and QA to ensure every product feels as good as it looks."
                icon={<FaShield />}
                title="Quality & Testing"
              />
            </Card.Root>
          </GlowCardWrapper>
        </GridItem>

        <GridItem
          colSpan={1}
          colStart={{
            base: 1,
            lg: 2
          }}
          rowSpan={1}
          rowStart={{
            base: 5,
            lg: 2
          }}
        >
          <GlowCardWrapper isActive={isCursorInContainer}>
            <Card.Root
              maxW="280px"
              minH="250px"
              position="relative"
              zIndex={1}
            >
              <CoreCapabilityCard
                description="Liaising with clients to translate project goals into technical requirements and development timelines."
                icon={<FaHandshake />}
                title="Strategic Collaboration"
              />
            </Card.Root>
          </GlowCardWrapper>
        </GridItem>
      </Grid>
    </Box>
  );
};

CoreCapabilitiesGrid.displayName = "CoreCapabilitiesGrid";
