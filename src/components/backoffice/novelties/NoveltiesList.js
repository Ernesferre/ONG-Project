//HOOKS
import { useState } from 'react';

//REACT ROUTER
import {Link} from 'react-router-dom';

//CHAKRA
import {Stack, CircularProgress, Heading, Button} from "@chakra-ui/react";

//COMPONENTS
import Novelty from './Novelty';

const mockNov = [
  {
    name: "novedad numero uno",
    image: "https://via.placeholder.com/100",
    createdAt: "12-05-20",
  },
  {
    name: "novedad numero dos",
    image: "https://via.placeholder.com/100",
    createdAt:"12-05-20",
  },
  {
    name: "novedad numero tres",
    image: "https://via.placeholder.com/100",
    createdAt: "12-05-20",
  },
];

const NoveltiesList = () => {

  const [novelties, setNovelties] = useState(mockNov);

  return (
    <Stack d="flex" pt={3} align="center" width="100%" spacing={6}>

      <Stack>
        <Heading textAlign="center">Novedades</Heading>
      </Stack>

      <Stack d="flex" align="flex-end" w="75%">

        <Link  to="/backoffice/news/create">
          <Button variant="solid" colorScheme="green" color="#fff">
            <span 
              style={{"fontSize": "20px", "padding": "3px"}}>+</span> Crear novedad
          </Button>
        </Link>

      </Stack>
      
      <Stack d="flex" pt={3} align="center" w="75%" spacing={6} >

      { 
        novelties.length != 0 ? (

          novelties.map(novelty => <Novelty novelty={novelty} /> )

        ) : (

          <CircularProgress isIndeterminate color="red.400" />

        )
      }
      </Stack>

    </Stack>
  );
};
export default NoveltiesList;
