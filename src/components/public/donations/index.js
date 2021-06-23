import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import Title from "../../Title/Title";
import imgSubtitle from "../../../assets/Foto10.jpg";

export const Donations = () => {
  return (
    <Box mb="2rem">
      <Title image={imgSubtitle} title="Donaciones" />
      <Box maxW="900px" m={{base:"1rem",md:"auto"}} my="2rem">
        <Text
          fontSize={{md:"5xl",base:"3xl"}}
          paddingBottom={6}
          fontWeight="bold"
        >
          ¡Gracias por querer ser parte de Somos Más!
        </Text>
        <Text fontSize="2xl" textAlign="justify" w="100%">
          Gracias por su gran generosidad, su ayuda es invaluable para nosotros.
          Su apoyo ayuda a avanzar en nuestra misión.
        </Text>
        <Text fontSize="2xl" textAlign="justify" mt="2rem" w="100%">
          Las donaciones son procesadas en el entorno seguro de MercadoPago.
          Haga click en el siguiente botón para comenzar:
        </Text>

        <Button
          mt="1rem"
          bg="rgb(1,160,223)"
          _hover={{ opacity: ".6" }}
          color="white"
          borderRadius="4px"
        >
          Donar por MercadoPago
        </Button>
      </Box>
    </Box>
  );
};

export default Donations;
