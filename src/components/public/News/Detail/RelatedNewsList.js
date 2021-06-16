import React from 'react'
import { Flex, Heading } from "@chakra-ui/react";
import Title from "../../../Title/Title";
import Card from "../../../Cards/Card";

const RelatedNewsList = ({arrayOfNews}) => {
    return (
        <>
            <Heading>Noticias relacionadas</Heading>
            <Flex wrap="wrap" gridGap="6%" justify="center" align="center" mt="3rem">
                {arrayOfNews?.map((data) => (
                <Card
                    image={data.image}
                    title={data.name}
                />
                ))}
            </Flex>
        </>
    )
}

export default RelatedNewsList
