import React0 from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import {
  Flex,
  Heading,
  Image,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteSlide } from "./slidesService";

export const MappedSlides = ({
  slideshow,
  prev,
  next,
  slides,
  parentCallBack,
}) => {
  const handleDelete = async (id) => {
    const confirmation = await Swal.fire({
      title: "Confirmación",
      text: "¿Quieres borrar esta slide?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Borrar",
      confirmButtonColor: "#DB5752",
      cancelButtonText: "Cancelar",
    });

    if (confirmation.isConfirmed === true) {
      deleteSlide(id);
      parentCallBack(true);
    }
  };
let split = <p></p>
  return (
    <Flex color="black" wrap="nowrap" ref={slideshow}>
      {slides?.map((slide, idx) => (
        <Flex
          key={idx}
          align="center"
          minW="100%"
          direction="column"
          overflow="hidden"
          pos="relative"
          zIndex="10"
        >
          <Button mt={4} colorScheme="blue" bg="#5796D9" type="submit">
            <Link cursor="pointer" to="/backoffice/slides/create">
              {" "}
              <button> + Crear nueva slide</button>
            </Link>
          </Button>
          <Heading as="h3" mt="3rem">
            {slide.name}
          </Heading>
          {slide.image === "" ? (
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
              src={slide.image}
              alt="slides-home"
              mt="1rem"
            />
          )}
          <Text color="black" mt="1rem">
            {slide.description}
          </Text>
          <Flex mt="2rem">
            <Link
              to={{
                pathname: "/backoffice/slides/edit",
                state: slide,
              }}
            >
              <Button colorScheme="blue" size="sm" variant="outline">
                Editar
              </Button>
            </Link>
            <Button
              // DELETE FUNCTION  HERE
              onClick={()=> handleDelete(slide.id)}
              cursor="pointer"
              border="none"
              bg="red"
              size="sm"
              ml="1rem"
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
              color="#5796D9"
            />

            <IoIosArrowDropright
              onClick={next}
              fontSize="30px"
              cursor="pointer"
              color="#5796D9"
            />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
