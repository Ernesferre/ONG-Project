import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import RelatedNewsList from "./RelatedNewsList";
import photo from "../../../../assets/Foto3.jpg";

const arrayOfNews = [
  {name: 'Día del niño', 
  image: photo },
  {name: 'otra noticia', 
  image: photo },
  {name: 'Ultima noticia de la lista', 
  image: photo }
]

const DetailNews = () => {

 
 
  return (
  
   <Container maxW="container.xl">

   <Heading>Novedad</Heading>
    <RelatedNewsList arrayOfNews={arrayOfNews} />
 </Container>
   
  ) }
  export default DetailNews;
