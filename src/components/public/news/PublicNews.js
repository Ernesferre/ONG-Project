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
      console.log(res.data);
      setNews(res.data);
      setLoading(true);
      setUpdate(false);
    });
  }, [update]);
  
  return (
    <>
      <Title title="Novedades" image={pictureNews} />
      {
        loading === true ? (
          <Flex wrap="wrap" gridGap="6%" justify="center" align="center" mt="3rem">
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


