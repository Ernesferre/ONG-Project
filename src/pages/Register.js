import React from 'react'
import { Formik, Form  } from 'formik';
import TextField from '../components/TextField';
import * as Yup from 'yup';
import {registerUser} from "../app/authService"
import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/react"

import {useDispatch} from "react-redux";
import {SET_REGISTER} from "../features/authReducer";


import {
    Button,
    Heading,
    Flex,
    Spacer
  } from "@chakra-ui/react"

const Register = () => {

    const dispatch = useDispatch();
    const TOKEN = "token";

    let history = useHistory();
    const toast = useToast()
    
    const validate = Yup.object({
        name: Yup.string()
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
                    name: '',
                    apellido: '',
                    email: '',
                    password: ''
                }}
            
            validationSchema={validate}

            onSubmit  =  { async values => {
                  
                const response = await registerUser(values)
   
                if(response) {
                    console.log(response.data);
                    dispatch(SET_REGISTER(response.data))
                    localStorage.setItem(TOKEN, response.data.token)
                    history.push("/");
               
                }  else {
      
                    toast({
                        title: "Error al registrar el usuario.", 
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                      })
                }

            }}
            >
    
                {formik => (
                    <Flex height="90vh" alignItems="center" justifyContent="center">
                        <Flex direction="column" p={12} background="gray.100" rounded={6} alignItems="center" justifyContent="center"  >
                        
                            <Heading mb={6} mt={1} > Formulario de Registro </Heading>
                            
                        
                            <Form>
                                
                                <TextField label="Nombre" name="name" type="text" />
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
