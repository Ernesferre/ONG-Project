import { Button } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Link } from "react-router-dom";
import React from "react";
import Swal from "sweetalert2";


export const MappedUsers = ({ users, handleUpdate }) => {
  const flexDir = useBreakpointValue({ base: "column", sm: "" });

  const handleDelete =  () => {
  
        console.log("delete")
   
    
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
                 
                }}>
                <Button colorScheme="blue" size="sm" variant="outline">
                Editar
                </Button>
              </Link>
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
