import React, { useEffect, useState } from "react";
import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { CreateOrEditForm } from "./CreateOrEditForm";
import { Spinner } from "@chakra-ui/spinner";

export const CreateOrEdit = ({ isCreate, id }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const category = {
    name: name,
    description: description,
  };

  const history = useHistory();

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
    if (isCreate === false) {
      const getCategoryData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `http://ongapi.alkemy.org/api/categories/${id}`
          );
          setName(response.data.data.name);
          setDescription(response.data.data.description);
          setLoading(false);
        } catch (error) {
          handleError();
        }
      };
      getCategoryData();
    }
  }, [id, isCreate, setLoading]);

  const handlePost = async () => {
    try {
      const response = await axios.post(
        "http://ongapi.alkemy.org/api/categories",
        category
      );
      handleSuccess();
      history.push("/backoffice/categories");
      return response.data;
    } catch (error) {
      handleError(error.response.data.message);
    }
  };

  const handlePut = async (id) => {
    try {
      const response = await axios.put(
        `http://ongapi.alkemy.org/api/categories/${id}`,
        category
      );
      handleSuccess();
      history.push("/backoffice/categories");
      return response.data;
    } catch (error) {
      handleError(error.response.data.message);
    }
  };

  return (
    <Container
      maxW="container.xl"
      bg="gray.200"
      borderRadius="3px"
      padding="1em"
    >
      {loading ? (
        <Flex height="10em" justifyContent="center" alignItems="center">
          <Spinner size="xl" color="#5796D9" />
        </Flex>
      ) : (
        <>
          {isCreate === false ? (
            <Heading>Editar Categoría</Heading>
          ) : (
            <Heading>Crear Categoría</Heading>
          )}
          <CreateOrEditForm
            name={name}
            description={description}
            setName={setName}
            setDescription={setDescription}
          />
          <Button
            mt={4}
            colorScheme="blue"
            bg="#5796D9"
            type="submit"
            onClick={() => {
              isCreate ? handlePost() : handlePut(id);
            }}
          >
            {isCreate === false ? <Text>Editar</Text> : <Text>Crear</Text>}
          </Button>
        </>
      )}
    </Container>
  );
};
