import { Card, Icon, Text, VStack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";



type CoreCapabilityCardProps = {
  icon: ReactNode;
  title: string;
  description: ReactNode;
};



/** Shared layout for Core Capabilities cards (icon + title + description). */
export const CoreCapabilityCard: FC<CoreCapabilityCardProps> = ({ icon, title, description }) => (
  <Card.Body>
    <VStack align="center" gap={4} mb={4}>
      <Icon color="brand.400" fontSize="4xl">
        {icon}
      </Icon>
    </VStack>
    <VStack align="flex-start" gap={3}>
      <Text
        fontSize="xl"
        fontWeight="semibold"
      >
        {title}
      </Text>
      <Text color="text.secondary" fontSize="md" lineHeight="moderate">
        {description}
      </Text>
    </VStack>
  </Card.Body>
);

