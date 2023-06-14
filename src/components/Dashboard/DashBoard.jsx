
import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";
import SideBar from "./Sidebar";
import NavBar from "./Navbar";
import DownNav from "./DownNav";
import Cards from "./Cards";
import Bottom from "./Bottom";
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import DownNavFix from "./DownNavFix";


const StyledBox = styled(Box)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))


const DashBoard = () => {
    return (
        <>
        
            <Box sx={{backgroundColor:'#F9FAFB'}}>

                <Grid container>
                    <Grid sm={2} xs={0}>
                        <SideBar/>
                    </Grid>
                    <Grid sm={10} xs={12} height={'100vh'} position={'relative'}>
                        <NavBar icon={<WidgetsOutlinedIcon sx={{ color: '#00778B' }} />}  description={<Typography sx={{ color: '#000' }}>DashBoard</Typography>} />
                        <DownNavFix/>
                        <Cards/>
                        <StyledBox sx={{position:'absolute',bottom:'0',left:'0',width:'100%'}}>
                             <Bottom/>
                        </StyledBox>
                    </Grid>
                </Grid>

            </Box>

        </>
    )
}
export default DashBoard;