import { Avatar, Box, BoxProps, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

const AVATAR_SRC = "/static/images/chris-avatar.png";

const HERO_GRADIENT =
  "radial-gradient(ellipse 120% 100% at 85% 15%, rgba(15, 163, 160, 0.14) 0%, transparent 50%), radial-gradient(ellipse 90% 80% at 15% 85%, rgba(8, 94, 93, 0.1) 0%, transparent 45%), radial-gradient(ellipse 100% 60% at 50% 50%, rgba(46, 211, 196, 0.06) 0%, transparent 55%), radial-gradient(ellipse 80% 50% at 70% 60%, rgba(11, 126, 125, 0.08) 0%, transparent 40%), radial-gradient(ellipse 150% 120% at 50% 50%, rgba(30, 34, 40, 0.6) 0%, transparent 70%), #1E2228";

type ProjectHeroProps = BoxProps & {
  title: string;
  description?: string;
  publishedDate?: string;
  readingTimeMinutes?: number;
  tags?: string[];
};

export const ProjectHero: FC<ProjectHeroProps> = (props) => {
  const { title, description, publishedDate, readingTimeMinutes, tags, ...rest } = props;

  const metaParts: string[] = [];
  if (readingTimeMinutes != null) {
    metaParts.push(`${readingTimeMinutes} min read`);
  }
  if (publishedDate) {
    metaParts.push(publishedDate);
  }
  const metaText = metaParts.join(" · ");

  return (
    <Box
      as="header"
      position="relative"
      width="full"
      {...rest}
    >
      <Flex
        align="start"
        bg={HERO_GRADIENT}
        borderRadius="lg"
        flexDirection="column"
        justify="space-between"
        minH={{
          base: "300px",
          md: "340px"
        }}
        overflow="hidden"
        position="relative"
        px={{
          base: 4,
          md: 8
        }}
        py={{
          base: 6,
          md: 8
        }}
        shadow="glow.interactive"
        width="full"
      >
        <Stack>
          <Text
            color="white"
            fontFamily="heading"
            fontSize={{
              base: "2xl",
              md: "4xl"
            }}
            fontWeight="bold"
            lineHeight="tight"
            textAlign="left"
            textShadow="0 2px 4px rgba(0,0,0,0.4)"
          >
            {title}
          </Text>
          {description ? (
            <Text
              color="white"
              fontSize={{
                base: "sm",
                md: "md"
              }}
              maxWidth="xl"
              mt={4}
              textAlign="left"
              textShadow="0 1px 3px rgba(0,0,0,0.4)"
            >
              {description}
            </Text>
          ) : null}
        </Stack>

        <Stack gap={4}>
          {tags?.length ? (
            <Flex
              flexWrap="wrap"
              gap={2}
              justifyContent="flex-start"
              mt={4}
            >
              {tags.map((tag) => (
                <Box
                  key={tag}
                  bg="whiteAlpha.300"
                  borderRadius="md"
                  paddingX={2}
                  paddingY={1}
                >
                  <Text color="white" fontSize="sm" fontWeight="semibold">
                    {tag}
                  </Text>
                </Box>
              ))}
            </Flex>
          ) : null}

          <HStack>
            <Avatar.Root size="sm">
              <Avatar.Fallback name="Chris" />
              <Avatar.Image src={AVATAR_SRC} />
            </Avatar.Root>
            {metaText ? (
              <Text
                color="whiteAlpha.900"
                fontSize="sm"
                textShadow="0 1px 2px rgba(0,0,0,0.4)"
              >
                {metaText}
              </Text>
            ) : null}
          </HStack>
        </Stack>
      </Flex>
    </Box>
  );
};
