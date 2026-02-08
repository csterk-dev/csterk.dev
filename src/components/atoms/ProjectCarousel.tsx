import { AspectRatio, Box, BoxProps, Carousel, IconButton, type IconButtonProps, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { forwardRef } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export interface ProjectItem {
  name: string;
  client: string;
  tags: string[];
  image: string;
  href?: string;
  comingSoon?: boolean;
}

export interface ProjectCarouselProps extends BoxProps {
  projects: ProjectItem[];
  autoplayDelay?: number;
}

const ActionButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function ActionButton(props, ref) {
    return (
      <IconButton
        {...props}
        bg="bg"
        flexShrink={0}
        ref={ref}
        rounded="full"
        size="md"
        variant="tertiary"
      />
    );
  },
);

ActionButton.displayName = "ActionButton";

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects, autoplayDelay = 8000, ...boxProps }) => {
  return (
    <Box {...boxProps}>
      <Carousel.Root
        autoplay={{
          delay: autoplayDelay
        }}
        colorPalette="white"
        gap="4"
        position="relative"
        slideCount={projects.length}
        width="full"
      >
        <Box position="relative" width="full">
          <Carousel.Control position="relative" width="full">
            <Carousel.ItemGroup
              minH={{
                base: "50vh",
                md: "400px"
              }}
              width="full"
            >
              {projects.map((project, index) => (
                <Carousel.Item key={project.name} index={index} width="full">
                  <LinkBox
                    _hover={{
                      "& .project-overlay": {
                        opacity: 1
                      },
                      "& .project-image": {
                        filter: "brightness(0.4)"
                      }
                    }}
                    borderRadius="lg"
                    cursor={project.href && !project.comingSoon ? "pointer" : "default"}
                    height="100%"
                    overflow="hidden"
                    position="relative"
                    transition="all 0.15s ease-out"
                    width="full"
                  >
                    {project.href && !project.comingSoon ? (
                      <LinkOverlay asChild>
                        <NextLink href={project.href}>
                          <Box
                            inset={0}
                            position="absolute"
                            zIndex={3}
                            aria-hidden
                          />
                        </NextLink>
                      </LinkOverlay>
                    ) : null}
                    <Box
                      height="100%"
                      inset={0}
                      position="absolute"
                      width="100%"
                      zIndex={0}
                    >
                      <NextImage
                        alt=""
                        quality={50}
                        sizes="100vw"
                        src={project.image}
                        style={{
                          filter: "blur(24px)",
                          objectFit: "cover",
                          transform: "scale(1.1)"
                        }}
                        aria-hidden
                        fill
                      />
                    </Box>
                    <Box
                      alignItems="center"
                      display="flex"
                      height="100%"
                      justifyContent="center"
                      minH="100%"
                      position="relative"
                      width="100%"
                      zIndex={1}
                    >
                      <AspectRatio
                        maxH={{
                          base: "60vh",
                          md: "72vh"
                        }}
                        ratio={{
                          base: 4 / 3,
                          md: 16 / 9
                        }}
                        width="100%"
                      >
                        <Box
                          height="100%"
                          position="relative"
                          width="100%"
                        >
                          <NextImage
                            alt={project.name}
                            className="project-image"
                            priority={index === 0}
                            sizes="(max-width: 768px) 100vw, 900px"
                            src={project.image}
                            style={{
                              objectFit: "contain",
                              transition: "filter 0.3s ease-in-out"
                            }}
                            fill
                          />
                        </Box>
                      </AspectRatio>
                    </Box>
                    <Box
                      alignItems="center"
                      bg="surface.canvas/70"
                      className="project-overlay"
                      display="flex"
                      flexDirection="column"
                      gap={4}
                      inset={0}
                      justifyContent="center"
                      opacity={{
                        base: 1,
                        md: 0
                      }}
                      p={6}
                      position="absolute"
                      transition="opacity 0.3s ease-in-out"
                      zIndex={2}
                    >
                      {project.comingSoon ? (
                        <Box
                          backdropFilter="blur(10px)"
                          bg="brand.subtle/30"
                          border="1px solid"
                          borderColor="brand.emphasized/50"
                          borderRadius="full"
                          mb={2}
                          px={4}
                          py={2}
                        >
                          <Text
                            color="brand.contrast"
                            fontSize="sm"
                            fontWeight="semibold"
                            textAlign="center"
                            textTransform="uppercase"
                          >
                            Coming Soon
                          </Text>
                        </Box>
                      ) : null}
                      <Text
                        color="white"
                        fontSize="2xl"
                        fontWeight="semibold"
                        textAlign="center"
                      >
                        {project.name}
                      </Text>
                      <Text
                        color="white"
                        fontSize="lg"
                        opacity={0.9}
                        textAlign="center"
                      >
                        {project.client}
                      </Text>
                      <Box
                        display="flex"
                        flexWrap="wrap"
                        gap={2}
                        justifyContent="center"
                        mt={2}
                      >
                        {project.tags.map((tag) => (
                          <Box
                            key={tag}
                            backdropFilter="blur(10px)"
                            bg="rgba(255, 255, 255, 0.2)"
                            border="1px solid rgba(255, 255, 255, 0.3)"
                            borderRadius="full"
                            px={3}
                            py={1}
                          >
                            <Text color="white" fontSize="sm" fontWeight="medium">
                              {tag}
                            </Text>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </LinkBox>
                </Carousel.Item>
              ))}
            </Carousel.ItemGroup>

            <Box
              bg="surface.canvas/70"
              borderRadius="full"
              bottom={{
                base: 3,
                md: 6
              }}
              display="inline-flex"
              justifyContent="center"
              left="50%"
              position="absolute"
              px={2}
              py={1.5}
              transform="translateX(-50%)"
              width="max-content"
              zIndex={2}
            >
              <Carousel.Indicators
                _current={{
                  width: "10",
                  bg: "colorPalette.subtle",
                  opacity: 1
                }}
                boxSize="2"
                opacity="0.8"
                transformOrigin="center"
                transition="width 0.2s ease-in-out"
              />
            </Box>
          </Carousel.Control>

          <Carousel.PrevTrigger asChild>
            <ActionButton
              aria-label="Previous project"
              left={{
                base: 2,
                md: 4
              }}
              position="absolute"
              size={{
                base: "sm",
                md: "md"
              }}
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
            >
              <LuArrowLeft />
            </ActionButton>
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger asChild>
            <ActionButton
              aria-label="Next project"
              position="absolute"
              right={{
                base: 2,
                md: 4
              }}
              size={{
                base: "sm",
                md: "md"
              }}
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
            >
              <LuArrowRight />
            </ActionButton>
          </Carousel.NextTrigger>
        </Box>
      </Carousel.Root>
    </Box>
  );
};

ProjectCarousel.displayName = "ProjectCarousel";
