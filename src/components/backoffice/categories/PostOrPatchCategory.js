import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import axios from "axios";
import Swal from "sweetalert2";
import { Spinner } from "@chakra-ui/spinner";

export const PostOrPatchCategory = ({ id }) => {
  const [isCreate, setIsCreate] = useState(true);

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");

  const [description, setDescription] = useState("");

  const category = {
    name: name,
    description: description,
  };

  useEffect(() => {
    if (id !== undefined) {
      setIsCreate(false);
      setLoading(true);
    }
  }, [id]);

  useEffect(() => {
    if (isCreate === false) {
      const getCategoryData = async () => {
        try {
          const response = await axios.get(
            `http://ongapi.alkemy.org/api/categories/${id}`
          );
          setName(response.data.data.name);
          setDescription(response.data.data.description);
          setLoading(false);
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "No se puede encontrar esa categoría",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      };
      getCategoryData();
    }
  }, [id, isCreate]);

  const handlePost = async () => {
    try {
      const response = await axios.post(
        "http://ongapi.alkemy.org/api/categories",
        category
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePut = async (id) => {
    try {
      const response = await axios.put(
        `http://ongapi.alkemy.org/api/categories/${id}`,
        category
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <Flex
          justifyContent="center"
          height="15em"
          bg="gray.200"
          alignItems="center"
        >
          <Spinner size="xl" color="#5796D9" />
        </Flex>
      ) : (
        <Container
          maxW="container.xl"
          bg="gray.200"
          borderRadius="3px"
          padding="1em"
        >
          {isCreate === false ? (
            <Heading>Editar Categoría</Heading>
          ) : (
            <Heading>Crear Categoría</Heading>
          )}
          <Text
            fontSize="1.3em"
            color="gray.500"
            textAlign="initial"
            marginTop="1em"
          >
            Título
          </Text>
          <Input
            _focus={{ bg: "white" }}
            _hover={{ bg: "gray.100" }}
            bg="white"
            variant="filled"
            value={name}
            placeholder="Título"
            onChange={(e) => setName(e.target.value)}
          />
          <Text
            fontSize="1.3em"
            color="gray.500"
            textAlign="initial"
            marginTop="1em"
          >
            Descripción
          </Text>
          <CKEditor
            editor={ClassicEditor}
            data={description}
            id="description"
            onReady={(editor) => {}}
            onChange={(event, editor) => {
              const data = editor.getData();
              setDescription(data);
            }}
            onBlur={(event, editor) => {}}
            onFocus={(event, editor) => {}}
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
        </Container>
      )}
    </>
  );
};
