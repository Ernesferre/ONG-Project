import React from "react";
import { Heading, Text, Container, Flex } from "@chakra-ui/react";
import Slides from "./slides/HomeSlides";
import { PublicActivities } from "../activities/PublicActivities";
import { PublicNews } from "../News/PublicNews";

const Home = () => {
  return (
    <>
      <Slides />
      <Container maxW="container.xl" minH="40vh">
        <Flex
          marginTop="3em"
          height="100%"
          padding="2em"
          borderRadius="3px"
          flexDir="column"
        >
          <Heading fontSize="3em">Somos Más</Heading>
          <Text fontWeight="semibold" fontSize="lg" marginTop="1em">
            Mediante nuestros programas educativos, buscamos incrementar la
            capacidad intelectual, moral y afectiva de las personas de acuerdo
            con la cultura y las normas de convivencia de la sociedad a la que
            pertenecen.
          </Text>
        </Flex>
      </Container>
      <PublicNews />
      <PublicActivities />
    </>
  );
};

export default Home;
