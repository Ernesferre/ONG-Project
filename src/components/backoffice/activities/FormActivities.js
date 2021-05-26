import React, { useEffect, useState } from 'react'
import {Flex, Heading, Box, Text, Stack, Button, FormControl, FormLabel, Input} from '@chakra-ui/react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { FaFileImage } from 'react-icons/fa'

const ActivitiesForm = ({activityToEdit}) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    useEffect(()=>{
        if (activityToEdit) {
            setName(activityToEdit.name)
            setDescription(activityToEdit.description)
            setImage(activityToEdit.image)
        }
    }, [activityToEdit])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === '' || description === '' || image === '') {
            alert('Por favor complete todos los campos')
        } else {
        const data = {
            name: name,
            description: description,
            image: image
        }
            if (activityToEdit) {
                // editActivity(activityToEdit.id, data)
            } else {
                // createActivity(data)
            }
        }
    }

    return(
        <Flex w='100%' flexDirection='column' minHeight='100vh' align='center' justify='center' padding={10}>
        <Heading margin={5}>{activityToEdit ? 'Editar actividad' : 'Crear actividad'}</Heading>
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
                            <FormLabel marginBottom={3}>Descripción</FormLabel>
                        </FormControl>
                            <CKEditor
                                editor={ ClassicEditor }
                                data={activityToEdit ? activityToEdit.description : description}
                                onReady={ editor => {console.log( 'Editor is ready to use!', editor )} }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData()
                                    setDescription(data)
                                } }
                            />
                        <FormControl>
                            <FormLabel>Foto</FormLabel>
                            <Input type='file' 
                                id='file'
                                onChange={(e) => setImage(e.target.files[0].name)}
                                style={{height:'0', width:'0', overflow:'hidden', padding:'0', border:'none'}}
                            />
                            <label htmlFor="file" style={{cursor:'pointer'}} >
                                <Box as={FaFileImage} size="36px" color="blue.500" />
                            </label>
                            {image && <Text style={{textAlign:'left'}} marginTop={3}>{image}</Text>}
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

export default ActivitiesForm