import React , { useState, useEffect } from "react";
import { Wrap, WrapItem } from "@chakra-ui/layout";
import Cards from "../../Cards/Card";
import { Link } from "react-router-dom";
import {getNews} from "./newsService"


const NewsList = () => {

  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState();
  const [update, setUpdate] = useState(false);
  
  useEffect(() => {
  
    getNews().then((res) => {
      setNews(res.data);
      setLoading(false);
      setUpdate(false);
     
    });
  }, []);
  
 
  return (
    <Wrap
      direction="row"
      justify="center"
      spacing={10}
      paddingX="10px"
      paddingY={{ base: "6", sm: "12" }}
      
    >
      {news?.map((item) => (
        <WrapItem key={item.id}>
        <Link
          style={{margin: "0"}}
          to={`novedades/${item.id}`}
        >

            <Cards
              image={item.image}
              title={item.name}
              description={item.content}
              paddingBottom={6}
            />

        </Link>
        </WrapItem>
      ))}
    </Wrap>
  );
};
export default NewsList;
