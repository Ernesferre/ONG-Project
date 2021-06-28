import { Button, Link } from "@chakra-ui/react";
import React from "react";

import { useHistory } from "react-router-dom";

export const LoggedOutLinks = () => {
  let history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };
  const handleRegister = () => [history.push("/register")];
  return (
    <>
      <Link to="/login">
        <Button
          variant="somosMasOutline"
          color="brandBlue.400"
          size="sm"
          onClick={handleLogin}
        >
          Login
        </Button>
      </Link>
      <Link to="/register">
        <Button
          variant="somosMas"
          size="sm"
          color="brandBlue.400"
          marginLeft="1em"
          onClick={handleRegister}
        >
          Registrarse
        </Button>
      </Link>
    </>
  );
};
