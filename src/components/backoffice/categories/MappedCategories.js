import { Button } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Link } from "react-router-dom";
import React from "react";
import Swal from "sweetalert2";
import { deleteCategory } from './CategoriesService';

export const MappedCategories = ({ categories, handleUpdate }) => {
  const flexDir = useBreakpointValue({ base: "column", sm: "" });

  const handleDelete = async (id) => {
    const confirmation = await Swal.fire({
      title: "Confirmación",
      text: "¿Quieres borrar esta categoría?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Borrar",
      confirmButtonColor: "#DB5752",
      cancelButtonText: "Cancelar",
    });
    if (confirmation.isConfirmed === true) {
      // DELETE FUNCTION HERE
      deleteCategory(id)
      .then(res => {
        handleUpdate()
      })
    }
  };

  return (
    <Flex flexDir="column">
      {categories.map((category) => (
        <Flex
          flexDir="column"
          key={category.id}
          margin="1em"
          bg="gray.200"
          padding="1em"
          borderRadius="0.1em"
        >
          <Flex justifyContent="space-between" flexDir={flexDir}>
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize="small" color="gray.400">
                Categoría:
              </Text>
              <Text fontWeight="bold">{`\u00A0\u00A0${category.name.charAt(0).toUpperCase() + category.name.slice(1)}`}</Text>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize="small" color="gray.400">
                Creada el:
              </Text>
              <Text fontWeight="bold">{`\u00A0\u00A0${category.created_at.slice(0, 10)}`}</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Link 
                  to={{
                      pathname: "/backoffice/categories/edit",
                      state: {category: category},
                  }}>
                <Button colorScheme="blue" size="sm" variant="outline">
                Editar
                </Button>
              </Link>
              <Button
                size="sm"
                colorScheme="red"
                marginLeft="1em"
                onClick={() => handleDelete(category.id)}
              >
                Borrar
              </Button>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
