import React, { useState, useEffect } from "react";
import { Flex, Button } from "@chakra-ui/react";
import pictureNews from "../../../assets/Foto9.jpg";
import Title from "../../Title/Title";
import { getNews } from "../homeService/homeService";
import SkeletonHome from "../layout/SkeletonHome";
import { Link } from "react-router-dom";
import { LCard } from "../../Cards/LCard";
import { FaChevronRight } from "react-icons/fa";

export const PublicNews = () => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getNews()
      .then((res) => {
        const newsFilter = res.data.slice(res.data.length / 2);
        console.log(newsFilter);
        setNews(newsFilter);
        setLoading(true);
        setUpdate(false);
      })
      .catch(() => alert("Error al cargar novedades"));
  }, [update]);

  return (
    <>
      <Title title="Novedades" image={pictureNews} />
      {loading ? (
        <>
          <Flex
            wrap="wrap"
            gridGap="6%"
            justify="center"
            align="center"
            mt="4rem"
          >
            {news?.map((data) => (
              <LCard
                image={data.image}
                title={data.name}
                postedOn={data.created_at}
                id={data.id}
                url={`novedades`}
                text={data.content}
                maxW="sm"
              />
            ))}
          </Flex>
          <Flex justify="flex-end" margin="1em">
            <Link to="/novedades">
              <Button variant="somosMas" rightIcon={<FaChevronRight />}>
                Ver más novedades
              </Button>
            </Link>
          </Flex>
        </>
      ) : (
        <SkeletonHome />
      )}
    </>
  );
};
