import { Container, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { ContactData } from "./ContactData";
import ContactForm from "./ContactForm";

export const Contact = () => {
  return (
    <Container maxW="container.xl">
      <Heading>Contacto</Heading>
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        <Flex flexDir="column" minH="27em">
          <ContactForm />
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
