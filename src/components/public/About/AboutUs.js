import { Flex, Text, Heading, Container } from "@chakra-ui/react";

const AboutUs = ({ text }) => {
  return (
    <Container maxW="container.xl">
      <Flex
        padding={4}
        direction="column"
        justify="center"
        alignItems="center"
        h={{ base: "auto", md: "auto" }}
      >
        <Heading fontSize="3em">Somos Más</Heading>
        <Text fontWeight="semibold" fontSize="lg" marginTop="1em">
          {text}
        </Text>
      </Flex>
    </Container>
  );
};
export default AboutUs;
