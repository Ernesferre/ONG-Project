import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const LCard = ({ title, image, text, url, id }) => {
  const [show, setShow] = useState(false);

  return (
    <Container
      maxW="xs"
      borderRadius="5px"
      boxShadow="lg"
      bg="gray.200"
      padding="0"
    >
      <Image
        borderRadius="5px"
        width="100%"
        objectFit="cover"
        src={image}
        fallbackSrc="https://via.placeholder.com/382x300"
      />
      <Heading size="md" textAlign="center" margin="0.5em">
        {title}
      </Heading>
      <Collapse startingHeight="4.2em" in={show}>
        <Text marginLeft="1em" marginRight="1em">
          {text}
        </Text>
      </Collapse>
      {text.length >= 200 && (
        <Text
          textAlign="end"
          marginRight="0.5em"
          color="brandBlue.300"
          _hover={{ color: "brandBlue.400", cursor: "pointer" }}
          onClick={(e) => setShow(!show)}
        >
          {!show ? "...Leer más" : "...Leer menos"}
        </Text>
      )}

      <Link textDecoration="none" to={`/${url}/${id}`}>
        <Flex justifyContent="center">
          <Button
            textDecoration="none"
            margin="0.5em"
            variant="dangerOutline"
            textTransform="uppercase"
            size="sm"
          >
            Ver más
          </Button>
        </Flex>
      </Link>
    </Container>
  );
};
