import { Box, Flex,Text, Highlight, Image } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from "react-github-calendar";
import { LightSpeed } from "react-reveal";
import Slide from 'react-reveal/Slide';
function Statistics() {
    
  return (
    <Box bg="#fae5f7" paddingTop={"40px"} paddingBottom={"50px"} paddingLeft="10px" paddingRight={"10px"} id="stats">
        <LightSpeed left><Text textAlign={"center"} color={"#2c1338"} fontSize={"5xl"}><Highlight styles={{color:"#e57cd8"}} query={"Statistics"}>My GitHub Statistics</Highlight></Text></LightSpeed>
           <Slide left><Box  width={["95%","95%","90%","60%"]} margin="auto" mt="50px">
           <GitHubCalendar width="100%" username="sanj1997" />
           </Box></Slide>
           <Flex  flexDirection={["column","column","row","row"]} width={["90%","90%","70%","70%"]} margin="auto" gap="30px" mt="50px">
              <Slide left><Box>
              <Image width={"100%"}  src='https://github-readme-streak-stats.herokuapp.com/?user=sanj1997' alt='Js Sanjay'/>
              </Box></Slide>
              <Slide right><Box>
             <Image width={"100%"}  src='https://github-readme-stats.vercel.app/api?username=sanj1997&show_icons=true&locale=en'/>
             </Box></Slide>
           </Flex>
    </Box>
  )
}

export default Statistics