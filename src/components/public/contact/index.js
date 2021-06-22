import { Container, Flex, Box, Heading } from "@chakra-ui/layout";
import React from "react";
import { ContactData } from "./ContactData";
import ContactForm from "./ContactForm";
import { useSelector } from "react-redux";
import GoogleMap from './GoogleMap'

export const Contact = () => {
  // Se obtienen los datos de contacto a traves del estado almacenado en Redux
  const data_contact = useSelector(
    (state) => state.organization.organizationData
  );
  console.log(data_contact);

  return (
    <Container maxW="container.xl">
      <Heading>Contacto</Heading>
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        <Flex flexDir="column" minH="27em">
          <ContactForm />
        </Flex>
        <ContactData
          address={data_contact.address}
          cellphone={data_contact.cellphone}
          phone={data_contact.phone}
          facebook="Somos_Más"
          instagram="SomosMás"
          name="Somos Más"
        />

        <GoogleMap/>
      </Flex>
    </Container>
  );
};
