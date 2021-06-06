import React, { useEffect, useState } from "react";

import { CreateOrEditForm } from "./CreateOrEditForm";


export const CreateOrEditUser = ({ isCreate, id, lastId, user }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [rol, setRol] = useState('');
  

  useEffect(() => {
    
    if (!isCreate) {
      setName(user.name);
      setEmail(user.email);
      setImage(user.profilePhoto);
      setRol(user.role);
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [isCreate, user])

 
  return (
        <>   
          <CreateOrEditForm
            name={name}
            email={email}
            image={image}
            rol={rol}
            setName={setName}
            setEmail={setEmail}
            setImage={setImage}
            setRol={setRol}
            id={id}
          />       
        </> 
  );
};
