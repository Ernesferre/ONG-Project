import { Box, Menu, Stack, Image, Text } from "@chakra-ui/react";

const Backoffice = () => {
    return (
        <Box w="100%" textAlign="center" maxHeight="763px">
            <Stack minHeight="60px" bg="#fff">
                <Menu>
                    Menu
                </Menu>
            </Stack>
            <Stack paddingTop="67px" paddingBottom="89px">

                <Stack h="487px" w="100%" bg="#E5E5E5"></Stack>
                <Text fontSize="56px" lineHeight="80px" align="center" fontWeight="400">Texto de Bienvenida</Text>

            </Stack>
        </Box>
    )
}
export default Backoffice;