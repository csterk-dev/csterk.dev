import { Button, Flex, Grid, HStack, IconButton, StackProps, VisuallyHidden } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { SITE_HEADER_CTA_ITEMS, SITE_HOME_URL, SITE_NAME } from "@constants";
import { useIntersectionObserver } from "@utils";
import { NavLinksGroup } from "./NavLinksGroup";
import { MobileLinksMenu } from "./MobileLinksMenu";

export const HEADER_MIN_HEIGHT = 64;
const SCROLL_THRESHOLD = 100;

export const HeaderNavbar: FC<StackProps> = (props) => {
  const pathname = usePathname();
  const heroHasBeenVisibleRef = useRef(false);
  const [scrollY, setScrollY] = useState(0);
  const [hasHeroElement, setHasHeroElement] = useState(false);

  const { isVisible: isHeroVisible } = useIntersectionObserver({
    effectDependencies: [pathname],
    rootMargin: `-${HEADER_MIN_HEIGHT}px 0px 0px 0px`,
    targetSelector: "#hero",
    threshold: 0,
    triggerOnce: false
  });

  useEffect(() => {
    heroHasBeenVisibleRef.current = false;
    const heroElement = document.querySelector("#hero");
    setHasHeroElement(!!heroElement);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isHeroVisible) {
      heroHasBeenVisibleRef.current = true;
    }
  }, [isHeroVisible]);

  const isPastHero = useMemo(() => heroHasBeenVisibleRef.current && !isHeroVisible, [isHeroVisible])
  const shouldBlur = useMemo(() => hasHeroElement ? isPastHero : scrollY > SCROLL_THRESHOLD, [hasHeroElement, isPastHero, scrollY])

  return (
    <Flex
      align="center"
      as="header"
      borderBottomWidth="1px"
      css={{
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
        bg: "transparent",
        borderColor: "transparent",
        "&[data-past-hero]": {
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          bg: "surface.canvas/40",
          borderColor: "surface.border"
        }
      }}
      data-past-hero={shouldBlur || undefined}
      justify="center"
      minH={`${HEADER_MIN_HEIGHT}px`}
      px={{
        base: 4,
        md: 20
      }}
      py={3}
      transitionDuration="fast"
      transitionProperty="background-color, border-color, backdrop-filter"
      transitionTimingFunction="ease"
      w="100%"
      {...props}
    >
      <Grid 
        as="nav" 
        flex={1}
        gridTemplateColumns="1fr 1fr"
        maxW="8xl"
      >
        <Button
          fontFamily="heading"
          fontSize="2xl"
          mr="auto"
          variant="tertiary"
          asChild
        >
          <NextLink href={SITE_HOME_URL}>
            {SITE_NAME}
          </NextLink>
        </Button>

        <HStack
          borderRadius="lg"
          justify="end"
          ml="auto"
          pl={4}
        >
          <NavLinksGroup hideBelow="md" showHomeLink={false} />

          {SITE_HEADER_CTA_ITEMS.map(item => {
            if (typeof item.icon !== "undefined") {
              const ItemIcon = item.icon;
              return (
                <IconButton
                  key={item.key}
                  hideBelow="lg"
                  variant="tertiary"
                  asChild
                >
                  <NextLink href={item.href} target="blank">
                    <VisuallyHidden>{item.label}</VisuallyHidden>
                    <ItemIcon />
                  </NextLink>
                </IconButton>
              )
            }
            return (
              <Button key={item.key} variant="primary" asChild>
                <NextLink href={item.href}>
                  {item.label}
                </NextLink>
              </Button>
            )
          })}

          <MobileLinksMenu hideFrom="md" />
        </HStack>
      </Grid>
    </Flex>
  )
}