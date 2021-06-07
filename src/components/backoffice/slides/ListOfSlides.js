import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Flex, Heading, Button } from "@chakra-ui/react";
import { getSlides } from "./slidesService";
import SlidesShow from "./SlidesShow";

const ListOfSlides = () => {
  const [loading, setLoading] = useState(true);
  const [slides, setSlides] = useState();
  const [update, setUpdate] = useState(false);
  
  useEffect(() => {
    getSlides().then((res) => {
      console.log(res.data);
      setSlides(res.data);
      setLoading(false);
      setUpdate(false);
    });
  }, [update]);

  return (
    <>
      <SlidesShow slides={slides} parentCallBack={setUpdate} />
    </>
  );
};

export default ListOfSlides;
