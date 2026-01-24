"use client"

import { Button, Drawer, IconButton, IconButtonProps, Portal, Separator, useBreakpointValue, useDisclosure, VisuallyHidden } from "@chakra-ui/react";
import { FC, useEffect } from "react"
import { NavLinksGroup } from "./NavLinksGroup";
import { FaBars } from "react-icons/fa6";

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
        <IconButton variant="ghost" {...buttonProps}>
          <FaBars />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Body pt="6" spaceY="3">
              <NavLinksGroup 
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