import { Button } from "@chakra-ui/react";
import React from "react";

import { Link, useHistory } from "react-router-dom";

export const LoggedOutLinks = () => {
  let history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };
  const handleRegister = () => [history.push("/register")];
  return (
    <>
      <Link to="/login">
        <Button variant="somosMasOutline" size="sm" onClick={handleLogin}>
          Iniciar Sesión
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
