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
import { DonateBtn } from "./DonateBtn";
import { HeaderRoutes } from "./HeaderRoutes";

export const HeaderDrawer = ({ routes, onClose, isOpen, username }) => {
  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <Flex flexDir="column" align="center">
            <ActivitiesMenu />
            <HeaderRoutes routes={routes} />
            <AuthLinks username={username} />
            <DonateBtn />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
