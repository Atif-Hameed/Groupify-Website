import React from "react";
import SideBar from "../Dashboard/Sidebar";
// import Table from "./Table";
import { Box, Grid, Typography, styled } from "@mui/material";
import NavBar from "../Dashboard/Navbar";
import DownNav from "../Dashboard/DownNav";
import Bottom from "../Dashboard/Bottom";
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import RadioIocn from "../../assets/radioicon.png"
import RadioIocn2 from "../../assets/radioicon2.png"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom";


const StyledBox = styled(Box)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))



const TeamGroupContent = () => {
    return (
        <>
            <Paper sx={{ width: '95%', mt: 4, mx: 4 }}>
                <TableContainer sx={{ maxHeight: 500, backgroundColor: 'transparent', backgroundColor: '#F6F6F6' }}>
                    <Table stickyHeader aria-label="sticky table">

                        <TableHead>
                            <TableRow sx={{}}>

                                <TableCell sx={{ py: 0 }} align="start" colSpan={0}>
                                    <Typography fontWeight={'bold'} textAlign={'center'} >Status</Typography>
                                </TableCell>
                                <TableCell sx={{ py: 0 }} align="start" colSpan={0}>
                                    <Typography fontWeight={'bold'} textAlign={'center'}>Team Members</Typography>
                                </TableCell>

                                <TableCell sx={{ py: 0 }} align="left" colSpan={0}>
                                    <Typography fontWeight={'bold'} textAlign={''}>Pending Groups </Typography>
                                </TableCell>

                                <TableCell sx={{ py: 0 }} align="left" colSpan={0}>
                                    <Typography fontWeight={'bold'} textAlign={''}>Active Groups </Typography>
                                </TableCell>

                                <TableCell sx={{ py: 0 }} align="left" colSpan={0}>
                                    <Typography fontWeight={'bold'} textAlign={''}>Posts Made</Typography>
                                </TableCell>

                                <TableCell sx={{ py: 1.1, display: 'flex', justifyContent: 'flex-end' }} colSpan={0}>
                                    <Box gap={1} sx={{ color: '#00778B', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                        <Typography fontWeight={'bold'} >Add</Typography>
                                        <PersonAddAltIcon />
                                    </Box>
                                </TableCell>
                            </TableRow>

                        </TableHead>


                        <TableBody sx={{ backgroundColor: '#F6F6F6' }}>

                            <TableRow>
                                <TableCell sx={{justifyContent:'center', display:'flex'}}>
                                    <Box component={'img'} src={RadioIocn} />
                                </TableCell>

                                <TableCell>
                                    <Link to="/teamGroupData" style={{textDecoration:'none'}}>
                                    <Typography textAlign={'center'} sx={{color:'#4B5563'}}>Darlene Robertson</Typography>
                                    </Link>
                                </TableCell>

                                <TableCell>
                                    <Box gap={2} sx={{display:'flex', alignItems:'center'}}>
                                        <Typography sx={{color:'#3F83F8', textDecoration:'underline'}} >15</Typography>
                                        <OpenInNewIcon fontSize="small" />
                                    </Box>
                                </TableCell>

                                <TableCell>
                                    <Box gap={2} sx={{display:'flex', alignItems:'center'}}>
                                        <Typography sx={{color:'#3F83F8', textDecoration:'underline'}} >22</Typography>
                                        <OpenInNewIcon fontSize="small" />
                                    </Box>
                                </TableCell>

                                <TableCell>
                                    <Box gap={2} sx={{display:'flex', alignItems:'center'}}>
                                        <Typography sx={{color:'#3F83F8', textDecoration:'underline'}} >14</Typography>
                                        <OpenInNewIcon fontSize="small" />
                                    </Box>
                                </TableCell>

                                <TableCell sx={{display:'flex', justifyContent:'flex-end'}}>
                                    <MoreVertIcon sx={{color:'#9CA3AF'}} />
                                </TableCell>

                            </TableRow>


                            <TableRow>
                                <TableCell sx={{justifyContent:'center', display:'flex'}}>
                                    <Box component={'img'} src={RadioIocn2} />
                                </TableCell>

                                <TableCell>
                                    <Typography textAlign={'center'} sx={{color:'#4B5563'}}>Brooklyn Simmons</Typography>
                                </TableCell>

                                <TableCell>
                                    <Box gap={2} sx={{display:'flex', alignItems:'center'}}>
                                        <Typography sx={{color:'#3F83F8', textDecoration:'underline'}} >37</Typography>
                                        <OpenInNewIcon fontSize="small" />
                                    </Box>
                                </TableCell>

                                <TableCell>
                                    <Box gap={3} sx={{display:'flex', alignItems:'center'}}>
                                        <Typography sx={{color:'#3F83F8', textDecoration:'underline'}} >0</Typography>
                                        <OpenInNewIcon fontSize="small" />
                                    </Box>
                                </TableCell>

                                <TableCell>
                                    <Box gap={3} sx={{display:'flex', alignItems:'center'}}>
                                        <Typography sx={{color:'#3F83F8', textDecoration:'underline'}} >0</Typography>
                                        <OpenInNewIcon fontSize="small" />
                                    </Box>
                                </TableCell>

                                <TableCell sx={{display:'flex', justifyContent:'flex-end'}}>
                                    <MoreVertIcon sx={{color:'#9CA3AF'}} />
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
        </>
    )
}


const TeamGroup = () => {
    return (
        <>
            <Box sx={{ backgroundColor: '#F9FAFB' }}>

                <Grid container>
                    <Grid sm={2} xs={0}>
                        <SideBar />
                    </Grid>
                    <Grid sm={10} xs={12} height={'100vh'} position={'relative'}>
                        <NavBar icon={<AssignmentIndOutlinedIcon sx={{ color: '#00778B' }} />} description={<Typography sx={{ color: '#000' }}>Team</Typography>} />
                        <DownNav />
                        <TeamGroupContent/>
                        <StyledBox sx={{ position: 'absolute', bottom: '0', left: '0', width: '100%' }}>
                            <Bottom />
                        </StyledBox>
                    </Grid>
                </Grid>

            </Box>

        </>
    )
}

export default TeamGroup;