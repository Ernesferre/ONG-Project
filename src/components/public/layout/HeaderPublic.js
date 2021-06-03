import React, { useState } from "react";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

import { GiHamburgerMenu, GiHamburgerMenu as HamburgerIcon } from "react-icons/gi";
import { GrClose as CloseIcon } from "react-icons/gr";

import { NavLink as LinkRouterDom } from "react-router-dom";

const Routes = [
  { route: "/us", name: "Nosotros" },
  { route: "/activities", name: "Actividades" },
  { route: "/news", name: "Novedades" },
  { route: "/login", name: "Iniciar Sesion" },
];

export default function HeaderPublic() {

  const [display, setDisplay] = useState('none');

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"left"} >
          <HStack>
            <LinkRouterDom to="/">
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
            <IconButton
                    aria-label="Open Menu"
                    size="lg"
                    mr={2}
                    icon={<GiHamburgerMenu />}
                    display={['flex', 'flex', 'none', 'none']}
                    onClick={() => setDisplay('flex')}
                />
            </Flex>

        </Flex>


        <Flex
            w="100vw"
            bgColor="gray.100"
            zIndex={20}
            pb={10}
            pos="fixed"
            top="0"
            left="0"
            overflowY="auto"
            flexDir="column"
            display={display}
        >
            <Flex justify="flex-end">
                <IconButton
                    mt={2}
                    mr={5}
                    aria-label="CloseMenu"
                    size="lg"
                    icon={
                        <CloseIcon />
                    }
                    onClick={() => setDisplay('none')}
                />
            </Flex>
            <Flex
                flexDir="column"
                align="center"
            >
                {Routes.map((link) => (
                <NavLink
                    key={link.name}
                    route={link.route}
                    name={link.name}
                ></NavLink>
                ))}
            </Flex>
        </Flex>

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