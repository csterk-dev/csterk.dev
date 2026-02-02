import { type DependencyList, useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  /**
   * Optional list of dependencies that trigger the effect to re-run (e.g. pathname for observing
   * an element that may mount after navigation). Use when observing via `targetSelector`.
   */
  effectDependencies?: DependencyList;

  /**
   * Margin around the root element. Can be used to shrink or grow the root element's
   * bounding box before computing intersections. Defaults to `"0px"`.
   *
   * @example
   * ```ts
   * // Trigger 50px before element enters viewport
   * rootMargin: "0px 0px -50px 0px"
   *
   * // Trigger 100px before element enters from any direction
   * rootMargin: "100px"
   * ```
   */
  rootMargin?: string;

  /**
   * Optional CSS selector for an element to observe (e.g. `"#hero"`). When provided, this
   * element is observed instead of the one attached to `elementRef`. Use with `effectDependencies`
   * (e.g. pathname) so the effect re-runs when the target may appear (e.g. after navigation).
   */
  targetSelector?: string;

  /**
   * A number or array of numbers indicating at what percentage of the target's visibility
   * the observer's callback should be executed. Defaults to `0.1` (10% visible).
   *
   * @example
   * ```ts
   * // Trigger when 25% of element is visible
   * threshold: 0.25
   *
   * // Trigger at multiple visibility levels
   * threshold: [0, 0.25, 0.5, 0.75, 1]
   * ```
   */
  threshold?: number | number[];

  /**
   * If `true`, the animation will only trigger once when the element first enters
   * the viewport and will remain visible - useful for performance optimisation.
   *
   * If `false`, the animation will trigger
   * every time the element enters/exits the viewport - useful for repeated animations.
   *
   * Defaults to `true`.
   */
  triggerOnce?: boolean;
}


/**
 * Custom hook for intersection observer functionality that provides viewport visibility detection
 * for triggering animations and other effects when elements enter/exit the viewport.
 * 
 * This hook wraps the native Intersection Observer API in a React-friendly way, providing
 * automatic cleanup and state management for viewport visibility.
 * 
 * @param options - Configuration options for the intersection observer
 * @returns An object containing:
 *   - `elementRef`: A ref to attach to the element you want to observe
 *   - `isVisible`: A boolean indicating whether the element is currently visible based on the triggerOnce setting
 * 
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const { elementRef, isVisible } = useIntersectionObserver({
 *     threshold: 0.1,
 *     rootMargin: "0px 0px -50px 0px",
 *     triggerOnce: true
 *   });
 * 
 *   return (
 *     <div ref={elementRef}>
 *       <h2 style={{ 
 *         opacity: isVisible ? 1 : 0,
 *         transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
 *         transition: 'all 0.6s ease-out'
 *       }}>
 *         Animated Content
 *       </h2>
 *     </div>
 *   );
 * };
 * ```
 */
export const useIntersectionObserver = (options: UseIntersectionObserverOptions = {}) => {
  const {
    effectDependencies = [],
    rootMargin = "0px",
    targetSelector,
    threshold = 0.1,
    triggerOnce = true
  } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = targetSelector ?
      (document.querySelector(targetSelector) as HTMLElement | null) :
      elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isCurrentlyIntersecting = entry.isIntersecting;
          setIsIntersecting(isCurrentlyIntersecting);

          if (isCurrentlyIntersecting && !hasIntersected) {
            setHasIntersected(true);
          }
        });
      },
      {
        rootMargin,
        threshold
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [rootMargin, targetSelector, threshold, hasIntersected, effectDependencies]);

  // Return the appropriate visibility state based on triggerOnce setting
  const shouldShow = triggerOnce ? hasIntersected : isIntersecting;

  return {
    elementRef,
    isVisible: shouldShow
  };
};