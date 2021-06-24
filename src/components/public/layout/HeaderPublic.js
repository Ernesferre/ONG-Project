import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose as CloseIcon } from "react-icons/gr";
import { NavLink as LinkRouterDom, useHistory } from "react-router-dom";
import "../../../scss/app.scss";
import ItemCategories from "./ItemCategories";
import { SomosMasLogo } from "../../../assets/SomosMasLogo";
import { ActivitiesMenu } from "./ActivitiesMenu";

const Routes = [
  { route: "/us", name: "Nosotros" },
  { route: "/novedades", name: "Novedades" },
  { route: "/contacto", name: "Contacto" },
  { route: "/login", name: "Iniciar Sesion" },
];

export default function HeaderPublic() {
  const [display, setDisplay] = useState("none");

  // PARA USAR INFO DESDE REDUX
  // const logo = useSelector((state) => state.organization.organizationData.logo);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"left"}>
          <HStack>
            <SomosMasLogo />
          </HStack>
          <HStack
            as={"nav"}
            ml="auto"
            spacing={10}
            display={{ base: "none", md: "flex" }}
          >
            <ActivitiesMenu />
            {Routes.map((link) => (
              <NavLink key={link.name} route={link.route} name={link.name} />
            ))}

            {/* Donations */}
            <DonateButton />
          </HStack>

          <Flex alignItems={"center"} ml={{ base: "auto", md: "2rem" }}>
            <IconButton
              aria-label="Open Menu"
              size="lg"
              mr={2}
              icon={<GiHamburgerMenu />}
              display={["flex", "flex", "none", "none"]}
              onClick={() => setDisplay("flex")}
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
              icon={<CloseIcon />}
              onClick={() => setDisplay("none")}
            />
          </Flex>
          <Flex flexDir="column" align="center">
            {Routes.map((link) => (
              <NavLink
                key={link.name}
                route={link.route}
                name={link.name}
              ></NavLink>
            ))}
            {/* Donations */}
            <DonateButton />
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
      {name === "Actividades" && <ItemCategories />}
    </LinkRouterDom>
  );
};

export const DonateButton = () => {
  const router = useHistory();
  function handleClick() {
    router.push("/donar");
  }
  return (
    <Button
      mt="1rem"
      bg="white"
      _hover={{ backgroundColor: "#DB5752", color: "white" }}
      border="solid 3px #DB5752"
      color="#DB5752"
      borderRadius="4px"
      onClick={handleClick}
    >
      Donar
    </Button>
  );
};
