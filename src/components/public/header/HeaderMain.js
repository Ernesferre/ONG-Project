import { Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { SomosMasLogo } from "../../../assets/SomosMasLogo";
import { ActivitiesMenu } from "../layout/ActivitiesMenu";
import { AuthLinks } from "./AuthLinks";
import { HeaderRoutes } from "./HeaderRoutes";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { HeaderMenuBtn } from "./HeaderMenuBtn";

export const HeaderMain = ({}) => {
  const publicRoutes = [
    { url: "/us", name: "Nosotros" },
    { url: "/novedades", name: "Novedades" },
    { url: "/contacto", name: "Contacto" },
    { url: "/testimonios", name: "Testimonios" },
  ];
  const privateRoutes = [];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex height="5em">
      <Flex alignItems="center" margin="1em">
        <SomosMasLogo />
      </Flex>
      <Flex
        marginLeft="auto"
        marginRight="1em"
        alignItems="center"
        display={{ base: "none", md: "none", lg: "flex" }}
      >
        <ActivitiesMenu />
        <HeaderRoutes routes={publicRoutes} />
        <AuthLinks />
      </Flex>
      <HeaderMenuBtn onOpen={onOpen} />
    </Flex>
  );
};
