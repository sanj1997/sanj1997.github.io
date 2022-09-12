import { Box, Button, Flex, Highlight, Text } from "@chakra-ui/react"

const Navbar=()=>{
    return (
       <Flex position={"sticky"} top="0px" zIndex={"3"} bg={"rgb(44,19,56)"} p={["2rem"]} alignItems={"center"} justifyContent={"space-between"} h={["40px","40px","60px"]}>
         <Box><Text fontSize={"4xl"} fontWeight={"700"} color="#e57cd8">SANJAY</Text></Box>
         <Box justifyContent={"space-between"} gap={"20px"} display={["none","none","flex"]}>
            <Button _hover={"none"} _active={"none"} bg={"none"}><Text _hover={{color:"#e57cd8"}} color={"#fff3ed"}>HOME</Text></Button>
            <Button _hover={"none"} _active={"none"} bg={"none"}><Text _hover={{color:"#e57cd8"}} color={"#fff3ed"}>ABOUT</Text></Button>
            <Button _hover={"none"} _active={"none"} bg={"none"}><Text _hover={{color:"#e57cd8"}} color={"#fff3ed"}>SKILLS</Text></Button>
            <Button _hover={"none"} _active={"none"} bg={"none"}><Text _hover={{color:"#e57cd8"}} color={"#fff3ed"}>PROJECTS</Text></Button>
            <Button _hover={"none"} _active={"none"} bg={"none"}><Text _hover={{color:"#e57cd8"}} color={"#fff3ed"}>CONTACT</Text></Button>
         </Box>
       </Flex>
    )
}
export default Navbar