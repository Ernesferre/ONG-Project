import React, { useEffect, useState } from "react";
import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { CreateOrEditForm } from "./CreateOrEditForm";
import { Spinner } from "@chakra-ui/spinner";
import { createCategory, editCategory } from './CategoriesService'

export const CreateOrEdit = ({ isCreate, id, lastId, categoryToEdit }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
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
    setLoading(true)
    if (!isCreate) {
      setName(categoryToEdit.name);
      setDescription(categoryToEdit.description);
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [isCreate, categoryToEdit])

  const handlePost = () => {
    createCategory(category, lastId)
    .then(() => {
      handleSuccess();
      history.push("/backoffice/categories");
    })
    .catch(err => handleError())
  }

  const handlePut = (id) => {
    editCategory(id, category)
    .then(() => {
      handleSuccess();
      history.push("/backoffice/categories");
    })
    .catch(err => handleError())
  }


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
              isCreate ? handlePost() : handlePut(categoryToEdit.id);
            }}
          >
            {isCreate === false ? <Text>Editar</Text> : <Text>Crear</Text>}
          </Button>
        </>
      )}
    </Container>
  );
};
