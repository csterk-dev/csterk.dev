import { Fragment } from "react";
import { Container, Hero, ProfilePictureOutlineCard, ProjectCarousel, Section, SEOConfig } from "@atoms";
import { CoreCapabilitiesGrid, ExperienceEducationTimelines } from "@molecules";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { HOME_FEATURED_PROJECTS, HOME_TOOLKIT_TECH_STACK } from "@constants";
import { ToolkitTechGrid } from "@organisms";
import { NextPage } from "next";

const Home: NextPage = () => {
  const frontEndGroup = HOME_TOOLKIT_TECH_STACK.find(group => group.key === "front-end");
  const designGroup = HOME_TOOLKIT_TECH_STACK.find(group => group.key === "design");
  const backEndDataGroup = HOME_TOOLKIT_TECH_STACK.find(group => group.key === "back-end-data");
  const methodologyGroup = HOME_TOOLKIT_TECH_STACK.find(group => group.key === "methodology");

  return (
    <Fragment>
      <SEOConfig title="Home" />
      <Container>
        {/* 1. Hero */}
        <Hero ctaScrollToId="about" />

        {/* 2. About Me: The "Under the Hood" Story */}
        <Section
          bodyContent={
            <VStack align="stretch" gap={4} textAlign="start">
              <Text color="text.secondary" lineHeight="moderate">
                G'day, I'm Chris. I'm a Front-End Developer and UI/UX Designer who views code as a
                medium for creativity. My journey began with a curiosity about video games, which quickly merged
                with my background in film and multimedia.
              </Text>
              <Text color="text.secondary" lineHeight="moderate">
                With a double degree in
                {" "}
                <Text as="span" fontWeight="semibold">
                  Computer Science and Creative Industries (Music & Sound)
                </Text>
                , I bridge the gap between technical engineering and creative design. Whether I'm drumming
                in a band, editing film, or building a React app, my goal remains the same: to remove clunky
                "pain points" and replace them with experiences that delight.
              </Text>
            </VStack>
          }
          childrenPlacement={{
            base: "bottom",
            lg: "right"
          }}
          contentAlign="left"
          id="about"
          title="Where Logic Meets Artistry"
        >
          <Flex justifyContent="center" w="100%">
            <ProfilePictureOutlineCard />
          </Flex>
        </Section>

        {/* 3. Featured Work (Project Gallery) */}
        <Section
          bodyContent={<ProjectCarousel mt={10} projects={HOME_FEATURED_PROJECTS} />}
          contentAlign="left"
          description="Explore my work with the following projects below:"
          id="work"
          title="Featured Work"
        />

        {/* 4. Core Capabilities */}
        <Section
          bodyContent={<CoreCapabilitiesGrid mt={10} />}
          contentAlign="left"
          description="From prototyping to deployment—here's how I approach each project and what I bring to the table."
          id="capabilities"
          title="Core Capabilities"
        />

        {/* 5. The Toolkit (Capabilities & Technical Skills) */}
        <Section
          bodyContent={
            <ToolkitTechGrid
              backEndDataGroup={backEndDataGroup}
              designGroup={designGroup}
              frontEndGroup={frontEndGroup}
              methodologyGroup={methodologyGroup}
              mt={10}
            />
          }
          contentAlign="left"
          description="The technologies and methods I use to build and design modern applications."
          id="toolkit"
          title="The Toolkit"
        />

        {/* 6. Experience & Education */}
        <Section
          bodyContent={<ExperienceEducationTimelines />}
          contentAlign="left"
          id="experience-education"
          title="Experience & Education"
        />

        {/* 7. Personal & Interests (The Human Touch) */}
        <Section
          bodyContent={
            <Box
              as="ul"
              color="text.secondary"
              lineHeight="moderate"
              pl={5}
            >
              <Box as="li" mb={2}>
                <Text as="span" fontWeight="semibold">Drumming:</Text>
                {" "}
                Performing in bands and exploring my background in Music Performance.
              </Box>
              <Box as="li" mb={2}>
                <Text as="span" fontWeight="semibold">In the Gym:</Text>
                {" "}
                Fitness and sport are my go-to for staying sharp.
              </Box>
              <Box as="li" mb={2}>
                <Text as="span" fontWeight="semibold">On Two Wheels:</Text>
                {" "}
                Currently planning my next trip to explore South-East Queensland and Northern NSW on my
                motorbike.
              </Box>
              <Box as="li">
                <Text as="span" fontWeight="semibold">Building:</Text>
                {" "}
                Hacking away at side projects like my
                {" "}
                <Text as="span" fontWeight="medium">Office Jukebox App</Text>
                , which blends my love for UX,
                code, and music.
              </Box>
            </Box>
          }
          contentAlign="left"
          description={"When I'm not \"under the hood\" of a codebase, you'll find me:"}
          id="interests"
          title="Personal & Interests"
        />
      </Container>
    </Fragment>
  );
};

export default Home;
