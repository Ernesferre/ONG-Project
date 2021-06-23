import React from "react";
import { Heading, Text, Container, Flex, Button, Link } from "@chakra-ui/react";
import Slides from "./slides/HomeSlides";
import { PublicActivities } from "../activities/PublicActivities";
import { PublicNews } from "../News/PublicNews";
import { FaChevronRight } from "react-icons/fa";

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
      <PublicActivities getOnlyLatest={true} />
      <Flex justify="flex-end" margin="1em">
        <Link to="/actividades">
          <Button variant="somosMas" rightIcon={<FaChevronRight />}>
            Ver más actividades
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default Home;
