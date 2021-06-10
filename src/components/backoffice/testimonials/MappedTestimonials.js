import React from "react";
import {
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { deleteTestimonial } from "./testimonials";
import {useAlert} from '../layout/Alert'

const MappedTestimonials = ({ testimonials, handleUpdate }) => {
  const {setAlert} = useAlert();
  const handleDelete = (id) => {
      setAlert({
        show: true,
        title: "Confirmación",
        text: "¿Quieres borrar este testimonio?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DB5752",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Borrar",
        onConfirm: () => {
          deleteTestimonial(id)
          handleUpdate(true);
          console.log(`Deleting testimonial ${id} `)
        },
        onCancel: () => {},
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
            <Flex direction="column" marginTop={marginTop}>
              <Text fontSize="small" color="gray.400">
                Nombre:
              </Text>
              <Text fontWeight="bold">{testimonial.name}</Text>
            </Flex>
            <Flex
              direction="column"
              justifyContent="space-between"
              marginTop={marginTop}
            >
              <Text fontSize="small" color="gray.400">
                Creado el:
              </Text>
              <Text fontWeight="bold">
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
