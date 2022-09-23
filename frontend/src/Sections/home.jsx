import { Box, Flex, Image, Text,Button } from "@chakra-ui/react"
// import styles from "../Styles/home.module.css"
import Typewriter from "typewriter-effect"
import { useState } from "react"
import Pulse from 'react-reveal/Pulse';
import logo from "../utils/logo.jpg"
import Resume from "../utils/Js_Sanjay.pdf"
const Home=()=>{
    const [state]=useState({
        image:`${logo}`
    })
    return(
        <Flex id="home" height={["90vh","120vh","100vh","90vh"]} bg={"#2c1338"} flexDirection={["column","column","column","row"]} paddingTop={"20px"} paddingBottom={"20px"} justifyContent={"space-evenly"} alignItems="center">
             <Box width={["80%","80%","80%","40%"]} display={"flex"} justifyContent="center" alignItems={"center"}>
             <Image w={[`90%`,`80%`,`50%`,`60%`]} src={state.image} alt="JS SANJAY" />
             </Box>
             <Box width={["80%","95%","95%","60%"]} display={"flex"} flexDirection="column" justifyContent="center" alignItems={"center"} >
                 <Box textAlign="left" width={["100%","80%","70%","90%"]}>
                 <Text fontSize={["1xl","4xl","3xl","4xl"]} color={"#fce5d8"}>Hi, I'm</Text>
                 <Text fontSize={["2xl","4xl","5xl","5xl"]} color="#e57cd8" >JS SANJAY</Text>
                 <Text fontSize={["3xl","4xl","6xl","6xl"]} color={"#fce5d8"}><Typewriter options={{autoStart:true,loop:true,delay:40,
                    strings:["Full Stack Developer.","Tech Enthusiast."]}}/></Text>
                    <Button color={"white"} mt={"15px"} bg={"#e47cd7"} _active={"none"} _hover={{bg:"#4b3656"}}><a href={Resume} download>Resume</a></Button>
                 </Box>
             </Box>
        </Flex>
    )
}
export default Home