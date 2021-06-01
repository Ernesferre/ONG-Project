import { Stack, Image, Button, Text } from "@chakra-ui/react";

const New = ({ novelty }) => {
  console.log(novelty)
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

      <Stack>
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
        <Text fontWeight="bold">{novelty?.created_at}</Text>
      </Stack>

      <Stack d="flex" direction="row" justify="center" align="center">
        <Button variant="outline" colorScheme="blue">
          Editar
        </Button>
        <Button variant="solid" colorScheme="red">
          Borrar
        </Button>
      </Stack>

    </Stack>
  );
};
export default New;
