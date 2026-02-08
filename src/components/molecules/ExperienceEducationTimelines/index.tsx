import { ChakraTimelineInView } from "@atoms";
import { StackProps, VStack } from "@chakra-ui/react";
import { FC, memo } from "react";
import { EDUCATION_ITEMS, PROFESSIONAL_EXPERIENCE_ITEMS } from "./experience-education-content";

const ExperienceEducationTimelinesInner: FC<StackProps> = (props) => (
  <VStack 
    align="stretch" 
    gap={8} 
    mt={10} 
    {...props}
  >
    <ChakraTimelineInView
      items={PROFESSIONAL_EXPERIENCE_ITEMS}
      title="Professional Experience"
    />
    <ChakraTimelineInView
      items={EDUCATION_ITEMS}
      title="Educational Roots"
    />
  </VStack>
);
ExperienceEducationTimelinesInner.displayName = "ExperienceEducationTimelines";

export const ExperienceEducationTimelines = memo(ExperienceEducationTimelinesInner);
