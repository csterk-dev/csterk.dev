import { Fragment } from "react";
import { Container, Section, SEOConfig } from "@atoms";
import { Box, Table, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Fragment>
      <SEOConfig title="Home" />
      <Container>
        {/* 1. Hero */}
        <Section
          bodyContent={
            <Text
              color="text.secondary"
              fontSize={{
                base: "lg",
                md: "xl"
              }}
              textAlign="center"
            >
              Designing software that doesn&apos;t just work—it delights.
            </Text>
          }
          contentAlign="center"
          ctaLabel="Learn more"
          ctaOnClick="#about"
          description="Creative Front-End Wizard & UI/UX Designer"
          descriptionTextStyle="large"
          id="hero"
          title="Chris Sterkenburg"
          titleRole="h1"
        />

        {/* 2. About Me */}
        <Section
          bodyContent={
            <VStack align="stretch" gap={4} textAlign="start">
              <Text color="text.secondary" lineHeight="moderate">
                G&apos;day, I&apos;m Chris. I&apos;m a Front-End Developer and UI/UX Designer who views code as a
                medium for creativity. My journey began with a curiosity about video games, which quickly merged
                with my background in film and multimedia.
              </Text>
              <Text color="text.secondary" lineHeight="moderate">
                With a double degree in
                {" "}
                <Text as="span" fontWeight="semibold">
                  Computer Science and Creative Industries (Music &amp; Sound)
                </Text>
                , I bridge the gap between technical engineering and creative design. Whether I&apos;m drumming
                in a band, editing film, or building a React app, my goal remains the same: to remove clunky
                &quot;pain points&quot; and replace them with experiences that delight.
              </Text>
            </VStack>
          }
          contentAlign="left"
          description={"The \"origin story\":"}
          id="about"
          title="About Me"
        />

        {/* 3. The Creative Foundation */}
        <Section
          bodyContent={
            <VStack align="stretch" gap={4} textAlign="start">
              <Text color="text.secondary" lineHeight="moderate">
                My design philosophy didn&apos;t start at a keyboard; it started behind a camera lens. Earning my
                Certificate III in Screen and Media gave me a foundational understanding of framing, lighting,
                and visual communication.
              </Text>
              <Text color="text.secondary" lineHeight="moderate">
                Working as a Camera Assistant for Titans TV, I learned how to capture live performances and tell
                a story in real-time. This experience taught me that every frame matters—just as every pixel
                matters in an interface. Today, I translate that same sense of rhythm, composition, and
                &quot;visual flow&quot; from film into digital products that feel alive and intuitive.
              </Text>
            </VStack>
          }
          contentAlign="left"
          description="From Behind the Lens to Behind the Code"
          id="creative-foundation"
          title="The Creative Foundation"
        />

        {/* 4. Core Capabilities */}
        <Section
          bodyContent={
            <VStack align="stretch" gap={5}>
              <Box>
                <Text as="span" fontWeight="semibold">The Full Product Lifecycle:</Text>
                <Text as="span" color="text.secondary">
                  {" "}
                  Driving products from initial prototyping and high-fidelity mockups to final coding and
                  deployment.
                </Text>
              </Box>
              <Box>
                <Text as="span" fontWeight="semibold">User-Centric Design:</Text>
                <Text as="span" color="text.secondary">
                  {" "}
                  Removing friction points to ensure every interface is intuitive, accessible, and tailored
                  to real needs.
                </Text>
              </Box>
              <Box>
                <Text as="span" fontWeight="semibold">Technical Engineering:</Text>
                <Text as="span" color="text.secondary">
                  {" "}
                  Building responsive, scalable interfaces using
                  {" "}
                  <Text as="span" fontWeight="medium">React.js</Text>
                  ,
                  {" "}
                  <Text as="span" fontWeight="medium">Next.js</Text>
                  , and modern JavaScript frameworks.
                </Text>
              </Box>
              <Box>
                <Text as="span" fontWeight="semibold">Quality &amp; Testing:</Text>
                <Text as="span" color="text.secondary">
                  {" "}
                  Rigorous testing and QA to ensure every product feels as good as it looks.
                </Text>
              </Box>
              <Box>
                <Text as="span" fontWeight="semibold">Strategic Collaboration:</Text>
                <Text as="span" color="text.secondary">
                  {" "}
                  Liaising with clients to translate project goals into technical requirements and
                  development timelines.
                </Text>
              </Box>
            </VStack>
          }
          contentAlign="left"
          id="capabilities"
          title="Core Capabilities"
        />

        {/* 4. Professional Experience */}
        <Section
          bodyContent={
            <VStack align="stretch" gap={8}>
              <Box>
                <Text fontFamily="heading" fontSize="lg" fontWeight="semibold">
                  USE Software | Front-End Developer &amp; UI/UX Specialist
                </Text>
                <Text color="text.secondary" fontSize="sm" mt={1}>
                  Sept 2022 – Present
                </Text>
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
              </Box>
              <Box>
                <Text fontFamily="heading" fontSize="lg" fontWeight="semibold">
                  Hightro | Full Stack Developer Intern
                </Text>
                <Text color="text.secondary" fontSize="sm" mt={1}>
                  Nov 2021 – Feb 2022
                </Text>
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
              </Box>
            </VStack>
          }
          contentAlign="left"
          id="experience"
          title="Professional Experience"
        />

        {/* 6. Personal & Interests */}
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
          description="When I'm not &quot;under the hood&quot; of a codebase, you'll find me:"
          id="interests"
          title="Personal &amp; Interests"
        />

        {/* 7. Technologies & Tools */}
        <Section
          bodyContent={
            <Table.ScrollArea
              borderColor="surface.border"
              borderRadius="md"
              borderWidth="1px"
              overflowX="auto"
            >
              <Table.Root size="sm" variant="outline">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader
                      color="text.primary"
                      fontWeight="semibold"
                      pr={4}
                      py={3}
                      textAlign="start"
                    >
                      Focus Area
                    </Table.ColumnHeader>
                    <Table.ColumnHeader
                      color="text.primary"
                      fontWeight="semibold"
                      py={3}
                      textAlign="start"
                    >
                      Technologies &amp; Tools
                    </Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell
                      color="text.secondary"
                      fontWeight="medium"
                      pr={4}
                      py={3}
                    >
                      Front-End
                    </Table.Cell>
                    <Table.Cell color="text.secondary" py={3}>
                      JavaScript (ES6+), TypeScript, React, Next.js, HTML5, CSS3
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell
                      color="text.secondary"
                      fontWeight="medium"
                      pr={4}
                      py={3}
                    >
                      Design
                    </Table.Cell>
                    <Table.Cell color="text.secondary" py={3}>
                      Figma, Photoshop, UI Prototyping, Asset Creation
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell
                      color="text.secondary"
                      fontWeight="medium"
                      pr={4}
                      py={3}
                    >
                      Back-End/Data
                    </Table.Cell>
                    <Table.Cell color="text.secondary" py={3}>
                      Node.js, C#, SQL, Python, RESTful API Integration
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell
                      color="text.secondary"
                      fontWeight="medium"
                      pr={4}
                      py={3}
                    >
                      Methodology
                    </Table.Cell>
                    <Table.Cell color="text.secondary" py={3}>
                      Agile, Waterfall, Jira, Client Discovery
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Table.ScrollArea>
          }
          contentAlign="left"
          id="technologies"
          title="Technologies &amp; Tools"
        />
      </Container>
    </Fragment>
  );
};

export default Home;
