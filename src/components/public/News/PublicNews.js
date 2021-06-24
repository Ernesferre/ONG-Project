import React, { useState, useEffect } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
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
                key={data.id}
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
          <Link to="/novedades" style={{ textDecoration: "none" }}>
            <Text
              m="4rem 0.2rem 2rem auto"
              width="max-content"
              fontSize="1xl"
              alignSelf={"right"}
              textAlign="right"
              color="brandBlue.200"
              fontWeight={700}
              _hover={{
                color: "brandRed.200",
                marginRight: "0rem",
              }}
            >
              Ver novedades ➞
            </Text>
          </Link>
        </>
      ) : (
        <SkeletonHome />
      )}
    </>
  );
};
