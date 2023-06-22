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
import { Avatar, Box, Button, Checkbox, Divider, Typography } from '@mui/material';
import AvtarImg from '../../assets/avtarImg.png'
import Doc from '../../assets/docs.png'
import OpenArrow from '../../assets/openArrow.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link } from 'react-router-dom';

export default function BillingTable() {

    const TableRows = (props) => {
        return (
            <>
                <TableRow>
                    <TableCell sx={{ py: 0.7 }}>
                        <Typography>#123</Typography>
                    </TableCell>
                    <TableCell sx={{ py: 0.7 }}>
                        <Typography>Zen Pro</Typography>
                    </TableCell>
                    <TableCell sx={{ py: 0.7 }}>
                        <Typography>03/23/2022</Typography>
                    </TableCell>
                    <TableCell sx={{ py: 0.7 }}>
                        <Typography>$9/Per Month</Typography>
                    </TableCell>
                    <TableCell sx={{ py: 0.7 }}>
                        <Button variant="contained" sx={{ backgroundColor: '#E9F3FE' }}><Box component={'img'} src={Doc} height={'19px'} /></Button>
                    </TableCell>
                    <TableCell sx={{ py: 0 }}>
                        <Button variant="contained" sx={{ backgroundColor: '#E9F3FE' }}><RemoveRedEyeOutlinedIcon fontSize='small' sx={{ color: '#000' }} /></Button>
                    </TableCell>

                </TableRow>
            </>
        )
    };

    const SmallCards = () => {
        return (
            <>

                <Box width={'100%'} fontWeight={'bold'} sx={{ display: { sm: 'none', xs: 'unset' } }} >
                    <Box sx={{ display: 'flex', py: 2, px: 2 }}>
                        <Box width={'50%'}>
                            <Typography>Order</Typography>
                        </Box>
                        <Box width={'50%'}>
                            <Typography>#12345</Typography>
                        </Box>
                    </Box>

                    <Divider />

                    <Box sx={{ display: 'flex', py: 2, px: 2 }}>
                        <Box width={'50%'}>
                            <Typography>Transaction Details</Typography>
                        </Box>
                        <Box width={'50%'}>
                            <Typography>Zen Pro</Typography>
                        </Box>
                    </Box>

                    <Divider />

                    <Box sx={{ display: 'flex', py: 2, px: 2 }}>
                        <Box width={'50%'}>
                            <Typography>Date</Typography>
                        </Box>
                        <Box width={'50%'}>
                            <Typography>03/23/2022</Typography>
                        </Box>
                    </Box>

                    <Divider />

                    <Box sx={{ display: 'flex', py: 2, px: 2 }}>
                        <Box width={'50%'}>
                            <Typography>Amount</Typography>
                        </Box>
                        <Box width={'50%'}>
                            <Typography>$9/Per Month</Typography>
                        </Box>
                    </Box>

                    <Divider />

                    <Box sx={{ display: 'flex', gap: 3, py: 1, px: 2 }}>
                        <Button disableElevation variant="contained" sx={{ backgroundColor: '#E9F3FE' }}><Box component={'img'} src={Doc} height={'19px'} /></Button>
                        <Button disableElevation variant="contained" sx={{ backgroundColor: '#E9F3FE' }}><RemoveRedEyeOutlinedIcon fontSize='small' sx={{ color: '#000' }} /></Button>
                    </Box>
                </Box>

            </>
        )
    };

    return (
        <>
            <Paper sx={{ display: { sm: 'unset', xs: 'none' } }}>
                <TableContainer sx={{ maxHeight: 500, minHeight: 300, backgroundColor: 'transparent' }}>
                    <Table stickyHeader aria-label="sticky table">

                        <TableHead>
                            <TableRow sx={{}}>

                                <TableCell sx={{ py: 0, }} align="left" colSpan={0}>
                                    #Order
                                </TableCell>

                                <TableCell sx={{ py: 0 }} align="left" colSpan={0}>
                                    Transaction Details
                                </TableCell>

                                <TableCell sx={{ py: 0 }} align="left" colSpan={0}>
                                    Date
                                </TableCell>

                                <TableCell sx={{ py: 0 }} align="left" colSpan={0}>
                                    Amount
                                </TableCell>

                                <TableCell></TableCell>
                                <TableCell></TableCell>

                            </TableRow>

                        </TableHead>


                        <TableBody sx={{ backgroundColor: '#F6F6F6' }}>

                            <TableRows />
                            <TableRows />
                            <TableRows />
                            <TableRows />
                            <TableRows />
                            <TableRows />
                            <TableRows />
                            <TableRows />
                            <TableRows />
                            <TableRows />
                            {/* <TableRows /> */}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Box sx={{}}>
                <Paper sx={{ mb: 4 }}>
                    <SmallCards />
                </Paper>
                <Paper sx={{ mb: 4 }}>
                    <SmallCards />
                </Paper>
                <Paper sx={{ mb: 4 }}>
                    <SmallCards />
                </Paper>
                <Paper>
                    <SmallCards />
                </Paper>
            </Box>
        </>
    );
}