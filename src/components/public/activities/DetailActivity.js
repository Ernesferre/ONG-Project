import React from "react";
import { Link } from "react-router-dom";
import { Flex, Image, Heading, Text, Button } from "@chakra-ui/react";

const DetailActivity = () => {
  const fakeDataDetail =   {
    id: 3,
    image:
      "http://4.bp.blogspot.com/-HwNYeNwE_c0/UZKPKi9EWTI/AAAAAAAAFTI/82a9T0g02sI/s1600/dr_osman01.jpg",
    title: "actividad 3",
    description:
      "Ir al museo",
  }
  return (
    <Flex justify="center" align="center" flexDirection='column'>
      <Image w='100%' objectFit='cover'  maxH='35rem' src={fakeDataDetail.image} />
      <Heading borderBottom='1px solid #8DCAFF' mt='1rem' textAlign='center' as='h3'>{fakeDataDetail.title}</Heading>
      <Text mx='1rem'  mt='1rem' textAlign='left'>{fakeDataDetail.description}</Text>
      <Link to="/activities">
        <Button>Volver</Button>
      </Link>
    </Flex>
  );
};

export default DetailActivity;