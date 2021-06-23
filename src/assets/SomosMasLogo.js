import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import logo from "./brand-logo.svg";

export const SomosMasLogo = ({ maxW, fontSize }) => {
  return (
    <Flex flexDir="column" maxW={maxW}>
      <Image src={logo} />
      <Heading fontSize={fontSize} fontWeight="semiBold">
        Somos Más
      </Heading>
    </Flex>
  );
};
