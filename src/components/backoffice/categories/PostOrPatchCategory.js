import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Container, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import axios from "axios";

export const PostOrPatchCategory = ({ id }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const category = {
    name: name,
    description: description,
  };

  const getCategoryData = async () => {
    const response = await axios.get(
      `http://ongapi.alkemy.org/api/categories/${id}`
    );
    return response.data;
  };

  useEffect(() => {
    if (id !== undefined) {
      console.log(getCategoryData());
    }
  }, []);

  return (
    <Container maxW="container.xl" bg="gray.200" borderRadius="3px">
      {id ? (
        <Heading>Editar Categoría</Heading>
      ) : (
        <Heading>Crear Categoría</Heading>
      )}
      <Text size="md" color="gray.500" textAlign="initial" marginTop="1em">
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
      <Text size="md" color="gray.500" textAlign="initial" marginTop="1em">
        Descripción
      </Text>
      <CKEditor
        editor={ClassicEditor}
        data=""
        id="description"
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDescription(data);
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
      <Button
        mt={4}
        colorScheme="teal"
        type="submit"
        onClick={() => console.log(category)}
        marginBottom="1em"
      >
        Submit
      </Button>
    </Container>
  );
};
