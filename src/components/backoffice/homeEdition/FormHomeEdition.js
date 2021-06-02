import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {Flex, Heading, Stack, Button} from "@chakra-ui/react";
import TextField from '../../TextField';


const FormHomeEdition = () => {
    
    
    const validate = Yup.object({
        welcome_text: Yup.string()
            .max(20, "Inserte menos de 20 caracteres")
            .required("Requerido"),  
      });
    
    
    
    return (
        <Formik
            initialValues={{
                welcome_text: "",
            }}

            validationSchema={validate}

            onSubmit = {values => {
                console.log(values);
            }}
      
      
    >
      {({handleSubmit, handleChange}) => (
        <Flex
          direction="column"
          height="90vh"
          alignItems="center"
          justifyContent="center"
        >
          
          <Stack bg="#E5E5E5" p={12} rounded={6} width={{ base: "90%", md: "70%", lg: "30%"}}>

            <Stack mb={6}>
              <Heading>Formulario de Edicion del Home </Heading>
            </Stack>

            <Form onSubmit={handleSubmit} spacing={6} w="100%" >
              
              
              <TextField bg="whrite" onChange={handleChange} label="Ingrese texto de Bienvenida" name="welcome_text" type="textarea" />

             
             
              <Button 
                type="submit"
                // isLoading={isSubmitting}
                colorScheme="blue" 
                variant="solid" 
                fontSize="15px" 
                mt={6} 

              >Cambiar
              </Button>

            </Form>

          </Stack>

        </Flex>
      )}
    </Formik>
    )
}

export default FormHomeEdition
