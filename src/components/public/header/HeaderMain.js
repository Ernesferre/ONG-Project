import { Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { SomosMasLogo } from "../../../assets/SomosMasLogo";
import { ActivitiesMenu } from "../layout/ActivitiesMenu";
import { AuthLinks } from "./AuthLinks";
import { HeaderRoutes } from "./HeaderRoutes";
import { HeaderMenuBtn } from "./HeaderMenuBtn";
import { HeaderDrawer } from "./HeaderDrawer";
import { DonateBtn } from "./DonateBtn";
import { BackofficeRoutes } from "./backoffice/BackofficeRoutes";

export const HeaderMain = () => {
  const routes = [
    { url: "/us", name: "Nosotros" },
    { url: "/novedades", name: "Novedades" },
    { url: "/contacto", name: "Contacto" },
    { url: "/testimonios", name: "Testimonios" },
  ];

  let isBackoffice = true;
  let username = "test";
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex height="5em" boxShadow="sm">
      <Flex alignItems="center" margin="1em">
        <SomosMasLogo />
      </Flex>
      {isBackoffice ? (
        <>
          <Flex marginLeft="auto" marginRight="1em">
            <BackofficeRoutes />
          </Flex>
        </>
      ) : (
        <>
          <Flex
            marginLeft="auto"
            marginRight="1em"
            alignItems="center"
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            <ActivitiesMenu />
            <HeaderRoutes routes={routes} />
            <AuthLinks username={username} />
            <DonateBtn />
          </Flex>
          <HeaderMenuBtn onOpen={onOpen} />
          <HeaderDrawer
            onClose={onClose}
            isOpen={isOpen}
            routes={routes}
            username={username}
          />
        </>
      )}
    </Flex>
  );
};
