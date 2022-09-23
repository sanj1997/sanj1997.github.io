import { Box, Button, Flex, FormControl, Highlight, Image, Input, Text, Textarea } from "@chakra-ui/react"
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
                {/* https://github.com/sanj1997 */}
                <Flex  width={["100%","100%","60%","50%"]} direction={"column"} alignItems="center" gap={"30px"}>
                    <Flex  justifyContent={"space-between"} width={["100%","80%","80%","60%"]}>
                        <a href="https://www.linkedin.com/in/js-sanjay-32a4531b0/"><Button size={["xs","md","md","lg","md"]} bg={"#00a0dc"} color="white" _active="none" _hover={"none"} gap={"10px"}><AiFillLinkedin/>Linkedin</Button></a>
                        <a href="https://github.com/sanj1997"><Button size={["xs","md","md","lg","md"]} bg={"#373b41"} color="white" _active="none" _hover={"none"} gap={"10px"}><AiFillGithub/>GitHub</Button></a>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"><Button size={["xs","md","md","lg","md"]} bg={"#e53e3e"} color="white" _active="none" _hover={"none"} gap={"10px"}><AiOutlineMail/>Gmail</Button></a>
                    </Flex>
                   <form action="https://formsubmit.co/mname8741@gmail.com" method="POST" direction={"column"} style={{minWidth:"290px",width:"60%"}}>
                   <Flex flexDirection={"column"} gap="20px" alignItems="center" width={["100%","100%","100%","100%"]} m="auto">
                         <Input bg={"white"} name="name" type={"text"} placeholder="Full Name"/>
                         <Input bg={"white"} name="email" type={"email"} placeholder="Email"/>
                         <Input bg={"white"} name="number" type={"number"} placeholder="Mobile Number"/>
                         <Textarea type="text" name="message" h={"150px"} resize={"none"} bg={"white"} placeholder="Your Message"/>
                         <Button type="submit" color={"white"} width={"100%"} bg={"#e57cd8"} _active="none" _hover={"none"} m="auto">Send Message</Button>
                    </Flex>
                   </form>
                </Flex>
            </Flex>
        </Box>
    )
}
export default Contact