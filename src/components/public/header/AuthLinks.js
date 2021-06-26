import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export const AuthLinks = ({ username }) => {
  return (
    <Flex alignItems="center">
      {username ? (
        <Button
          variant="somosMasOutline"
          color="brandBlue.400"
          _hover={{ color: "brandBlue.300" }}
          leftIcon={<FaUser />}
        >
          {username}
        </Button>
      ) : (
        <>
          <Link to="/login">
            <Button variant="somosMasOutline" color="brandBlue.400" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button
              variant="somosMas"
              size="sm"
              color="brandBlue.400"
              marginLeft="1em"
            >
              Registrarse
            </Button>
          </Link>
        </>
      )}
    </Flex>
  );
};
