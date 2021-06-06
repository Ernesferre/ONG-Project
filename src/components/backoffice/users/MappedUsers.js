import { Button } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Link } from "react-router-dom";
import React from "react";
import Swal from "sweetalert2";

export const MappedUsers = ({ users, handleUpdate }) => {
  const flexDir = useBreakpointValue({ base: "column", sm: "" });
  const handleDelete = async (id) => {
    const confirmation = await Swal.fire({
      title: "Confirmación",
      text: "¿Quieres borrar este usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Borrar",
      confirmButtonColor: "#DB5752",
      cancelButtonText: "Cancelar",
    });
    if (confirmation.isConfirmed === true) {
      // DELETE FUNCTION HERE
      console.log("delete");
      handleUpdate();
    }
  };

  return (
    <Flex flexDir="column">
      {users.map((user, index) => (
        <Flex
          key={index}
          flexDir="column"
          margin="1em"
          bg="gray.200"
          padding="1em"
          borderRadius="0.1em"
        >
          <Flex justifyContent="space-between" flexDir={flexDir}>
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize="small" color="gray.400">
                Usuario:
              </Text>
              <Text
                fontWeight="bold"
                textTransform="capitalize"
                marginLeft="0.3em"
              >
                {user.name}
              </Text>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize="small" color="gray.400">
                Email:
              </Text>
              <Text fontWeight="bold" marginLeft="0.3em">
                {user.email}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Link
                to={{
                  pathname: "/backoffice/users/edit",
                  state: { user: user },
                }}
              >
                <Button colorScheme="blue" size="sm" variant="outline">
                  Editar
                </Button>
              </Link>
              <Button
                size="sm"
                colorScheme="red"
                marginLeft="1em"
                onClick={() => handleDelete(user.id)}
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
