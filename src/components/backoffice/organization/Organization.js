import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const Organization = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const handleError = () => {
    Swal.fire({
      title: "Error",
      text: "Hubo un error",
      icon: "error",
      confirmButtonText: "OK",
    });
  };
  useEffect(() => {
    const getOrganizationData = async () => {
      try {
        const response = await axios.get(
          "http://ongapi.alkemy.org/api/organization"
        );

        setData(response.data.data[0]);
        setLoading(false);
      } catch (error) {
        handleError();
      }
    };
    getOrganizationData();
  }, []);
  return (
    <Container maxW="container.xl">
      {loading ? (
        <Flex height="10em" justifyContent="center" alignItems="center">
          <Spinner size="xl" color="#5796D9" />
        </Flex>
      ) : (
        <Flex flexDir="column" bg="gray.200" padding="1em" borderRadius="0.2em">
          <Heading>Organización</Heading>
          <Flex flexDir="column " margin="1em">
            <Text color="gray.500" fontWeight="bold">
              Nombre:
            </Text>
            <Heading size="md">{data.name}</Heading>
          </Flex>
          <Image src={data.logo} boxSize="15em" alignSelf="center" />
          <Flex flexDir="column" margin="1em">
            <Text color="gray.500" fontWeight="bold">
              Descripción:
            </Text>
            <Text> {data.short_description}</Text>
          </Flex>
          <Flex justifyContent="center">
            <Link to="/backoffice/organization/edit">
              <Button bg="#FAFA88" _hover={{ bg: "gray.300" }}>
                Editar
              </Button>
            </Link>
          </Flex>
        </Flex>
      )}
    </Container>
  );
};
