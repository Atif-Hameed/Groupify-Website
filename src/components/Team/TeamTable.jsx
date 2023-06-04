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

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

export default function ColumnGroupingTable() {
    
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

                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );
}