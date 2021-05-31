import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const Organization = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const handleError = () => {
    Swal.fire({
      title: "Error",
      text: "Hubo un error",
      icon: "error",
      confirmButtonText: "Ok",
    });
  };
  useEffect(() => {
    const getOrganizationData = async () => {
      try {
        const response = await axios.get(
          "http://ongapi.alkemy.org/api/organization"
        );
        setData(response.data.data[0]);
        console.log(data);
        setLoading(false);
      } catch (error) {
        handleError();
      }
    };
    getOrganizationData();
  }, [data]);
  return (
    <Container maxW="container.xl">
      {loading ? (
        <Spinner size="lg" colorScheme="blue" />
      ) : (
        <Flex flexDir="column" bg="gray.200" padding="1em" borderRadius="0.2em">
          <Heading>Organización</Heading>
          <Text>Nombre: {data.name}</Text>
          <Image src={data.logo} boxSize="15em" alignSelf="center" />
          <Text>Descripción: {data.short_description}</Text>
          <Flex justifyContent="center">
            <Button colorScheme="yellow" bg="#FAFA88">
              Editar
            </Button>
          </Flex>
        </Flex>
      )}
    </Container>
  );
};
