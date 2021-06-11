import React from "react";
import { Heading, Container, HStack, Flex } from "@chakra-ui/react";
import Card from "../../Cards/Card";
import Title from "../../Title/Title";
import pictureActivities from "../../../assets/Foto10.jpg";

export const PublicActivities = () => {
  const fakeDataActivities = [
    {
      id: 1,
      image: "https://cdn1.eldia.com/052020/1589690724654.jpg?&cw=630",
      title: "actividad 1",
      description: "Ir al parque",
    },
    {
      id: 2,
      image:
        "http://cdn.lavozdesanjusto.com.ar/Imagenes/Imagec9c7f90b4a1c4be1b9f0e922fbdb01f1.png",
      title: "actividad 2",
      description: "Ir a tomar el te",
    },
    {
      id: 3,
      image:
        "http://4.bp.blogspot.com/-HwNYeNwE_c0/UZKPKi9EWTI/AAAAAAAAFTI/82a9T0g02sI/s1600/dr_osman01.jpg",
      title: "actividad 3",
      description: "Ir al museo",
    },
    {
      id: 3,
      image:
        "http://4.bp.blogspot.com/-HwNYeNwE_c0/UZKPKi9EWTI/AAAAAAAAFTI/82a9T0g02sI/s1600/dr_osman01.jpg",
      title: "actividad 3",
      description: "Ir al museo",
    },
  ];
  return (
    <>
      <Title title="Actividades" image={pictureActivities} />
      <Flex wrap="wrap" gridGap="6%" justify="center" align="center" mt="3rem">
        {fakeDataActivities.map((data) => (
          <Card
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </Flex>
    </>
  );
};
