import { Box, Button, Flex, Highlight, Text } from "@chakra-ui/react"
const Navbar=()=>{
    return (
       <Flex position={"sticky"} top="0px" bg={"#dd6fd1"} p={["1rem"]} alignItems={"center"} justifyContent={"space-between"} h={["40px","40px","60px"]} border="1px solid red">
         <Box><Text fontSize={"lg"} fontWeight={"600"}><Highlight query={"JS"}>JS SANJAY</Highlight></Text></Box>
         <Box justifyContent={"space-between"} gap={"20px"} display={["none","none","flex"]}>
            <Button>HOME</Button>
            <Button>ABOUT</Button>
            <Button>SKILLS</Button>
            <Button>PROJECTS</Button>
            <Button>CONTACT</Button>
         </Box>
       </Flex>
    )
}
export default Navbar