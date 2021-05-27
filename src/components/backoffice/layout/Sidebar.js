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

import { Link } from "react-router-dom";

const Sections = [
  {
    name: "Categorías",
    routes: [
      {
        route: "/",
        name: "Ver categorías",
      },
      {
        route: "/",
        name: "Crear actividad",
      },
      {
        route: "/",
        name: "Editar actividad",
      },
    ],
  },
  {
    name: "Actividades",
    routes: [
      {
        route: "/",
        name: "Ver actividades",
      },
      {
        route: "/",
        name: "Crear actividad",
      },
      {
        route: "/",
        name: "Editar actividad",
      },
    ],
  },
];

const Sidebar = () => {
  const [open, setopen] = React.useState(false);
  return (
    <>
      <button
        onClick={() => {
          setopen(!open);
        }}
      >
        Abrir sidebar
      </button>

      <Box
        maxW="240px"
        py="2rem"
        height="95vh"
        overflowY="auto"
        borderRight="solid thin lightgray"
        bg="white"
        zIndex={100}
        position="relative"
        transition="left 1s ease"
        left={open ? "0" : "-100%"}
      >
        <Accordion allowToggle allowMultiple>
          <Box m=".6rem">
            <Text fontSize="3xl"  borderBottom="solid 0 lightgray">
              Somos Más
            </Text>
            <img src="/logo192.png" style={{margin:"auto"}} width="75px" alt="Somos más logo" />
          </Box>
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
                  <Link key={route.name} className="nav-link" to={route.route}>
                    {route.name}
                  </Link>
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
