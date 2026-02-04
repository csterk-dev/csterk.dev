import { type ChakraTimelineInViewItem } from "@atoms";
import { Box, Text } from "@chakra-ui/react";

/** Professional experience timeline items for the Experience & Education section. */
export const PROFESSIONAL_EXPERIENCE_ITEMS: ChakraTimelineInViewItem[] = [
  {
    title: "USE Software | Front-End Developer & UI/UX Specialist",
    description: "2022 – Present",
    children: (
      <Box
        as="ul"
        color="text.secondary"
        lineHeight="moderate"
        pl={5}
      >
        <Box as="li" mb={2}>Leading the UI/UX design and development for web and app-based programs.</Box>
        <Box as="li" mb={2}>Translating complex requirements into high-fidelity prototypes and testable designs.</Box>
        <Box as="li" mb={2}>Working within a Full Stack team to build modern, efficient applications in Agile and Waterfall environments.</Box>
        <Box as="li">Driving usability improvements by refining interfaces and enhancing the overall user experience.</Box>
      </Box>
    )
  },
  {
    title: "Hightro | Full Stack Developer Intern",
    description: "2021 – 2022",
    children: (
      <Box
        as="ul"
        color="text.secondary"
        lineHeight="moderate"
        pl={5}
      >
        <Box as="li" mb={2}>Created and integrated custom APIs for bespoke solutions.</Box>
        <Box as="li">Identified and resolved bugs within existing projects to support continuous development.</Box>
      </Box>
    )
  }
];

/** Education timeline items for the Experience & Education section. */
export const EDUCATION_ITEMS: ChakraTimelineInViewItem[] = [
  {
    title: "Bachelor of Information Technology (Computer Science) & Bachelor of Creative Industries (Music & Sound)",
    description: "Queensland University of Technology (QUT) | 2019 – 2022",
    children: (
      <Box
        as="ul"
        color="text.secondary"
        lineHeight="moderate"
        pl={5}
      >
        <Box as="li" mb={2}>
          <Text as="span" fontWeight="semibold">Academic Excellence:</Text>

          <Text>Recognised on the QUT Academic Dean's List from 2019 to 2022.</Text>
        </Box>
        <Box as="li" mb={2}>
          <Text as="span" fontWeight="semibold">The Intersection:</Text>

          <Text>This double degree allowed me to master rigorous software engineering principles while honing my creative instincts in sound design and performance.</Text>
        </Box>
        <Box as="li">
          <Text as="span" fontWeight="semibold">Relevance:</Text>
          <Text>I use this unique combination to bridge the gap between complex codebases and intuitive, sensory-rich user interfaces.</Text>
        </Box>
      </Box>
    )
  },
  {
    title: "Certificate III in Screen & Media",
    description: "Workskills / Titans TV | 2017 – 2018",
    children: (
      <Box
        as="ul"
        color="text.secondary"
        lineHeight="moderate"
        pl={5}
      >
        <Box as="li" mb={2}>
          <Text as="span" fontWeight="semibold">Visual Storytelling:</Text>
          <Text>Developed a foundational understanding of composition, lighting, and pacing through film and multimedia production.</Text>
        </Box>
        <Box as="li" mb={2}>
          <Text as="span" fontWeight="semibold">Industry Application:</Text>
          <Text>Served as a Camera Assistant for Titans TV, assisting in live recordings for Gold Coast Titans pre-show performances.</Text>
        </Box>
        <Box as="li">
          <Text as="span" fontWeight="semibold">Impact on UX:</Text>
          <Text>My roots in media allow me to view digital interfaces through a cinematic lens—prioritising visual flow and "storytelling" within a user's journey.</Text>
        </Box>
      </Box>
    )
  },
  {
    title: "Diploma in Music Performance (AMusA) - Drums",
    description: "RSL | 2018",
    children: (
      <Box
        as="ul"
        color="text.secondary"
        lineHeight="moderate"
        pl={5}
      >
        <Box as="li" mb={2}>
          <Text as="span" fontWeight="semibold" mb={2}>Rhythm & Precision:</Text>
          <Text mb={2}>My background as a drummer shapes how I think about interaction "tempo" and the rhythmic feedback of responsive software, which feeds straight into the products I build.</Text>
          <Text mb={2}>In performance, the goal is the right amount of energy and spice: something impressive and entertaining that lifts the piece without overplaying and pulling focus from the whole.</Text>
          <Text>I bring that same balance to digital products: memorable, distinctive moments that leave a lasting impression without overwhelming the experience.</Text>
        </Box>
      </Box>
    )
  }
];
