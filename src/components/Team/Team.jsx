import React from "react";
import SideBar from "../Dashboard/Sidebar";
// import Table from "./Table";
import { Box, Grid, Typography, styled } from "@mui/material";
import NavBar from "../Dashboard/Navbar";
import DownNav from "../Dashboard/DownNav";
import Bottom from "../Dashboard/Bottom";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import TeamTable from "../Groups/Table";


const StyledBox = styled(Box)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))


const Team = () => {
    return(
        <>
        <Box sx={{backgroundColor:'#F9FAFB'}}>
                
                <Grid container>
                    <Grid sm={2} xs={0}>
                        <SideBar/>
                    </Grid>
                    <Grid sm={10} xs={12} height={'100vh'} position={'relative'}>
                        <NavBar icon={<FolderOutlinedIcon sx={{ color: '#00778B' }} />}  description={<Typography sx={{ color: '#000' }}>Groups</Typography>} />
                        <DownNav/>
                        {/* <Table/> */}
                        <TeamTable/>
                        <StyledBox sx={{position:'absolute',bottom:'0',left:'0',width:'100%'}}>
                             <Bottom/>
                        </StyledBox>
                    </Grid>
                </Grid>

            </Box>
        
        </>
    )
}

export default Team;