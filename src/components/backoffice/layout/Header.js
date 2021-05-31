import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

import { GiHamburgerMenu, GiHamburgerMenu as HamburgerIcon } from "react-icons/gi";
import { GrClose as CloseIcon } from "react-icons/gr";

import { NavLink as LinkRouterDom } from "react-router-dom";
import Sidebar from "./Sidebar";

const Routes = [
  { route: "/backoffice/categories", name: "Categorías" },
  { route: "/backoffice/news", name: "Novedades" },
  { route: "/backoffice/activities", name: "Actividades" },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [open, setopen] = React.useState(false);

  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push("/login")
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"left"}>
          <HStack>
            <LinkRouterDom to="/backoffice">
              <img src="/brand-logo.svg" width="120px" alt="Somos más logo" />
            </LinkRouterDom>
          </HStack>
          <HStack
            as={"nav"}
            ml="auto"
            spacing={10}
            display={{ base: "none", md: "flex" }}
          >
            {Routes.map((link) => (
              <NavLink
                key={link.name}
                route={link.route}
                name={link.name}
              ></NavLink>
            ))}
          </HStack>

          <Flex alignItems={"center"} ml={{ base: "auto", md: "2rem" }}>
            <Button bg="#FAFA88" mx="10px" cursor={"pointer"} onClick={handleLogout}>
              Cerrar sesión
            </Button>

            <IconButton
              onClick={() => {
              setopen(!open);
              }}
              style={{ padding: ".5rem" }}
              icon= {<GiHamburgerMenu />}
            >
            </IconButton>

            {
              open ? 
              ( <Sidebar /> ) : null
            }  
             
          </Flex>
        </Flex>

        {isOpen ? 
          (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Routes.map((link) => (
                <NavLink key={link.name} route={link.route} name={link.name} />
                ))}
              </Stack>
            </Box>
          ) :
           null}
      </Box>
    </>
  );
}

export const NavLink = ({ name, route }) => {
  return (
    <LinkRouterDom
      to={route}
      exact
      activeStyle={{
        fontWeight: "bold",
        color: "#db5752",
      }}
      className="nav-link"
    >
      {name}
    </LinkRouterDom>
  );
};
