import { Button } from "@chakra-ui/button";
import { Container, Flex, Heading } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../../features/userSlice";
import { MappedUsers } from "./MappedUsers";

export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.userList);
  const status = useSelector((state) => state.users.status);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <Container maxW="container.xl">
      {status === "loading" ? (
        <Flex height="10em" justifyContent="center" alignItems="center">
          <Spinner size="xl" color="#5796D9" />
        </Flex>
      ) : (
        <Flex flexDir="column">
          <Heading textAlign="center">Usuarios</Heading>
          <Flex>
            <Link to="/backoffice/users/create">
              <Button colorScheme="green">+ Nuevo Usuario</Button>
            </Link>
          </Flex>
          <MappedUsers users={users} />
        </Flex>
      )}
    </Container>
  );
};
