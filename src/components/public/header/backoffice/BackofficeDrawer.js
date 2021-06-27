import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { AuthLinks } from "../AuthLinks";
import { BackofficeRoutes } from "./BackofficeRoutes";

export const BackofficeDrawer = ({ routes, onClose, isOpen, username }) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <Flex flexDir="column" align="center">
            <BackofficeRoutes />
            <AuthLinks username={username} />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
