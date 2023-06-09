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
import { Avatar, Box, Button, Checkbox, Divider, Menu, MenuItem, Popover, TextField, Typography } from '@mui/material';
import AvtarImg from '../../assets/avtarImg.png'
import OpenArrow from '../../assets/openArrow.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function GroupTable() {

    const [open, setOpen] = useState(false)
    const [dotOpen, setdotOpen] = useState(false)

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
                        <MoreVertIcon onClick={e => setdotOpen(true)} sx={{ color: '#9CA3AF', cursor: 'pointer' }}>
                            
                        </MoreVertIcon>
                    </TableCell>

                    <Menu
                        id="demo-positioned-menu"
                        open={dotOpen}
                        elevation={1}
                        onClose={e => setdotOpen(false)}
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
                                color: '#00778B'
                            },
                        }} >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <BorderColorIcon/>
                                <Typography fontWeight={'bold'}>Edit Group</Typography>
                            </Box>

                        </MenuItem>

                        <MenuItem sx={{
                            '&:hover': {
                                color: '#00778B'
                            },
                        }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <ContentCopyIcon/>
                                <Typography fontWeight={'bold'}>Copy Paste</Typography>
                            </Box>
                        </MenuItem>

                        <MenuItem sx={{
                            '&:hover': {
                                color: '#00778B'
                            },
                        }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <DeleteOutlineIcon/>
                                <Typography fontWeight={'bold'}>Delet Group</Typography>
                            </Box>
                        </MenuItem>
                    </Menu>

                </TableRow>
            </>
        )
    };

    return (

        <Paper sx={{ width: '95%', mt: 4, mx: 4 }}>
            <TableContainer sx={{ maxHeight: 500, backgroundColor: 'transparent' }}>
                <Table stickyHeader aria-label="sticky table">

                    <TableHead>
                        <TableRow sx={{}}>
                            <TableCell></TableCell>
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
                            <TableCell sx={{ py: 1.1, display: 'flex', justifyContent: 'flex-end' }} colSpan={0}>

                                <Box onClick={e => setOpen(true)} gap={1} sx={{ color: '#00778B', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                    <Typography fontWeight={'500'}>Add Folder</Typography>
                                    <Box component={'img'} src={FolderAdd} />
                                </Box>

                                <Popover
                                    // id={id}
                                    open={open}
                                    // anchorEl={anchorEl}
                                    onClose={e => setOpen(false)}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Box width={'500px'} height={'auto'} >
                                        <Box px={7} py={7} >
                                            <Typography mb={1} color={'#1F2A37'} variant='h6' fontWeight={'500'} >Create A New Folder</Typography>
                                            <Divider sx={{ borderWidth: '1px' }} />
                                            <Typography mt={2} mb={1} color={'#1F2A37'} variant='h6' fontSize={'18px'} fontWeight={'bold'} >Folder Name</Typography>
                                            <TextField
                                                fullWidth
                                                id="outlined-read-only-input"
                                                defaultValue="Enter Folder Name"
                                                size="small"
                                                sx={{ color: '#9CA3AF', mb: 2, backgroundColor: '#F9FAFB' }}
                                                InputProps={{
                                                    readOnly: true,
                                                    sx: {
                                                        '& input': {
                                                            color: '#9CA3AF',
                                                        }
                                                    },
                                                    startAdornment: (
                                                        <FolderIcon fontSize="small" sx={{ mr: 1, color: '#6B7280' }} />
                                                    ),
                                                }}
                                            />
                                            <Button fullWidth variant='contained' sx={{ mt: 1, backgroundColor: '#00778B', borderRadius: '7px', '&:hover': { backgroundColor: '#00778B' } }} >Add Folder</Button>
                                            <Button fullWidth variant='outlined' sx={{ mt: 2, color: '#1F2A37', borderColor: '#1F2A37', borderRadius: '7px' }} >Add Folder</Button>
                                        </Box>
                                    </Box>

                                </Popover>
                            </TableCell>
                        </TableRow>

                    </TableHead>


                    <TableBody sx={{ backgroundColor: '#F6F6F6' }}>

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Typography sx={{ color: '#00778B' }} >47</Typography>
                                <Box component={'img'} src={Folder} />
                                <Link to='/highlvlGrop' style={{ color: '#6B7280' }}>
                                    <Typography sx={{ textDecoration: 'underline', fontSize: '12px', cursor: 'pointer' }}>High Level Groups</Typography>
                                </Link>
                            </Box>}
                        />

                        <TableRows
                            name={<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Typography sx={{ color: '#00778B' }} >23</Typography>
                                <Box component={'img'} src={Folder} />
                                <Link to='/highlvlGrop' style={{ color: '#6B7280' }}>
                                    <Typography sx={{ textDecoration: 'underline', fontSize: '12px', cursor: 'pointer' }}>Sales Training Groups</Typography>
                                </Link>
                            </Box>}
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

        </Paper>
    );
}