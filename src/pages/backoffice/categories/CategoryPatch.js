import React from "react";
import { useParams } from "react-router";
import { PostOrPatchCategory } from "../../../components/backoffice/categories/PostOrPatchCategory";

export const CategoryPatch = () => {
  const { id } = useParams();

  return <PostOrPatchCategory id={id} />;
};
