import { Fragment } from "react";
import { Container, Hero, ProfilePictureOutlineCard, ProjectCarousel, type ProjectItem, Section, SEOConfig } from "@atoms";
import { CoreCapabilitiesGrid } from "@molecules";
import { Box, Flex, Text, Timeline, VStack } from "@chakra-ui/react";
import { HOME_TOOLKIT_TECH_STACK } from "@constants";
import { ToolkitTechGrid } from "@organisms";
import { NextPage } from "next";

const projects: ProjectItem[] = [
  {
    name: "R Jukebox",
    client: "Personal Project",
    tags: ["Personal Passion Project", "React", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1656433031375-5042f5afe894?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2371"
  },
  {
    name: "Pocket Support",
    client: "Client Project",
    tags: ["Complex Logic/UI", "React", "State Management"],
    image: "https://images.unsplash.com/photo-1587466412525-87497b34fc88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2673"
  },
  {
    name: "USE Software Company Rebrand, Website & Marketing",
    client: "USE Software",
    tags: ["Brand/Marketing", "Web Design", "Rebranding"],
    image: "https://images.unsplash.com/photo-1629581688635-5d88654e5bdd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2831"
  }
];



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
          bodyContent={<ProjectCarousel mt={10} projects={projects} />}
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
          bodyContent={
            <VStack align="stretch" gap={8} mt={10}>
              {/* Professional Experience */}
              <Box>
                <Text
                  fontFamily="heading"
                  fontSize="xl"
                  fontWeight="semibold"
                  mb={4}
                >
                  Professional Experience
                </Text>
                <Timeline.Root colorPalette="brand">
                  <Timeline.Item>
                    <Timeline.Connector>
                      <Timeline.Separator />
                      <Timeline.Indicator />
                    </Timeline.Connector>
                    <Timeline.Content>
                      <Timeline.Title fontFamily="heading" fontSize="lg" fontWeight="semibold">
                        USE Software | Front-End Developer & UI/UX Specialist
                      </Timeline.Title>
                      <Timeline.Description color="text.secondary" fontSize="sm" mt={1}>
                        2022 – Present
                      </Timeline.Description>
                      <Box
                        as="ul"
                        color="text.secondary"
                        lineHeight="moderate"
                        mt={3}
                        pl={5}
                      >
                        <Box as="li" mb={2}>Leading the UI/UX design and development for web and app-based programs.</Box>
                        <Box as="li" mb={2}>Translating complex requirements into high-fidelity prototypes and testable designs.</Box>
                        <Box as="li" mb={2}>Working within a Full Stack team to build modern, efficient applications in Agile and Waterfall environments.</Box>
                        <Box as="li">Driving usability improvements by refining interfaces and enhancing the overall user experience.</Box>
                      </Box>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Connector>
                      <Timeline.Separator />
                      <Timeline.Indicator />
                    </Timeline.Connector>
                    <Timeline.Content>
                      <Timeline.Title fontFamily="heading" fontSize="lg" fontWeight="semibold">
                        Hightro | Full Stack Developer Intern
                      </Timeline.Title>
                      <Timeline.Description color="text.secondary" fontSize="sm" mt={1}>
                        2021 – 2022
                      </Timeline.Description>
                      <Box
                        as="ul"
                        color="text.secondary"
                        lineHeight="moderate"
                        mt={3}
                        pl={5}
                      >
                        <Box as="li" mb={2}>Created and integrated custom APIs for bespoke solutions.</Box>
                        <Box as="li">Identified and resolved bugs within existing projects to support continuous development.</Box>
                      </Box>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline.Root>
              </Box>

              {/* Education */}
              <Box>
                <Text
                  fontFamily="heading"
                  fontSize="xl"
                  fontWeight="semibold"
                  mb={4}
                >
                  Educational Roots
                </Text>
                <Timeline.Root colorPalette="brand">
                  <Timeline.Item>
                    <Timeline.Connector>
                      <Timeline.Separator />
                      <Timeline.Indicator />
                    </Timeline.Connector>
                    <Timeline.Content>
                      <Timeline.Title fontFamily="heading" fontSize="lg" fontWeight="semibold">
                        Bachelor of Information Technology (Computer Science) & Bachelor of Creative Industries (Music & Sound)
                      </Timeline.Title>
                      <Timeline.Description color="text.secondary" fontSize="sm" mt={1}>
                        Queensland University of Technology (QUT) | 2019 – 2022
                      </Timeline.Description>
                      <Box
                        as="ul"
                        color="text.secondary"
                        lineHeight="moderate"
                        mt={3}
                        pl={5}
                      >
                        <Box as="li" mb={2}>
                          <Text as="span" fontWeight="semibold">Academic Excellence:</Text>
                          {" "}
                          Recognised on the QUT Academic Dean's List from 2019 to 2022.
                        </Box>
                        <Box as="li" mb={2}>
                          <Text as="span" fontWeight="semibold">The Intersection:</Text>
                          {" "}
                          This double degree allowed me to master rigorous software engineering principles while honing my creative instincts in sound design and performance.
                        </Box>
                        <Box as="li">
                          <Text as="span" fontWeight="semibold">Relevance:</Text>
                          {" "}
                          I use this unique combination to bridge the gap between complex codebases and intuitive, sensory-rich user interfaces.
                        </Box>
                      </Box>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Connector>
                      <Timeline.Separator />
                      <Timeline.Indicator />
                    </Timeline.Connector>
                    <Timeline.Content>
                      <Timeline.Title fontFamily="heading" fontSize="lg" fontWeight="semibold">
                        Certificate III in Screen & Media
                      </Timeline.Title>
                      <Timeline.Description color="text.secondary" fontSize="sm" mt={1}>
                        Workskills / Titans TV | 2017 – 2018
                      </Timeline.Description>
                      <Box
                        as="ul"
                        color="text.secondary"
                        lineHeight="moderate"
                        mt={3}
                        pl={5}
                      >
                        <Box as="li" mb={2}>
                          <Text as="span" fontWeight="semibold">Visual Storytelling:</Text>
                          {" "}
                          Developed a foundational understanding of composition, lighting, and pacing through film and multimedia production.
                        </Box>
                        <Box as="li" mb={2}>
                          <Text as="span" fontWeight="semibold">Industry Application:</Text>
                          {" "}
                          Served as a Camera Assistant for Titans TV, assisting in live recordings for Gold Coast Titans pre-show performances.
                        </Box>
                        <Box as="li">
                          <Text as="span" fontWeight="semibold">Impact on UX:</Text>
                          {" "}
                          My roots in media allow me to view digital interfaces through a cinematic lens—prioritising visual flow and "storytelling" within a user's journey.
                        </Box>
                      </Box>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Connector>
                      <Timeline.Separator />
                      <Timeline.Indicator />
                    </Timeline.Connector>
                    <Timeline.Content>
                      <Timeline.Title fontFamily="heading" fontSize="lg" fontWeight="semibold">
                        Diploma in Music Performance (AMusA) - Drums
                      </Timeline.Title>
                      <Timeline.Description color="text.secondary" fontSize="sm" mt={1}>
                        RSL | 2018
                      </Timeline.Description>
                      <Text color="text.secondary" lineHeight="moderate" mt={3}>
                        <Text as="span" fontWeight="semibold">Rhythm & Precision:</Text>
                        {" "}
                        My background as a drummer informs my sense of interaction "tempo" and the rhythmic feedback of responsive software.
                      </Text>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline.Root>
              </Box>
            </VStack>
          }
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
