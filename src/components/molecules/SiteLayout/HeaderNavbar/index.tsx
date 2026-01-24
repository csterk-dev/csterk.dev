import { Button, Flex, Grid, HStack, IconButton, StackProps, Text, VisuallyHidden } from "@chakra-ui/react";
import { FC } from "react";
import { NavLinksGroup } from "./NavLinksGroup";
import { MobileLinksMenu } from "./MobileLinksMenu";
import NextLink from "next/link";
import { SITE_HEADER_CTA_ITEMS, SITE_NAME } from "@constants";


export const HeaderNavbar: FC<StackProps> = (props) => {
  return (
    <Flex
      align="center"
      as="header"
      bg="transparent"
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
        gridTemplateColumns={{
          base: "1fr 0fr 1fr",
          md: "1fr 3fr 1fr"
        }}
        maxW="8xl"
      >
        {/* Logos */}
        <Text fontFamily="heading" fontSize="2xl" fontWeight="light">{SITE_NAME}</Text>

        <NavLinksGroup hideBelow="md" justifySelf="center" showHomeLink />

        <HStack justify="end" w="100%">
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