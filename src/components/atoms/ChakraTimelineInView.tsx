"use client";

import { Box, BoxProps, Text, Timeline } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";
import { useIntersectionObserver } from "@utils";

/** Duration in ms for each item's slide + fade animation. */
const ITEM_ANIMATION_DURATION_MS = 400;

/** Delay in ms between starting each item's animation (stagger). */
const STAGGER_DELAY_MS = 80;

/** Single timeline entry: title, date/description, and optional body (e.g. bullet list). */
export type ChakraTimelineInViewItem = {
  title: string;
  description: string;
  children: ReactNode;
};

type ChakraTimelineInViewProps = BoxProps & {
  items: ChakraTimelineInViewItem[];
  title: string;
};

/**
 * Timeline using Chakra's Timeline as-is. When scrolled into view, each timeline item
 * slides in from the bottom and fades in with a staggered delay.
 */
const ChakraTimelineInViewInner: FC<ChakraTimelineInViewProps> = ({
  items,
  title,
  ...props
}) => {
  const { elementRef: containerRef, isVisible: inView } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <Box ref={containerRef} {...props}>
      <Text
        fontFamily="heading"
        fontSize="xl"
        fontWeight="semibold"
        mb={4}
      >
        {title}
      </Text>
      <Timeline.Root
        colorPalette="brand"
        size="md"
        variant="solid"
      >
        {items.map((item, index) => (
          <Timeline.Item
            key={item.title}
            opacity={inView ? 1 : 0}
            transform={inView ? "translateY(0)" : "translateY(16px)"}
            transition={`opacity ${ITEM_ANIMATION_DURATION_MS}ms ease-out, transform ${ITEM_ANIMATION_DURATION_MS}ms ease-out`}
            transitionDelay={inView ? `${index * STAGGER_DELAY_MS}ms` : "0ms"}
          >
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator />
            </Timeline.Connector>
            <Timeline.Content maxW="6xl">
              <Timeline.Title fontFamily="heading" textStyle="md">
                {item.title}
              </Timeline.Title>
              <Timeline.Description textStyle="sm">
                {item.description}
              </Timeline.Description>
              <Box
                color="text.secondary"
                fontSize="md"
                lineHeight="moderate"
                mt={4}
              >
                {item.children}
              </Box>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline.Root>
    </Box>
  );
};
ChakraTimelineInViewInner.displayName = "ChakraTimelineInView";

export const ChakraTimelineInView = memo(ChakraTimelineInViewInner);
