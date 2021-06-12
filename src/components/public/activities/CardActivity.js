import React from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";

const CardActivity = ({ image, title, description }) => {
  return (
    <Box
      width={[
        "100%", // 0-30em
        "50%", // 30em-48em
        "25%", // 48em-62em
        "15%", // 62em+
      ]}
      minW="295px"
      rounded="20px"
      overflow="hidden"
      boxShadow="dark-lg"
      pb="2rem"
      mb="2rem"
    >
      <Box>
        <Image
          src={image}
          h="250"
          width="100%"
          layout={"fill"}
          fallbackSrc="https://via.placeholder.com/382x300"
        />
      </Box>
      <Box p={4} textAlign="left">
        <Text
          fontWeight="extrabold"
          fontSize="large"
          my="2"
          fontFamily="Source+Sans+Pro"
          textTransform="uppercase"
        >
          {title}
        </Text>
        <Text fontWeight="normal" fontSize="sm" my={2} fontFamily="Open+Sans">
          {description}
        </Text>
      </Box>

      <Box>
        <Button
          fontFamily="Source+Sans+Pro"
          fontSize="xl"
          fontWeight="extrabold"
          color="red.400"
          variant="outline"
          size="lg"
          boxShadow="dark-lg"
          border="4px"
          borderColor="red.450"
          borderRadius="2xl"
          _hover={{ background: "red.400", color: "white" }}
        >
          VER MÁS
        </Button>
      </Box>
    </Box>
  );
};

export default CardActivity;