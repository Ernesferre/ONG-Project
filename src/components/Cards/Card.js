import React from "react";
import { Box, Text, Image, Button, Flex, VStack } from "@chakra-ui/react";

const Cards = ({ image, title, description }) => {
  return (
    <VStack
      w="382px"
      h="490px"
      rounded="20px"
      overflow="hidden"
      boxShadow="dark-lg"
      justifyContent="space-between"
      mt="2rem"
    >
      <Box>
        <Image
          src={image}
          h="250"
          width="100%"
          layout={"fill"}
          fallbackSrc="https://via.placeholder.com/382x300"
        />
        <Box textAlign="left" p={4}>
          <Text
            fontWeight="extrabold"
            fontSize="large"
            fontFamily="Source+Sans+Pro"
            textTransform="uppercase"
          >
            {title}
          </Text>
          <Text fontWeight="normal" fontSize="sm" my={2} fontFamily="Open+Sans">
            {description}
          </Text>
        </Box>
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
          mb="6"
          borderColor="red.450"
          borderRadius="2xl"
          _hover={{ background: "red.400", color: "white" }}
        >
          VER MÁS
        </Button>
      </Box>
    </VStack>
  );
};

export default Cards;
