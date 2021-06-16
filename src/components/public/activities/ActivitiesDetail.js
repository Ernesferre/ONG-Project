import React, { useEffect, useState } from "react";
import { Container, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ActivitiesDetail = () => {
  const id = useParams();
  const [activity, setActivity] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`http://ongapi.alkemy.org/api/${id}`);
      setActivity(response.data.data);
    };

    getData();
  }, [id]);

  return (
    <Container maxW="container.xl" bg="gray.200">
      <Flex></Flex>
    </Container>
  );
};
