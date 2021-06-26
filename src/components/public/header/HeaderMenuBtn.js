import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import React from "react";

export const HeaderMenuBtn = ({ onOpen }) => {
  return (
    <Flex
      display={{ base: "flex", md: "flex", lg: "none" }}
      alignItems="center"
      marginLeft="auto"
      marginRight="2em"
    >
      <IconButton
        borderRadius="5px"
        icon={<HamburgerIcon />}
        aria-label="Open Menu"
        fontSize="2xl"
        display={["flex", "flex", "flex", "none"]}
        onClick={onOpen}
      />
    </Flex>
  );
};
