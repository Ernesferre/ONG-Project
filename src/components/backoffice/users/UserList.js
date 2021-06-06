import { Button } from "@chakra-ui/button";
import { Container, Flex, Heading } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  MappedUsers} from "./MappedUsers";


const fakeData = [
  { id:1, name: "user 1", email: "user1@user.com",  role: "admin", profilePhoto:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", created_at: "2021-05-12T00:59:46.326Z" },
  { id:2, name: "user 2", email: "user2@user.com",  role: "user", profilePhoto:"https://images.unsplash.com/photo-1509191436522-d296cf87d244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80", created_at: "2021-02-28T00:59:46.326Z" },
  { id:3, name: "user 3", email: "user3@user.com",  role: "admin", profilePhoto:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80", created_at: "2020-11-05T00:59:46.326Z" },
  { id:4, name: "user 4", email: "user4@user.com",  role: "admin", profilePhoto:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", created_at: "2021-01-10T00:59:46.326Z" },
  { id:5, name: "user 5", email: "user5@user.com",  role: "admin", profilePhoto:"https://images.unsplash.com/photo-1509191436522-d296cf87d244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80", created_at: "2020-10-06T00:59:46.326Z" },
  { id:6, name: "user 6", email: "user6@user.com",  role: "user", profilePhoto:'', created_at: "2021-05-28T00:59:46.326Z" }
]

export const UserList = () => {

   

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState()
  const [update, setUpdate] = useState(false)
  const [lastID, setLastID] = useState()
  

  useEffect(()=>{

          // AGREGAR FUNCIÓN para traer data
   
      console.log(fakeData)
      setUsers(fakeData)
      setLastID(fakeData.sort((a,b)=> b.id - a.id)[0].id)
      setLoading(false)
 
  }, [update])

  const handleUpdate = () => {
    setUpdate(update => !update)
  }

  if (loading) return <Heading textAlign="center">Loagind...</Heading>
  return (
    <Container maxW="container.xl">
      <Flex flexDir="column">
        <Heading textAlign="center">Usuarios</Heading>
        <Flex>
          <Link to={{
              pathname: "/backoffice/users/create",
              state: {lastID:lastID},
          }}>
            <Button colorScheme="green">+ Nuevo Usuario</Button>
          </Link>
        </Flex>
        <MappedUsers users={users} handleUpdate={handleUpdate} />
      </Flex>
    </Container>
  );
};
