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
import { useHistory } from "react-router";

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

  let organization = {
    name,
    short_description: shortDescription,
    long_description: longDescription,
    address,
    cellphone,
    phone,
    welcome_text: welcomeText,
  };

  const history = useHistory();

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleError = ({ message }) => {
    Swal.fire({
      title: "Error",
      text: { message },
      icon: "error",
      confirmButtonText: "OK",
    });
  };

  const handleSuccess = () => {
    Swal.fire({
      title: "Success",
      text: "Tarea completada",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const handleValidation = (values) => {
    organization.forEach((value) => {
      if (value.length === 0) {
        return false;
      }
    });
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (changedLogo) {
      const newBase64Logo = await toBase64(changedLogo);
      organization = { ...organization, logo: newBase64Logo };
    }
    const passedValidation = handleValidation();
    if (passedValidation) {
      try {
        const response = await axios.post(
          "http://ongapi.alkemy.org/api/organization",
          organization
        );
        handleSuccess();
        history.push("/");
        return response.data;
      } catch (error) {
        handleError();
      }
    } else {
      handleError("Todos los campos deben tener datos");
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
            <Flex justifyContent="center">
              <FormLabel
                htmlFor="file"
                color="white"
                fontWeight="bold"
                marginTop="1em"
                bg="#5796D9"
                width="10em"
                padding="0.5em"
                textAlign="center"
                borderRadius="0.3em"
                cursor="pointer"
                _hover={{ bg: "#3672B3" }}
              >
                Cambiar Logo
              </FormLabel>
              <Flex alignItems="center">{changedLogo.name}</Flex>
            </Flex>
            <Input
              id="file"
              _hover={{ borderColor: "" }}
              _focus={{ borderColor: "" }}
              type="file"
              onChange={(e) => setChangedLogo(e.target.files[0])}
              display="none"
            />
          </FormControl>
          <Button marginTop="1em" bg="#5796D9" type="submit" colorScheme="blue">
            Editar
          </Button>
        </form>
      )}
    </>
  );
};
