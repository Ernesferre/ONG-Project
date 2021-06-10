import React, { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
const images = [
  "https://sm.ign.com/t/ign_es/news/l/loki-confi/loki-confirmed-to-be-gender-fluid_ur1w.h960.jpg",
  "https://phantom-marca.unidadeditorial.es/456c64c083e34bd2601f7bb200f3447b/resize/1320/f/jpg/assets/multimedia/imagenes/2021/06/07/16230600360752.jpg",
];
const MainSlides = () => {
  const [position, setPosition] = useState(0);
  function right() {
    if(position<100*(images.length-1))
        setPosition((p) => p + 100);
    else
        setPosition(0);
  }
  function left() {
    if(position!==0)
        setPosition((p) => p - 100);
    else
    setPosition(100*(images.length-1))
  }
  return (
    <Box w="100%">
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
      <button onClick={left}>+</button>
      <button onClick={right}>+</button>
    </Box>
  );
};

export default MainSlides;
