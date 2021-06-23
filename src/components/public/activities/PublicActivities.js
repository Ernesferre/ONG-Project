import React from "react";
import Title from "../../Title/Title";
import pictureActivities from "../../../assets/Foto10.jpg";
import { ActivitiesList } from "./ActivitiesList";
import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export const PublicActivities = () => {
  return (
    <>
      <Title title="Actividades" image={pictureActivities} />
      <ActivitiesList getOnlyLatest={true} />
      <Flex justify="flex-end" margin="1em">
        <Link to="/actividades">
          <Button variant="somosMas" rightIcon={<FaChevronRight />}>
            Ver más actividades
          </Button>
        </Link>
      </Flex>
    </>
  );
};
