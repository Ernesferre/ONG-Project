import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Flex,
  Heading,
  Stack,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("El email es invalido").required("Requerido"),
    password: Yup.string().required("Requerido"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Flex
          direction="column"
          height="90vh"
          alignItems="center"
          justifyContent="center"
        >
          <Stack bg="gray.100" p={12} rounded={6}>
            <Stack mb={6}>
              <Heading>Formulario de registro</Heading>
            </Stack>

            <Form spacing={6} w="100%">
              <FormControl  id="email" w="100%">

                <FormLabel>Email</FormLabel>
                <Input bg="#fff" type="email" />

              </FormControl>

              <FormControl id="email">

                <FormLabel>Contraseña</FormLabel>
                <Input  bg="#fff" type="email" />
                
              </FormControl>
            </Form>
          </Stack>
        </Flex>
      )}
    </Formik>
  );
};

export default Login;
