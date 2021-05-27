import { Button } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import React from "react";
import Swal from "sweetalert2";

export const MappedCategories = ({ categories }) => {
  const flexDir = useBreakpointValue({ base: "column", sm: "" });

  const handleDelete = async () => {
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
    }
  };

  return (
    <Flex flexDir="column">
      {categories.map((category, index) => (
        <Flex
          flexDir="column"
          key={index}
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
              <Text fontWeight="bold">{category.name}</Text>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize="small" color="gray.400">
                Creada el:
              </Text>
              <Text fontWeight="bold">{category.createdAt}</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Button colorScheme="blue" size="sm" variant="outline">
                Editar
              </Button>
              <Button
                size="sm"
                colorScheme="red"
                marginLeft="1em"
                onClick={() => handleDelete()}
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
