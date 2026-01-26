import { Button, Flex, Grid, HStack, IconButton, StackProps, VisuallyHidden } from "@chakra-ui/react";
import { FC } from "react";
import { NavLinksGroup } from "./NavLinksGroup";
import { MobileLinksMenu } from "./MobileLinksMenu";
import NextLink from "next/link";
import { SITE_HEADER_CTA_ITEMS, SITE_HOME_URL, SITE_NAME } from "@constants";


export const HeaderNavbar: FC<StackProps> = (props) => {
  return (
    <Flex
      align="center"
      as="header"
      bg="transparent"
      css={{
        "&::before": {
          backdropFilter: "blur(12px)",
          bottom: 0,
          content: "\"\"",
          left: 0,
          maskImage: "linear-gradient(to bottom, black, transparent)",
          pointerEvents: "none",
          position: "absolute",
          right: 0,
          top: 0,
          WebkitBackdropFilter: "blur(12px)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          zIndex: -1
        }
      }}
      justify="center"
      px={{
        base: 4,
        md: 20
      }}
      py={3}
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
          boxShadow="glow.subtle"
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
            {`> ${SITE_NAME}`}
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