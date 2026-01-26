import { Fragment } from "react";
import { Box, Button, Card, Field, Flex, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { Container, Divider, Section, SEOConfig } from "@atoms";
import { FloatingLabelInput } from "@molecules";
import { NextPage } from "next";

const Playground: NextPage = () => {
  return (
    <Fragment>
      <SEOConfig title="Playground" />
      <Container>
        <VStack align="stretch" gap={12} py={10}>
          <Box>
            <Heading fontFamily="heading" size="2xl">
              Component Playground
            </Heading>
            <Text color="text.secondary" mt={2}>
              Recipes and slot recipes available in the design system
            </Text>
          </Box>

          {/* Button (recipe) */}
          <Box>
            <Heading fontFamily="heading" size="lg">
              Button
            </Heading>
            <Text color="text.secondary" fontSize="sm" mb={4}>
              Recipe: variant (primary, secondary, tertiary) × size (sm, md, lg)
            </Text>
            <VStack align="flex-start" gap={4}>
              <HStack flexWrap="wrap" gap={3}>
                <Button size="sm" variant="primary">Primary sm</Button>
                <Button size="md" variant="primary">Primary md</Button>
                <Button size="lg" variant="primary">Primary lg</Button>
              </HStack>
              <HStack flexWrap="wrap" gap={3}>
                <Button size="sm" variant="secondary">Secondary sm</Button>
                <Button size="md" variant="secondary">Secondary md</Button>
                <Button size="lg" variant="secondary">Secondary lg</Button>
              </HStack>
              <HStack flexWrap="wrap" gap={3}>
                <Button size="sm" variant="tertiary">Tertiary sm</Button>
                <Button size="md" variant="tertiary">Tertiary md</Button>
                <Button size="lg" variant="tertiary">Tertiary lg</Button>
              </HStack>
            </VStack>
          </Box>

          <Divider variant="accent" />

          {/* Divider (recipe) */}
          <Box>
            <Heading fontFamily="heading" size="lg">
              Divider
            </Heading>
            <Text color="text.secondary" fontSize="sm" mb={4}>
              Recipe: variant (subtle, accent, strong) × orientation (horizontal, vertical)
            </Text>
            <VStack align="stretch" gap={4}>
              <Box>
                <Text fontSize="sm" mb={2}>Horizontal: subtle, accent, strong</Text>
                <VStack gap={3}>
                  <Divider variant="subtle" />
                  <Divider variant="accent" />
                  <Divider variant="strong" />
                </VStack>
              </Box>
              <Box>
                <Text fontSize="sm" mb={2}>Vertical</Text>
                <Flex align="center" gap={4} h="60px">
                  <Divider orientation="vertical" variant="subtle" />
                  <Divider orientation="vertical" variant="accent" />
                  <Divider orientation="vertical" variant="strong" />
                </Flex>
              </Box>
            </VStack>
          </Box>

          <Divider variant="accent" />

          {/* Card (slot recipe) */}
          <Box>
            <Heading fontFamily="heading" size="lg">
              Card
            </Heading>
            <Text color="text.secondary" fontSize="sm" mb={4}>
              Slot recipe: variant (default, interactive, selected). Slots: root, header, body, footer, title, description
            </Text>
            <Flex flexWrap="wrap" gap={6}>
              <Card.Root variant="default" w="280px">
                <Card.Header>
                  <Card.Title>Default card</Card.Title>
                  <Card.Description>Base variant with full structure</Card.Description>
                </Card.Header>
                <Card.Body>
                  <Text fontSize="sm">Body content goes here.</Text>
                </Card.Body>
                <Card.Footer>
                  <Button size="sm" variant="tertiary">Action</Button>
                </Card.Footer>
              </Card.Root>
              <Card.Root variant="interactive" w="280px">
                <Card.Header>
                  <Card.Title>Interactive card</Card.Title>
                  <Card.Description>Hover and focus styles</Card.Description>
                </Card.Header>
                <Card.Body>
                  <Text fontSize="sm">Click or focus for glow.</Text>
                </Card.Body>
                <Card.Footer>
                  <Button size="sm" variant="primary">Action</Button>
                </Card.Footer>
              </Card.Root>
              <Card.Root variant="selected" w="280px">
                <Card.Header>
                  <Card.Title>Selected card</Card.Title>
                  <Card.Description>Strong glow on root</Card.Description>
                </Card.Header>
                <Card.Body>
                  <Text fontSize="sm">Selected state styling.</Text>
                </Card.Body>
                <Card.Footer>
                  <Button size="sm" variant="secondary">Action</Button>
                </Card.Footer>
              </Card.Root>
            </Flex>
          </Box>

          <Divider variant="accent" />

          {/* Field (slot recipe) */}
          <Box>
            <Heading fontFamily="heading" size="lg">
              Field
            </Heading>
            <Text color="text.secondary" fontSize="sm" mb={4}>
              Slot recipe: orientation (vertical, horizontal). Slots: root, label, helperText, errorText, requiredIndicator. Shown via Field + Input and FloatingLabelInput.
            </Text>
            <Flex flexWrap="wrap" gap={8}>
              <Box w="300px">
                <Text fontSize="sm" mb={3}>Field.Root (vertical, default)</Text>
                <Field.Root>
                  <Field.Label>Email</Field.Label>
                  <Input placeholder="you@example.com" />
                  <Field.HelperText>We will not share your email.</Field.HelperText>
                </Field.Root>
              </Box>
              <Box w="300px">
                <Text fontSize="sm" mb={3}>Field.Root (horizontal)</Text>
                <Field.Root orientation="horizontal">
                  <Field.Label>Name</Field.Label>
                  <Input placeholder="Your name" />
                </Field.Root>
              </Box>
              <Box w="300px">
                <Text fontSize="sm" mb={3}>FloatingLabelInput (uses Field)</Text>
                <FloatingLabelInput label="Username" placeholder="johndoe" />
              </Box>
              <Box w="300px">
                <Text fontSize="sm" mb={3}>Field with error</Text>
                <Field.Root invalid>
                  <Field.Label>Password</Field.Label>
                  <Input placeholder="••••••••" type="password" />
                  <Field.ErrorText>Password is required.</Field.ErrorText>
                </Field.Root>
              </Box>
            </Flex>
          </Box>

          <Divider variant="accent" />

          {/* Section (slot recipe) */}
          <Box>
            <Heading fontFamily="heading" size="lg">
              Section
            </Heading>
            <Text color="text.secondary" fontSize="sm" mb={4}>
              Slot recipe: contentAlign, childrenPlacement, textColor, headingTextStyle, descriptionTextStyle, childrenToContentRatio. Custom Section component.
            </Text>
            <VStack align="stretch" gap={8}>
              <Section
                contentAlign="center"
                description="contentAlign=center, default placement"
                title="Section: centered"
              />
              <Section
                childrenPlacement="bottom"
                contentAlign="left"
                description="contentAlign=left, childrenPlacement=bottom. No children in this example."
                title="Section: left, children bottom"
              />
              <Section
                contentAlign="right"
                description="contentAlign=right. headingTextStyle=section, descriptionTextStyle=normal."
                title="Section: right-aligned"
              />
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Fragment>
  );
};

export default Playground;
