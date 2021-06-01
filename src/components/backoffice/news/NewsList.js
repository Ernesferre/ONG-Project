//HOOKS
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
//REACT ROUTER
import {Link} from 'react-router-dom';

//CHAKRA
import {Stack, CircularProgress, Heading, Button} from "@chakra-ui/react";

//COMPONENTS
import New from './New';
import {fetchNews} from '../../../features/newsReducer';

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

const NewsList = () => {

  const dispatch = useDispatch();

  const news = useSelector(store => Object.entries(store.news.entities))
  
  useEffect(() => {

    dispatch(fetchNews())
    
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

          news.map(novelty => <New novelty={novelty[1]} /> )

        ) : (

          <CircularProgress isIndeterminate color="red.400" />

        )
      }
      </Stack>

    </Stack>
  );
};
export default NewsList;
