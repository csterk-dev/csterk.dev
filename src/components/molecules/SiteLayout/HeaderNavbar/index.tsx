import { Button, Flex, Grid, HStack, IconButton, StackProps, VisuallyHidden } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { FC } from "react";
import { SITE_HEADER_CTA_ITEMS, SITE_HOME_URL, SITE_NAME } from "@constants";
import { useIntersectionObserver } from "@utils";
import { NavLinksGroup } from "./NavLinksGroup";
import { MobileLinksMenu } from "./MobileLinksMenu";

export const HEADER_MIN_HEIGHT = 64;

export const HeaderNavbar: FC<StackProps> = (props) => {
  const pathname = usePathname();
  const { isVisible: isHeroVisible } = useIntersectionObserver({
    effectDependencies: [pathname],
    rootMargin: `-${HEADER_MIN_HEIGHT}px 0px 0px 0px`,
    targetSelector: "#hero",
    threshold: 0,
    triggerOnce: false
  });
  const isPastHero = !isHeroVisible;

  return (
    <Flex
      align="center"
      as="header"
      backdropFilter={isPastHero ? "blur(12px)" : "blur(0px)"}
      bg={isPastHero ? "surface.canvas/40" : "transparent"}
      borderBottomWidth={isPastHero ? "1px" : 0}
      borderColor={isPastHero ? "surface.border" : "transparent"}
      css={{
        WebkitBackdropFilter: isPastHero ? "blur(12px)" : "blur(0px)"
      }}
      justify="center"
      minH={`${HEADER_MIN_HEIGHT}px`}
      px={{
        base: 4,
        md: 20
      }}
      py={3}
      transitionDuration="normal"
      transitionProperty="background-color, border-color, border-bottom-width, backdrop-filter"
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
          _hover={{
            color: "accent.primary"
          }}
          borderRadius="lg"
          color="accent.secondary"
          fontFamily="heading"
          fontSize="2xl"
          mr="auto"
          px={4}
          transitionDuration="fast"
          transitionProperty="box-shadow, background, color"
          w="auto"
          asChild
          unstyled
        >
          <NextLink href={SITE_HOME_URL}>
            {SITE_NAME}
          </NextLink>
        </Button>

        <HStack
          // bg="surface.canvas"
          borderRadius="lg"
          justify="end"
          ml="auto"
          pl={4}
        >
          <NavLinksGroup hideBelow="md" />

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