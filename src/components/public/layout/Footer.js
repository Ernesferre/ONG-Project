import React, { useEffect, useState } from 'react'
import { Flex, Link as LinkExter, IconButton } from '@chakra-ui/react';
import axios from 'axios';
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';

const Footer = () => {
    const [footer, setFooter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [display, setDisplay] = useState('none');

    const logo = useSelector((state) => state.organization.organizationData.logo);
    console.log(logo);

    useEffect(async() => {
        getOrganization();
    }, []);

    const getOrganization = async () => {
        await axios.get('http://ongapi.alkemy.org/api/organization')
            .then(res => {
                setFooter(res.data.data[0]);
                setLoading(false);
            });
    }

    return (
        loading ? (
            <p>Espere...</p>
        ) : (
            <Flex backgroundColor="gray.100" p={16} justifyContent="space-between" w="full" >
                <Flex flexDir="column">
                    {/* <h2>{footer?.name}</h2> */}
                    <img src={logo}  width="180px" alt="Somos más logo" />
                </Flex>
                <Flex flexDir="column" display={{ base: "none", md: "flex" }}>
                    <h2>Más Información</h2>
                    <br />
                    <Link to="/us" style={{color: "#9AC9FB"}}>Nosotros</Link>
                    <br />
                    <Link to="/activities" style={{color: "#9AC9FB"}}>Actividades</Link>
                    <br />
                    <Link to="/news" style={{color: "#9AC9FB"}}>Novedades</Link>
                </Flex>
                <Flex flexDir="column" display={{ base: "none", md: "flex" }}>
                    <h2>Redes Sociales</h2>
                    <Flex justifyContent="space-between" pt={5}>
                        <LinkExter href="https://facebook.com/Somos_Más" isExternal color="blue.500"><FaFacebook size="30px" /></LinkExter>
                        <LinkExter href="https://instagram.com/SomosMás" isExternal color="blue.300"><FaTwitter size="30px" /></LinkExter>
                        <LinkExter href="https://twitter.com/SomosMás" isExternal color="red.400"><FaInstagram size="30px" /></LinkExter>
                    </Flex>
                </Flex>

                <Flex justify="flex-end" display={{ base: "flex", md: "none" }} justify="flex-end">
                    <IconButton
                        aria-label="CloseMenu"
                        size="lg"
                        icon={
                            <GiHamburgerMenu />
                        }
                        onClick={() => setDisplay(display === 'none' ? 'flex' : 'none')}
                    />
                </Flex>

                <Flex
                    w="60vw"
                    bgColor="gray.100"
                    zIndex={20}
                    pb={10}
                    pos="fixed"
                    bottom="10"
                    left="0"
                    overflowY="auto"
                    flexDir="column"
                    display={display}
                    paddingTop={3}
                >
                    <Flex
                        flexDir="column"
                        align="center"
                    >
                        <Link to="/us" style={{color: "#9AC9FB"}}>Nosotros</Link>
                        <br />
                        <Link to="/activities" style={{color: "#9AC9FB"}}>Actividades</Link>
                        <br />
                        <Link to="/news" style={{color: "#9AC9FB"}}>Novedades</Link>
                       
                    </Flex>

                    <Flex justifyContent="space-around" pt={25}>
                        <LinkExter href="https://facebook.com/Somos_Más" isExternal color="blue.500"><FaFacebook size="30px" /></LinkExter>
                        <LinkExter href="https://instagram.com/SomosMás" isExternal color="blue.300"><FaTwitter size="30px" /></LinkExter>
                        <LinkExter href="https://twitter.com/SomosMás" isExternal color="red.400"><FaInstagram size="30px" /></LinkExter>
                    </Flex>
                </Flex>
            </Flex>
        )
            
    )
}

export default Footer
