import { Button } from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";

export const LoggedInLinks = ({ username }) => {
  return (
    <>
      <Button
        variant="somosMasOutline"
        color="brandBlue.400"
        _hover={{ color: "brandBlue.300" }}
        leftIcon={<FaUser />}
      >
        {username}
      </Button>
      <Button variant="dangerOutline" color="brandRed.400" marginLeft="1em">
        Logout
      </Button>
    </>
  );
};
