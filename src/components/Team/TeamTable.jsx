import * as React from 'react';
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
import { Avatar, Box, Button, Checkbox, Typography } from '@mui/material';
import AvtarImg from '../../assets/avtarImg.png'
import OpenArrow from '../../assets/openArrow.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Link } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';




export default function TeamTable() {

    return (

        <Paper sx={{ width: '95%', mt: 4, mx: 4 }}>
            <TableContainer sx={{ maxHeight: 500, backgroundColor: 'transparent', backgroundColor: '#F6F6F6' }}>
                <Table stickyHeader aria-label="sticky table">

                    <TableHead>
                        <TableRow sx={{}}>

                            <TableCell sx={{ py: 0 }} align="start" colSpan={0}>
                                <Typography>Status</Typography>
                            </TableCell>
                            <TableCell sx={{ py: 0 }} align="start" colSpan={0}>
                                <Typography>Team Members</Typography>
                            </TableCell>

                            <TableCell sx={{ py: 0 }} align="left" colSpan={0}>
                                <Typography>Pending Groups </Typography>
                            </TableCell>

                            <TableCell sx={{ py: 0 }} align="left" colSpan={0}>
                                <Typography>Active Groups </Typography>
                            </TableCell>

                            <TableCell sx={{ py: 1.1, display: 'flex', justifyContent: 'flex-end' }} colSpan={0}>
                                <Box gap={1} sx={{ color: '#00778B', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                    <Typography>Add</Typography>
                                    <PersonAddAltIcon />
                                </Box>
                            </TableCell>
                        </TableRow>

                    </TableHead>


                    <TableBody sx={{ backgroundColor: '#F6F6F6' }}>

                        <TableRow>
                            <TableCell colSpan={5}>
                                <Link to="/teamGroups" style={{textDecoration:'none'}}>
                                    <Box gap={3} sx={{ color: '#00778B', display: 'flex', alignItems: 'center', justifyContent:'center', cursor: 'pointer' }}>
                                        <Box gap={1} sx={{ color: '#00778B', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                            <Typography>Add</Typography>
                                            <PersonAddAltIcon />
                                        </Box>
                                        <Typography textAlign={'center'} sx={{color:'#265FFD',textDecoration:'underline'}} >Invite Your First Team Member</Typography>
                                    </Box>
                                </Link>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );
}