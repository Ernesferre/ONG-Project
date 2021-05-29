import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
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
import { createActivity, editActivity } from "./ActivitiesService";
import Swal from "sweetalert2";

// convert image to base64
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const ActivitiesForm = ({ activityToEdit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory()

  useEffect(() => {
    if (activityToEdit) {
      setName(activityToEdit.name);
      setDescription(activityToEdit.description);
      setImage(activityToEdit.image);
    }
  }, [activityToEdit]);

  const handleSuccess = () => {
    Swal.fire({
      title: "Success",
      text: "Actividad creada",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };
  const handleError = () => {
    Swal.fire({
      title: "Error",
      text: "Hubo un error",
      icon: "error",
      confirmButtonText: "Ok",
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || description === "" || image === "") {
      alert("Por favor complete todos los campos");
    } else {
      let data;
      if (typeof image !== "string") {
        let base64Img = await toBase64(image);
        data = {
          name: name,
          description: description,
          image: base64Img,
        };
      } else {
        data = {
          name: name,
          description: description,
          image: image,
        };
      }
      if (activityToEdit) {
        editActivity(activityToEdit.id, data)
        .then(() => {
            handleSuccess();
            history.push("/backoffice/activities");
          })
          .catch(err => handleError())
      } else {
        createActivity(data)
        .then(() => {
            handleSuccess();
            history.push("/backoffice/activities");
          })
          .catch(err => handleError())
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
        {activityToEdit ? "Editar actividad" : "Crear actividad"}
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
              data={activityToEdit ? activityToEdit.description : description}
              onReady={(editor) => {
                console.log("Editor is ready to use!", editor);
              }}
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
                  {activityToEdit ? activityToEdit.name : image.name}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <Button colorScheme="blue" type="submit" size="sm" marginTop={5}>
                Crear
              </Button>
            </FormControl>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default ActivitiesForm;
