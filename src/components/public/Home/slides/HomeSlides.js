import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import {
  IoIosArrowForward as RightIcon,
  IoIosArrowBack as LeftIcon,
} from "react-icons/io";

import Slide from "./Slide";

const HomeSlides = () => {
  const [position, setPosition] = useState(0);
  const images = [
    {
      id: 1,
      name: "This is a slide title 1",
      description: "Description 1",
      image:
        "https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/30_bc1p3meybi5ttq2iy_w.jpg",
    },
    {
      id: 2,
      name: "This is a slide title 2",
      description: "Description 2",
      image:
        "https://www.benq.com/content/dam/b2c/en-us/knowledge-center/what-is-the-best-wireless-hdmi-technology-for-collaboration--html/2020-03-27%20What-is-the-best-wireless-hdmi-technology-for-collaboration.jpg",
    },
    {
      id: 3,
      name: "This is a slide title 3",
      description: "Description 3",
      image:
        "https://www.vive-energia.com/wp-content/uploads/2020/03/business-meeting-and-teamwork-by-business-people-SZ5YLEZ-scaled.jpg",
    },
  ];

  //Auto slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      right();
    }, 6000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  //Show next slide
  function right() {
    setPosition((p) => {
      if (p < 100 * (images.length - 1)) return p + 100;
      else return 0;
    });
  }

  //Show previous slide
  function left() {
    setPosition((p) => {
      if (p !== 0) return p - 100;
      else return 100 * (images.length - 1);
    });
  }

  //Move from one image to other (DotButton)
  function moveTo(index) {
    setPosition(index * 100);
  }

  return (
    <Box w="100%" position="relative">
      <Box
        w="100%"
        h={{ base: "25vh", sm: "35vh", md: "70vh" }}
        display="flex"
        alignItems="center"
        overflow="hidden"
      >
        {images.map((image) => (
          <Slide key={image.id} image={image} position={position} />
        ))}
      </Box>

      {/* Dot buttons */}
      <Box
        position="absolute"
        bottom="5px"
        right="50%"
        transform="translateX(50%)"
        display="flex"
        gridGap="10px"
      >
        {images.map((image, i) => (
          <DotButton
            key={image.id}
            bg={i * 100 === position ? "brandBlue.300" : "brandRed.100"}
            onClick={() => {
              moveTo(i);
            }}
          />
        ))}
      </Box>

      {/* Arrow buttons */}
      <ArrowButton top="0" left="0" onClick={left}>
        <LeftIcon size="4rem" color="#DB5752" />
      </ArrowButton>
      <ArrowButton top="0" right="0" onClick={right}>
        <RightIcon size="4rem" color="#DB5752" />
      </ArrowButton>
    </Box>
  );
};

function DotButton(props) {
  return (
    <Box
      {...props}
      w="1.25rem"
      h="1.25rem"
      border="solid 2px "
      borderColor="brandRed.300"
      transition="transform .25s"
      _hover={{ cursor: "pointer", transform: "scale(1.15)" }}
      borderRadius="50%"
    ></Box>
  );
}

function ArrowButton(props) {
  return (
    <IconButton
      {...props}
      position="absolute"
      borderRadius="0"
      _focus="none"
      _hover={{ backgroundColor: "#9AC9FB80" }}
      _active={{ backgroundColor: "#9AC9FBA0" }}
      bg="transparent"
      h="100%"
    >
      {props.children}
    </IconButton>
  );
}

export default HomeSlides;
