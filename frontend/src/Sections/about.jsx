import { Box,Flex, Highlight, Text, Image,UnorderedList,ListItem} from "@chakra-ui/react";
import { LightSpeed } from "react-reveal";
import Wobble from 'react-reveal/Wobble';
const About = () => {
  return (
    <Box
      bg="#f6dec8"
      padding={"50px"}
      textAlign={"center"}
      id="about"
    >
      <LightSpeed left>
      <Text color={"#412a4c"} fontSize={"5xl"}>
        <Highlight
          query={"About"}
          styles={{ color: "#e57cd8" }}
        >
          All About Me
        </Highlight>
      </Text></LightSpeed>
      <Flex marginTop={"50px"} gap="40px" justifyContent="space-evenly" alignItems={"center"} flexDirection={["column","column","column","row"]}>
        <Box width={["60%","60%","60%","30%"]}>
          <Wobble><Image
            src="https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"
            alt="GEEK"
          /></Wobble>
        </Box>
        <Box  width={["100%","100%","100%","60%"]}>
          <UnorderedList textAlign={"left"} fontSize="lg" color={"#412a4c"}>
            <ListItem>Hello! I am Js Sanjay. I specialise in creating beautiful, usable, and professional websites using the MERN Stack.</ListItem>
            <ListItem>I'm a passionate developer, with strong communication skills and good attention to detail, who writes efficient code.</ListItem>
            <ListItem>As I grow and flourish as a developer, one thing that keeps me going is my inquisitiveness to learn about new things and face the challenges coming ahead.</ListItem>
            <ListItem>One of the biggest strengths in me is that whenever I face a problem, I try to understand the cause of the problem rather than run behind the solution. This is because I'm a strong believer that the solution always lies within the problem.</ListItem>
            <ListItem>Whenever I'm not in front of my workplace, you will find me either cooking food or travelling around.</ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </Box>
  );
};
export default About;
