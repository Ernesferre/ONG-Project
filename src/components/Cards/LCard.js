import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const LCard = ({ title, image, text, url, id }) => {
  const [show, setShow] = useState(false);

  const returnConditionalUrl = (url, id) => {
    if (url && id) {
      return `/${url}/${id}`;
    } else if (id === undefined) {
      return `/${url}`;
    } else if (url === undefined) {
      return `/${id}`;
    }
  };

  return (
    <Container
      maxW="xs"
      borderRadius="3px"
      boxShadow="lg"
      bg="gray.200"
      padding="0"
      position="relative"
      margin="1em"
      borderColor="brandBlue.50"
      borderWidth="1px"
    >
      <Image
        borderTopRadius="3px"
        width="100%"
        objectFit="cover"
        src={image}
        fallbackSrc="https://via.placeholder.com/382x300"
      />
      <Heading
        size="md"
        textAlign="center"
        margin="0.5em"
        color="gray.700"
        fontWeight="semibold"
      >
        {title}
      </Heading>
      <Flex flexDir="column" justifyContent="space-between">
        <Collapse startingHeight="4.2em" in={show}>
          <Text marginLeft="1em" marginRight="1em">
            {text}
          </Text>
        </Collapse>
        {text.length >= 150 && (
          <Text
            textAlign="end"
            marginRight="0.5em"
            color="brandBlue.300"
            fontSize="sm"
            _hover={{ color: "brandBlue.400", cursor: "pointer" }}
            onClick={(e) => setShow(!show)}
          >
            {!show ? "...Leer más" : "...Leer menos"}
          </Text>
        )}
        <Link textDecoration="none" to={returnConditionalUrl(url, id)}>
          <Flex justifyContent="center" marginTop="2em">
            <Button
              textDecoration="none"
              margin="0.5em"
              variant="dangerOutline"
              textTransform="uppercase"
              size="sm"
              position="absolute"
              bottom="0em"
            >
              ver más
            </Button>
          </Flex>
        </Link>
      </Flex>
    </Container>
  );
};
