import { Container } from "@chakra-ui/layout";
import axios from "axios";
import React, { useState, useEffect } from "react";

export const ActivitiesList = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getActivities = async () => {
      try {
        const response = axios.get("http://ongapi.alkemy.org/api/activities");
        setActivities(response.data);
      } catch (error) {
        throw error;
      }
    };
    getActivities();
  }, []);

  return <Container maxW="container.xl"></Container>;
};
