import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button
} from "@chakra-ui/react";
import { FaFileImage } from "react-icons/fa";

const NewsForm = () => {
  const [news, setNews] = useState();
  const handleChange = (e) => {
    e.target.type == "file" && (
      setNews({...news,
      [e.target.name]: e.target.value[0]
      })
    )
    setNews({
      ...news,
      [e.target.name]: e.target.value
    })
    console.log(news)
  }

  return (
    <Stack w="80%" p={6} m={24} bg="gray.200">
      <form>
        <FormControl mb={6}>
          <FormLabel>Titulo</FormLabel>
          <Input name="titulo" onChange={handleChange} bg="#fff" type="text" />
        </FormControl>

        <FormControl  mb={6} >
          <FormLabel>Descripcion</FormLabel>
          <CKEditor
            editor={ClassicEditor}
            data="valor inicial"
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setNews({
                ...news,
                content: data
              })
              console.log( news );
            }}
            config={{ckfinder: {
              // Upload the images to the server using the CKFinder QuickUpload command.
              uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
            }}}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </FormControl>
        <FormControl  mb={6}>
          <FormLabel >Foto</FormLabel>
          <Input
            name="name" 
            onChange={handleChange}
            type="file"
            id="file"
            h="auto"
            style={{  
              overflow: "hidden",
              padding: "0",
              border: "none",
            }}
          />
        </FormControl>

        <Button mt={4} colorScheme="blue" type="submit">
          Crear
        </Button>
      </form>
    </Stack>
  );  
};

export default NewsForm;
