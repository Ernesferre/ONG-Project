import { Container, Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, { useState, useEffect } from "react";
import { LCard } from "../../Cards/LCard";
import { getActivitiesList } from "./activitiesService";

export const ActivitiesList = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivitiesList()
      .then((aList) => setActivities(aList))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container maxW="container.xl">
      {activities.length > 0 ? (
        <Flex flexWrap="wrap" justifyContent="center">
          {activities.map((activity, index) => (
            <Flex margin="0.5em" key={index}>
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
        <Flex height="10em" justifyContent="center" alignItems="center">
          <Spinner size="xl" color="#5796D9" />
        </Flex>
      )}
    </Container>
  );
};
