import { Box,Button,Flex,Highlight,Text,Image } from "@chakra-ui/react"
import { useState } from "react"
import skills from "../utils/skills.js"
import { LightSpeed } from "react-reveal";
import Jump from "react-reveal/Jump"
const Skills=()=>{
    let details=skills()
    const [data,setData]=useState(details)
    const [req,setReq]=useState(details)
    console.log(req)
    // const [type,setType]=useState("All")
    const handleSkills=(type)=>{
    //    setType(t)
       console.log(data,type)
       let newData=data.filter((el)=>{
           if(type==="All")
           {
             return el
           }
           else
           {
             return el.tyepe===type||el.tyepe==="both"
           }
    })
       console.log(newData)
       setReq(newData)
    }
    return(
        <Box padding={"50px"} bg="#2c1338" id="skills">
           
            <LightSpeed left><Text textAlign={"center"} fontSize={"5xl"} color={"#fff3ed"}><Highlight query={"Technical"} styles={{color:"#e57cd8"}}>My Technical Skills</Highlight></Text></LightSpeed>
            <Flex marginTop={"30px"} flexDirection={"column"} justifyContent="space-evenly" alignItems={"center"}>
                <Flex width={["100%","80%","50%","30%"]} justifyContent={"space-evenly"}>
                <Button onClick={()=>handleSkills("All")} _active={"none"} color={"white"} _hover={{bg:"#564260"}} bg={"#e57cd8"}><Text>All</Text></Button>
                <Button onClick={()=>handleSkills("frontend")} _active={"none"} color={"white"} _hover={{bg:"#564260"}} bg={"#e57cd8"}><Text>Frontend</Text></Button>
                <Button onClick={()=>handleSkills("backend")} _active={"none"} color={"white"} _hover={{bg:"#564260"}} bg={"#e57cd8"}><Text>Backend</Text></Button>
                </Flex>
                <Box marginTop={"50px"} display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(4,1fr)","repeat(6,1fr)"]} gap={["25px","20px","30px","50px"]} textAlign={"center"} >
                     {req.map((el)=>{
                        return <>
                       <Jump><Flex cursor={"pointer"} borderRadius={"22px"} flexDirection={"column"} bg="#f7f7f7" justifyContent={"space-between"} padding="10px" height={"150px"}>
                            {el.name==="Chakra UI"? <Box style={{fontSize:"100px",color:"#69cace",margin:"auto"}}>{el.img}</Box>: <Image width={"40%"} margin="auto" src={el.img}/>}
                            <Text>{el.name}</Text>
                        </Flex></Jump>
                        </>
                     })}
                </Box>
            </Flex>
        </Box>
    )
}
export default Skills