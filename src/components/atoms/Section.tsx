"use client"


import { BoxProps, Button, ButtonProps, chakra, Highlight, SlotRecipeProps, useBreakpointValue, useSlotRecipe } from "@chakra-ui/react";
import { FC, memo, ReactNode, useEffect, useState } from "react";
import NextLink from "next/link";
import { useIntersectionObserver } from "@utils";

interface AnimationConfig {
  /** 
   * Custom animation for the element. 
   * For title & description elements, defaults to `slide-from-bottom-fade`.
   * For body content elements, defaults to `fade-in`.
   */
  animation?: BoxProps["animation"];

  /** Custom transition for the element. Defaults to `opacity/transform 0.6s ease-out` for title/description, `opacity/transform 1s ease-out` for content. */
  transition?: BoxProps["transition"];

  /** 
   * Custom transition delay for the element. 
   * For title & description elements, defaults to `undefined`.
   * For body content elements, defaults to `2s`.
   */
  transitionDelay?: BoxProps["transitionDelay"];

  /** 
   * Custom transform for the element when not visible. 
   * For title & description elements, default to `translate(100%)`.
   * For body content elements, defaults to `undefined`.
   */
  initialTransform?: BoxProps["transform"];
}

export interface SectionProps extends SlotRecipeProps<"section">, BoxProps {
  /** Animation configuration for the title element. */
  titleAnimationConfig?: AnimationConfig;
  /** Animation configuration for the description element. */
  descriptionAnimationConfig?: AnimationConfig;
  /** Animation configuration for the body content element. */
  bodyContentAnimationConfig?: AnimationConfig;
  /** Animation configuration for the children element. */
  childrenAnimationConfig?: AnimationConfig;
  /** A number or array of numbers indicating at what percentage of the target's visibility the observer's callback should be executed. Defaults to 0.4 (40% visible) .*/
  animationStartThreshold?: number | number[];
  /** Optionally override the default html heading element. Default `h2`. */
  titleRole?: "h1" | "h2" | "h3" | "h4";
  /** Section heading. */
  title?: string;
  /** Section description. */
  description?: string | ReactNode;
  /** Optional array of keywords to highlight in the description text. Only applies when description is a string. */
  highlightKeywords?: string[];
  /** Label for the CTA button. If no label is provided, the button will be hidden. */
  ctaLabel?: string;
  /** Next.js href or callback function. */
  ctaOnClick?: string | VoidFunction;
  /** Variant of the CTA button. Default `primary`. */
  ctaButtonVariant?: ButtonProps["variant"];
  /** Elements to display in the body of the section. */
  bodyContent?: ReactNode;
}



/** 
 * Renders a centred custom `<section />` element, handling max width constraints.
 * 
 * Features intersection observer-based animations:
 * - Title, description, and body content animate in with customizable animations
 * - Animations trigger when the section enters the viewport
 * - Uses Chakra UI v3 animation tokens for consistent theming
 * - Unified animation configuration objects for cleaner API
 * - Falls back to sensible defaults if no custom animation config is provided
 */
const _Section: FC<SectionProps> = (props) => {
  const recipe = useSlotRecipe({ key: "section" });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);
  
  /** Animations are disabled on mobile for performance and responsiveness. */
  const hasAnimations = useBreakpointValue({
    base: false,
    md: true
  });

  const {
    children,
    titleRole,
    title,
    description,
    highlightKeywords,
    bodyContent,
    ctaLabel,
    ctaOnClick,
    ctaButtonVariant = "primary",
    titleAnimationConfig,
    descriptionAnimationConfig,
    bodyContentAnimationConfig,
    childrenAnimationConfig,
    animationStartThreshold,
    ...rest
  } = restProps;
  const { contentAlign, textColor, childrenPlacement, headingTextStyle, descriptionTextStyle, childrenToContentRatio } = recipeProps;

  const ctaIsUrl = typeof ctaOnClick === "string";

  const { elementRef, isVisible: _isVisible } = useIntersectionObserver({
    threshold: animationStartThreshold ?? 0.4,
    rootMargin: "0px 0px 0px 0px",
    triggerOnce: true
  });

  // Track if element has ever been visible to prevent hiding on resize
  const [hasEverBeenVisible, setHasEverBeenVisible] = useState(false);
  
  // Update hasEverBeenVisible when _isVisible becomes true
  useEffect(() => {
    if (_isVisible && !hasEverBeenVisible) {
      setHasEverBeenVisible(true);
    }
  }, [_isVisible, hasEverBeenVisible]);

  // If animations are disabled, always show. If enabled, show if visible OR if it was previously visible
  const isVisible = hasAnimations ? (_isVisible || hasEverBeenVisible) : true;


  const styles = recipe({
    contentAlign,
    textColor,
    childrenPlacement,
    headingTextStyle,
    descriptionTextStyle,
    childrenToContentRatio
  });

  return (
    <chakra.section css={styles.root} {...rest} ref={elementRef}>
      <chakra.div css={styles.container}>
        <chakra.div css={styles.content}>
          <chakra.div css={styles.header}>
            <chakra.h2
              animation={isVisible ? (titleAnimationConfig?.animation ?? "slide-from-bottom-fade") : "none"}
              as={titleRole}
              css={styles.title}
              opacity={isVisible || titleAnimationConfig?.animation === "none" ? 1 : 0}
              transform={isVisible || titleAnimationConfig?.animation === "none" ? "translateY(0)" : (titleAnimationConfig?.initialTransform ?? "translateY(100%)")}
              transition={`transform ${titleAnimationConfig?.transition ?? "0.6s ease-out"}, opacity ${titleAnimationConfig?.transition ?? "0.6s ease-out"}`}
              transitionDelay={titleAnimationConfig?.transitionDelay}
            >
              {title}
            </chakra.h2>
            {typeof description === "string" ? (
              <chakra.p
                animation={isVisible ? (descriptionAnimationConfig?.animation ?? "slide-from-bottom-fade") : "none"}
                css={styles.description}
                opacity={isVisible || descriptionAnimationConfig?.animation === "none" ? 1 : 0}
                transform={isVisible || descriptionAnimationConfig?.animation === "none" ? "translateY(0)" : (descriptionAnimationConfig?.initialTransform ?? "translateY(100%)")}
                transition={`transform ${descriptionAnimationConfig?.transition ?? "0.6s ease-out"}, opacity ${descriptionAnimationConfig?.transition ?? "0.6s ease-out"}`}
                transitionDelay={descriptionAnimationConfig?.transitionDelay}
              >
                {highlightKeywords && highlightKeywords.length > 0 ? (
                  <Highlight
                    query={highlightKeywords}
                    styles={{
                      fontWeight: "medium"
                    }}
                    ignoreCase
                  >
                    {description}
                  </Highlight>
                ) : (
                  description
                )}
              </chakra.p>
            ) : (
              <chakra.div
                animation={isVisible ? (descriptionAnimationConfig?.animation ?? "slide-from-bottom-fade") : "none"}
                css={styles.description}
                opacity={isVisible || descriptionAnimationConfig?.animation === "none" ? 1 : 0}
                transform={isVisible || descriptionAnimationConfig?.animation === "none" ? "translateY(0)" : (descriptionAnimationConfig?.initialTransform ?? "translateY(100%)")}
                transition={`transform ${descriptionAnimationConfig?.transition ?? "0.6s ease-out"}, opacity ${descriptionAnimationConfig?.transition ?? "0.6s ease-out"}`}
                transitionDelay={descriptionAnimationConfig?.transitionDelay}
              >
                {description}
              </chakra.div>
            )}
          </chakra.div>
          {bodyContent ? (
            <chakra.div
              animation={isVisible ? (bodyContentAnimationConfig?.animation ?? "fade-in") : "none"}
              css={styles.body}
              opacity={isVisible || bodyContentAnimationConfig?.animation === "none" ? 1 : 0}
              transform={isVisible || bodyContentAnimationConfig?.animation === "none" ? "translateY(0)" : (bodyContentAnimationConfig?.initialTransform)}
              transition={`transform ${bodyContentAnimationConfig?.transition ?? "1s ease-out"}, opacity ${bodyContentAnimationConfig?.transition ?? "0.6s ease-out"}`}
              transitionDelay={hasAnimations ? bodyContentAnimationConfig?.transitionDelay ?? "2s" : undefined}
            >
              {bodyContent}
            </chakra.div>
          ) : null}

          {ctaLabel && ctaOnClick ?
            <chakra.div css={styles.footer}>
              {ctaIsUrl ?
                <Button variant={ctaButtonVariant} asChild>
                  <NextLink href={ctaOnClick}>
                    {ctaLabel}
                  </NextLink>
                </Button> :
                <Button variant={ctaButtonVariant} onClick={ctaOnClick}>{ctaLabel}</Button>
              }
            </chakra.div> :
            null
          }
        </chakra.div>

        {children ? (
          <chakra.div
            animation={isVisible ? (childrenAnimationConfig?.animation ?? "fade-in") : "none"}
            css={styles.children}
            opacity={isVisible || childrenAnimationConfig?.animation === "none" ? 1 : 0}
            transform={isVisible || childrenAnimationConfig?.animation === "none" ? "translateY(0)" : (childrenAnimationConfig?.initialTransform)}
            transition={`transform ${childrenAnimationConfig?.transition ?? "1s ease-out"}, opacity ${childrenAnimationConfig?.transition ?? "0.6s ease-out"}`}
            transitionDelay={hasAnimations ? childrenAnimationConfig?.transitionDelay ?? "2s": undefined}
          >
            {children}
          </chakra.div>
        ) : null}
      </chakra.div>
    </chakra.section>
  )
};
_Section.displayName = "Section";

export const Section = memo(_Section);