import { Card, Grid, GridProps, SimpleGrid, Stack } from "@chakra-ui/react";
import { TechItemCard } from "@molecules";
import { FC } from "react";
import { TraceBorderCardWrapper } from "./TraceBorderCardWrapper";



type ToolkitTechGridProps = GridProps & {
  backEndDataGroup: TechStackGroup | undefined;
  designGroup: TechStackGroup | undefined;
  frontEndGroup: TechStackGroup | undefined;
  methodologyGroup: TechStackGroup | undefined;
};

export const ToolkitTechGrid: FC<ToolkitTechGridProps> = ({
  backEndDataGroup,
  designGroup,
  frontEndGroup,
  methodologyGroup,
  ...gridProps
}) => (
  <Grid
    gap={6}
    templateColumns={{
      base: "1fr",
      lg: "repeat(4, 1fr)"
    }}
    {...gridProps}
  >
    <TraceBorderCardWrapper
      animation="trace-border-0"
      gradientId="border-gradient-toolkit-0"
      gridColumn={{
        base: "1",
        lg: "1 / 4"
      }}
      gridRow={{
        base: "2",
        lg: "1"
      }}
    >
      <Card.Root pb={2} w="100%">
        <Card.Header>
          <Card.Title fontSize="2xl">{frontEndGroup?.title}</Card.Title>
          <Card.Description>{frontEndGroup?.description}</Card.Description>
        </Card.Header>
        <Card.Body>
          {frontEndGroup ? (
            <SimpleGrid
              columns={{
                base: 2,
                md: 3
              }}
              gap={8}
              justifyItems="center"
              mt={4}
            >
              {frontEndGroup.items.map(item => (
                <TechItemCard
                  key={item.key}
                  item={item}
                />
              ))}
            </SimpleGrid>
          ) : null}
        </Card.Body>
      </Card.Root>
    </TraceBorderCardWrapper>

    <TraceBorderCardWrapper
      animation="trace-border-1"
      gradientId="border-gradient-toolkit-1"
      gridColumn={{
        base: "1",
        lg: "4"
      }}
      gridRow={{
        base: "3",
        lg: "1"
      }}
    >
      <Card.Root pb={2} w="100%">
        <Card.Header>
          <Card.Title fontSize="2xl">{designGroup?.title}</Card.Title>
          <Card.Description>{designGroup?.description}</Card.Description>
        </Card.Header>
        <Card.Body>
          {designGroup ? (
            <Stack
              align="center"
              direction={{
                base: "row",
                lg: "column"
              }}
              gap={8}
              justify="space-evenly"
              mt={4}
            >
              {designGroup.items.map(item => (
                <TechItemCard
                  key={item.key}
                  item={item}
                />
              ))}
            </Stack>
          ) : null}
        </Card.Body>
      </Card.Root>
    </TraceBorderCardWrapper>

    <TraceBorderCardWrapper
      animation="trace-border-2"
      gradientId="border-gradient-toolkit-2"
      gridColumn={{
        base: "1",
        lg: "1 / 3"
      }}
      gridRow={{
        base: "4",
        lg: "2"
      }}
    >
      <Card.Root pb={2} w="100%">
        <Card.Header>
          <Card.Title fontSize="2xl">{backEndDataGroup?.title}</Card.Title>
          <Card.Description>{backEndDataGroup?.description}</Card.Description>
        </Card.Header>
        <Card.Body>
          {backEndDataGroup ? (
            <SimpleGrid
              columns={{
                base: 2,
                md: 3
              }}
              gap={8}
              justifyItems="center"
              mt={4}
            >
              {backEndDataGroup.items.map(item => (
                <TechItemCard
                  key={item.key}
                  item={item}
                />
              ))}
            </SimpleGrid>
          ) : null}
        </Card.Body>
      </Card.Root>
    </TraceBorderCardWrapper>

    <TraceBorderCardWrapper
      animation="trace-border-3"
      gradientId="border-gradient-toolkit-3"
      gridColumn={{
        base: "1",
        lg: "3 / 5"
      }}
      gridRow={{
        base: "5",
        lg: "2"
      }}
    >
      <Card.Root pb={2} w="100%">
        <Card.Header>
          <Card.Title fontSize="2xl">{methodologyGroup?.title}</Card.Title>
          <Card.Description>{methodologyGroup?.description}</Card.Description>
        </Card.Header>
        <Card.Body>
          {methodologyGroup ? (
            <SimpleGrid
              columns={{
                base: 2,
                md: 3
              }}
              gap={8}
              justifyItems="center"
              mt={4}
            >
              {methodologyGroup.items.map(item => (
                <TechItemCard
                  key={item.key}
                  item={item}
                />
              ))}
            </SimpleGrid>
          ) : null}
        </Card.Body>
      </Card.Root>
    </TraceBorderCardWrapper>
  </Grid>
);
