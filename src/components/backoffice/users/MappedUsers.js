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
        console.log("delete")
        handleUpdate()
    }
  };

  return (
    <Flex flexDir="column">
      {users.map((user) => (
        <Flex
          flexDir="column"
          key={user.id}
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
              <Text fontWeight="bold">{`\u00A0\u00A0${user.name.charAt(0).toUpperCase() + user.name.slice(1)}`}</Text>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize="small" color="gray.400">
                Email:
              </Text>
              <Text fontWeight="bold">{`\u00A0\u00A0${user.email.charAt(0).toUpperCase() + user.email.slice(1)}`}</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Link 
                  to={{
                    pathname: "/backoffice/users/edit",
                    state: {user: user},
                 
                }}>
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
