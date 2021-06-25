import { Button, Flex } from "@chakra-ui/react";
import React from "react";

export const AuthLinks = ({ isLogged }) => {
  return (
    <Flex alignItems="center">
      <Button variant="somosMasOutline" color="brandBlue.400" size="sm">
        Login
      </Button>
      <Button
        variant="somosMas"
        size="sm"
        color="brandBlue.400"
        marginLeft="1em"
      >
        Registrarse
      </Button>
    </Flex>
  );
};
