import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

export const LCard = ({ title, image, text, url, id, postedOn }) => {
  const [show, setShow] = useState(false);

  const formatDate = (dateToParse) => {
    const date = new Date(dateToParse);
    const formattedDate = new Intl.DateTimeFormat("es-AR").format(date);
    return formattedDate;
  };

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
      maxW="sm"
      borderRadius="3px"
      boxShadow="lg"
      padding="0"
      position="relative"
      margin="1em"
    >
      <Image
        borderTopRadius="3px"
        width="100%"
        maxH="13em"
        objectFit="cover"
        src={image}
        fallbackSrc="https://via.placeholder.com/382x300"
      />
      {postedOn && (
        <Text
          textAlign="end"
          fontSize="small"
          color="brandBlue.200"
          marginRight="0.3em"
        >
          {formatDate(postedOn)}
        </Text>
      )}

      <Heading
        size="md"
        textAlign="center"
        color="gray.700"
        fontWeight="semibold"
        marginBottom="0.5em"
      >
        {parse(title)}
      </Heading>
      <Flex flexDir="column" justifyContent="space-between">
        <Collapse startingHeight="4.2em" in={show}>
          <Box marginLeft="1em" marginRight="1em">
            {parse(text)}
          </Box>
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
          <Flex justifyContent="center" marginTop="3em">
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
