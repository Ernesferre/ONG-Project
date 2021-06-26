import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { ActivitiesMenu } from "../layout/ActivitiesMenu";
import { AuthLinks } from "./AuthLinks";
import { HeaderRoutes } from "./HeaderRoutes";

export const HeaderDrawer = ({ routes, onClose, isOpen }) => {
  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <Flex flexDir="column" align="center">
            <ActivitiesMenu />
            <HeaderRoutes routes={routes} />
            <AuthLinks />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
