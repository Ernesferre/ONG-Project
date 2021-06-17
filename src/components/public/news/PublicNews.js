import React , { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import pictureNews from "../../../assets/Foto9.jpg";
import Title from "../../Title/Title";
import Card from "../../Cards/Card";
import { getNews } from "../homeService/homeService";
import SkeletonHome from "../layout/SkeletonHome";

export const PublicNews = () => {

  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getNews().then((res) => {
      setNews(res.data);
      setLoading(true);
      setUpdate(false);
    })
    .catch(() => alert('Error al cargar novedades'));
  }, [update]);
  
  return (
    <>
      <Title title="Novedades" image={pictureNews} />
      {
        loading ? (
          <Flex wrap="wrap" gridGap="6%" justify="center" align="center" mt="4rem">
            {news?.map((data) => (
              <Card
                image={data.image}
                title={data.name}
              />
            ))}
          </Flex>
        ) : (
          <SkeletonHome />
        )
      }
    </>
  );
};


