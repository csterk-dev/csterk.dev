import { Card, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type InterestCardProps = {
  description: string;
  icon: ReactNode;
  title: string;
};

export const InterestCard: FC<InterestCardProps> = ({ description, icon, title }) => {
  return (
    <Card.Root variant="default" w="100%">
      <Card.Body p={4}>
        <HStack alignItems="flex-start" gap={3}>
          <Icon
            boxSize={6}
            color="accent.primary"
            flexShrink={0}
            mt={0.5}
          >
            {icon}
          </Icon>
          <VStack alignItems="flex-start" flex={1} gap={1}>
            <Text fontSize="md" fontWeight="semibold">
              {title}
            </Text>
            <Text color="text.secondary" fontSize="sm" lineHeight="short">
              {description}
            </Text>
          </VStack>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};
