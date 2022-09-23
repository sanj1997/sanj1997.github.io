import { Box, Flex,Text, Highlight, Image } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from "react-github-calendar";
import { LightSpeed } from "react-reveal";
import Slide from 'react-reveal/Slide';
function Statistics() {
    
  return (
    <Box bg="#fae5f7" padding={"40px"} id="stats">
        <LightSpeed left><Text textAlign={"center"} color={"#2c1338"} fontSize={"5xl"}><Highlight styles={{color:"#e57cd8"}} query={"Statistics"}>My GitHub Statistics</Highlight></Text></LightSpeed>
           <Slide left><Box margin="auto" width={"70%"} mt="50px">
           <GitHubCalendar width="100%" username="sanj1997" />
           </Box></Slide>
           <Slide right><Box margin="auto" width={"60%"} mt="50px">
              <Image margin="auto" src='https://github-readme-streak-stats.herokuapp.com/?user=sanj1997' alt='Js Sanjay'/>
           </Box></Slide>
    </Box>
  )
}

export default Statistics