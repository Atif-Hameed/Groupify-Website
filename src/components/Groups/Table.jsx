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

export default function GroupTable() {
    
    const TableRows = (props) => {
        return (
            <>
                <TableRow>
                    <TableCell sx={{ py: 0.7 }}>
                        <DragIndicatorIcon sx={{ color: '#9CA3AF' }} />
                    </TableCell>
                    <TableCell sx={{ py: 0.7 }}>
                        <Checkbox sx={{color:'#D1D5DB'}}  />
                    </TableCell>
                    <TableCell sx={{ py: 0.7 }}>
                        {props.name}
                    </TableCell>
                    <TableCell sx={{ py: 0.7 }}>
                        <Typography sx={{fontSize:'14px'}}>25,872</Typography>
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

    return (

        <Paper sx={{ width: '95%',mt:4,mx:4}}>
            <TableContainer sx={{ maxHeight: 500, backgroundColor: 'transparent' }}>
                <Table stickyHeader aria-label="sticky table">
                   
                    <TableHead>
                        <TableRow sx={{}}>
                            <TableCell></TableCell>
                            <TableCell sx={{ py: 0, width: '5%' }} align="start" colSpan={0}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox sx={{color:'#D1D5DB'}}/>
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
                            <TableCell sx={{ py: 1.1, display: 'flex', justifyContent: 'flex-end' }} colSpan={0}>
                                <Box gap={1} sx={{ color: '#00778B', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                    <Typography>Add Folder</Typography>
                                    <Box component={'img'} src={FolderAdd} />
                                </Box>
                            </TableCell>
                        </TableRow>

                    </TableHead>


                    <TableBody sx={{backgroundColor:'#F6F6F6'}}>

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Typography sx={{ color: '#00778B' }} >47</Typography>
                                <Box component={'img'} src={Folder} />
                                <Link to='/highlvlGrop' style={{color:'#6B7280'}}>
                                <Typography sx={{ textDecoration: 'underline', fontSize: '12px', cursor: 'pointer' }}>High Level Groups</Typography>
                                </Link>
                            </Box>}
                        />

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Typography sx={{ color: '#00778B' }} >23</Typography>
                                <Box component={'img'} src={Folder} />
                                <Link to='/salesGrop' style={{color:'#6B7280'}}>
                                <Typography sx={{ textDecoration: 'underline', fontSize: '12px', cursor: 'pointer' }}>Sales Training Groups</Typography>
                                </Link>
                            </Box>}
                        />

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar alt="Remy Sharp" src={AvtarImg} sx={{ width: 34, height: 34 }}/>
                                <Typography sx={{ fontSize: '12px', color: '#3F83F8', cursor: 'pointer' }}>MyMessenger Pro</Typography>
                            </Box>}
                            owner={<Button sx={{ backgroundColor: '#E5E5E5', textTransform: 'lowercase', color: '#000', fontWeight: '500',fontSize:'12px' }}>member</Button>}
                            arrow={<Box component={'img'} src={OpenArrow} />}
                        />

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar alt="Remy Sharp" src={AvtarImg} sx={{ width: 34, height: 34 }}/>
                                <Typography sx={{ fontSize: '12px', color: '#3F83F8', cursor: 'pointer' }}>MyMessenger Pro</Typography>
                            </Box>}
                            owner={<Button sx={{ backgroundColor: '#00778B40', textTransform: 'lowercase', color: '#000', fontWeight: '500',fontSize:'12px',px:1.8 }}>admin</Button>}
                            arrow={<Box component={'img'} src={OpenArrow} />}
                        />

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar alt="Remy Sharp" src={AvtarImg} sx={{ width: 34, height: 34 }}/>
                                <Typography sx={{ fontSize: '12px', color: '#3F83F8', cursor: 'pointer' }}>MyMessenger Pro</Typography>
                            </Box>}
                            owner={<Button sx={{ backgroundColor: '#E5E5E5', textTransform: 'lowercase', color: '#000',fontWeight: '500',fontSize:'12px' }}>member</Button>}
                            arrow={<Box component={'img'} src={OpenArrow} />}
                        />

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar alt="Remy Sharp" src={AvtarImg} sx={{ width: 34, height: 34 }}/>
                                <Typography sx={{ fontSize: '12px', color: '#3F83F8', cursor: 'pointer' }}>MyMessenger Pro</Typography>
                            </Box>}
                            owner={<Button sx={{ backgroundColor: '#E5E5E5', textTransform: 'lowercase', color: '#000', fontWeight: '500',fontSize:'12px'}}>member</Button>}
                            arrow={<Box component={'img'} src={OpenArrow} />}
                        />

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar alt="Remy Sharp" src={AvtarImg} sx={{ width: 34, height: 34 }}/>
                                <Typography sx={{ fontSize: '12px', color: '#3F83F8', cursor: 'pointer' }}>MyMessenger Pro</Typography>
                            </Box>}
                            owner={<Button sx={{ backgroundColor: '#E5E5E5', textTransform: 'lowercase', color: '#000',fontWeight: '500',fontSize:'12px' }}>member</Button>}
                            arrow={<Box component={'img'} src={OpenArrow} />}
                        />

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar alt="Remy Sharp" src={AvtarImg} sx={{ width: 34, height: 34 }} />
                                <Typography sx={{ fontSize: '12px', color: '#3F83F8', cursor: 'pointer' }}>MyMessenger Pro</Typography>
                            </Box>}
                            owner={<Button sx={{ backgroundColor: '#E5E5E5', textTransform: 'lowercase', color: '#000', fontWeight: '500',fontSize:'12px'}}>member</Button>}
                            arrow={<Box component={'img'} src={OpenArrow} />}
                        />

                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );
}