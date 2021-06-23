import { Container, Flex, Box, Heading } from "@chakra-ui/layout";
import React from "react";
import { ContactData } from "./ContactData";
import ContactForm from "./ContactForm";
import { useSelector } from "react-redux";
import GoogleMap from "./GoogleMap";

export const Contact = () => {
  // Se obtienen los datos de contacto a traves del estado almacenado en Redux
  const data_contact = useSelector(
    (state) => state.organization.organizationData
  );

  return (
    <Container maxW="container.xl" mt={10}>
      <Heading>Contacto</Heading>
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        <ContactForm />
        <ContactData
          address={data_contact.address}
          cellphone={data_contact.cellphone}
          phone={data_contact.phone}
          facebook="Somos_Más"
          instagram="SomosMás"
          name="Somos Más"
        />

        <GoogleMap />
      </Flex>
    </Container>
  );
};
