//HOOKS
import { useEffect, useState } from 'react';

//REACT ROUTER
import {Link} from 'react-router-dom';

//SERVICIOS
import newsService from './newsService';

//CHAKRA
import {Stack, CircularProgress, Heading, Button} from "@chakra-ui/react";

//COMPONENTS
import New from './New';

const NewsList = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    newsService.getNews().then(res => setNews(res))
  }, [])


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
        news.length > 0 ? (

          news.map(novelty => <New key={novelty.id} novelty={novelty} /> )

        ) : (

          <CircularProgress isIndeterminate color="red.400" />

        )
      }
      </Stack>
    </Stack>
  );
};
export default NewsList;
