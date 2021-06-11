import Icon from "@chakra-ui/icon";
import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import { HiLocationMarker } from "react-icons/hi";
import ContactForm from "./ContactForm";

export const Contact = () => {
  return (
    <Container maxW="container.xl">
      <Heading>Contacto</Heading>
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        <Flex flexDir="column" minH="27em">
          <ContactForm />
        </Flex>
        <Flex flexDir="column" margin="1em">
          <Text color="gray.400">Información de contacto</Text>
          <Heading size="md">Somos Más</Heading>
          <Flex alignItems="center" marginTop="1em">
            <Icon color="brandBlue.100" as={FaPhoneAlt} marginRight="1em" />
            <Text fontWeight="bold">4420-3322</Text>
          </Flex>
          <Flex alignItems="center" marginTop="1em">
            <Icon
              fontSize="1em"
              color="brandBlue.100"
              as={FcPhoneAndroid}
              marginRight="1em"
            />
            <Text fontWeight="bold">11-6011-2988</Text>
          </Flex>
          <Flex alignItems="center" marginTop="1em">
            <Icon
              fontSize="1em"
              color="brandBlue.100"
              as={HiLocationMarker}
              marginRight="1em"
            />
            <Text fontWeight="bold">Perón 1525, CABA</Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
