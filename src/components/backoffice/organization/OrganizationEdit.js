import { Input } from "@chakra-ui/input";
import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";

export const OrganizationEdit = () => {
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [address, setAddress] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [phone, setPhone] = useState("");
  const [logo, setLogo] = useState("");
  const [welcomeText, setWelcomeText] = useState("");

  const formObject = {
    name,
    short_description: shortDescription,
    long_description: longDescription,
    address,
    cellphone,
    phone,
    logo,
    welcome_text: welcomeText,
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://ongapi.alkemy.org/api/organization",
        formObject
      );
      console.log(response);
      handleSuccess();
    } catch (error) {
      handleError();
    }
  };

  useEffect(() => {
    const getOrganizationData = async () => {
      try {
        const response = await axios.get(
          "http://ongapi.alkemy.org/api/organization"
        );
        setName(response.data.data[0].name);
        setShortDescription(response.data.data[0].short_description);
        setLongDescription(response.data.data[0].long_description);
        setPhone(response.data.data[0].phone);
        setCellphone(response.data.data[0].cellphone);
        setAddress(response.data.data[0].address);
        setWelcomeText(response.data.data[0].welcome_text);
        setLogo(response.data.data[0].logo);
      } catch (error) {
        handleError();
      }
    };
    getOrganizationData();
  }, []);

  return (
    <Container
      maxW="container.xl"
      bg="gray.200"
      borderRadius="0.2em"
      borderWidth="1px"
      borderColor="gray.300"
      padding="1em"
    >
      <Heading>Editar Organización</Heading>
      <Flex flexDir="column">
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel color="gray.400" fontWeight="bold" marginTop="1em">
              Nombre
            </FormLabel>
            <Input
              bg="white"
              variant="filled"
              _hover={{ bg: "gray.100" }}
              _focus={{ bg: "gray.100" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color="gray.400" fontWeight="bold" marginTop="1em">
              Dirección
            </FormLabel>
            <Input
              bg="white"
              variant="filled"
              _hover={{ bg: "gray.100" }}
              _focus={{ bg: "gray.100" }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color="gray.400" fontWeight="bold" marginTop="1em">
              Teléfono
            </FormLabel>
            <Input
              bg="white"
              variant="filled"
              _hover={{ bg: "gray.100" }}
              _focus={{ bg: "gray.100" }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color="gray.400" fontWeight="bold" marginTop="1em">
              Celular
            </FormLabel>
            <Input
              bg="white"
              variant="filled"
              _hover={{ bg: "gray.100" }}
              _focus={{ bg: "gray.100" }}
              value={cellphone}
              onChange={(e) => setCellphone(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color="gray.400" fontWeight="bold" marginTop="1em">
              Descripción Corta
            </FormLabel>
            <CKEditor
              editor={ClassicEditor}
              data={shortDescription}
              id="description"
              onReady={(editor) => {}}
              onChange={(event, editor) => {
                const data = editor.getData();
                setShortDescription(data);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color="gray.400" fontWeight="bold" marginTop="1em">
              Descripción Larga
            </FormLabel>
            <CKEditor
              editor={ClassicEditor}
              data={longDescription}
              id="description"
              onReady={(editor) => {}}
              onChange={(event, editor) => {
                const data = editor.getData();
                setLongDescription(data);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="gray.400" fontWeight="bold" marginTop="1em">
              Logo
            </FormLabel>
            <Input
              id="file"
              type="file"
              bg="white"
              variant="filled"
              _hover={{ bg: "gray.100" }}
              _focus={{ bg: "gray.100" }}
              onChange={(e) => setLogo(e.target.files[0])}
              height="0"
              width="0"
              overflow="hidden"
              padding="0"
              border="none"
            />
            <FormLabel htmlFor="file">
              <Flex justifyContent="center">
                <Image
                  src={logo}
                  objectFit="cover"
                  boxSizing="md"
                  cursor="pointer"
                />
              </Flex>
            </FormLabel>
          </FormControl>
          <Button marginTop="1em" type="submit" colorScheme="blue">
            Editar
          </Button>
        </form>
      </Flex>
    </Container>
  );
};
