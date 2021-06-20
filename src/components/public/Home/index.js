import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";
import Slides from "./slides/HomeSlides";
import { PublicActivities } from "../activities/PublicActivities";
import { PublicNews } from "../News/PublicNews";

const Home = () => {
  return (
    <>
      <Box>
        <Box>
          <Slides />
        </Box>
        <Box>
          <Heading as="h1" size="2xl">
            Somos Más
          </Heading>
          <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
            Mediante nuestros programas educativos, buscamos incrementar la
            capacidad intelectual, moral y afectiva de las personas de acuerdo
            con la cultura y las normas de convivencia de la sociedad a la que
            pertenecen.
          </Text>
        </Box>
        <Box h="400px">Slides</Box>
        <Box>
          <PublicNews />
        </Box>
        <Box h="400px">Testimonios</Box>
        <Box>
          <PublicActivities />
        </Box>
      </Box>
    </>
  );
};

export default Home;
