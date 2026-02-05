import { Fragment } from "react";
import { Container, Hero, InterestCard, ProfilePictureOutlineCard, ProjectCarousel, Section, SEOConfig } from "@atoms";
import { CoreCapabilitiesGrid, ExperienceEducationTimelines } from "@molecules";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { HOME_FEATURED_PROJECTS, HOME_TOOLKIT_TECH_STACK } from "@constants";
import { ToolkitTechGrid } from "@organisms";
import { NextPage } from "next";
import NextImage from "next/image";
import { FaCode, FaDrum, FaDumbbell, FaFilm, FaMotorcycle } from "react-icons/fa6";

const frontEndGroup = HOME_TOOLKIT_TECH_STACK.find(group => group.key === "front-end");
const designGroup = HOME_TOOLKIT_TECH_STACK.find(group => group.key === "design");
const backEndDataGroup = HOME_TOOLKIT_TECH_STACK.find(group => group.key === "back-end-data");
const methodologyGroup = HOME_TOOLKIT_TECH_STACK.find(group => group.key === "methodology");

const Home: NextPage = () => {
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
            <VStack gap={3} w="100%">
              <InterestCard
                description="Performing in bands and exploring my background in Music Performance."
                icon={<FaDrum />}
                title="Drumming"
              />
              <InterestCard
                description="Fitness and sport are my go-to for staying sharp."
                icon={<FaDumbbell />}
                title="In the Gym"
              />
              <InterestCard
                description="Currently planning my next trip to explore South-East Queensland and Northern NSW on my motorbike."
                icon={<FaMotorcycle />}
                title="On Two Wheels"
              />
              <InterestCard
                description="While my cert in Screen and Media gave me good foundations, I've always loved making content and would've been just as at home going deep on film—I still love to dabble in it in my spare time."
                icon={<FaFilm />}
                title="Film & video"
              />
              <InterestCard
                description="Okay, you caught me... I can still be found coding. But building projects in areas I enjoy and using them as an excuse to try new libraries, frameworks, and methodologies."
                icon={<FaCode />}
                title="Building"
              />
            </VStack>
          }
          childrenPlacement={{
            base: "bottom",
            lg: "left"
          }}
          childrenToContentRatio="2/3"
          contentAlign="left"
          description="Beyond the code, here's what keeps me inspired:"
          id="interests"
          title="Personal & Interests"
        >
          <Flex
            aspectRatio={`${IMAGE_WIDTH} / ${IMAGE_HEIGHT}`}
            borderRadius="md"
            className="group"
            justify="center"
            maxW="400px"
            mx="auto"
            overflow="hidden"
            p={1}
            position="relative"
            w="100%"
          >
            <Box
              borderRadius="md"
              height="100%"
              overflow="hidden"
              position="relative"
              width="100%"
            >
              <NextImage
                alt="Profile picture of Chris"
                sizes="(max-width: 400px) 100vw, 400px"
                src="/static/images/chris-alt.png"
                style={{
                  objectFit: "contain",
                  userSelect: "none"
                }}
                fill
              />
            </Box>
          </Flex>
        </Section>
      </Container>
    </Fragment>
  );
};

export default Home;

const IMAGE_WIDTH = 1425;
const IMAGE_HEIGHT = 1816;