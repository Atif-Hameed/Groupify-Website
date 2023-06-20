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
import { Avatar, Box, Button, Checkbox, Divider, Popover, TextField, Typography } from '@mui/material';
import AvtarImg from '../../assets/avtarImg.png'
import OpenArrow from '../../assets/openArrow.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Link } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import TeamMobil from './TeamMobil';




export default function TeamTable() {

    const [Open, setOpen] = useState(false)

    return (
        <>
            <Box sx={{px:{sm:0, xs:2}}}>
                <Paper sx={{ width: { sm: '95%', xs: '100%' }, mt: 4, mx: { sm: 4, xs: 0 } }}>
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
                                        <Box onClick={e => setOpen(true)} gap={1} sx={{ color: '#00778B', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                            <Typography>Add</Typography>
                                            <PersonAddAltIcon />
                                        </Box>

                                        {/* ADD TEAM MEMBER */}

                                        <Popover
                                            // id={id}
                                            open={Open}
                                            // anchorEl={anchorEl}
                                            onClose={e => setOpen(false)}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'center',
                                            }}
                                        >
                                            <Box width={'500px'} height={'auto'} >
                                                <Box px={7} py={7} >
                                                    <Typography mb={1} color={'#1F2A37'} variant='h6' fontWeight={'500'} >Add Team Member</Typography>
                                                    <Divider sx={{ borderWidth: '1px' }} />
                                                    <Typography mt={2} mb={1} color={'#1F2A37'} variant='h6' fontSize={'18px'} fontWeight={'bold'} >Name</Typography>
                                                    <TextField
                                                        fullWidth
                                                        id="outlined-read-only-input"
                                                        defaultValue="Enter The Team Member Name"
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
                                                                <PersonIcon fontSize="small" sx={{ mr: 1, color: '#6B7280' }} />
                                                            ),
                                                        }}
                                                    />

                                                    <Typography mt={2} mb={1} color={'#1F2A37'} variant='h6' fontSize={'18px'} fontWeight={'bold'} >Email Address</Typography>
                                                    <TextField
                                                        fullWidth
                                                        id="outlined-read-only-input"
                                                        defaultValue="deviddar@gmail.com"
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
                                                                <MailIcon fontSize="small" sx={{ mr: 1, color: '#6B7280' }} />
                                                            ),
                                                        }}
                                                    />
                                                    <Button fullWidth variant='contained' sx={{ mt: 1, textTransform: 'capitalize', fontSize: '17px', backgroundColor: '#00778B', borderRadius: '7px', '&:hover': { backgroundColor: '#00778B' } }} >Add Team Member</Button>
                                                    <Button onClick={e => setOpen(false)} fullWidth variant='outlined' sx={{ mt: 2, color: '#1F2A37', borderColor: '#1F2A37', borderRadius: '7px' }} >Cancel</Button>
                                                </Box>
                                            </Box>

                                        </Popover>

                                    </TableCell>
                                </TableRow>

                            </TableHead>


                            <TableBody sx={{ backgroundColor: '#F6F6F6' }}>

                                <TableRow>
                                    <TableCell colSpan={5}>
                                        <Link to="/teamGroups" style={{ textDecoration: 'none' }}>
                                            <Box gap={3} sx={{ color: '#00778B', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                                <Box gap={1} sx={{ color: '#00778B', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                                    <Typography>Add</Typography>
                                                    <PersonAddAltIcon />
                                                </Box>
                                                <Typography textAlign={'center'} sx={{ color: '#265FFD', textDecoration: 'underline' }} >Invite Your First Team Member</Typography>
                                            </Box>
                                        </Link>
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>

           
        </>
    );
}