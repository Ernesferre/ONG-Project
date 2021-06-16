import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import {
  Heading,
  Text,
  Flex,
  Box,
  Breadcrumb,
  Spinner,
  BreadcrumbItem,
  Image,
} from "@chakra-ui/react";
import Title from "../../Title/Title";
import { NavLink } from "../layout/HeaderPublic";
import ImageBanner from "../../../assets/Foto10.jpg";

const url = "http://ongapi.alkemy.org/api/activities";

export const Activity = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState({
    image: ImageBanner,
    name: "title",
    created_at: new Date(),
    description: "<h2>this is a subtitle</h2><p><strong>this</strong> is a paragraph</p>",
  });
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    //Fetch the activity by id
  }, []);

  function getDate() {
    const date = new Date(activity.created_at);
    return date.toLocaleDateString("es");
  }

  if (isLoading) return <Spinner />;
  if (isNotFound)
    return (
      <Heading as="h1" size="2xl">
        No se ha encontrado la actividad.
      </Heading>
    );

  return (
    <Box>
      <Image
        w="100%"
        h="500px"
        objectFit="cover"
        src={activity.image}
        alt={activity.name}
      />
      <Box m="2rem 1rem">
        <Flex justify="space-around" flexWrap="wrap">
          <Breadcrumb>
            <BreadcrumbItem>
              <NavLink name="Inicio" route="/" />
            </BreadcrumbItem>

            <BreadcrumbItem>
              <NavLink name="Actividades" route="/actividades" />
            </BreadcrumbItem>
          </Breadcrumb>
          <Text fontSize="1xl" color="brandBlue.200" fontWeight={700}>
            {getDate()}
          </Text>
        </Flex>

        <Heading as="h1" size="2xl">
          {activity.name}
        </Heading>

        <Box maxW="900px" m="auto">
          {parse(activity.description)}
        </Box>
      </Box>
    </Box>
  );
};
