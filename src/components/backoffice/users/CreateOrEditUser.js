import React, { useEffect, useState } from "react";

import { CreateOrEditForm } from "./CreateOrEditForm";

export const CreateOrEditUser = ({ isCreate, id, user }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isCreate) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [isCreate, user]);

  return (
    <>
      <CreateOrEditForm id={id} />
    </>
  );
};
