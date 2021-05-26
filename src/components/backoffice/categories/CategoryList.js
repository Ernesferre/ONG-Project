import { Button } from "@chakra-ui/button";
import { Container, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import { MappedCategories } from "./MappedCategories";

export const CategoryList = () => {
  const fakeData = [
    { name: "category1", createdAt: "25/5/2021" },
    { name: "category2", createdAt: "25/5/2021" },
    { name: "category4", createdAt: "25/5/2021" },
    { name: "category5", createdAt: "25/5/2021" },
    { name: "category6", createdAt: "25/5/2021" },
    { name: "category7", createdAt: "25/5/2021" },
  ];

  return (
    <Container maxW="container.xl">
      <Flex flexDir="column">
        <Heading textAlign="center">Categorías</Heading>
        <Flex>
          <Link to="/backoffice/categorias/create">
            <Button colorScheme="green">+ Nueva Categoría</Button>
          </Link>
        </Flex>
        <MappedCategories categories={fakeData} />
      </Flex>
    </Container>
  );
};
