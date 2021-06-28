import { Flex, Box, Heading, Container } from "@chakra-ui/react";
import parse from "html-react-parser";

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
        <Heading fontSize="3em" mt={8} >Somos Más</Heading>
        <Box fontWeight="semibold" fontSize="lg" mt={10} mb={8} maxW={'70%'}>
          {parse(text)}
        </Box>
      </Flex>
    </Container>
  );
};
export default AboutUs;
