import { Tooltip } from "@atoms";
import { Box, BoxProps, VisuallyHidden } from "@chakra-ui/react";
import NextImage from "next/image";
import { FC } from "react";



type TechStackItemProps = BoxProps & {
  item: TechStackItem;
};


/** Renders a card container, displaying the logo image and name (hidden). */
export const TechItemCard: FC<TechStackItemProps> = ({ item, ...props }) => (
  <Tooltip content={item.name} positioning={{ placement: "top" }}>
    <Box
      h={{
        base: "60px",
        md: "90px"
      }}
      position="relative"
      w={{
        base: "120px",
        md: "150px"
      }}
      {...props}
    >
      <NextImage
        alt=""
        draggable={false}
        sizes="(max-width: 435px) 120px, 150px"
        src={item.logoSource}
        style={{ objectFit: "contain" }}
        fill
      />
      <VisuallyHidden>{item.name}</VisuallyHidden>
    </Box>
  </Tooltip>
);