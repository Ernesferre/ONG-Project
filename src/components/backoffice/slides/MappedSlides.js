import React, { useState } from "react";
import { Container, Flex, Heading, Image, Button } from "@chakra-ui/react";

export const MappedSlides = ({
  slideshow,
  prev,
  next,
  LeftArrow,
  RightArrow,
}) => {
  const fakeData = [
    { title: "title1", img: "", order: 1 },
    { title: "title2", img: "", order: 2 },
    { title: "title3", img: "", order: 3 },
    { title: "title4", img: "", order: 4 },
    { title: "title5", img: "", order: 5 },
    { title: "title6", img: "", order: 6 },
    { title: "title7", img: "", order: 7 },
    { title: "title8", img: "", order: 8 },
    { title: "title9", img: "", order: 9 },
    { title: "title10", img: "", order: 10 },
  ];

  const [saveData, setSaveData] = useState(fakeData);

  return (
    <Container>
      <Flex color="black" wrap="nowrap" ref={slideshow}>
        {saveData?.map((item, idx) => (
          <Flex
            key={idx}
            align="center"
            minW="100%"
            direction="column"
            overflow="hidden"
            pos="relative"
            zIndex="10"
          >
            <Heading as="h3">{item.title}</Heading>
            <Image h="22rem" w="90%" border="1px solid black" src="" alt="" />

            <Button
              cursor="pointer"
              mr="1rem"
              border="none"
              bg="blue"
              color="white"
            >
              Editar
            </Button>
            <Button cursor="pointer" border="none" bg="red">
              Eliminar
            </Button>
          </Flex>
        ))}
      </Flex>
      <Flex justify="space-between" pos="relative" bottom="14rem" margin="18px">
        <Button
          cursor="pointer"
          zIndex="10000"
          border="none"
          bg="white"
          onClick={prev}
        >
          <LeftArrow />
        </Button>
        <Button
          cursor="pointer"
          zIndex="10000"
          border="none"
          bg="white"
          onClick={next}
        >
          <RightArrow />
        </Button>
      </Flex>
    </Container>
  );
};
