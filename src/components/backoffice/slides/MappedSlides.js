import React, { useState } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import {
  Flex,
  Heading,
  Image,
  Button,
  Box,
  Text,
  Stack,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const MappedSlides = ({
  slideshow,
  prev,
  next,
  LeftArrow,
  RightArrow,
  saveData,
  parentCallBack,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState("");

  let base64;
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    base64 = await convertBase64(file);

    const updateSlides = saveData?.map((data) => {
      if (data.order === id) {
        data.img = base64;
      }
      return data;
    });
    parentCallBack(updateSlides);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleEdit = (item) => {
    setIsEdit(!isEdit);
    setId(item.order);
  };

  const onEdit = (id, title) => {
    const updateSlides = saveData?.map((data) => {
      if (data.order === id) {
        data.title = title;
      }
      return data;
    });
    parentCallBack(updateSlides);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.title.value, evt.target.img.value);
    setIsEdit(!isEdit);
  };

  const handleDelete = (id) => {
    const filtered = saveData?.filter((i) => i.order !== id);
    parentCallBack(filtered);
  };

  return (
    <Flex color="black" wrap="nowrap" ref={slideshow}>
      {saveData?.map((item, idx) => (
        <Flex
          key={idx}
          align="center"
          minW="100%"
          direction="column"
          overflow="hidden"
          pos="relative"
          zIndex="10"
        >
          {isEdit ? (
            <Flex
              w="100%"
              flexDirection="column"
              minHeight="100vh"
              align="center"
              justify="center"
              padding={10}
            >
              <Heading margin={5}>Editar slides</Heading>{" "}
              <Box
                bg="gray.100"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                w={[250, 400, 700]}
                maxWidth={700}
              >
                <form onSubmit={(e) => handleOnEditSubmit(e)}>
                  <Stack w={"90%"} margin={[3, 6, 8]} spacing={5}>
                    <FormLabel>Ingrese un titulo</FormLabel>
                    <Input
                      bg="white"
                      type="text"
                      name="title"
                      defaultValue={item.title}
                      required
                    />
                    <FormLabel>Ingese una imagen</FormLabel>
                    <Input
                      bg="white"
                      type="file"
                      name="img"
                      onChange={(e) => uploadImage(e)}
                      required
                    />
                    <Button
                      colorScheme="blue"
                      type="submit"
                      size="sm"
                      marginTop={5}
                      onSubmit={(e) => handleOnEditSubmit(e)}
                      type="submit"
                    >
                      Guardar
                    </Button>
                    <Button
                      colorScheme="yellow"
                      type="submit"
                      size="sm"
                      marginTop={5}
                      onClick={() => handleEdit(item)}
                    >
                      Regresar
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Flex>
          ) : (
            <>
              <Button mt={4} colorScheme="blue" bg="#5796D9" type="submit">
                <Link cursor="pointer" to="/backoffice/slides/create">
                  {" "}
                  + Crear nueva slide
                </Link>
              </Button>

              <Heading as="h3" mt="3rem">
                {item.title}
              </Heading>
              {item.img === "" ? (
                <Box h="22rem" w="90%" border="1px solid lightgray">
                  <Text w="60%" display="block" mx="auto" mt="5rem">
                    Por favor ingresa una imagen en el home, haz click en editar
                  </Text>
                </Box>
              ) : (
                <Image
                  h="22rem"
                  w="90%"
                  objectFit="cover"
                  border="1px solid lightgray"
                  src={item.img}
                  alt="slides-home"
                  mt="1rem"
                />
              )}

              <Flex mt="2rem">
                <Button
                  cursor="pointer"
                  mr="1rem"
                  border="none"
                  bg="#5796D9"
                  color="white"
                  onClick={() => handleEdit(item)}
                >
                  Editar
                </Button>
                <Button
                  onClick={() => handleDelete(item.order)}
                  cursor="pointer"
                  border="none"
                  bg="red"
                >
                  Eliminar
                </Button>
              </Flex>

              <Flex
                justify="space-between"
                pos="relative"
                bottom="18rem"
                margin="18px"
                w="100%"
                color="blue"
              >
                <IoIosArrowDropleft
                  onClick={prev}
                  fontSize="30px"
                  cursor="pointer"
                />

                <IoIosArrowDropright
                  onClick={next}
                  fontSize="30px"
                  cursor="pointer"
                />
              </Flex>
            </>
          )}
        </Flex>
      ))}
    </Flex>
  );
};
