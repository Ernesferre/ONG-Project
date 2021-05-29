import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";

import { useHistory } from "react-router-dom";
import { NavLink } from "./Header";

const Sections = [
  {
    name: "Categoríass",
    routes: [
      {
        route: "/backoffice/categories",
        name: "Categorías",
      },
      {
        route: "/backoffice/categories/create",
        name: "Crear categorías",
      },
      {
        route: "/backoffice/categories/edit",
        name: "Editar categorías",
      },
    ],
  },
  {
    name: "Novedades",
    routes: [
      {
        route: "/backoffice/news",
        name: "Novedades",
      },
      {
        route: "/backoffice/news/create",
        name: "Crear novedad",
      },
      {
        route: "/backoffice/news/edit",
        name: "Editar novedad",
      },
    ],
  },
  {
    name: "Actividades",
    routes: [
      {
        route: "/backoffice/activities",
        name: "Actividades",
      },
      {
        route: "/backoffice/activities/create",
        name: "Crear actividad",
      },
      {
        route: "/backoffice/activities/edit",
        name: "Editar actividad",
      },
    ],
  },
];

const Sidebar = () => {
  const router = useHistory()
  // const [open, setopen] = React.useState(false);


  return (
    <>
      <Box
        w="250px"
        py="2rem"
        height="100vh"
        overflowY="auto"
        borderRight="solid thin lightgray"
        bg="white"
        zIndex={100}
        position="fixed"
        transition="left 1s ease"
        left={"0"}
        top="0"
      >
        <Accordion allowToggle allowMultiple>
          <Box m=".6rem" onClick={()=>{router.push("/backoffice")}} cursor="pointer">
            <img
              src="/brand-logo.svg"
              style={{ margin: "auto" }}
              width="150px"
              alt="Somos más logo"
            />
            <Text fontSize="3xl" borderBottom="solid 0 lightgray">
              Somos Más
            </Text>
          </Box>

          {/* This section shows the backoffice navigation links */}
          {Sections.map((section) => (
            <AccordionItem key={section.name}>
              <AccordionButton bg="gray.100" _hover={{ background: "#9AC9FB" }}>
                <Box flex="1" textAlign="left">
                  {section.name}
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel
                pb={4}
                pl="2rem"
                display="flex"
                textAlign="left"
                flexDirection="column"
              >
                {section.routes.map((route) => (
                  <NavLink
                    key={route.name}
                    className="nav-link"
                    name={route.name}
                    route={route.route}
                  />
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </>
  );
};

export default Sidebar;
