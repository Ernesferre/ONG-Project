import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Container, Flex, Heading, Button} from '@chakra-ui/react'
import MappedMembers from './MappedMembers'
import { getMembers } from '../../../functions/membersService'
import Loader from '../layout/Loader'

const ListOfMembers = () => {

    const [loading, setLoading] = useState(true)
    const [members, setMembers] = useState()
    const [update, setUpdate] = useState(false)

    useEffect(()=>{
        getMembers()
        .then(res => {
          setMembers(res.data.data)
          setLoading(false)
         setUpdate(false)
        })
         .catch(() => setLoading(false))
      }, [update])

    if (loading) return <Loader visible={true} type="Puff" color="#88BBF2" height={80} width={80}/>
    return(
        <div>
            <Container maxW="container.xl">
                <Flex flexDir="column" mb={10}>
                    <Heading textAlign="center" mt={10}>Miembros</Heading>
                    <Flex alignSelf='flex-end' marginRight='1em'>
                    <Link to="/backoffice/members/create">
                        <Button variant={'somosMas'}>+ Crear Miembro</Button>
                    </Link>
                    </Flex>
                    {members ? 
                    <MappedMembers members={members} parentCallBack={setUpdate}></MappedMembers>
                    : <Heading as="h4" size="md" textAlign="center">No se encontraron miembros</Heading>
                    }
                </Flex>
            </Container>
        </div>
    )
}

export default ListOfMembers