import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Image,
  Button
} from "@chakra-ui/react";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const mockNov = [
  {
    name: "novedad numero uno",
    image: "https://via.placeholder.com/50",
    createdAt: new Date(1995, 11, 17),
  },
  {
    name: "novedad numero uno",
    image: "https://via.placeholder.com/50",
    createdAt: new Date(1995, 11, 17),
  },
  {
    name: "novedad numero uno",
    image: "https://via.placeholder.com/50",
    createdAt: new Date(1995, 11, 17),
  },
];

const NoveltiesList = () => {
  return (
    <Table variant="simple">
      <TableCaption>Imperial to metric conversion factors</TableCaption>

      <Thead>
        <Tr>
          <Th>Nombre</Th>
          <Th>Imagen</Th>
          <Th>Creado</Th>
          <Th colSpan="2">Opciones</Th>
        </Tr>
      </Thead>

      <Tbody>
        {mockNov.map((novelty) => {
          <Tr>
            <Td>{novelty.name}</Td>
            <Td>
              <Image
                boxSize="150px"
                objectFit="cover"
                src={novelty.image}
                alt={novelty.name}
              />
            </Td>
            <Td>{novelty.createdAt}</Td>
            <Td>
              <Button  colorScheme="pink" variant="outline">
                <AiFillEdit/>
              </Button>
            </Td>
            <Td>
              <Button  colorScheme="blue" variant="solid">
                <AiFillDelete/>
              </Button>
            </Td>
          </Tr>;
        })}
      </Tbody>
    </Table>
  );
};
export default NoveltiesList;
