import React from "react";
import SideBar from "../Dashboard/Sidebar";
// import Table from "./Table";
import { Box, Grid, Typography, styled, Avatar, Button, Checkbox } from "@mui/material";
import NavBar from "../Dashboard/Navbar";
import DownNav from "../Dashboard/DownNav";
import Bottom from "../Dashboard/Bottom";
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import TeamTable from "./TeamTable";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Folder from '../../assets/folder.png'
import FolderAdd from '../../assets/folderAdd.png'
import ArrowDown from '../../assets/arrowDown.png'
import AvtarImg from '../../assets/avtarImg.png'
import OpenArrow from '../../assets/openArrow.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Link } from 'react-router-dom';
import BackIcon from '../../assets/backicon.png'



const StyledBox = styled(Box)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))


const TableRows = (props) => {
    return (
        <>
            <TableRow>
                <TableCell sx={{ py: 0.7 }}>
                    <DragIndicatorIcon sx={{ color: '#9CA3AF' }} />
                </TableCell>
                <TableCell sx={{ py: 0.7 }}>
                    <Checkbox sx={{ color: '#D1D5DB' }} />
                </TableCell>
                <TableCell sx={{ py: 0.7 }}>
                    {props.name}
                </TableCell>
                <TableCell sx={{ py: 0.7 }}>
                    <Typography sx={{ fontSize: '14px' }}>25,872</Typography>
                </TableCell>
                <TableCell sx={{ py: 0.7 }}>
                    {props.owner}
                </TableCell>
                <TableCell sx={{ py: 0.7 }}>
                    {props.arrow}
                </TableCell>
                <TableCell align='right' sx={{ py: 0.7 }}>
                    <MoreVertIcon sx={{ color: '#9CA3AF' }} />
                </TableCell>

            </TableRow>
        </>
    )
};


const TeamGroupDataTable = () => {
    return (
        <>
        <Box px={3} mt={4}>
            <TableContainer sx={{ maxHeight: 500, backgroundColor: 'transparent' }}>
                <Table stickyHeader aria-label="sticky table">

                    <TableHead>
                        <TableRow sx={{}}>
                            <TableCell  sx={{ py: 0, width: '5%' }} colSpan={0}>
                                <Link to="/teamGroups">
                                <Box component={'img'} src={BackIcon} />
                                </Link>
                            </TableCell>
                            <TableCell sx={{ py: 0, width: '5%' }} align="start" colSpan={0}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox sx={{ color: '#D1D5DB' }} />
                                    <Box component={'img'} src={ArrowDown} />
                                </Box>
                            </TableCell>
                            <TableCell sx={{ py: 0, width: '30%' }} align="left" colSpan={0}>
                                Groups
                            </TableCell>
                            <TableCell sx={{ py: 0 }} align="left" colSpan={0}>
                                Members
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell  colSpan={0}>
                                
                            </TableCell>
                        </TableRow>

                    </TableHead>


                    <TableBody sx={{ backgroundColor: '#F6F6F6' }}>

                        

                        

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar alt="Remy Sharp" src={AvtarImg} sx={{ width: 34, height: 34 }} />
                                <Typography sx={{ fontSize: '12px', color: '#3F83F8', cursor: 'pointer' }}>MyMessenger Pro</Typography>
                            </Box>}
                            owner={<Button sx={{ backgroundColor: '#E5E5E5', textTransform: 'lowercase', color: '#000', fontWeight: '500', fontSize: '12px' }}>member</Button>}
                            arrow={<Box component={'img'} src={OpenArrow} />}
                        />

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar alt="Remy Sharp" src={AvtarImg} sx={{ width: 34, height: 34 }} />
                                <Typography sx={{ fontSize: '12px', color: '#3F83F8', cursor: 'pointer' }}>MyMessenger Pro</Typography>
                            </Box>}
                            owner={<Button sx={{ backgroundColor: '#00778B40', textTransform: 'lowercase', color: '#000', fontWeight: '500', fontSize: '12px', px: 1.8 }}>admin</Button>}
                            arrow={<Box component={'img'} src={OpenArrow} />}
                        />

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar alt="Remy Sharp" src={AvtarImg} sx={{ width: 34, height: 34 }} />
                                <Typography sx={{ fontSize: '12px', color: '#3F83F8', cursor: 'pointer' }}>MyMessenger Pro</Typography>
                            </Box>}
                            owner={<Button sx={{ backgroundColor: '#E5E5E5', textTransform: 'lowercase', color: '#000', fontWeight: '500', fontSize: '12px' }}>member</Button>}
                            arrow={<Box component={'img'} src={OpenArrow} />}
                        />

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar alt="Remy Sharp" src={AvtarImg} sx={{ width: 34, height: 34 }} />
                                <Typography sx={{ fontSize: '12px', color: '#3F83F8', cursor: 'pointer' }}>MyMessenger Pro</Typography>
                            </Box>}
                            owner={<Button sx={{ backgroundColor: '#E5E5E5', textTransform: 'lowercase', color: '#000', fontWeight: '500', fontSize: '12px' }}>member</Button>}
                            arrow={<Box component={'img'} src={OpenArrow} />}
                        />

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar alt="Remy Sharp" src={AvtarImg} sx={{ width: 34, height: 34 }} />
                                <Typography sx={{ fontSize: '12px', color: '#3F83F8', cursor: 'pointer' }}>MyMessenger Pro</Typography>
                            </Box>}
                            owner={<Button sx={{ backgroundColor: '#E5E5E5', textTransform: 'lowercase', color: '#000', fontWeight: '500', fontSize: '12px' }}>member</Button>}
                            arrow={<Box component={'img'} src={OpenArrow} />}
                        />

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar alt="Remy Sharp" src={AvtarImg} sx={{ width: 34, height: 34 }} />
                                <Typography sx={{ fontSize: '12px', color: '#3F83F8', cursor: 'pointer' }}>MyMessenger Pro</Typography>
                            </Box>}
                            owner={<Button sx={{ backgroundColor: '#E5E5E5', textTransform: 'lowercase', color: '#000', fontWeight: '500', fontSize: '12px' }}>member</Button>}
                            arrow={<Box component={'img'} src={OpenArrow} />}
                        />

                    </TableBody>
                </Table>
            </TableContainer>
            </Box>
        </>
    )
}


const TeamGroupData = () => {
    return (
        <>
            <Box sx={{ backgroundColor: '#F9FAFB' }}>

                <Grid container>
                    <Grid sm={2} xs={0}>
                        <SideBar />
                    </Grid>
                    <Grid sm={10} xs={12} height={'100vh'} position={'relative'}>
                        <NavBar icon={<AssignmentIndOutlinedIcon sx={{ color: '#00778B' }} />}
                            description={<Box sx={{ display: 'flex', alignItems: 'center' }} ><Typography sx={{ color: '#000' }}>Team</Typography>
                                <ChevronRightIcon sx={{ color: '#000', fontSize: '30px' }} />
                                <Typography sx={{ color: '#00778B' }}> High level groups </Typography>
                            </Box>} />
                        <DownNav />
                        <TeamGroupDataTable />
                        <StyledBox sx={{ position: 'absolute', bottom: '0', left: '0', width: '100%' }}>
                            <Bottom />
                        </StyledBox>
                    </Grid>
                </Grid>

            </Box>

        </>
    )
}

export default TeamGroupData;