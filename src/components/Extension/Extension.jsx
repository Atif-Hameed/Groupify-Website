import React, { useState } from "react";
import SideBar from "../Dashboard/Sidebar";
import { AppBar, Box, Button, Checkbox, Grid, Menu, MenuItem, Typography, styled } from "@mui/material";
import NavBar from "../Dashboard/Navbar";
import DownNav from "../Dashboard/DownNav";
import Bottom from "../Dashboard/Bottom";
import PostIcon from '../../assets/post.png'
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import ExtensionSharpIcon from '@mui/icons-material/ExtensionSharp';
import ExtensionMain from "./ExtensionMain";



const StyledBox = styled(Box)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))




const Extension = () => {
    return (
        <>
            <Box sx={{ backgroundColor: '#F9FAFB' }}>

                <Grid container>
                    <Grid sm={2} xs={0}>
                        <SideBar />
                    </Grid>
                    <Grid sm={10} xs={12} height={'100vh'} position={'relative'}>
                        <NavBar icon={<ExtensionOutlinedIcon sx={{color:'#00778B'}} />} description={<Typography sx={{ color: '#000',fontSize:'18px',fontWeight:'bold' }}>Extension</Typography>} />
                        <DownNav ComponentName="Extensions"  ComponentIcon={<ExtensionSharpIcon />} />
                        <ExtensionMain/>
                        <StyledBox sx={{ position: 'absolute', bottom: '0', left: '0', width: '100%' }}>
                            <Bottom />
                        </StyledBox>
                    </Grid>
                </Grid>

            </Box>

        </>
    )
}

export default Extension;