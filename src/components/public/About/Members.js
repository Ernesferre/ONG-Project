import React, {useEffect, useState} from 'react';
import {membersApi} from "./aboutService"
import {Container, Flex, Heading} from '@chakra-ui/react'
import Memmber from './Memmber';



export default function Members() {

    const [members, setMember] = useState()

    useEffect(()=>{
        membersApi()
        .then(res => {
          setMember(res.data)
        })
      }, [])
      
    return (
        <div>
        <Container maxW="container.xl">
            <Flex flexDir="column" marginTop='1em'>
                <Heading textAlign="center">Miembros</Heading>
                <Flex alignSelf='flex-end' marginRight='1em'>
             
                </Flex>
                <Memmber members={members}/>
            </Flex>
        </Container>
    </div>
    )
}
