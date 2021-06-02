import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Flex, Heading, Button } from "@chakra-ui/react";
import MappedTestimonials from "./MappedTestimonials";
import { getTestimonials } from './testimonials';

const TestimonialList = () => {
    const [loading, setLoading] = useState(true);
    const [testimonials, setTestimonials] = useState();
    const [update, setUpdate] = useState(false);
    const [lastID, setLastID] = useState();


    useEffect(() => {
      getTestimonials().then((res) => {
        console.log(res.data);
        setTestimonials(res.data);
        setLastID(res.data.sort((a, b) => b.id - a.id)[0].id);
        setLoading(false);
      });
    }, [update]);

    const handleUpdate = () => {
      setUpdate(update => !update)
    }

  return (
    <Container maxW="container.xl">
      <Flex flexDir="column" marginTop="1em">
        <Heading textAlign="center">Testimonios</Heading>
        <Flex alignSelf="flex-end" marginRight="1em">
          <Link to="/backoffice/testimonials/create">
            <Button colorScheme="green">
              <span style={{ fontSize: "20px", padding: "3px" }}>+</span> Crear
              Testimonio
            </Button>
          </Link>
        </Flex>
        {/* CAMBIAR fakeData por testimonials */}
        <MappedTestimonials testimonials={testimonials} handleUpdate={handleUpdate} ></MappedTestimonials>
      </Flex>
    </Container>
  );
};

export default TestimonialList;
