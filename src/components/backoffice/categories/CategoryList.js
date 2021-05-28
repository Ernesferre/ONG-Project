import { Button } from "@chakra-ui/button";
import { Container, Flex, Heading } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MappedCategories } from "./MappedCategories";
import { getCategories } from './CategoriesService';

export const CategoryList = () => {

  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState()
  const [update, setUpdate] = useState(false)
  const [lastID, setLastID] = useState()

  useEffect(()=>{
    getCategories()
    .then(res => {
      console.log(res.data)
      setCategories(res.data)
      setLastID(res.data.sort((a,b)=> b.id - a.id)[0].id)
      setLoading(false)
    })
  }, [update])

  const handleUpdate = () => {
    setUpdate(update => !update)
  }

  if (loading) return <Heading textAlign="center">Loagind...</Heading>
  return (
    <Container maxW="container.xl">
      <Flex flexDir="column">
        <Heading textAlign="center">Categorías</Heading>
        <Flex>
          <Link to={{
              pathname: "/backoffice/categories/create",
              state: {lastID:lastID},
          }}>
            <Button colorScheme="green">+ Nueva Categoría</Button>
          </Link>
        </Flex>
        <MappedCategories categories={categories} handleUpdate={handleUpdate} />
      </Flex>
    </Container>
  );
};
