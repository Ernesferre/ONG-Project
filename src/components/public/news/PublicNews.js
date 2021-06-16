import React , { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import pictureNews from "../../../assets/Foto9.jpg";
import Title from "../../Title/Title";
import Card from "../../Cards/Card";
import { getNews } from "../homeService/homeService";

export const PublicNews = () => {

  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getNews().then((res) => {
      setNews(res.data);
      setLoading(false);
      setUpdate(false);
    });
  }, [update]);
  
  return (
    <>
      <Title title="Novedades" image={pictureNews} />
      <Flex wrap="wrap" gridGap="6%" justify="center" align="center" mt="4rem">
        {news?.map((data) => (
          <Card
            image={data.image}
            title={data.name}
          />
        ))}
      </Flex>
    </>
  );
};
