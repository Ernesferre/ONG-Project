import React, { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Box,
  Text,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FaFileImage } from "react-icons/fa";

import { useAlert } from "../layout/Alert";

// convert image to base64
// const toBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });

const TestimonialsForm = ({ testimonialToEdit }) => {
  const { setAlert } = useAlert();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (testimonialToEdit) {
      setName(testimonialToEdit.name);
      setDescription(testimonialToEdit.description);
      setImage(testimonialToEdit.image);
    }
  }, [testimonialToEdit]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || description === "" || image === "") {
      setAlert({
        title: "Campo vacío",
        text: "Algún campo está vacio o no se ha cargado una imagen.",
        show: true,
        type: "error",
      });
    } else {
      //   let data;
      //   if (typeof image !== "string") {
      //     let base64Img = await toBase64(image);
      //     data = {
      //       name: name,
      //       description: description,
      //       image: base64Img,
      //     };
      //   } else {
      //     data = {
      //       name: name,
      //       description: description,
      //       image: image,
      //     };
      //   }
      if (testimonialToEdit) {
        // AGREGAR FUNCIÓN EDITAR - pasar id y data
        // editActivity(activityToEdit.id, data)
        // console.log(data);
        console.log("Editiging");
      } else {
        // AGREGAR FUNCIÓN CREAR - pasar data
        // createActivity(data)
        // console.log(data);
        console.log("Creating");
      }
    }
  }

  return (
    <Flex
      w="100%"
      flexDirection="column"
      minHeight="100vh"
      align="center"
      justify="center"
      padding={10}
    >
      <Heading margin={5}>
        {testimonialToEdit ? "Editar testimonio" : "Crear testimonio"}
      </Heading>
      <Box
        bg="gray.100"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        w={[250, 400, 700]}
        maxWidth={700}
      >
        <form method="POST" onSubmit={handleSubmit}>
          <Stack w={"90%"} margin={[3, 6, 8]} spacing={5}>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                bg="white"
                isRequired
              />
            </FormControl>
            <FormControl>
              <FormLabel marginBottom={3}>Descripción</FormLabel>
            </FormControl>
            <CKEditor
              editor={ClassicEditor}
              data={
                testimonialToEdit ? testimonialToEdit.description : description
              }
              onReady={(editor) => {}}
              onChange={(event, editor) => {
                const data = editor.getData();
                setDescription(data);
              }}
            />
            <FormControl>
              <FormLabel>Foto</FormLabel>
              <Input
                type="file"
                id="file"
                onChange={(e) => setImage(e.target.files[0])}
                style={{
                  height: "0",
                  width: "0",
                  overflow: "hidden",
                  padding: "0",
                  border: "none",
                }}
              />
              <label htmlFor="file" style={{ cursor: "pointer" }}>
                <Box as={FaFileImage} size="36px" color="blue.500" />
              </label>
              {image && (
                <Text style={{ textAlign: "left" }} marginTop={3}>
                  {testimonialToEdit ? testimonialToEdit.name : image.name}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <Button colorScheme="blue" type="submit" size="sm" marginTop={5}>
                {testimonialToEdit ? "Guardar" : "Crear"}
              </Button>
            </FormControl>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default TestimonialsForm;
