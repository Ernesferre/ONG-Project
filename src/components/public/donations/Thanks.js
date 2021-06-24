import React from 'react'
import { Box, Text, Button } from "@chakra-ui/react";
import forBackTitle from "../../../assets/forBackTitle.jpg";
import Title from "../../Title/Title";

const Thanks = () => {
    
    return (
        <Box mb="2rem">
                <Title image={forBackTitle} title="Gracias" />
                <Box maxW="900px" m={{base:"1rem",md:"auto"}} my="2rem">
                <Text
                mt="3rem"
                fontSize={{md:"5xl",base:"3xl"}}
                paddingBottom={6}
                fontWeight="bold"
                >
                ¡Muchas gracias por querer apoyar a la causa! 
                </Text>
                
                </Box>
        </Box>
    )
}

export default Thanks
