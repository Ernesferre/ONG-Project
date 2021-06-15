import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Title from "../../Title/Title";
import pictureActivities from "../../../assets/Foto10.jpg";
import Card from "../../Cards/Card";
import { getActivities } from "../homeService/homeService";


export const PublicActivities = () => {

  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getActivities().then((res) => {
      console.log(res.data);
      setActivities(res.data);
      setLoading(false);
      setUpdate(false);
    });
  }, [update]);

  return (
    <>
      <Title title="Actividades" image={pictureActivities} />
      <Flex wrap="wrap" gridGap="6%" justify="center" align="center" mt="3rem">
        {activities?.map((data) => (
          <Card
            title={data.title}
            image={data.image}
            description={data.description}
          />
        ))}
      </Flex>
    </>
  );
};
