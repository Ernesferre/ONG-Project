import React from 'react'
import {Flex, Select, Heading, Box, Text, Stack, Button, FormControl, FormLabel, Input} from '@chakra-ui/react'
import { FaFileImage } from 'react-icons/fa'
import { useHistory } from "react-router";

 
export const CreateOrEditForm = ({
  name,
  setName,
  email,
  setEmail,
  image,
  setImage,
  rol,
  setRol,
  id,
  
}) => {


  const history = useHistory();


  // convert image to base64
const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = error => reject(error)
})

  async function handleSubmit(e) {
      e.preventDefault()
      if (name === '' || email === '' || image === ''  || rol === '') {
          alert('Por favor complete todos los campos')
      } else {
          let data
          if (typeof image !== 'string') {
              let base64Img = await toBase64(image)
              data = {
                  name: name,
                  email: email,
                  rol: rol,
                  image: base64Img
              }
          } else {
              data = {
                  name: name,
                  email: email,
                  rol: rol,
                  image: image
              }
          }
          if (email) {
              // AGREGAR FUNCIÓN EDITAR - pasar id y data
              history.push("/backoffice/users");
              console.log(data)
          } else {
              // AGREGAR FUNCIÓN CREAR - pasar data
              history.push("/backoffice/users");
              console.log(data)
          }
      }
  }


  return(
    <Flex w='100%' flexDirection='column' minHeight='100vh' align='center' justify='center' padding={10}>
    <Heading margin={5}>{id ? 'Editar Usuario' : 'Crear Usuario'}</Heading>
        <Box bg="gray.100" borderWidth="1px" borderRadius="lg" overflow="hidden" w={[250, 400, 700]} maxWidth={700}>
            <form method='POST' onSubmit={handleSubmit}>
                <Stack w={'90%'} margin={[3,6,8]} spacing={5} >
                    <FormControl>
                        <FormLabel>Nombre</FormLabel>
                        <Input type='text'
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            bg="white"
                            isRequired
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel marginBottom={3}>Email</FormLabel>
                        <Input type='email'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            bg="white"
                            isRequired
                        />
                    </FormControl>
                       
                    <FormControl>
                        <FormLabel>Foto</FormLabel>
                        <Input type='file' 
                            id='file'
                            onChange={(e)=>setImage(e.target.files[0])}
                            style={{height:'0', width:'0', overflow:'hidden', padding:'0', border:'none'}}
                        />
                        <label htmlFor="file" style={{cursor:'pointer'}} >
                            <Box as={FaFileImage} size="36px" color="blue.500" />
                        </label>
                        {image && <Text style={{textAlign:'left'}} marginTop={3}>{id ? name : image.name}</Text>}
                    </FormControl>
                    <FormControl>
                    <FormLabel>Rol</FormLabel>
                    <Select placeholder="Select Rol"  value={rol} 
                            onChange={(e) => setRol(e.target.value)}>
                          <option value="admin">Administrador</option>
                          <option value="user">Usuario</option>
                        
                        </Select>

                    </FormControl>
                    <FormControl>
                            <Button colorScheme="blue" type='submit' size="sm" marginTop={5}>Crear</Button>
                        </FormControl>
                 
                </Stack>
            </form>
        </Box>
    </Flex>
)
}