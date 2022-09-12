import { Box, Text } from "@chakra-ui/react"
import styles from "../Styles/home.module.css"
import Typewriter from "typewriter-effect"
import { useState } from "react"
import logo from "../utils/logo.jpg"
const Home=()=>{
    const [state]=useState({
        title:"Hi",
        titleTwo:"I'm",
        titleThree:"Js Sanjay",
        image:`${logo}`
    })
    return(
        <Box className={styles.main}>
             <Box className={styles.homeimage}>
                <img className={styles.profileimage} src={state.image} alt="JS SANJAY" />
            </Box>
            <Box className={styles.homeintro}>
                  <h2><Box className={styles.title}>{state.title}</Box></h2>
                  <h2><Box className={styles.titleTwo}>{state.titleTwo}</Box></h2>
                  <h1><Box className={styles.titleThree}>{state.titleThree}</Box></h1>
    
               <Box className={styles.text}>
                  <Typewriter options={{autoStart:true,loop:true,delay:40,
                    strings:["Full Stack Developer.","Tech Enthusiast."]}}/>
               </Box>
               <Box>
                 <button className={styles.button}>Resume</button>
               </Box>
            </Box>
           
        </Box>
    )
}
export default Home