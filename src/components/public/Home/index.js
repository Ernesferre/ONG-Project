import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Box m={{ base: "1rem", md: "2rem" }}>
        <Box>
          <Heading as="h1" size="2xl">
            Somos Más
          </Heading>
          <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
            Mediante nuestros programas educativos, buscamos incrementar la
            capacidad intelectual, moral y afectiva de las personas de acuerdo con
            la cultura y las normas de convivencia de la sociedad a la que
            pertenecen.
          </Text>
        </Box>
        <Box h="400px">
            Slides
        </Box>
        <Box h="400px">
            Novedades
        </Box>
        <Box h="400px">
            Testimonios
        </Box>
        
      </Box>
    </>
  );
};

export default Home;
