//HOOKS
import { useEffect, useState } from "react";
//CKEDITOR
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
//CHAKRA
import {
  FormControl,
  Flex,
  Heading,
  FormLabel,
  Input,
  Select,
  Stack,
  Button,
} from "@chakra-ui/react";

//services
import { getCategories } from "../categories/CategoriesService";
import newsService from './newsService';

// convert url to base64
const urlToBase64 = (img) => {
  var blob = new Blob([img])
  var url = URL.createObjectURL(blob)
  
  return fetch(url)
  .then(res => res.blob())
  .then(blob => {
    var fr = new FileReader()
    fr.onload = () => {
      var b64 = fr.result
      return b64
    }
    fr.readAsDataURL(blob)
  })
}
//convertir imagen a base64
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const NewsForm = ({ newToEdit = {} }) => {

  const [categorias, setCategorias] = useState([]);

  //info novedad
  const data = {
    title: "",
    content: "",
    category_id: "",
    image: "",
  };

  const [news, setNews] = useState(
    "created_at" in newToEdit ? newToEdit : data
  );

  const handleChangeImage = (imageFile) => {

    setNews({
      ...news,
      image: imageFile[0],
    });

  };

  const handleChange = (e) => {
    setNews({
      ...news,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if("created_at" in newToEdit){
      
      let imageEdit;
      
      if(typeof news.image == "string"){

        imageEdit = await urlToBase64(news.image)

      } else {

        imageEdit = await toBase64(news.image).then((res) => res);

      }

      const data = {
        id: news.id,
        name: news.title,
        content: news.content,
        image: imageEdit,
        category_id: news.category_id,
        updated_at: new Date().toISOString()
      }

      newsService.editNews(data, news.id).then(res => console.log(res))

    } else {
      let imageEdit;
      if(typeof news.image !== "string"){
        imageEdit = await toBase64(news.image).then((res) => res);
      }


      const data = {
        name: news.title,
        content: news.content,
        image: imageEdit,
        category_id: news.category_id,
        created_at: new Date().toISOString()
      }
  
      newsService.createNews(data).then(res => console.log(res))
     
    }

  };

  useEffect(() => getCategories().then((res) => setCategorias(res.data)), []);

  useEffect(() => {
    if ("created_at" in newToEdit) {
      setNews({
        ...news,
        title: newToEdit.name,
        content: newToEdit.content,
        category_id: newToEdit.category_id,
        image: newToEdit.image,
      });
    } else {
      const data = {
        title: "",
        content: "",
        category_id: "",
        image: "",
      };
      setNews(data);
    }
  }, []);

  return (
    <Flex
      w="100%"
      flexDirection="column"
      minHeight="100vh"
      align="center"
      justify="center"
      padding={6}
    >
      <Heading>
        {"created_at" in newToEdit ? "Editar novedad" : "Crear novedad"}
      </Heading>
      <Stack w="80%" p={6} m={10} bg="gray.200">
        <form onSubmit={handleSubmitForm}>
          <FormControl mb={6}>
            <FormLabel>Titulo</FormLabel>
            <Input
              name="title"
              value={news.title}
              onChange={handleChange}
              bg="white"
              type="text"
              required
            />
          </FormControl>

          <FormControl mb={6}>
            <FormLabel>Categoría</FormLabel>
            <Select
              name="category_id"
              value={news.category_id}
              onChange={handleChange}
              bg="white"
              placeholder="Seleccione una categoría"
            >
              {categorias.length > 0 ? (
                categorias.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))
              ) : (
                <option>Agrege categoria</option>
              )}
            </Select>
          </FormControl>

          <FormControl mb={6}>
            <FormLabel>Descripcion</FormLabel>
            <CKEditor
              editor={ClassicEditor}
              data={news.content}
              onChange={(event, editor) => {
                const data = editor.getData();
                setNews({
                  ...news,
                  content: data,
                });
              }}
              config={{
                ckfinder: {
                  // Upload the images to the server using the CKFinder QuickUpload command.
                  uploadUrl:
                    "https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json",
                },
              }}
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Imagen</FormLabel>
            <Input
              name="image"
              onChange={(e) => handleChangeImage(e.target.files)}
              type="file"
              h="auto"
              style={{
                overflow: "hidden",
                padding: "0",
                border: "none",
              }}
            />
          </FormControl>

          <Button mt={4} colorScheme="blue" type="submit">
            {"created_at" in newToEdit ? "Editar" : "Crear"}
          </Button>
        </form>
      </Stack>
    </Flex>
  );
};

export default NewsForm;
