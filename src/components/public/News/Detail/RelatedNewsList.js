import React from 'react'
import { Box, Flex, Heading, WrapItem, Link } from "@chakra-ui/react";
import Title from "../../../Title/Title";
import Card from "../../../Cards/Card";

const RelatedNewsList = ({arrayOfNews}) => {
    return (
        <Box mb={12}>
            <Heading>Noticias relacionadas</Heading>
            <Flex wrap="wrap" gridGap="6%" justify="center" align="center">
                {arrayOfNews?.map((data) => (
                <WrapItem>
                    <Link style={{margin: "0", textDecoration: "none"}} to={`novedades/${data.id}`} key={data.id} >        
                        <Card
                            image={data.image}
                            title={data.name}
                            max={'250px'}
                        />
                    </Link>
                </WrapItem>
                ))}
            </Flex>
        </Box>
    )
}

export default RelatedNewsList
