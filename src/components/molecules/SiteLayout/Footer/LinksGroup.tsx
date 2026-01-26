"use client"

import { Button, StackProps, VStack } from "@chakra-ui/react"
import { FC } from "react"
import NextLink from "next/link";
import { useRouter } from "next/router";
import { isNavItemActive } from "@utils";


type FooterLinksGroupProps = StackProps & {
  links: LinkItem[];
};

/** A vertical stack container used to display the provided link items. */
export const FooterLinksGroup: FC<FooterLinksGroupProps> = ({ links, children, ...props }) => {
  const router = useRouter();

  return (
    <VStack as="ul" {...props}>
      {links.map(item => (
        <li key={item.label}>
          <Button
            aria-current={isNavItemActive(router.pathname, item.href) ? "page" : undefined}
            size="lg"
            variant="tertiary"
            asChild
          >
            <NextLink href={item.href}>
              {item.label}
            </NextLink>
          </Button>
        </li>
      ))}
      
      {children}
    </VStack>
  );
}