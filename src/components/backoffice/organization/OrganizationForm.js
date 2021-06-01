import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Spinner } from "@chakra-ui/spinner";

export const OrganizationForm = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [address, setAddress] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [phone, setPhone] = useState("");
  const [currentLogo, setCurrentLogo] = useState("");
  const [changedLogo, setChangedLogo] = useState("");
  const [welcomeText, setWelcomeText] = useState("");

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

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
    let organization = {
      name,
      short_description: shortDescription,
      long_description: longDescription,
      address,
      cellphone,
      phone,
      welcome_text: welcomeText,
    };

    if (changedLogo) {
      const newBase64Logo = await toBase64(changedLogo);
      organization = { ...organization, logo: newBase64Logo };
    }

    try {
      const response = await axios.post(
        "http://ongapi.alkemy.org/api/organization",
        organization
      );
      handleSuccess();
      return response.data;
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
        setCurrentLogo(response.data.data[0].logo);
        setLoading(false);
      } catch (error) {
        handleError();
      }
    };
    getOrganizationData();
  }, []);
  return (
    <>
      {loading ? (
        <Flex height="10em" justifyContent="center" alignItems="center">
          <Spinner size="xl" color="#5796D9" />
        </Flex>
      ) : (
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
              Logo Actual
            </FormLabel>
            <Flex justifyContent="center">
              <Image src={currentLogo} objectFit="cover" boxSizing="md" />
            </Flex>
            <FormLabel color="gray.400" fontWeight="bold" marginTop="1em">
              Cambiar logo
            </FormLabel>
            <Input
              _hover={{ borderColor: "" }}
              _focus={{ borderColor: "" }}
              type="file"
              onChange={(e) => setChangedLogo(e.target.files[0])}
            />
          </FormControl>
          <Button marginTop="1em" type="submit" colorScheme="blue">
            Editar
          </Button>
        </form>
      )}
    </>
  );
};
