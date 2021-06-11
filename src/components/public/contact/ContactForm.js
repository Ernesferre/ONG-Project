import React from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Textarea,
    useColorModeValue,
    InputGroup,
    InputLeftElement
  } from '@chakra-ui/react'
  import {FaPhone, FaAt} from 'react-icons/fa'
import { useState } from 'react'

const ContactForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const messageData = {
            "name": name,
            "email": email,
            "phone": phone,
            "message": message,
            "created_at": new Date().toISOString()
        }
        fetch('http://ongapi.alkemy.org/api/contacts', {
            method: 'POST',
            body: JSON.stringify(messageData),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        .then(() => handleSuccess())
        .catch(err => {
            console.log(err)
            handleError()
        })
    }
    
    return (
        <Flex
      align={'center'}
      justify={'center'}
      >
      <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12} px={6}>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
            <Stack align={'left'}>
            <Heading fontSize={'2xl'} textAlign={'left'} >Envíanos un mensaje</Heading>
            </Stack>
            <form method="POST" onSubmit={handleSubmit}>
                <FormControl id="nombre" mt={4}>
                    <Input type="text" placeholder="Nombre y apellido" onChange={(e) => setName(e.target.value)} required/>
                </FormControl>
                <Stack spacing={4}
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                    mt={4}>
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents="none"
                        children={<FaAt color="brandBlue.200" />}
                        />
                        <Input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents="none"
                        children={<FaPhone color="brandBlue.200" />}
                        />
                        <Input type="tel" placeholder="Teléfono" required onChange={(e) => setPhone(e.target.value)}/>
                    </InputGroup>
                </Stack>
                <Textarea
                    placeholder="Mensaje"
                    mt={4}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Stack mt={4}>
                <Button variant={'somosMas'} type='submit'>
                    Enviar
                </Button>
                </Stack>
            </form>
        </Box>
      </Stack>
    </Flex>
    )
}

export default ContactForm
