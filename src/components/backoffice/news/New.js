//REACT ROUTER DOM
import { Link } from "react-router-dom";
//ALERTAS
import Swal from "sweetalert2";
//SERVICIOS
import newsService from "./newsService";
//CHAKRA COMPONENTES
import { Stack, Image, Button, Text } from "@chakra-ui/react";

const New = ({ novelty, setUpdateList }) => {

  const handleDelete = async (id) => {
    const confirmation = await Swal.fire({
      title: "Confirmación",
      text: "¿Quieres borrar esta novedad?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Borrar",
      confirmButtonColor: "#DB5752",
      cancelButtonText: "Cancelar",
    });

    if (confirmation.isConfirmed === true) {
      
      newsService.deleteNews(id)

      setUpdateList(true)
    }
  };

  return (
    <Stack
      spacing={6}
      p={5}
      d="flex"
      direction={{ base: "column", md: "row" }}
      justifyContent="space-between"
      w="100%"
      bg="gray.200"
    >
      <Stack d="flex" justify="center" h="auto" maxWidth="350px">
        <Image src={novelty?.image} />
      </Stack>

      <Stack align="center">
        <Text color="gray.400" fontSize="small">
          Nombre
        </Text>
        <Text fontWeight="bold">{novelty?.name}</Text>
      </Stack>

      <Stack align="center">
        <Text color="gray.400" fontSize="small">
          Creado
        </Text>
        <Text fontWeight="bold">{novelty?.created_at.slice(0, 10)}</Text>
      </Stack>

      <Stack d="flex" direction="row" justify="center" align="center">
        <Link
          to={{
            pathname: "/backoffice/news/edit",
            state: novelty,
          }}
        >
          <Button variant="outline" colorScheme="blue">
            Editar
          </Button>
        </Link>

        <Button
          onClick={() => handleDelete(novelty.id)}
          variant="solid"
          colorScheme="red"
        >
          Borrar
        </Button>
      </Stack>
    </Stack>
  );
};
export default New;
