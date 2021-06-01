import React from "react";
import {
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAlert } from "../layout/Alert";

const MappedTestimonials = ({ testimonials }) => {
  const { setAlert } = useAlert();

  const handleDelete = (id) => {
    setAlert({
      title: "Confirmación",
      text: "¿Quieres borrar este testimonio?",
      show: true,
      type: "warning",
      showCancelButton: true,
      onConfirm: () => {
        // DELETE FUNCTION HERE
        console.log("ID ELIMINADO" + "" + id);
      },
    });
  };

  const flexDir = useBreakpointValue({ base: "column", md: "row" });
  const marginTop = useBreakpointValue({ base: "1rem", md: "0" });

  return (
    <Flex flexDir="column">
      {testimonials?.map((testimonial) => (
        <Flex
          flexDir="column"
          key={testimonial.id}
          margin="1em"
          bg="gray.200"
          padding="1em"
          borderRadius="0.1em"
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            flexDir={flexDir}
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Image
                boxSize="100px"
                objectFit="cover"
                src={testimonial.image}
                fallbackSrc="/brand-logo.svg"
                alt={testimonial.name}
              />
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              marginTop={marginTop}
            >
              <Text fontWeight="bold">
                <Text fontSize="small" color="gray.400">
                  Testimonio:{" "}
                </Text>
                {testimonial.name}
              </Text>
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              marginTop={marginTop}
            >
              <Text fontWeight="bold">
                <Text fontSize="small" color="gray.400">
                  Creado el:{" "}
                </Text>
                {testimonial.created_at.slice(0, 10)}
              </Text>
            </Flex>
            <Flex justifyContent="space-between" marginTop={marginTop}>
              <Link
                to={{
                  pathname: "/backoffice/testimonials/edit",
                  state: testimonial,
                }}
              >
                <Button colorScheme="blue" size="sm" variant="outline">
                  Editar
                </Button>
              </Link>
              <Button
                size="sm"
                colorScheme="red"
                marginLeft="1em"
                // AGREGAR FUNCIÓN ELIMINAR
                onClick={() => handleDelete(testimonial.id)}
              >
                Borrar
              </Button>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default MappedTestimonials;
