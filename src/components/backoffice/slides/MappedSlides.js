import React, { useState } from "react";
import { Container, Flex, Heading, Image, Button, Box } from "@chakra-ui/react";
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
    <Container>
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
              <form onSubmit={(e) => handleOnEditSubmit(e)}>
                <label>Titulo</label>
                <input type="text" name="title" defaultValue={item.title} />
                <label>Ingese una imagen</label>
                <input
                  type="file"
                  name="img"
                  onChange={(e) => uploadImage(e)}
                />
                <button onSubmit={(e) => handleOnEditSubmit(e)} type="submit">
                  Guardar
                </button>
              </form>
            ) : (
              <>
                <Heading as="h3">{item.title}</Heading>
                <Heading as="h5">
                  <Link to="/backoffice/slides/create">Crear nueva slide</Link>
                </Heading>

                {item.img === "" ? (
                  <Box>Por favor ingresa una imagen en el home</Box>
                ) : (
                  <Image
                    h="22rem"
                    w="90%"
                    objectFit="cover"
                    border="1px solid lightgray"
                    src={item.img}
                    alt="slides-home"
                  />
                )}
                <Button
                  onClick={() => handleDelete(item.order)}
                  cursor="pointer"
                  border="none"
                  bg="red"
                >
                  Eliminar
                </Button>

                <Button
                  cursor="pointer"
                  mr="1rem"
                  border="none"
                  bg="blue"
                  color="white"
                  onClick={() => handleEdit(item)}
                >
                  Editar
                </Button>
              </>
            )}
          </Flex>
        ))}
      </Flex>

      <Flex justify="space-between" pos="relative" bottom="14rem" margin="18px">
        <Button
          cursor="pointer"
          zIndex="10000"
          border="none"
          bg="white"
          onClick={prev}
        >
          <LeftArrow />
        </Button>
        <Button
          cursor="pointer"
          zIndex="10000"
          border="none"
          bg="white"
          onClick={next}
        >
          <RightArrow />
        </Button>
      </Flex>
    </Container>
  );
};
