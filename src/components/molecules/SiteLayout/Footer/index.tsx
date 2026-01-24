import { Flex, HStack, Stack, StackProps, Text } from "@chakra-ui/react";
import { FC } from "react";
import { SITE_NAV_ITEMS, SITE_SOCIAL_ITEMS } from "@constants";
import { FooterLinksGroup } from "./LinksGroup";
import { Container } from "@atoms";


export const Footer: FC<StackProps> = (props) => {

  return (
    <Stack
      alignItems="center"
      bg="surface.foreground"
      gap={8}
      pt={8}
      width="100%"
      {...props}
    >
      <Container w="100%">
        <Flex
          columnGap={4}
          flexWrap="wrap"
          justifyContent="space-between"
          maxW="8xl"
          mx="auto"
          rowGap={4}
          width="100%"
        >
          <Stack minW="200px">
            <Text
              color="foreground.heading"
              fontFamily="heading"
              fontSize="2xl"
              fontWeight="bold"
            >
              Company
            </Text>

            <FooterLinksGroup links={SITE_NAV_ITEMS} />
          </Stack>

          <Stack minW="200px">
            <Text
              color="foreground.heading"
              fontFamily="heading"
              fontSize="2xl"
              fontWeight="bold"
            >
              Social
            </Text>

            <FooterLinksGroup links={SITE_SOCIAL_ITEMS} />
          </Stack>

        </Flex>
      </Container>


      <HStack
        bg="surface.foreground"
        color="foreground.subtle"
        px={2}
        py={6}
      >
        © 2026 Chris Sterk. All Rights Reserved
      </HStack>
    </Stack>
  );
}