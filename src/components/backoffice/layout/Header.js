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

import { GiHamburgerMenu as HamburgerIcon } from "react-icons/gi";
import { GrClose as CloseIcon } from "react-icons/gr";

import { NavLink as LinkRouterDom } from "react-router-dom";

const Routes = [
  { route: "/backoffice/categories", name: "Categorías" },
  { route: "/backoffice/news", name: "Novedades" },
  { route: "/backoffice/activities", name: "Actividades" },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Button bg="#FAFA88" mx="10px" cursor={"pointer"}>
              Cerrar sesión
            </Button>
            <IconButton
              size={"md"}
              icon={
                isOpen ? (
                  <CloseIcon style={{ display: "inline" }} />
                ) : (
                  <HamburgerIcon style={{ display: "inline" }} />
                )
              }
              aria-label={"Open Menu"}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Routes.map((link) => (
                <NavLink key={link.name} route={link.route} name={link.name} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export const NavLink = ({ name, route }) => {
  return (
    <LinkRouterDom
      to={route}
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
