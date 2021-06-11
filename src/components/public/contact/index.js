import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { ContactData } from "./ContactData";
export const Contact = () => {
  return (
    <Container maxW="container.xl">
      <Heading>Contacto</Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        <Flex flexDir="column" minW="27em" minH="27em">
          <Heading size="lg">Contáctenos</Heading>
          <Text color="gray.300">// formulario de contacto aca //</Text>
        </Flex>
        <ContactData
          address="Perón 1525, CABA"
          cellphone="11-6011-2988"
          phone="4420-3322"
          facebook="Somos_Más"
          instagram="SomosMás"
          name="Somos Más"
        />
      </Flex>
    </Container>
  );
};
