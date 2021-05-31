import React from 'react'
import { Button, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const MappedMembers = ({ members }) => {

  const flexDir = useBreakpointValue({ base: "column", md: "row" })
  const marginTop = useBreakpointValue({ base: "1rem", md: "0" })

  return (
    <Flex flexDir="column">
      {members?.map((member) => (
        <Flex
          flexDir="column"
          key={member.id}
          margin="1em"
          bg="gray.200"
          padding="1em"
          borderRadius="0.1em"
        >
          <Flex alignItems='center' justifyContent='space-between' flexDir={flexDir}>
            <Flex alignItems="center" justifyContent="space-between">
                <Image
                    boxSize="100px"
                    borderRadius="full"
                    objectFit="cover"
                    src={member.image}
                    fallbackSrc="/brand-logo.svg"
                    alt={member.name}
                />
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" marginTop={marginTop}>
              <Text fontWeight="bold">
                <Text fontSize="small" color="gray.400">Nombre: </Text>
                {member.name}
              </Text>
            </Flex>
            <Flex justifyContent="space-between" marginTop={marginTop}>
                <Link 
                    to={{
                        pathname: "/backoffice/activities/edit",
                        state: member,
                    }}>
                    <Button colorScheme="blue" size="sm" variant="outline">
                        Editar
                    </Button>
                </Link>
              <Button size="sm" 
                colorScheme="red" 
                marginLeft="1em"  
                // AGREGAR FUNCIÓN ELIMINAR
                // onClick={() => handleDelete(member.id)}
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

export default MappedMembers