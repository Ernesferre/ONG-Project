import { Button } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";

export const DonateBtn = () => {
  const router = useHistory();
  function handleClick() {
    router.push("/donar");
  }
  return (
    <Button
      mt="1rem"
      bg="white"
      _hover={{ backgroundColor: "#DB5752", color: "white" }}
      border="solid 3px #DB5752"
      color="#DB5752"
      borderRadius="4px"
      onClick={handleClick}
    >
      Donar
    </Button>
  );
};
