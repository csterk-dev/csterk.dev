"use client";

import { Button, chakra, Flex, FlexProps, Menu } from "@chakra-ui/react";
import { HOME_FEATURED_PROJECTS, SITE_NAV_ITEMS } from "@constants";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { isNavItemActive } from "@utils";

const NAV_PROJECTS = HOME_FEATURED_PROJECTS.filter((p): p is typeof p & { href: string } => Boolean(p.href));

type LinksGroupProps = FlexProps & {
  showHomeLink?: boolean;
  /** "dropdown" = Chakra Menu (desktop). "list" = inline links (e.g. mobile drawer). */
  displayProjectsAs?: "dropdown" | "list";
  /** Optional callback when a nav/project link is clicked (e.g. close mobile menu). */
  handleLinkOnClick?: () => void;
};

/** A `<nav />` container that displays nav links and a Projects menu. */
export const NavLinksGroup: FC<LinksGroupProps> = ({
  showHomeLink = true,
  displayProjectsAs = "dropdown",
  handleLinkOnClick,
  ...props
}) => {
  const router = useRouter();
  const navItems = showHomeLink ? SITE_NAV_ITEMS : SITE_NAV_ITEMS.filter((item) => item.key !== "home");

  return (
    <nav>
      <Flex
        alignItems="center"
        as="ul"
        gap={2}
        listStyleType="none"
        {...props}
      >
        {navItems.map((item) => (
          <chakra.li key={item.key} w={displayProjectsAs === "list" ? "100%" : undefined}>
            <Button
              aria-current={isNavItemActive(router.asPath, item.href) ? "page" : undefined}
              size={{
                base: "lg",
                md: "md"
              }}
              variant="tertiary"
              w={{
                base: "100%",
                sm: "100%",
                md: "unset"
              }}
              asChild
              onClick={handleLinkOnClick}
            >
              <NextLink href={item.href}>
                {item.label}
              </NextLink>
            </Button>
          </chakra.li>
        ))}

        {NAV_PROJECTS.length && displayProjectsAs === "dropdown" ? (
          <chakra.li>
            <Menu.Root positioning={{ placement: "bottom-start" }}>
              <Menu.Trigger asChild>
                <Button
                  aria-current={
                    NAV_PROJECTS.some((p) => isNavItemActive(router.asPath, p.href)) ? "page" : undefined
                  }
                  size={{
                    base: "lg",
                    md: "md"
                  }}
                  variant="tertiary"
                >
                  Projects
                </Button>
              </Menu.Trigger>
              <Menu.Positioner>
                <Menu.Content>
                  {NAV_PROJECTS.map((project) => {
                    const isActive = isNavItemActive(router.asPath, project.href);
                    return (
                      <Menu.Item
                        key={project.href}
                        color={isActive ? "accent.primary" : undefined}
                        value={project.href}
                      >
                        <NextLink
                          aria-current={isActive ? "page" : undefined}
                          href={project.href}
                          style={{ display: "block" }}
                        >
                          {project.name}
                        </NextLink>
                      </Menu.Item>
                    );
                  })}
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
          </chakra.li>
        ) : null}

        {NAV_PROJECTS.length && displayProjectsAs === "list" ? (
          <>
            {NAV_PROJECTS.map((project) => (
              <chakra.li key={project.href} w="100%">
                <Button
                  aria-current={isNavItemActive(router.asPath, project.href) ? "page" : undefined}
                  size="lg"
                  variant="tertiary"
                  w="100%"
                  asChild
                  onClick={handleLinkOnClick}
                >
                  <NextLink href={project.href}>
                    {project.name}
                  </NextLink>
                </Button>
              </chakra.li>
            ))}
          </>
        ) : null}
      </Flex>
    </nav>
  );
};
