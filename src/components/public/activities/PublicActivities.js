import React from "react";
import Title from "../../Title/Title";
import pictureActivities from "../../../assets/Foto10.jpg";
import { ActivitiesList } from "./ActivitiesList";

export const PublicActivities = () => {
  return (
    <>
      <Title title="Actividades" image={pictureActivities} />
      <ActivitiesList />
    </>
  );
};
