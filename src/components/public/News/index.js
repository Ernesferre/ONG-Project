import { Container } from "@chakra-ui/react";
import NewsList from "./NewsList";

const News = () => {
  return (
    <Container maxW="container.xl" w="100%">

      <NewsList/>
    </Container>
  );
};
export default News;

