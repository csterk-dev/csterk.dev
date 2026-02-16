import { Box, chakra, Link } from "@chakra-ui/react";
import { IMAGE_BG_GRADIENT } from "@theme";
import NextImage from "next/image";
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
    <Link colorPalette="brand" variant="underline" asChild>
      <NextLink href={href} rel="noopener noreferrer" target="_blank">
        {children}
      </NextLink>
    </Link>
  );
};


const ProjectImage: FC<{ src: string; alt?: string }> = (props) => {
  const { src, alt = "" } = props;
  return (
    <Box
      bg={IMAGE_BG_GRADIENT}
      borderRadius="lg"
      my={6}
      p={4}
      width="100%"
    >
      <NextImage
        alt={alt}
        height={800}
        sizes="100vw"
        src={src}
        style={{
          objectFit: "contain",
          width: "100%",
          height: "auto"
        }}
        width={1200}
      />
    </Box>
  );
};

const InlineIcon: FC<{ src: string; alt?: string }> = (props) => {
  const { src, alt = "" } = props;
  return (
    <chakra.img
      alt={alt}
      display="inline"
      height="1.2em"
      marginRight="0.5em"
      src={src}
      verticalAlign="text-bottom"
      width="1.2em"
    />
  );
};

export const MDXComponents: Record<string, FC<any>> = {
  a: LinkWrapper,
  ProjectImage,
  InlineIcon,
  strong(props) {
    return (
      <chakra.span color="accent.secondary" fontWeight="semibold" {...props} />
    )
  },
  em(props) {
    return (
      <chakra.span color="text.primary" fontWeight="bold" {...props} />
    )
  },
  p(props) {
    return <chakra.p mt={4} {...props} />;
  },
  ul(props) {
    return (
      <chakra.ul
        listStyleType="disc"
        mb={2}
        mt={4}
        paddingStart={6}
        {...props} />
    );
  },
  ol(props) {
    return (
      <chakra.ol
        listStyleType="decimal"
        mb={2}
        mt={4}
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
          base: "3xl",
          md: "4xl"
        }}
        fontWeight="bold"
        lineHeight="moderate"
        mb={3}
        mt={12}
        {...props}
      />
    );
  },
  h2(props) {
    return (
      <chakra.h2
        fontFamily="heading"
        fontSize={{
          base: "2xl",
          md: "3xl"
        }}
        fontWeight="bold"
        lineHeight="moderate"
        mb={3}
        mt={10}
        {...props}
      />
    );
  },
  h3(props) {
    return (
      <chakra.h3
        fontFamily="heading"
        fontSize={{
          base: "xl",
          md: "2xl"
        }}
        fontWeight="bold"
        lineHeight="moderate"
        mb={2}
        mt={8}
        {...props}
      />
    );
  },
  h4(props) {
    return (
      <chakra.h4
        fontFamily="heading"
        fontSize={{
          base: "lg",
          md: "xl"
        }}
        fontWeight="bold"
        lineHeight="moderate"
        mb={2}
        mt={6}
        {...props}
      />
    );
  },
  blockquote(props) {
    return (
      <chakra.blockquote
        bg="surface.raised"
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
      return <Box as="code" color="text.primary" rounded="lg">{`\`${props.children}\``}</Box>;
    }
    return <code {...props} />;
  },
  table(props) {
    return (
      <Box my={6} overflowX="auto" width="100%">
        <chakra.table
          borderColor="surface.border"
          borderWidth="1px"
          fontSize={{
            base: "sm",
            md: "md"
          }}
          rounded="lg"
          width="100%"
          {...props}
        />
      </Box>
    );
  },
  thead(props) {
    return (
      <chakra.thead
        bg="surface.raised"
        {...props}
      />
    );
  },
  tbody(props) {
    return (
      <chakra.tbody
        {...props}
      />
    );
  },
  tr(props) {
    return (
      <chakra.tr
        _last={{ borderBottomWidth: 0 }}
        borderBottomWidth="1px"
        borderColor="surface.border"
        {...props}
      />
    );
  },
  th(props) {
    return (
      <chakra.th
        borderBottomWidth="1px"
        borderColor="surface.border"
        color="text.primary"
        fontFamily="heading"
        fontSize={{
          base: "sm",
          md: "md"
        }}
        fontWeight="bold"
        px={{
          base: 3,
          md: 4
        }}
        py={{
          base: 2,
          md: 3
        }}
        textAlign="left"
        {...props}
      />
    );
  },
  td(props) {
    return (
      <chakra.td
        color="text.secondary"
        px={{
          base: 3,
          md: 4
        }}
        py={{
          base: 2,
          md: 3
        }}
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