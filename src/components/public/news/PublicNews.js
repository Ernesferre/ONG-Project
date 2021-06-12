import React from "react";
import pictureNews from "../../../assets/Foto9.jpg";
import Title from "../../Title/Title";
import CardNews from "./CardNews";

export const PublicNews = () => {
  const fakeDataNews = [
    {
      id: 1,
      image:
        "https://www.motorpy.com/images/Automoviles/Cummins/2021/Brasil/cummi_1.jpg",
      title: "novedad 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvYQE6gPk4PO7tCz0JEr4drkBmvsq2b3_Lrw&usqp=CAU",
      title: "novedad 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 3,
      image:
        "https://www.relevandopeligros.org/Content/images/Noticias/relevando_imagen_noticias.png",
      title: "novedad 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ];
  return (
    <>
      <Title title="Novedades" image={pictureNews} />
      <Flex wrap="wrap" gridGap="6%" justify="center" align="center" mt="3rem">
        {fakeDataNews.map((data) => (
          <CardNews
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </Flex>
    </>
  );
};
