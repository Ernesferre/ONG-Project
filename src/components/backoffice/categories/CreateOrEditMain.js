import React, { useEffect, useState } from "react";
import { CreateOrEdit } from "./CreateOrEdit";

export const CreateOrEditMain = ({ id }) => {
  const [isCreate, setIsCreate] = useState(true);

  useEffect(() => {
    if (id !== undefined) {
      setIsCreate(false);
    }
  }, [id]);

  return <CreateOrEdit isCreate={isCreate} id={id} />;
};
