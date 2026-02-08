"use client"

import { Box, Button, Drawer, IconButton, IconButtonProps, Portal, Separator, useBreakpointValue, useDisclosure, VisuallyHidden } from "@chakra-ui/react";
import { FC, useEffect } from "react"
import { NavLinksGroup } from "./NavLinksGroup";
import { FaBars, FaX } from "react-icons/fa6";

type MobileLinksMenuProps = IconButtonProps;

export const MobileLinksMenu: FC<MobileLinksMenuProps> = (buttonProps) => {
  const menu = useDisclosure();
  const isInMobile = useBreakpointValue({
    base: true,
    md: false
  });

  // Auto close the drawer if resizing from mobile to desktop.
  useEffect(() => {
    if (menu.open && !isInMobile) menu.onClose();
  }, [isInMobile, menu]);

  return (
    <Drawer.Root open={menu.open} placement="bottom" onOpenChange={(e) => menu.setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton variant="tertiary" {...buttonProps}>
          <Box
            alignItems="center"
            display="inline-flex"
            justifyContent="center"
            position="relative"
          >
            <Box
              css={{
                animation: "icon-fade-in",
                pointerEvents: "auto",
                "&[data-hidden]": {
                  animation: "icon-fade-out",
                  pointerEvents: "none"
                }
              }}
              data-hidden={menu.open || undefined}
            >
              <FaBars />
            </Box>
            <Box
              alignItems="center"
              bottom={0}
              css={{
                animation: "icon-fade-out",
                pointerEvents: "none",
                "&[data-visible]": {
                  animation: "icon-fade-in",
                  pointerEvents: "auto"
                }
              }}
              data-visible={menu.open || undefined}
              display="flex"
              justifyContent="center"
              left={0}
              position="absolute"
              right={0}
              top={0}
              transform="rotate(90deg)"
            >
              <FaX />
            </Box>
          </Box>
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Body pt="6" spaceY="3">
              <NavLinksGroup
                displayProjectsAs="list"
                flexDir="column"
                gap={2}
                handleLinkOnClick={menu.onClose}
                showHomeLink
              />
              <Separator />
              <Button
                size="lg"
                variant="tertiary"
                w="100%"
                onClick={menu.onClose}
              >
                Close
                <VisuallyHidden>navigation menu</VisuallyHidden>
              </Button>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}