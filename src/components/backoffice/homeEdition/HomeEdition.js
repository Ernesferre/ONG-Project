import React, { useState } from "react";
import {
  Flex,
  Heading,
  Box,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";


import { FaFileImage } from "react-icons/fa";

import Swal from "sweetalert2";

// convert image to base64
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });


const HomeEdition = () => {
    
  const [name, setName] = useState("");
  const [image, setImage] = useState("");


  const handleSuccess = () => {
    Swal.fire({
      title: "Success",
      text: "Home Editada Correctamente",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };


  const handleError = () => {
    Swal.fire({
      title: "Error",
      text: "Favor de completar los 2 campos",
      icon: "error",
      confirmButtonText: "Ok",
    });
  };

  async function handleSubmit(e) {
    
    e.preventDefault();
    if (name === "" || image === "") {
      handleError();
      // alert("Por favor complete todos los campos");
      
    } else {
      handleSuccess();
      let data;
      if (typeof image !== "string") {
        let base64Img = await toBase64(image);
        data = {
          name: name,
          image: base64Img,
        };
        console.log("data ingresada")
        console.log(data);
      } else {
        data = {
          name: name,
          image: image,
        };
        console.log("data ingresadaa")
      }
      
    }
  }

    
    return (
      
      <Flex
      w="100%"
      flexDirection="column"
      minHeight="80vh"
      align="center"
      justify="center"
      padding={10}
    >
      <Heading margin={5}> Formulario de Edicion Home </Heading>
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
              <FormLabel>Ingrese el Texto de Bienvenida</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                bg="white"
                minLength = "20"
                // isRequired
              />
            </FormControl>
            
            
            <FormControl>
              <FormLabel>Seleccione Slide</FormLabel>
              <Input
                type="file"
                id="file"
                // Los Slides deben probenir de la API // Reemplazar cuando esten disponibles //
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
              
            </FormControl>

            <FormControl>
              <Button colorScheme="blue" type="submit" size="sm" marginTop={5}>
                Editar
              </Button>
            </FormControl>

          </Stack>
        </form>
      </Box>
    </Flex>
    )
}

export default HomeEdition
