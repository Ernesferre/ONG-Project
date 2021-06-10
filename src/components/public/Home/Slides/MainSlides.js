import React, { useState } from "react";
import { Box, Image, IconButton } from "@chakra-ui/react";
import {
  IoIosArrowForward as RightIcon,
  IoIosArrowBack as LeftIcon,
} from "react-icons/io";

const MainSlides = () => {
  const [position, setPosition] = useState(0);
  const images = [
    "https://sm.ign.com/t/ign_es/news/l/loki-confi/loki-confirmed-to-be-gender-fluid_ur1w.h960.jpg",
    "https://phantom-marca.unidadeditorial.es/456c64c083e34bd2601f7bb200f3447b/resize/1320/f/jpg/assets/multimedia/imagenes/2021/06/07/16230600360752.jpg",
    "https://sm.ign.com/t/ign_es/news/l/loki-confi/loki-confirmed-to-be-gender-fluid_ur1w.h960.jpg",
  ];

  function right() {
    if (position < 100 * (images.length - 1)) setPosition((p) => p + 100);
    else setPosition(0);
  }
  function left() {
    if (position !== 0) setPosition((p) => p - 100);
    else setPosition(100 * (images.length - 1));
  }

  return (
    <Box w="100%" position="relative">
      <Box w="100%" h="60vh" display="flex" overflow="hidden">
        {images.map((el, i) => (
          <Image
            key={i}
            src={el}
            minW="100vw"
            objectFit="cover"
            transition="transform .75s"
            transform={`translateX(-${position}%)`}
          />
        ))}
      </Box>
      <MyArrowButton top="0" left="0" onClick={left}>
        <LeftIcon size="4rem" color="#DB5752" />
      </MyArrowButton>
      <MyArrowButton top="0" right="0" onClick={right}>
        <RightIcon size="4rem" color="#DB5752" />
      </MyArrowButton>
    </Box>
  );
};

function MyArrowButton(props) {
  return (
    <IconButton
      {...props}
      position="absolute"
      borderRadius="0"
      _focus="none"
      _hover={{backgroundColor:"#9AC9FB80"}}
      _active={{backgroundColor:"#9AC9FBA0"}}
      bg="transparent"
      h="100%"
    >
      {props.children}
    </IconButton>
  );
}

export default MainSlides;
