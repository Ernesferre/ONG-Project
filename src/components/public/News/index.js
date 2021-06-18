import { Container } from "@chakra-ui/react";
import NewsList from "./NewsList";
import Title from '../../Title/Title'
import photo from "../../../assets/Foto8.jpg";

const News = () => {
  return (
    <Container maxW="container.xl" w="100%">
      <Title image={photo} title={'Novedades'} />
      <NewsList/>
    </Container>
  );
};
export default News;

