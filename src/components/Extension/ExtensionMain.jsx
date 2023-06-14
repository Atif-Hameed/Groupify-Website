import { Box } from "@mui/material";
import React from "react";
import ExtensionPic from "../../assets/extension.png"

const ExtensionMain = () => {
    return(
        <>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',width:'100%'}}>
            <Box component={'img'} src={ExtensionPic} />
        </Box>
        </>
    )
}

export default ExtensionMain;