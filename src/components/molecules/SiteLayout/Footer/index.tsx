import { Flex, HStack, Stack, StackProps, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { SITE_NAV_ITEMS, SITE_SOCIAL_ITEMS } from "@constants";
import { FooterLinksGroup } from "./LinksGroup";
import { Container } from "@atoms";
import { allProjects } from "@contentlayer/generated";


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

            <Text
              fontSize="md"
              fontWeight="semibold"
              my={2}
              textAlign="center"
            >
              Projects:
            </Text>

            <FooterLinksGroup
              links={allProjects.map((project) => ({
                key: project.slug,
                label: project.title,
                href: `/projects/${project.slug}`
              }))}
              w="100%"
            />
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


      <VStack gap={4} px={2} py={6}>
        <Text
          color="text.secondary"
          fontFamily="heading"
          fontSize="xl"
          textAlign="center"
        >
          Let's build something that delights.
        </Text>
        <HStack color="text.muted" fontSize="sm">
          © 2026 Chris Sterkenburg. All Rights Reserved
        </HStack>
      </VStack>
    </Stack>
  );
}