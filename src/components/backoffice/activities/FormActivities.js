import React, { useState } from 'react'
import {Box, Stack, Button, FormControl, FormLabel, Input, IconButton, HStack} from '@chakra-ui/react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const ActivitiesForm = ({activityToEdit}) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(description)
        console.log(image)
    }

    return(
        <Stack w='100%'>
        <Box bg="gray.100" borderWidth="1px" borderRadius="lg" alignSelf='center' overflow="hidden" w={[250, 400, 640]} maxWidth={640}>
            <form method='POST' onSubmit={handleSubmit}>
                <Stack w={'90%'} margin={8} spacing={5} >
                    <FormControl>
                        <FormLabel>Nombre</FormLabel>
                        <Input type='text'
                            value={activityToEdit ? activityToEdit.name : name} 
                            onChange={(e) => setName(e.target.value)}
                            bg="white"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel marginBottom={3}>Descripción</FormLabel>
                    </FormControl>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={activityToEdit ? activityToEdit.description : description }
                            onReady={ editor => {console.log( 'Editor is ready to use!', editor )} }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData()
                                setDescription(data)
                            } }
                        />
                    <FormControl>
                        <FormLabel>Foto</FormLabel>
                        <Input type='file' 
                            onChange={(e) => setImage(e.target.files[0])}
                            style={{height:'0', width:'0', overflow:'hidden'}}
                        />
                        <IconButton
                            colorScheme="blue"
                            aria-label="Search database"
                            icon={<SearchIcon />}
                        />
                    </FormControl>
                    <HStack>
                        <Button colorScheme="blue" type='submit' size="sm">Crear</Button>
                    </HStack>
                </Stack>
            </form>
        </Box>
        </Stack>
    )
}

export default ActivitiesForm