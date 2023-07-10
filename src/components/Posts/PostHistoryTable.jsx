import React, { useState } from "react";
import { Box, Button, Checkbox, Grid, Menu, MenuItem, Typography, styled } from "@mui/material";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ArrowDown from '../../assets/arrowDown.png'
import EditIcon from '../../assets/edit.png'
import CopyIcon from '../../assets/copy.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


const PostHistoryTable = () => {

    const [open, setOpen] = useState(false)

    return (

        <Paper sx={{ width: '100%', mt: 4 }}>
            <TableContainer sx={{ maxHeight: 500, backgroundColor: 'transparent', backgroundColor: '#F6F6F6' }}>
                <Table  stickyHeader aria-label="sticky table">

                    <TableHead  >
                        <TableRow>

                            <TableCell sx={{ py: 0, width: '5%' }} align="start" colSpan={0}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox sx={{ color: '#D1D5DB' }} />
                                    <Box component={'img'} src={ArrowDown} />
                                </Box>
                            </TableCell>

                            <TableCell sx={{ py: 0, width: '5%' }} colSpan={0}></TableCell>

                            <TableCell sx={{ py: 0 }} align="start" colSpan={0}>
                                <Typography fontWeight={'bold'}>Posted Date</Typography>
                            </TableCell>

                            <TableCell sx={{ py: 0 }} align="start" colSpan={0}>
                                <Typography fontWeight={'bold'}>Post Details</Typography>
                            </TableCell>

                            <TableCell sx={{ py: 0 }} align="start" colSpan={0}>
                                <Typography fontWeight={'bold'}>Posted To</Typography>
                            </TableCell>

                            <TableCell sx={{ py: 0 }} align="start" colSpan={0}>
                                <Typography fontWeight={'bold'}>Last Edit</Typography>
                            </TableCell>

                            <TableCell sx={{ py: 0 }} align="start" colSpan={0}>
                                <Typography fontWeight={'bold'}>Posted By</Typography>
                            </TableCell>

                            <TableCell sx={{  }} colSpan={0}>
                               
                            </TableCell>
                        </TableRow>

                    </TableHead>


                    <TableBody sx={{ backgroundColor: '#F6F6F6' }}>

                        <TableRow >
                            <TableCell sx={{ py: 1 }} >
                                <Checkbox sx={{ color: '#D1D5DB' }} />
                            </TableCell>

                            <TableCell sx={{ py: 1 }}>
                                <Button variant="contained" 
                                sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:1, py: 0, px:1, backgroundColor: '#38AD9240', color: '#6B7280', fontSize: '12px', textTransform: 'lowercase' }} disableElevation>
                                    completed
                                    <Box component={'img'} src={ArrowDown} />
                                    </Button>
                            </TableCell>

                            <TableCell sx={{ py: 1 }}>
                                <Typography sx={{ color: '#6B7280' }}>5/5/2022 @ 10:30 AM</Typography>
                            </TableCell>

                            <TableCell sx={{ py: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box component={'img'} width={'18px'} src={CopyIcon} />
                                    <Typography sx={{fontWeight:'light', fontSize:'small'}}>This is the content of the post written...</Typography>
                                </Box>
                            </TableCell>

                            <TableCell sx={{ py: 1 }}>
                                <Typography sx={{ color: '#6B7280' }}>HighLevel Official Grou...</Typography>
                            </TableCell>

                            <TableCell sx={{ py: 1 }}>
                                <Typography sx={{ color: '#6B7280' }}>5/3/2022</Typography>
                            </TableCell>

                            <TableCell sx={{ py: 1 }}>
                                <Typography sx={{ color: '#6B7280' }}>Yanique Higgins</Typography>
                            </TableCell>
                            

                            <TableCell sx={{ py: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <MoreVertIcon onClick={e => setOpen(true)} sx={{ color: '#9CA3AF', cursor: 'pointer' }} />
                                </Box>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell sx={{ py: 1 }}>
                                <Checkbox sx={{ color: '#D1D5DB' }} />
                            </TableCell>

                            <TableCell sx={{ py: 1 }}>
                                <Button variant="contained" 
                                sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:1, py: 0, px:1, backgroundColor: '#38AD9240', color: '#6B7280', fontSize: '12px', textTransform: 'lowercase' }} disableElevation>
                                    completed
                                    <Box component={'img'} src={ArrowDown} />
                                    </Button>
                            </TableCell>

                            <TableCell sx={{ py: 1 }}>
                                <Typography sx={{ color: '#6B7280' }}>5/5/2022 @ 10:30 AM</Typography>
                            </TableCell>

                            <TableCell sx={{ py: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box component={'img'} width={'18px'} src={CopyIcon} />
                                    <Typography sx={{fontWeight:'light', fontSize:'small'}}>This is the content of the post written...</Typography>
                                </Box>
                            </TableCell>

                            <TableCell sx={{ py: 1 }}>
                                <Typography sx={{ color: '#6B7280' }}>HighLevel Official Grou...</Typography>
                            </TableCell>

                            <TableCell sx={{ py: 1 }}>
                                <Typography sx={{ color: '#6B7280' }}>5/3/2022</Typography>
                            </TableCell>

                            <TableCell sx={{ py: 1 }}>
                                <Typography sx={{ color: '#6B7280' }}>Yanique Higgins</Typography>
                            </TableCell>

                            <TableCell sx={{ py: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <MoreVertIcon onClick={e => setOpen(true)} sx={{ color: '#9CA3AF', cursor: 'pointer' }} />
                                    <Menu
                                        id="demo-positioned-menu"
                                        open={open}
                                        onClose={e => setOpen(false)}
                                        anchorOrigin={{
                                            vertical: 'center',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'center',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <MenuItem sx={{
                                            '&:hover': {
                                                color:'#00778B'
                                            },
                                        }} >
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <BorderColorOutlinedIcon  />
                                                <Typography fontWeight={'bold'}>Edit Post</Typography>
                                            </Box>

                                        </MenuItem>

                                        <MenuItem sx={{
                                            '&:hover': {
                                                color:'#00778B'
                                            },
                                        }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <FileCopyIcon  />
                                                <Typography fontWeight={'bold'}>Copy Paste</Typography>
                                            </Box>
                                        </MenuItem>

                                        <MenuItem sx={{
                                            '&:hover': {            
                                                color:'#00778B'
                                            },
                                        }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <DeleteForeverOutlinedIcon />
                                                <Typography  fontWeight={'bold'}>Delet Post</Typography>
                                            </Box>
                                        </MenuItem>
                                    </Menu>
                                </Box>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );
}

export default PostHistoryTable;