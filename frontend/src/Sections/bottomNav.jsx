import { Box, Flex, Text } from "@chakra-ui/react"
import {AiOutlineCopyrightCircle} from "react-icons/ai"
const BottomNav=()=>{
    return(
        <Flex bg={"#e57cd8"} padding={["5px","5px","10px","10px"]} >
           <Text fontSize={["xs","lg","lg","sm"]} display={"flex"} alignItems="center" textAlign={"left"} gap="2px">Desined and built by Js Sanjay.<AiOutlineCopyrightCircle/> 2022 All rights reserved.</Text>
        </Flex>
    )
}
export default BottomNav