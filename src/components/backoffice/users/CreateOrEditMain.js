import React, { useEffect, useState } from "react";
import { CreateOrEditUser } from "./CreateOrEditUser";
import {useLocation} from 'react-router-dom';

export const CreateOrEditMain = ({ id }) => {
  const [isCreate, setIsCreate] = useState(true);
  const location = useLocation();
  const {lastId} = location.state;
  const {user} = location.state;

 

  useEffect(() => {
    if (id !== undefined) {
      setIsCreate(false);
    }
  }, [id]);

  return <CreateOrEditUser isCreate={isCreate} id={id} lastId={lastId} user={user} />;
};
