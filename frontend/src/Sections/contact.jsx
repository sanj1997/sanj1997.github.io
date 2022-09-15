import { Box, Button, Flex, Highlight, Image, Input, Text, Textarea } from "@chakra-ui/react"
import {AiFillLinkedin,AiFillGithub,AiOutlineMail} from "react-icons/ai"
import {LightSpeed} from "react-reveal"
const Contact=()=>{
    return(
        <Box bg="#d9dffa" id="contacts" padding={"20px"} >
           <LightSpeed left><Text textAlign={"center"} color={"#2c1338"} fontSize="5xl"><Highlight styles={{color:"#e47cd7"}} query={"touch"}>Let's get in touch</Highlight></Text></LightSpeed>
            <Flex  justifyContent="space-between" mt={"50PX"} alignItems="center" flexDirection={["column","column","column","row"]}>
                <Flex  width={["80%","80%","80%","40%"]}>
                <Image src="https://i.pinimg.com/originals/83/42/0b/83420bb5f95923f8c13028a5053f4908.gif"/>
                </Flex>
                <Flex  width={["100%","100%","60%","50%"]} direction={"column"} alignItems="center" gap={"30px"}>
                    <Flex  justifyContent={"space-between"} width={["100%","80%","80%","60%"]}>
                        <Button size={["xs","md","md","lg","md"]} bg={"#00a0dc"} color="white" _active="none" _hover={"none"} gap={"10px"}><AiFillLinkedin/>Linkedin</Button>
                        <Button size={["xs","md","md","lg","md"]} bg={"#373b41"} color="white" _active="none" _hover={"none"} gap={"10px"}><AiFillGithub/>GitHub</Button>
                        <Button size={["xs","md","md","lg","md"]} bg={"#e53e3e"} color="white" _active="none" _hover={"none"} gap={"10px"}><AiOutlineMail/>Gmail</Button>
                    </Flex>
                    <Flex direction={"column"} alignItems="center" gap={"20px"} width={["100%","80%","80%","60%"]}>
                         <Input bg={"white"} type={"text"} placeholder="Full Name"/>
                         <Input bg={"white"} type={"text"} placeholder="Email"/>
                         <Input bg={"white"} type={"number"} placeholder="Mobile Number"/>
                         <Textarea h={"150px"} resize={"none"} bg={"white"} placeholder="Your Message"/>
                    </Flex>
                    <Button color={"white"} width={"60%"} bg={"#e57cd8"} _active="none" _hover={"none"}>Send Message</Button>
                </Flex>
            </Flex>
        </Box>
    )
}
export default Contact