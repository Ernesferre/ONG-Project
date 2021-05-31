import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Container, Flex, Heading, Button} from '@chakra-ui/react'
import MappedMembers from './MappedMembers'
// import { getMembers} from './membersService'

const ListOfMembers = () => {

    // const [loading, setLoading] = useState(true)
    // const [members, setMembers] = useState()
    // const [update, setUpdate] = useState(false)
    // const [lastID, setLastID] = useState()

    const fakeData = [
        { id:1, name: "member 1", description: '<h1>lorem ipsum</h1><br><p>lorem ipsum</p>', image:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", created_at: "2021-05-12T00:59:46.326Z" },
        { id:2, name: "member 2", description: '<h1>lorem ipsum</h1><br><p>lorem ipsum</p>', image:"https://images.unsplash.com/photo-1509191436522-d296cf87d244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80", created_at: "2021-02-28T00:59:46.326Z" },
        { id:3, name: "member 3", description: '<h1>lorem ipsum</h1><br><p>lorem ipsum</p>', image:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80", created_at: "2020-11-05T00:59:46.326Z" },
        { id:4, name: "member 4", description: '<h1>lorem ipsum</h1><br><p>lorem ipsum</p>', image:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", created_at: "2021-01-10T00:59:46.326Z" },
        { id:5, name: "member 5", description: '<h1>lorem ipsum</h1><br><p>lorem ipsum</p>', image:"https://images.unsplash.com/photo-1509191436522-d296cf87d244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80", created_at: "2020-10-06T00:59:46.326Z" },
        { id:6, name: "member 6", description: '<h1>lorem ipsum</h1><br><p>lorem ipsum</p>', image:'', created_at: "2021-05-28T00:59:46.326Z" }
      ]

    //   useEffect(()=>{
    //     getMembers()
    //     .then(res => {
    //       console.log(res.data)
    //       setMembers(res.data)
    //       setLastID(res.data.sort((a,b)=> b.id - a.id)[0].id)
    //       setLoading(false)
    //     })
    //   }, [update])

    return(
        <div>
            <Container maxW="container.xl">
                <Flex flexDir="column" marginTop='1em'>
                    <Heading textAlign="center">Miembros</Heading>
                    <Flex alignSelf='flex-end' marginRight='1em'>
                    <Link to="/backoffice/members/create">
                        <Button colorScheme="green">+ Crear Miembro</Button>
                    </Link>
                    </Flex>
                    {/* CAMBIAR fakeData por members */}
                    <MappedMembers members={fakeData}></MappedMembers>
                </Flex>
            </Container>
        </div>
    )
}

export default ListOfMembers