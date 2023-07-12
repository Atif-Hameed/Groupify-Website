import React, { useState } from "react";
import SideBar from "../Dashboard/Sidebar";
import { AppBar, Box, Button, Checkbox, Grid, Menu, MenuItem, Typography, styled } from "@mui/material";
import NavBar from "../Dashboard/Navbar";
import DownNav from "../Dashboard/DownNav";
import Bottom from "../Dashboard/Bottom";
import PostIcon from '../../assets/post.png'
import PostTabs from "../Posts/PostTabs";
import MyAccountTabs from "./MyAccountTabs";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const StyledBox = styled(Box)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))




const MyAccount = () => {
    return (
        <>
            <Box sx={{ backgroundColor: '#F9FAFB' }}>

                <Grid container>
                    <Grid sm={2} xs={0}>
                        <SideBar />
                    </Grid>
                    <Grid sm={10} xs={12} height={'100vh'} position={'relative'}>
                        <NavBar icon={<AccountCircleOutlinedIcon sx={{ color: '#00778B' }} />} description={<Box sx={{display:'flex', alignItems:'center'}}>
                            <Typography sx={{ color: '#000',fontWeight:'bold' }}>My Account</Typography>
                            {/* <ChevronRightIcon sx={{color:'#00778B'}} /> */}
                            {/* <Typography fontSize={'16px'} color={'#00778B'} >Profile</Typography> */}
                        </Box>} />
                        <MyAccountTabs />
                        <StyledBox sx={{ position: 'absolute', bottom: '0', left: '0', width: '100%' }}>
                            <Bottom />
                        </StyledBox>
                    </Grid>
                </Grid>

            </Box>

        </>
    )
}

export default MyAccount;