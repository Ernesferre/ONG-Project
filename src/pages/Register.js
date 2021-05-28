import React from 'react'
import { Formik, Form  } from 'formik';
import TextField from '../components/TextField';
import * as Yup from 'yup';
import {
    Button,
    Heading,
    Flex,
    Spacer
  } from "@chakra-ui/react"

const Register = () => {
    
    const validate = Yup.object({
        nombre: Yup.string()
            .required("Requerido"),
        apellido: Yup.string()
            .required("Requerido"),
        email: Yup.string()
            .email("Requerido")
            .required("Requerido"),
        password: Yup.string()
            .min(6, "Inserte mas de 6 caracteres")
            .required("Requerido"),
    })

    return (
            
            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    email: '',
                    password: ''
                }}
            
            validationSchema={validate}

            onSubmit={values => {
                console.log(values);
            }}
            >
    
                {formik => (
                    <Flex height="90vh" alignItems="center" justifyContent="center">
                        <Flex direction="column" p={12} background="gray.100" rounded={6} alignItems="center" justifyContent="center"  >
                        
                            <Heading mb={6} mt={1} > Formulario de Registro </Heading>
                            
                        
                            <Form>
                                
                                <TextField label="Nombre" name="nombre" type="text" />
                                <TextField label="Apellido" name="apellido" type="text" />
                                <TextField label="Email" name="email" type="email" />
                                <TextField label="Password" name="password" type="password" />

                                <Flex mt={6}>
                                    <Button colorScheme="teal" variant="solid" type="submit">Registrarme</Button>
                                        <Spacer />
                                    <Button colorScheme="red"  type="reset">Reset</Button>
                                </Flex>

                                
                            </Form>

                        </Flex>

                    </Flex>  
                )}
                </Formik>                
              
    )
}


export default Register
