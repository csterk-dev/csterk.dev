import { Flex, HStack, Stack, StackProps, VStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { SITE_NAV_ITEMS, SITE_SOCIAL_ITEMS } from "@constants";
import { FooterLinksGroup } from "./LinksGroup";
import { Container } from "@atoms";


export const Footer: FC<StackProps> = (props) => {

  return (
    <Stack
      alignItems="center"
      gap={8}
      pt={8}
      width="100%"
      {...props}
    >
      <Container w="100%">
        <Flex
          columnGap={4}
          flexWrap="wrap"
          justifyContent="space-evenly"
          maxW="8xl"
          mx="auto"
          rowGap={4}
          width="100%"
        >
          <VStack minW="200px">
            <Text
              color="text.primary"
              fontFamily="heading"
              fontSize="2xl"
              fontWeight="bold"
              textAlign="center"
            >
              Pages
            </Text>

            <FooterLinksGroup links={SITE_NAV_ITEMS} />
          </VStack>

          <VStack minW="200px">
            <Text
              color="text.primary"
              fontFamily="heading"
              fontSize="2xl"
              fontWeight="bold"
              textAlign="center"
            >
              Socials
            </Text>

            <FooterLinksGroup links={SITE_SOCIAL_ITEMS} />
          </VStack>

        </Flex>
      </Container>


      <HStack
        color="text.muted"
        px={2}
        py={6}
      >
        © 2026 Chris Sterkenburg. All Rights Reserved
      </HStack>
    </Stack>
  );
}