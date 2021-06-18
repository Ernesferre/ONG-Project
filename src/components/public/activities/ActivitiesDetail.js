import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";

export const ActivitiesDetail = () => {
  const params = useParams();
  const [activity, setActivity] = useState({});
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://ongapi.alkemy.org/api/activities/${params.id}`
        );
        if (response.data.data) {
          setActivity(response.data.data);
        }
      } catch (error) {
        setIsNotFound(true);
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  const formatDate = (date) => {
    const dateObject = new Date(date);
    const formattedDate = new Intl.DateTimeFormat("es-AR").format(dateObject);
    return formattedDate;
  };

  if (isNotFound)
    return (
      <Flex h="80vh" justifyContent="center" alignItems="center">
        <Heading as="h1" size="2xl">
          No se ha encontrado la actividad.
        </Heading>
      </Flex>
    );

  if (isLoading)
    return (
      <Flex height="10em" justifyContent="center" alignItems="center">
        <Spinner size="xl" color="#5796D9" />
      </Flex>
    );

  return (
    <>
      <Image
        src={activity.image}
        objectFit="cover"
        width="100%"
        height="20em"
      />
      <Container maxW="container.xl" minH="50vh">
        <Text color="brandBlue.300" fontWeight="700" fontSize="1rem" textAlign="end">
          Creado el: {formatDate(activity.created_at)}
        </Text>
        <Flex flexDir="column">
          <Heading color="gray.700" margin="1em">
            {activity.name}
          </Heading>
          <Box margin="0.5em">{parse(activity.description)}</Box>
        </Flex>
      </Container>
    </>
  );
};
