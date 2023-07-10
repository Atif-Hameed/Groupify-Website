import { Box, Typography } from "@mui/material";
import React from "react";
import ExtensionPic from "../../assets/extension.png"

const ExtensionMain = () => {
    return(
        <>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',width:'100%'}}>
            <Box component={'img'} sx={{height:{sm:'auto', xs:'300px', width:'auto'}}} src={ExtensionPic} />
        </Box>
        <Box sx={{display:{sm:'none', xs:'unset'}}}>
        <Typography px={2} textAlign={'center'} ><span style={{color:'#00778B', fontWeight:'bold'}} >Groupify Offer it's Extensions</span> <br/>Full Access & Functionality now available using our Browser Exentsion.</Typography>
        </Box>
        </>
    )
}

export default ExtensionMain;