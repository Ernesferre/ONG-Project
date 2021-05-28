import React from 'react'
import { Button, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const MappedActivities = ({ activities }) => {
  const flexDir = useBreakpointValue({ base: "column", md: "row" })
  const marginTop = useBreakpointValue({ base: "1rem", md: "0" })
  return (
    <Flex flexDir="column">
      {activities.map((activity) => (
        <Flex
          flexDir="column"
          key={activity.id}
          margin="1em"
          bg="gray.200"
          padding="1em"
          borderRadius="0.1em"
        >
          <Flex alignItems='center' justifyContent='space-between' flexDir={flexDir}>
            <Flex alignItems="center" justifyContent="space-between">
                <Image
                    boxSize="100px"
                    objectFit="cover"
                    src={activity.image}
                    fallbackSrc="/brand-logo.svg"
                    alt={activity.name}
                />
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" marginTop={marginTop}>
              <Text fontWeight="bold">
                <Text fontSize="small" color="gray.400">Actividad: </Text>
                {activity.name}
              </Text>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" marginTop={marginTop}>
              <Text fontWeight="bold">
                <Text fontSize="small" color="gray.400">Creada el: </Text>
                {activity.created_at.slice(0, 10)}
              </Text>
            </Flex>
            <Flex justifyContent="space-between" marginTop={marginTop}>
                <Link 
                    to={{
                        pathname: "/backoffice/activities/edit",
                        state: activity,
                    }}>
                    <Button colorScheme="blue" size="sm" variant="outline">
                        Editar
                    </Button>
                </Link>
              <Button size="sm" 
                colorScheme="red" 
                marginLeft="1em"  
                // AGREGAR FUNCIÓN ELIMINAR
                // onClick={() => handleDelete(activity.id)}
              >
                Borrar
              </Button>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}

export default MappedActivities