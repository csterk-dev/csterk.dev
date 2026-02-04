"use client";

import { Box, BoxProps, Text, Timeline } from "@chakra-ui/react";
import { FC, memo, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { useIntersectionObserver } from "@utils";

/** Duration in ms to fill each segment between two adjacent indicators. */
const FILL_DURATION_MS_PER_SEGMENT = 4000;

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
 * Timeline using Chakra's Timeline with a single separator line that fills (animates)
 * from first to last indicator when scrolled into view.
 *
 * The connecting line is measured between the **Indicator** elements (the circles), not
 * the Connector. Chakra's Timeline.Connector has `alignSelf: "stretch"`, so it spans the
 * full row height; measuring it would place the line from the bottom of the first row to
 * the top of the last row, and only the segment between the last two indicators would
 * be visible. By measuring the Indicator rects we get: line from bottom of first circle
 * to top of last circle, so all segments (e.g. 1→2 and 2→3) render correctly.
 */
const ChakraTimelineInViewInner: FC<ChakraTimelineInViewProps> = ({
  items,
  title,
  ...props
}) => {
  const { elementRef: containerRef, isVisible: inView } = useIntersectionObserver({
    threshold: 0.5,
    triggerOnce: true
  });
  /**
   * Refs for each timeline Indicator (the circle). Stored by index so we reliably
   * read the first and last for line measurement; conditional ref assignment on
   * Connector can mismatch when Chakra wraps the DOM node.
   */
  const indicatorRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineStyle, setLineStyle] = useState<{ top: number; height: number } | null>(null);

  const totalFillDurationMs = useMemo(() => Math.max(0, items.length - 1) * FILL_DURATION_MS_PER_SEGMENT, [items.length]);

  /**
   * Measure the separator line from the bottom of the first Indicator to the top of the
   * last Indicator (container-relative). ResizeObserver re-runs when the container or
   * layout changes so the line stays aligned with the circles.
   */
  useEffect(() => {
    const container = containerRef.current as HTMLDivElement | null;
    const firstIndicator = indicatorRefs.current[0];
    const lastIndicator = indicatorRefs.current[items.length - 1];
    if (!container || !firstIndicator || !lastIndicator || items.length === 0) return;
    const measure = () => {
      const containerRect = container.getBoundingClientRect();
      const firstRect = firstIndicator.getBoundingClientRect();
      const lastRect = lastIndicator.getBoundingClientRect();
      const lineTop = firstRect.top + firstRect.height - containerRect.top;
      const lineBottom = lastRect.top - containerRect.top;
      setLineStyle({
        height: Math.max(0, lineBottom - lineTop),
        top: lineTop
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    return () => ro.disconnect();
  }, [items.length, containerRef]);

  return (
    <Box
      css={{
        "--timeline-indicator-size": "sizes.5",
        position: "relative"
      }}
      ref={containerRef}
      {...props}
    >
      {/* Track and fill: only between first and last indicator (not full component height) */}
      {lineStyle !== null ? (
        <>
          <Box
            bg="neutral.600"
            height={`${lineStyle.height}px`}
            left="calc(var(--timeline-indicator-size) / 2 - 1px)"
            position="absolute"
            top={`${lineStyle.top}px`}
            width="2px"
            zIndex={0}
          />
          {/* Fill: animates from 0 to full line height; duration = 4000ms per segment */}
          <Box
            bg="brand.500"
            height={inView ? `${lineStyle.height}px` : "0px"}
            left="calc(var(--timeline-indicator-size) / 2 - 1px)"
            position="absolute"
            top={`${lineStyle.top}px`}
            transition={`height ${totalFillDurationMs}ms ease-out`}
            width="2px"
            zIndex={1}
          />
        </>
      ) : null}
      <Box position="relative" zIndex={2}>
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
          css={{
            "& [data-part=separator]": {
              borderStartWidth: 0
            }
          }}
          size="md"
          variant="solid"
        >
          {items.map((item, index) => (
            <Timeline.Item key={item.title}>
              <Timeline.Connector>
                <Timeline.Indicator
                  ref={(el: HTMLDivElement | null) => {
                    indicatorRefs.current[index] = el;
                  }}
                />
              </Timeline.Connector>
              <Timeline.Content maxW="6xl">
                <Timeline.Title fontFamily="heading" textStyle="sm">
                  {item.title}
                </Timeline.Title>
                <Timeline.Description>
                  {item.description}
                </Timeline.Description>
                <Box
                  color="fg.muted"
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
    </Box>
  );
};
ChakraTimelineInViewInner.displayName = "ChakraTimelineInView";

export const ChakraTimelineInView = memo(ChakraTimelineInViewInner);
