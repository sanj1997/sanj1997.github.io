import { Box, Flex, Highlight, Image, Text } from "@chakra-ui/react"
import myteresa from "../utils/myteresa.jpg"
import glamm from "../utils/glamm.png"
import toggle from "../utils/toggle.jpg"
import {BsFillEyeFill,BsGithub} from "react-icons/bs"

const Projects=()=>{
    return(
        <Box bg="#fff3ed" padding={"40px"} id="projects">
            <Text textAlign={"center"} color={"#2c1338"} fontSize={"5xl"}><Highlight styles={{color:"#e57cd8"}} query={"Creative"}>My Creative Portfolio Section</Highlight></Text>
            <Box display="grid" gridTemplateColumns={["repeat(1,1fr)","repeat(1,70%)","repeat(2,1fr)","repeat(3,1fr)"]} justifyContent="center" gap={["40px","40px","20px","20px"]} marginTop={"50px"} marginBottom={"20px"}>
                <Flex borderRadius={"22px"} flexDirection={"column"} bg="#fce5d8" alignItems={"center"} textAlign="left" padding={"15px"} paddingTop={"30px"} gap="20px">
                   <Image height={"40%"} width={"80%"} src={myteresa}/>
                   <Text fontSize={"2xl"} fontWeight="600">MyTheresa Clone</Text>
                   <Text fontSize={"sm"}>This is a collaborative project built by a team of four members. MyTheresa is an online store that sells a wide range of lifestyle products. I was responsible for implementing the section for kids. The Kids section includes a landing page and features like sorting and filtering, and the user can add the products to the cart. 
                   </Text>
                   <Text><Highlight styles={{color:"#e695de",fontWeight:"600"}} query={"Tech Stack:"}>Tech Stack: HTML, CSS, JavaScript</Highlight></Text>
                   <Flex justifyContent={"space-between"}  width={"30%"}><BsFillEyeFill fontSize={"30px"}/><BsGithub fontSize={"30px"}/></Flex>
                </Flex>
                <Flex borderRadius={"22px"} flexDirection={"column"} bg="#ffebbd" alignItems={"center"} textAlign="left" padding={"15px"} paddingTop={"30px"} gap="20px">
                   <Image height={"40%"} width={"80%"} src={glamm}/>
                   <Text fontSize={"2xl"} fontWeight="600">MyGlamm Clone</Text>
                   <Text fontSize={"sm"}>This is a collaborative project built by a team of 3 members. MyGlamm is an online store that sells a wide range of lifestyle products, especially for women. I was responsible for implementing the main landing page, login & signup, and user page. A user can edit his email ID and password after logging in. Also, the user can access his past and current ongoing orders. 
                   </Text>
                   <Text><Highlight styles={{color:"#e695de",fontWeight:"600"}} query={"Tech Stack:"}>Tech Stack: HTML, CSS, JavaScript</Highlight></Text>
                   <Flex justifyContent={"space-between"}  width={"30%"}><BsFillEyeFill fontSize={"30px"}/><BsGithub fontSize={"30px"}/></Flex>
                </Flex>
                <Flex  borderRadius={"22px"} flexDirection={"column"} bg="#fae5f7" alignItems={"center"} textAlign="left" padding={"15px"} paddingTop={"30px"} gap="20px">
                   <Image height={"40%"} width={"80%"} src={toggle}/>
                   <Text fontSize={"2xl"} fontWeight="600">toggle track Clone</Text>
                   <Text fontSize={"sm"}>This is a time management application that helps in keeping track of the daily routine. I have implemented features like login and signup and also the user can add projects on which he is working and clients for whom he is working, and also the user can delete a task as well. 
                   </Text>
                   <Text><Highlight styles={{color:"#e695de",fontWeight:"600"}} query={"Tech Stack:"}>Tech Stack: React JS, Chakra UI, CSS</Highlight></Text>
                   <Flex justifyContent={"space-between"}  width={"30%"}><BsFillEyeFill fontSize={"30px"}/><BsGithub fontSize={"30px"}/></Flex>
                </Flex>
            </Box>
        </Box>
    )
}
export default Projects