import React from "react";
import SideBar from "../Dashboard/Sidebar";
import Table from "./Table";
import { Box, Grid, Typography, styled } from "@mui/material";
import NavBar from "../Dashboard/Navbar";
import DownNav from "../Dashboard/DownNav";
import Bottom from "../Dashboard/Bottom";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HighlvlContent from "./HighlvlContent";


const StyledBox = styled(Box)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))


const SalesGrop = () => {
    return (
        <>
            <Box sx={{ backgroundColor: '#F9FAFB' }}>

                <Grid container>
                    <Grid sm={2} xs={0}>
                        <SideBar />
                    </Grid>
                    <Grid sm={10} xs={12} height={'100vh'} position={'relative'}>
                        <NavBar icon={<FolderOutlinedIcon sx={{ color: '#00778B' }} />}
                            description={<Box sx={{ display: 'flex', alignItems: 'center' }} >
                                <Typography sx={{ color: '#000' }}>Groups </Typography>
                                <ChevronRightIcon sx={{ color: '#000', fontSize: '30px' }} />
                                <Typography sx={{ color: '#00778B' }}> Sales Training Groups </Typography></Box>} />
                        <DownNav />
                        <HighlvlContent />
                        <StyledBox sx={{ position: 'absolute', bottom: '0', left: '0', width: '100%' }}>
                            <Bottom />
                        </StyledBox>
                    </Grid>
                </Grid>

            </Box>

        </>
    )
}

export default SalesGrop;