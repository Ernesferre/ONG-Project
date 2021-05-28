import React, { useEffect, useState } from "react";
import { CreateOrEdit } from "./CreateOrEdit";
import {useLocation} from 'react-router-dom';

export const CreateOrEditMain = ({ id }) => {
  const [isCreate, setIsCreate] = useState(true);
  const location = useLocation();
  const {lastId} = location.state;
  const {category} = location.state;

  useEffect(() => {
    if (id !== undefined) {
      setIsCreate(false);
    }
  }, [id]);

  return <CreateOrEdit isCreate={isCreate} id={id} lastId={lastId} categoryToEdit={category} />;
};
