import { Box, Button, Flex, Highlight, Menu, Text } from "@chakra-ui/react"
import MenuComp from "../Components/menu"
import { Link } from 'react-scroll';
const Navbar=()=>{
    return (
       <Flex position={"sticky"} top="0px" zIndex={"3"} bg={["#fce5d8","#fce5d8","rgb(44,19,56)"]} p={["2rem"]} alignItems={"center"} justifyContent={"space-between"} h={["40px","40px","60px"]}>
         <Box><Text fontSize={"4xl"} fontWeight={"700"} color="#e57cd8">SANJAY</Text></Box>
         <Box justifyContent={"space-between"} gap={"20px"} display={["none","none","flex"]}>
         <Link activeClass="active" to="home" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}><Button _hover={"none"} _active={"none"} bg={"none"}><Text _hover={{color:"#e57cd8"}} color={"#fff3ed"}>HOME</Text></Button></Link>
         <Link activeClass="active" to="about" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}><Button _hover={"none"} _active={"none"} bg={"none"}><Text _hover={{color:"#e57cd8"}} color={"#fff3ed"}>ABOUT</Text></Button></Link>
         <Link activeClass="active" to="skills" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}><Button _hover={"none"} _active={"none"} bg={"none"}><Text _hover={{color:"#e57cd8"}} color={"#fff3ed"}>SKILLS</Text></Button></Link>
         <Link activeClass="active" to="projects" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}><Button _hover={"none"} _active={"none"} bg={"none"}><Text _hover={{color:"#e57cd8"}} color={"#fff3ed"}>PROJECTS</Text></Button></Link>
         <Link activeClass="active" to="contacts" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}><Button _hover={"none"} _active={"none"} bg={"none"}><Text _hover={{color:"#e57cd8"}} color={"#fff3ed"}>CONTACT</Text></Button></Link>
         </Box>
         <Box display={["flex","flex","none"]}>
            <MenuComp/>
         </Box>
       </Flex>
    )
}
export default Navbar