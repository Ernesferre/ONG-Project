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

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://ongapi.alkemy.org/api/activities/${params.id}`
      );
      setActivity(response.data.data);
      console.log(response.data.data);
    };

    getData();
  }, [params]);

  const formatDate = (date) => {
    const dateObject = new Date(date);
    const formattedDate = new Intl.DateTimeFormat("es-AR").format(dateObject);
    return formattedDate;
  };

  return (
    <>
      {activity.name === undefined ? (
        <Flex height="10em" justifyContent="center" alignItems="center">
          <Spinner size="xl" color="#5796D9" />
        </Flex>
      ) : (
        <>
          <Image
            src={activity.image}
            objectFit="cover"
            width="100%"
            height="15em"
          />
          <Container maxW="container.xl" bg="gray.200" minH="50vh">
            <Text color="gray.500" fontSize="sm" textAlign="end">
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
      )}
    </>
  );
};
