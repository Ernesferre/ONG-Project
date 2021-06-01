import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Flex, Heading, Button } from "@chakra-ui/react";
import MappedTestimonials from "./MappedTestimonials";

const ListOfActivities = () => {
  const [loading, setLoading] = useState(true);
  const [testimonials, setTestimonials] = useState();
  const [update, setUpdate] = useState(false);
  const [lastID, setLastID] = useState();

  const fakeData = [
    {
      id: 1,
      name: "activity 1",
      description: "<h1>lorem ipsum</h1><br><p>lorem ipsum</p>",
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      created_at: "2021-05-12T00:59:46.326Z",
    },
    {
      id: 2,
      name: "activity 2",
      description: "<h1>lorem ipsum</h1><br><p>lorem ipsum</p>",
      image:
        "https://images.unsplash.com/photo-1509191436522-d296cf87d244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80",
      created_at: "2021-02-28T00:59:46.326Z",
    },
    {
      id: 3,
      name: "activity 3",
      description: "<h1>lorem ipsum</h1><br><p>lorem ipsum</p>",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
      created_at: "2020-11-05T00:59:46.326Z",
    },
    {
      id: 4,
      name: "activity 4",
      description: "<h1>lorem ipsum</h1><br><p>lorem ipsum</p>",
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      created_at: "2021-01-10T00:59:46.326Z",
    },
    {
      id: 5,
      name: "activity 5",
      description: "<h1>lorem ipsum</h1><br><p>lorem ipsum</p>",
      image:
        "https://images.unsplash.com/photo-1509191436522-d296cf87d244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80",
      created_at: "2020-10-06T00:59:46.326Z",
    },
    {
      id: 6,
      name: "activity 6",
      description: "<h1>lorem ipsum</h1><br><p>lorem ipsum</p>",
      image: "",
      created_at: "2021-05-28T00:59:46.326Z",
    },
  ];

//   useEffect(() => {
//     getTestimonials().then((res) => {
//       console.log(res.data);
//       setActivities(res.data);
//       setLastID(res.data.sort((a, b) => b.id - a.id)[0].id);
//       setLoading(false);
//     });
//   }, [update]);

  return (
    <div>
      <Container maxW="container.xl">
        <Flex flexDir="column" marginTop="1em">
          <Heading textAlign="center">Testimonios</Heading>
          <Flex alignSelf="flex-end" marginRight="1em">
            <Link to="/backoffice/activities/create">
              <Button colorScheme="green">+ Crear Testimonio</Button>
            </Link>
          </Flex>
          {/* CAMBIAR fakeData por testimonials */}
          <MappedTestimonials testimonials={fakeData}></MappedTestimonials>
        </Flex>
      </Container>
    </div>
  );
};

export default ListOfActivities;
