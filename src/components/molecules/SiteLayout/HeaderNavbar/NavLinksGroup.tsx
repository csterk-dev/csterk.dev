"use client"


import { Button, Flex, FlexProps } from "@chakra-ui/react"
import { FC } from "react"
import NextLink from "next/link";
import { SITE_NAV_ITEMS } from "@constants";
import { useRouter } from "next/router";
import { isNavItemActive } from "@utils";


type LinksGroupProps = FlexProps & {
  showHomeLink?: boolean;
  /** Optional callback function that fires when a navigation link is clicked. Typically used to close mobile menus or perform other UI state updates after navigation. */
  handleLinkOnClick?: () => void;
};


/** A `<nav />` container element used to display the provided links. */
export const NavLinksGroup: FC<LinksGroupProps> = ({ showHomeLink, handleLinkOnClick, ...props }) => {
  const router = useRouter();
  const navItems = showHomeLink ? SITE_NAV_ITEMS : SITE_NAV_ITEMS.filter(item => item.key !== "home");

  return (
    <nav>
      <Flex alignItems="center" as="ul" {...props}>
        {navItems.map(item => (
          <li key={item.key}>
            <Button
              aria-current={isNavItemActive(router.pathname, item.href) ? "page" : undefined}
              size={{
                base: "lg",
                md: "md"
              }}
              variant="secondary"
              w={{
                base: "100%",
                md: "unset"
              }}
              asChild
              onClick={handleLinkOnClick}
            >
              <NextLink href={item.href}>
                {item.label}
              </NextLink>
            </Button>
          </li>
        ))}
      </Flex>
    </nav>
  )
}