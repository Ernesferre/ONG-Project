import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const OrganizationEdit = () => {
  const [organizationData, setOrganizationData] = useState({});

  const handleError = () => {
    Swal.fire({
      title: "Error",
      text: "Hubo un error",
      icon: "error",
      confirmButtonText: "Ok",
    });
  };

  const handleSuccess = () => {
    Swal.fire({
      title: "Success",
      text: "Tarea completada",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  useEffect(() => {
    const getOrganizationData = async () => {
      try {
        const response = await axios.get(
          "http://ongapi.alkemy.org/api/organization/"
        );
        setOrganizationData(response.data);
      } catch (error) {
        handleError();
      }
    };
    getOrganizationData();
  }, []);

  console.log(organizationData);

  return <div></div>;
};
