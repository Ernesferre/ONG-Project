import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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

import { getCategories } from "../categories/CategoriesService";
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

  const handleChangeImage = async (imageFile) => {
    let image64 = await toBase64(imageFile[0]).then((res) => res);

    setNews({
      ...news,
      image: image64,
    });
  };

  const handleChange = (e) => {
    setNews({
      ...news,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    //falta validaciones
    //info para enviar peticiones
    console.log(news);
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
              required
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
