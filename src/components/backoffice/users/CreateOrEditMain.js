import React, { useEffect, useState } from "react";
import { CreateOrEditUser } from "./CreateOrEditUser";

export const CreateOrEditMain = ({ id }) => {
  const [isCreate, setIsCreate] = useState(true);

  useEffect(() => {
    if (id !== undefined) {
      setIsCreate(false);
    }
  }, [id]);

  return <CreateOrEditUser isCreate={isCreate} id={id} />;
};
