import { Button } from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";
import { SET_LOGOUT } from "../../../features/authReducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const LoggedInLinks = ({ username }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const handleLogout = () => {
    dispatch(
      SET_LOGOUT({
        name: null,
        email: null,
        role_id: null,
        loggedIn: false,
      })
    );
    localStorage.removeItem("token");
    localStorage.removeItem("data");
    history.push("/login");
  };

  return (
    <>
      <Button
        variant="somosMasOutline"
        borderWidth="0"
        color="brandBlue.400"
        cursor="default"
        _hover={{ color: "brandBlue.300" }}
        _focus={{ borderRadius: "0" }}
        leftIcon={<FaUser />}
        textTransform="capitalize"
      >
        {username}
      </Button>
      <Button variant="dangerOutline" marginLeft="1em" onClick={handleLogout}>
        Cerrar Sesión
      </Button>
    </>
  );
};
