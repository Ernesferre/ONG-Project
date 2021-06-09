import Icon from "@chakra-ui/icon";
import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import { HiLocationMarker } from "react-icons/hi";
export const Contact = () => {
  return (
    <Container maxW="container.xl">
      <Heading>Contacto</Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        <Flex flexDir="column" minW="27em" minH="27em">
          <Heading size="lg">Contáctenos</Heading>
          <Text color="gray.300">// formulario de contacto aca //</Text>
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
