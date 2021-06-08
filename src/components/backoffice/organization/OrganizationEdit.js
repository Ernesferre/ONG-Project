import { Container, Heading } from "@chakra-ui/layout";
import React from "react";
import { OrganizationForm } from "./OrganizationForm";

export const OrganizationEdit = () => {
  return (
    <Container
      maxW="container.xl"
      bg="gray.200"
      borderRadius="0.2em"
      borderWidth="1px"
      borderColor="gray.300"
      padding="1em"
    >
      <Heading>Editar Organización</Heading>
      <OrganizationForm />
    </Container>
  );
};
