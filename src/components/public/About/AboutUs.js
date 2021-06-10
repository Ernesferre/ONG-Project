import {Flex, Text} from '@chakra-ui/react';

const AboutUs = ({ text }) => {
  return (
    <Flex
      padding={6}
      direction="column"
      justify="center"
      alignItems="center"
      h={{ base: "auto", md: "500px" }}
      bg="#E5E5E5"
    >
      <Text
        fontSize="6xl"
        paddingBottom={6}
        lineHeight="70px"
        fontWeight="bold"
      >
        SOMOS MÁS
      </Text>
      <Text fontSize="2xl" w={{ base: "100%", md: "55%" }}>
          {text}
      </Text>

    </Flex>
  );
};
export default AboutUs;
