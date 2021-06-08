import React from "react";

import { CreateOrEditForm } from "./CreateOrEditForm";

export const CreateOrEditUser = ({ isCreate, id, user }) => {
  return (
    <>
      <CreateOrEditForm id={id} />
    </>
  );
};
