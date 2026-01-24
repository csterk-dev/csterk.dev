import { Box, chakra, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC, PropsWithChildren } from "react";

const LinkWrapper: FC<PropsWithChildren & { href: string; }> = (props) => {
  const { href, children } = props;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link asChild>
        <NextLink href={href}>
          {children}
        </NextLink>
      </Link>
    );
  }
  return (
    <Link asChild>
      <NextLink href={href} rel="noopener noreferrer" target="_blank">
        {children}
      </NextLink>
    </Link>
  );
};


export const MDXComponents: Record<string, FC<any>> = {
  a: LinkWrapper,
  strong(props) {
    return (
      <chakra.span color="foreground.accent-dark" fontWeight="bold" {...props} />
    )
  },
  em(props) {
    return (
      <chakra.span color="foreground.body" fontWeight="bold" {...props} />
    )
  },
  ul(props) {
    return (
      <chakra.ul
        listStyleType="disc"
        my={1}
        paddingStart={6}
        {...props} />
    );
  },
  ol(props) {
    return (
      <chakra.ol
        listStyleType="disc"
        my={1}
        paddingStart={6}
        {...props} />
    );
  },
  li(props) {
    return <chakra.li {...props} />;
  },
  h1(props) {
    return (
      <chakra.h1
        fontFamily="heading"
        fontSize={{
          base: "2xl",
          md: "3xl"
        }}
        fontWeight="bold"
        lineHeight="moderate"
        {...props}
      />
    );
  },
  h2(props) {
    return (
      <chakra.h2
        fontFamily="heading"
        fontSize={{
          base: "xl",
          md: "2xl"
        }}
        fontWeight="bold"
        lineHeight="moderate"
        mt={2}
        {...props}
      />
    );
  },
  h3(props) {
    return (
      <chakra.h3
        fontFamily="heading"
        fontSize={{
          base: "lg",
          md: "xl"
        }}
        fontWeight="bold"
        lineHeight="moderate"
        {...props}
      />
    );
  },
  blockquote(props) {
    return (
      <chakra.blockquote
        bg="neutral.800"
        color="white"
        marginX="-6"
        my={4}
        paddingX="6"
        paddingY="4"
        sx={{
          borderLeft: "4px solid",
          borderColor: "brown.600"
        }}
        {...props}
      />
    );
  },
  // Image({ ratio, alt, my = "4rem", fit, caption, maxWidth, ...rest }) {
  //   if (ratio) {
  //     return (
  //       <Stack as="figure" gap="5" my={my}>
  //         <AspectRatio maxWidth={maxWidth} position="relative" ratio={ratio}>
  //           <NextImage
  //             alt={alt}
  //             className="img"
  //             style={{
  //               overflow: "visible",
  //               objectFit: fit
  //             }}
  //             {...rest}
  //           />
  //         </AspectRatio>
  //         {caption ?
  //           <Box
  //             as="figcaption"
  //             color="neutral.400"
  //             fontSize="small"
  //             textAlign="center">
  //             {alt}
  //           </Box> :
  //           null
  //         }
  //       </Stack>
  //     );
  //   }
  //   return (
  //     <Stack as="figure" my={my} maxWidth={maxWidth}>
  //       <Image
  //         alt={alt} className="img" style={{ objectFit: fit }}
  //         {...rest} />
  //       {caption ?
  //         <Box
  //           as="figcaption"
  //           color="neutral.400"
  //           fontSize="small"
  //           textAlign="center">
  //           {alt}
  //         </Box> :
  //         null
  //       }
  //     </Stack>
  //   );
  // },
  hr(props) {
    return <chakra.hr borderColor="border.solid" my={4} {...props} />;
  },
  code(props) {
    if (typeof props.children === "string") {
      return <Box as="code" color="foreground.body" rounded="lg">{`\`${props.children}\``}</Box>;
    }
    return <code {...props} />;
  },
  table(props) {
    return (
      <chakra.table
        my={4}
        sx={{
          borderCollapse: "collapse",
          thead: {
            borderBottomWidth: "1px",
            borderBottomColor: "neutral.700",
            th: {
              textAlign: "start",
              padding: "2",
              verticalAlign: "bottom",
              color: "neutral.200"
            }
          },
          tbody: {
            tr: {
              borderBottomWidth: "1px",
              borderBottomColor: "neutral.800"
            },
            td: {
              padding: "2"
            }
          }
        }}
        width="full"
        {...props}
      />
    );
  }
  // LinkCover(props) {
  //   const { href, title, ...rest } = props;
  //   return (
  //     <chakra.a
  //       display="block"
  //       href={href}
  //       pos="relative"
  //       target="_blank"
  //       {...rest}
  //     >
  //       {props.children}
  //       {title ?
  //         <Box
  //           as="span"
  //           bg="rgba(0,0,0,0.5)"
  //           bottom="4"
  //           color="white"
  //           fontSize="sm"
  //           left="4"
  //           pos="absolute"
  //           px="1.5"
  //           rounded="md"
  //         >
  //           {title}
  //         </Box> :
  //         null
  //       }
  //     </chakra.a>
  //   );
  // }
};