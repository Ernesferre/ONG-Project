import React, { useState, useEffect } from "react";
import { Flex, Button } from "@chakra-ui/react";
import pictureNews from "../../../assets/Foto9.jpg";
import Title from "../../Title/Title";
import Card from "../../Cards/Card";
import { getNews } from "../homeService/homeService";
import { Link } from "react-router-dom";

export const PublicNews = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getNews().then((res) => {
      const newsFilter = res.data.slice(res.data.length /2);
      console.log(newsFilter);
      setNews(newsFilter);
      setLoading(false);
      setUpdate(false);
    });
  }, [update]);

  return (
    <>
      <Title title="Novedades" image={pictureNews} />
      <Flex wrap="wrap" gridGap="6%" justify="center" align="center" mt="4rem">
        {news?.map((data) => (
          <Card image={data.image} title={data.name} />
        ))}
      </Flex>
      <Flex justify="flex-end" mt="2rem" mr="1rem">
        <Link to="/novedades">
          <Button variant='somosMas'>Ver más novedades</Button>
        </Link>
      </Flex>
    </>
  );
};
