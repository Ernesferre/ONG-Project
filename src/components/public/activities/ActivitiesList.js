import { Container, Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { LCard } from "../../Cards/LCard";

export const ActivitiesList = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getActivities = async () => {
      try {
        const response = await axios.get(
          "http://ongapi.alkemy.org/api/activities"
        );
        console.log(response.data.data);
        setActivities(response.data.data);
      } catch (error) {
        throw error;
      }
    };
    getActivities();
  }, []);

  return (
    <Container maxW="container.xl">
      {activities.length > 0 ? (
        <Flex flexWrap="wrap" justifyContent="center">
          {activities.map((activity) => (
            <Flex margin="0.5em">
              <LCard
                image={activity.image}
                title={activity.name}
                text={activity.description}
                url="actividades"
                id={activity.id}
                postedOn={activity.created_at}
              />
            </Flex>
          ))}
        </Flex>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};
