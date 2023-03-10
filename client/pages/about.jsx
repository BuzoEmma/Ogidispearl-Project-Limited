import { Box, Flex, IconButton, Text, } from '@chakra-ui/react'
import React, { useState } from "react";
import Head from 'next/head'
import styles from "../styles/Home.module.css";
import {
  AboutBox,
  AboutBox2,
  AboutBox3,
  RedLine,
} from "../Components/GlobalComp";
import {
  PageHeader,
  about1,
  about2,
  about3,
} from "../Components/GlobalComp/constants";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import TopNav from "../Components/TopNav";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
import dynamic from "next/dynamic";

const Swipper = dynamic(
  () => {
    return import("../Components/GlobalComp/SwipperAbout");
  },
  { ssr: false }
);



const About = () => {
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
                      <AiOutlineMenu />
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
              {PageHeader[1].header}
            </Text>
            <Text
              w={["300px", "400px", "700px"]}
              h={["50px", "40px", "80px", "100px", "120px"]}
              fontSize={["16px", "18px", "25px", "28px", "32px"]}
            >
              {PageHeader[1].tag}
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

        {/* about 1 */}
        <Box
          position={"relative"}
          width={["287px", "287px", "620px", "900px", "1118px"]}
          height={["800px", "800px", "650px", "763px", "763px"]}
          mx={"auto"}
          top={["40px", "40px", "40px", "30px", "30px"]}
          alignContent='center'
          justifyContent={'center'}
          justifyItems='center'
        >
          <AboutBox
            id="offer"
            src={about1[0].image}
            title={about1[0].title}
            text={about1[0].text}
            top={{
              base: "0px",
              sm: "0px",
            }}
            titletop={["90px", "90px", "90px", "130px", "137px"]}
            texttop={["139px", "139px", "139px", "199px", "201px"]}
            linetop={["266px", "266px", "266px", "305px", "307.31px"]}
            linecolor={"#FCE19D"}
            left={{
              base: "0px",
              sm: "0px",
            }}
            imgw={["49px", "49px", "49px", "58.9px", "58.9px"]}
            imgh={{
              base: "53px",
              sm: "53px",
            }}
            imgt={["18px", "18px", "18px", "65px", "67px"]}
          />
          <AboutBox
            id="goal"
            src={about1[1].image}
            title={about1[1].title}
            text={about1[1].text}
            top={{
              base: "330px",
              sm: "0px",
            }}
            titletop={["85px", "85px", "85px", "130px", "137px"]}
            texttop={["155px", "155px", "155px", "180px", "185px"]}
            linetop={["238px", "238px", "238px", "307px", "307.31px"]}
            linecolor={"#17F27C"}
            left={["0px", "0px", "350px", "500px", "582px"]}
            imgw={["67px", "67px", "67px", "76px", "78px"]}
            imgh={["45px", "45px", "45px", "53px", "53.18px"]}
            imgt={["16px", "16px", "16px", "55px", "55px"]}
          />
          <AboutBox
            id="core"
            src={about1[2].image}
            title={about1[2].title}
            text={`Integrity 
            Commercial Awareness Service Excellence Local Capacity Development`}
            top={["660px", "660px", "330px", "416px", "416px"]}
            titletop={["96px", "96px", "96px", "129px", "129px"]}
            texttop={["143px", "143px", "143px", "190px", "193px"]}
            linetop={["249px", "249px", "249px", "306px", "306.31px"]}
            linecolor={"#01036C"}
            left={{
              base: "0px",
              sm: "0px",
            }}
            imgw={["52px", "52px", "52px", "68px", "69px"]}
            imgh={["38px", "38px", "38px", "46px", "46.82px"]}
            imgt={["34px", "34px", "34px", "55px", "55px"]}
          />
          <AboutBox
            id="objective"
            src={about1[3].image}
            title={about1[3].title}
            text={about1[3].text}
            // ht={["403px", "403px", "287px", "347px", "347px"]}
            top={["990px", "990px", "330px", "416px", "416px"]}
            titletop={["73px", "73px", "73px", "102px", "102px"]}
            texttop={["121px", "121px", "121px", "160px", "161px"]}
            linetop={["280px", "280px", "280px", "307px", "307.31px"]}
            linecolor={"#FFBFBF"}
            left={["0px", "0px", "350px", "500px", "582px"]}
            imgw={["78px", "78px", "78px", "105px", "105px"]}
            imgh={["80px", "80px", "80px", "102.8px", "102.8px"]}
            imgt={{
              base: "0px",
              sm: "0px",
            }}
          />
        </Box>
        {/* about 2  why choose us section*/}
        <Box
          id="choose"
          position={"relative"}
          width={["320px", "375px", "768px", "1024px", "100%"]}
          height={["1100px", "1100px", "780px", "706px", "706px"]}
          alignContent='center'
          justifyContent={'center'}
          justifyItems='center'
          mx={"auto"}
          top={["500px", "500px", "40px", "50px", "50px"]}
          background={["none", "#F8F8F8"]}
        >
          <AboutBox2 title={about2[0].header} text={about2[0].text} />

          {/* about3 */}
          <Box
            width={["320px", "320px", "930px", "1000px", "1350px"]}
            mx={"auto"}
            alignContent='center'
            justifyContent={'center'}
            justifyItems='center'
          >
            <AboutBox3
              text={about3[0].text}
              left={["none", "none", "180px", "150px", "187px"]}
              top={{
                base: "248px",
                sm: "240px",
              }}
            />
            <AboutBox3
              text={about3[1].text}
              left={["none", "none", "430px", "430px", "641px"]}
              top={{
                base: "287px",
                sm: "240px",
              }}
            />
            <AboutBox3
              text={about3[2].text}
              left={["none", "none", "130px", "725px", "1051px"]}
              top={["326px", "326px", "370px", "240px", "240px"]}
            />
            <AboutBox3
              text={about3[3].text}
              left={["none", "none", "430px", "95px", "151px"]}
              top={["365px", "365px", "370px", "370px", "410px"]}
            />
            <AboutBox3
              text={about3[4].text}
              w={["259px", "259px", "350px", "350px", "350px"]}
              left={["none", "none", "100px", "375px", "580px"]}
              top={["404px", "404px", "490px", "370px", "410px"]}
            />
            <AboutBox3
              text={about3[5].text}
              left={["none", "none", "450px", "725px", "1061px"]}
              top={["443px", "443px", "490px", "370px", "410px"]}
            />
            <AboutBox3
              text={about3[6].text}
              w={["259px", "600px"]}
              left={["none", "none", "130px", "220px", "100px"]}
              top={["482px", "482px", "600px", "490px", "563px"]}
            />
            <AboutBox3
              text={about3[7].text}
              w={["259px", "600px"]}
              left={["none", "none", "130px", "220px", "744px"]}
              top={["541px", "561px", "710px", "600px", "563px"]}
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default About;
