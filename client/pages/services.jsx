import { Box, Flex, IconButton, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import styles from "../styles/Home.module.css";
import React, { useState } from 'react'
import { Box1, Box2, BoxMobile } from '../Components/GlobalComp/'
import { PageHeader, services } from '../Components/GlobalComp/constants'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import TopNav from '../Components/TopNav'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import dynamic from "next/dynamic";

const Swipper = dynamic(
    () => {
        return import("../Components/GlobalComp/SwipperServices");
    },
    { ssr: false }
);

const Services = () => {
    const [toggle, setToggle] = useState(false);
    const show = () => {
        setToggle(!toggle);
    };
    return (
        <Box>
            <Head>
                <title>ogidispearl-project-Limited</title>
                <meta name="description" content="OgidisPearl Limiteed is a leading construction company in Nigeria Specialising in Oil and Gas sectors and Government functionaries our core competencies include a vast range of engineering and construction capabilities that cater to the diverse needs of its projects and clients in Nigeria. " />
                <link rel="icon" href="/asset/ogidilogo.svg" />
            </Head>
            <TopNav />
            <NavBar />
            <Box>
                {/* header */}
                <Flex
                    w={"100%"}
                    h={["310px", "350px", "430px", "420px", "450"]}
                    bgRepeat="no-repeat"
                    bgPos={"center"}
                    bgSize={"cover"}
                    bgColor={toggle ? "#1c24a0a4" : "#111376"}
                    color={"white"}
                    bgImage="url('/asset/ogidiback.png')"
                    px={["15px", "2rem", "2rem", "2rem", "5rem"]}
                    flexDir="column"
                >
                    {/* Moblie Menu */}
                    <Flex
                        alignItems="center"
                        w={"100%"}
                        display={["flex", "flex", "flex", "none", "none"]}
                    >
                        <Flex w={"100%"} justifyContent="space-between" mt={"5"}>
                            <Text></Text>
                            <Text
                                justifySelf="center"
                                fontSize={["14px", "22px", "35px", 0, 0]}
                            >
                                OgidisPearl Project Limited
                            </Text>
                            <IconButton
                                color={"white"}
                                fontSize={["3xl", "3xl", "3.5rem", "none", "none"]}
                                variant={"none"}
                                position="relative"
                                top={"-3px"}
                                bottom={0}
                                right={"-10px"}
                                zIndex="10"
                                icon={toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
                                onClick={show}
                            />
                        </Flex>

                        {/* Mobile Toggle Menu */}

                        {toggle ? (
                            <Flex
                                w={"60%"}
                                h={"100vh"}
                                position="absolute"
                                right={[0, 0, 0, 0, 0]}
                                top={["2.9rem", "1.9rem", "3.5rem", "0rem", "0rem"]}
                                py={2}
                                flexDir="row"
                                color={"#ffff"}
                                bgColor={"#1d1f77"}
                                // fontSize={"18px"}
                                zIndex="10"
                                fontWeight={"semibold"}
                            >
                                <IconButton
                                    color={"white"}
                                    fontSize={["3xl"]}
                                    variant={"none"}
                                    position="relative"
                                    top={"-1rem"}
                                    bottom={0}
                                    right={10}
                                    zIndex="10"
                                    icon={
                                        toggle ? (
                                            <AiOutlineClose className={styles.icon} />
                                        ) : (
                                            < AiOutlineMenu />
                                        )
                                    }
                                    onClick={show}
                                />
                                <Flex
                                    gap={10}
                                    mt="4"
                                    pr={["0", "4rem", "0", "0", "0"]}
                                    flexDir="column"
                                    textAlign={"center"}
                                    alignContent="center"
                                    fontSize={["20px", "22px", "32px", 0, 0]}
                                    w={["100", "60%", "60%", "0", "0"]}
                                >
                                    <Link href="/">Home</Link>
                                    <Link href="/services">Services</Link>
                                    <Link href="/about">About Us</Link>
                                    <Link href="/contact" >
                                        Contact Us
                                    </Link>
                                </Flex>
                            </Flex>
                        ) : (
                            ""
                        )}
                    </Flex>

                    {/* Landing Page Of Home Section */}
                    <Flex flexDir="column">
                        <Text
                            fontSize={["24px", "32px", "40px", "60px", "80px"]}
                            w={["143px", "200px", "350px", "500px", "700px"]}
                            fontWeight={"semibold"}
                            pt={"2rem"}
                            pb={"1rem"}
                        >
                            {PageHeader[0].header}
                        </Text>
                        <Text
                            w={["300px", "400px", "700px"]}
                            h={["50px", "40px", "80px", "100px", "120px"]}
                            fontSize={["16px", "18px", "25px", "28px", "32px"]}
                        >
                            {PageHeader[0].tag}
                        </Text>
                    </Flex>

                    {/* Swipper Submenu */}
                    <Swipper />
                    {/* Border line */}
                    <Flex
                        w={"100%"}
                        top={"-52px"}
                        pos={"relative"}
                        borderTop={"2px"}
                        color={"white"}
                    ></Flex>
                </Flex>

                {/* services */}
                <Box
                    display={["none", "none", "flex", "flex", "flex"]}
                    width={['none', 'none', '730px', '966px']}
                    height={{
                        base: '57.47px',
                        sm: '3409px'
                    }}
                    position={'relative'}
                    top={'30px'}
                    ml='auto'
                    mr='auto'
                    alignContent='center'
                    justifyContent={'center'}
                    justifyItems='center'
                >
                    <Box1
                        id='solar'
                        src={services[0].image}
                        title={services[0].title}
                        text={services[0].text}
                        top={'0px'}
                    />
                    <Box2
                        id='procurement'
                        src={services[1].image}
                        title={services[1].title}
                        text={services[1].text}
                        top={'391px'}
                    />
                    <Box1
                        src={services[2].image}
                        title={services[2].title}
                        text={services[2].text}
                        top={'781px'}
                    />
                    <Box2
                        src={services[3].image}
                        title={services[3].title}
                        text={services[3].text}
                        top={'1172px'}
                    />
                    <Box1
                        src={services[4].image}
                        title={services[4].title}
                        text={services[4].text}
                        top={'1562px'}
                    />
                    <Box2
                        src={services[5].image}
                        title={services[5].title}
                        text={services[5].text}
                        top={'1953px'}
                    />
                    <Box1
                        id='tank'
                        src={services[6].image}
                        title={services[6].title}
                        text={services[6].text}
                        top={'2343px'}

                    />
                    <Box2
                        id='eng'
                        src={services[7].image}
                        title={services[7].title}
                        text={services[7].text}
                        top={'2734px'}
                    />
                    <Box1
                        id='manpower'
                        src={services[8].image}
                        title={services[8].title}
                        text={services[8].text}
                        top={'3124px'}
                    />

                </Box>
                {/* Mobile view */}
                <Box
                    display={
                        ["flex", "flex", "none", "none", "none"]
                    }
                    position={'relative'}
                    top={'40px'}
                    justifyContent={'center'}
                >
                    <VStack>
                        {services.map(
                            ({ id, image, title, text }) => {
                                return (
                                    <BoxMobile
                                        src={image}
                                        title={title}
                                        text={text}
                                        key={id}
                                    />
                                );
                            }
                        )}
                    </VStack>
                </Box>

            </Box >
            <Footer />
        </Box>
    )
}

export default Services