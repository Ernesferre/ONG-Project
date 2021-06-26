import { Button, Link } from "@chakra-ui/react";
import React from "react";

export const LoggedOutLinks = () => {
  return (
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
  );
};
