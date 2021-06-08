import React, { useEffect, useState } from "react";
import {
  Flex,
  Select,
  Heading,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  FormErrorMessage,
  Container,
} from "@chakra-ui/react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createUser, editUser, fetchUser } from "../../../features/userSlice";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const CreateOrEditForm = ({ id }) => {
  const editSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Nombre demasiado corto")
      .max(100, "Nombre demasiado largo")
      .required("Nombre es requerido"),
    email: Yup.string()
      .email("Email debe ser válido")
      .required("El Email es requerido"),
  });

  const { singleUser, status } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const mapData = (user) => {
    initialValues = { name: user.name, email: user.email, rol: user.rol };
  };

  let initialValues = {
    name: singleUser?.name,
    email: singleUser?.email,
    role_id: singleUser?.role_id,
  };

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchUser(id));
    }
    mapData(singleUser);
  }, [dispatch, id]);

  const history = useHistory();

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <Container maxWidth="container.xl" minHeight="100vh" bg="gray.200">
      <Heading margin={5}>{id ? "Editar Usuario" : "Crear Usuario"}</Heading>
      {status === "loading" ? (
        <Flex height="10em" justifyContent="center" alignItems="center">
          <Spinner size="xl" color="#5796D9" />
        </Flex>
      ) : (
        <Flex
          flexDir="column"
          borderWidth="10px"
          borderRadius="0.3em"
          justifyContent="center"
        >
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={editSchema}
            onSubmit={async (values, actions) => {
              let base64Img = await toBase64(values.profilePhoto);
              let data = {
                name: values.name,
                email: values.email,
                role_id: parseInt(values.role_id),
                password: values.password,
                profilePhoto: base64Img,
              };
              if (id !== undefined) {
                // AGREGAR FUNCIÓN EDITAR - pasar id y data
                data = {
                  ...data,
                  id,
                };
                console.log(data);
                dispatch(editUser(data, id));
                history.push("/backoffice/users");
                console.log(data);
              } else {
                // AGREGAR FUNCIÓN CREAR - pasar data
                dispatch(createUser(data));
                history.push("/backoffice/users");
                console.log(data);
              }
            }}
          >
            {(props) => (
              <Form>
                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel marginTop="1em" htmlFor="name">
                        Nombre
                      </FormLabel>
                      <Input
                        variant="filled"
                        {...field}
                        id="name"
                        placeholder="Nombre"
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel marginTop="1em" htmlFor="email">
                        Email
                      </FormLabel>
                      <Input
                        variant="filled"
                        {...field}
                        id="email"
                        placeholder="Email"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <FormLabel marginTop="1em" htmlFor="password">
                        Contraseña
                      </FormLabel>
                      <Input
                        type="password"
                        variant="filled"
                        {...field}
                        id="password"
                        placeholder="Contraseña"
                      />
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="role_id">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.role_id && form.touched.role_id}
                    >
                      <FormLabel marginTop="1em" htmlFor="role_id">
                        Rol
                      </FormLabel>
                      <Select variant="filled" {...field} id="role_id">
                        <option value="1">Administrador</option>
                        <option value="0">Usuario</option>
                      </Select>
                      <FormErrorMessage>{form.errors.role_id}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="profilePhoto">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.profilePhoto && form.touched.profilePhoto
                      }
                    >
                      <FormLabel marginTop="1em" htmlFor="profilePhoto">
                        Foto de Perfil
                      </FormLabel>
                      <Input
                        variant="filled"
                        id="profilePhoto"
                        type="file"
                        onChange={(e) => {
                          form.setFieldValue(
                            "profilePhoto",
                            e.currentTarget.files[0]
                          );
                        }}
                      />
                      <FormErrorMessage>
                        {form.errors.profilePhoto}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  colorScheme="blue"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  {id ? "Editar" : "Crear"}
                </Button>
              </Form>
            )}
          </Formik>
        </Flex>
      )}
    </Container>
  );
};
