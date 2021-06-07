import { Button } from "@chakra-ui/button";
import { Container, Flex, Heading } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../../features/userSlice";
import { MappedUsers } from "./MappedUsers";

export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.userList);
  console.log(users);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    // AGREGAR FUNCIÓN para traer data
    dispatch(fetchUsers());

    setLoading(false);
  }, [dispatch]);

  const handleUpdate = () => {
    setUpdate((update) => !update);
  };

  if (loading) return <Heading textAlign="center">Loagind...</Heading>;
  return (
    <Container maxW="container.xl">
      <Flex flexDir="column">
        <Heading textAlign="center">Usuarios</Heading>
        <Flex>
          <Link to="/backoffice/users/create">
            <Button colorScheme="green">+ Nuevo Usuario</Button>
          </Link>
        </Flex>
        <MappedUsers users={users} handleUpdate={handleUpdate} />
      </Flex>
    </Container>
  );
};
