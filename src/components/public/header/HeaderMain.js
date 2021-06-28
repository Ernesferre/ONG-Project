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
import { BackofficeDrawer } from "./backoffice/BackofficeDrawer";
import { BackofficeBtn } from "./backoffice/BackofficeBtn";

export const HeaderMain = ({ isBackoffice }) => {
  const publicRoutes = [
    { url: "/us", name: "Nosotros" },
    { url: "/novedades", name: "Novedades" },
    { url: "/contacto", name: "Contacto" },
    { url: "/testimonios", name: "Testimonios" },
  ];

  const parseUserData = () => {
    if (localStorage.getItem("data")) {
      const user = JSON.parse(localStorage.getItem("data"));

      return user;
    }
  };

  const getUsername = () => {
    const userData = parseUserData();
    return userData.name;
  };

  const checkIfAdmin = () => {
    const userData = parseUserData();
    if (userData.role_id === 0) return true;
    return false;
  };

  const username = getUsername();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAdmin = checkIfAdmin();

  return (
    <Flex height="5em" boxShadow="sm">
      <Flex alignItems="center" margin="1em">
        <SomosMasLogo />
      </Flex>
      {isBackoffice ? (
        <>
          <Flex
            marginLeft="auto"
            marginRight="1em"
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            <BackofficeRoutes />
            <AuthLinks username={username} />
          </Flex>
          <HeaderMenuBtn onOpen={onOpen} />
          <BackofficeDrawer
            onClose={onClose}
            isOpen={isOpen}
            username={username}
          />
        </>
      ) : (
        <>
          <Flex
            marginLeft="auto"
            marginRight="1em"
            alignItems="center"
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            <BackofficeBtn isAdmin={isAdmin} />
            <ActivitiesMenu />
            <HeaderRoutes routes={publicRoutes} />
            <AuthLinks username={username} />
            <DonateBtn />
          </Flex>
          <HeaderMenuBtn onOpen={onOpen} />
          <HeaderDrawer
            onClose={onClose}
            isOpen={isOpen}
            routes={publicRoutes}
            username={username}
            isAdmin={isAdmin}
          />
        </>
      )}
    </Flex>
  );
};
