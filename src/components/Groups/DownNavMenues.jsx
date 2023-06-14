import React from "react";
import DownNav from "../Dashboard/DownNav";
import AddIcon from "../../assets/addCircle.png"
import { useState } from "react";
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import FolderIcon from '@mui/icons-material/Folder';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Button, Divider, Grid, Menu, MenuItem, Popover, TextField, Typography, styled } from "@mui/material";

const DownNavMenues = () => {

    const [open, setOpen] = useState(false)
    const [FvrtOpen, setFvrtOpen] = useState(false)
    const [MoveOpen, setMoveOpen] = useState(false)
    const [EditOpen, setEditOpen] = useState(false)


    return(
        <>
            <DownNav icon1={<Box sx={{cursor:'pointer'}} onClick={e => setOpen(true)} component={'img'} src={AddIcon} />} icon2={<Box sx={{cursor:'pointer'}} onClick={e => setOpen(true)} component={'img'} src={AddIcon} />} icon3={<Box sx={{cursor:'pointer'}} onClick={e => setOpen(true)} component={'img'} src={AddIcon} />} />
            <Menu
                    id="basic-menu"
                    // anchorEl={anchorEl}
                    open={open}
                    onClose={e => setOpen(false)}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                      }}
                >
                    <MenuItem> {<Box onClick={e => setFvrtOpen(true)} sx={{display:'flex',gap:1, alignItems:'center', '&:hover':{color:'#00778B'}}} ><FolderIcon/>  <Typography>Add to Favorites</Typography> </Box>}</MenuItem>
                    <MenuItem> {<Box onClick={e => setMoveOpen(true)} sx={{display:'flex',gap:1, alignItems:'center', '&:hover':{color:'#00778B'}}} ><DriveFileMoveIcon/>  <Typography>Move to Folder</Typography> </Box>}</MenuItem>
                    <MenuItem> {<Box onClick={e => setEditOpen(true)} sx={{display:'flex',gap:1, alignItems:'center', '&:hover':{color:'#00778B'}}} ><BorderColorIcon/>  <Typography>Edit Name</Typography> </Box>}</MenuItem>
                    <MenuItem> {<Box onClick={e => setOpen(false)} sx={{display:'flex',gap:1, alignItems:'center', '&:hover':{color:'#00778B'}}} ><LogoutIcon/>  <Typography>Leave Group</Typography> </Box>}</MenuItem>
                </Menu>


                                 {/* Add to Favourite POPUP */}
                
                <Popover
                    // id={id}
                    open={FvrtOpen}
                    // anchorEl={anchorEl}
                    onClose={e => setFvrtOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Box width={'500px'} height={'auto'} >
                        <Box px={7} py={7} >
                            <Typography mb={1} color={'#1F2A37'} variant='h6' fontWeight={'500'} >Add to Favorites</Typography>
                            <Divider sx={{ borderWidth: '1px' }} />
                            <Typography mt={2} mb={1} color={'#1F2A37'} variant='h6' fontSize={'18px'} fontWeight={'bold'} >Select Group</Typography>
                            <TextField
                                fullWidth
                                id="outlined-read-only-input"
                                defaultValue="Select Group Name"
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
                            <Button fullWidth variant='contained' sx={{ mt: 1,textTransform:'capitalize',fontSize:'17px', backgroundColor: '#00778B', borderRadius: '7px', '&:hover': { backgroundColor: '#00778B' } }} >Add to Favourites</Button>
                            <Button onClick={e => setFvrtOpen(false)} fullWidth variant='outlined' sx={{ mt: 2, color: '#1F2A37', borderColor: '#1F2A37', borderRadius: '7px' }} >Cancel</Button>
                        </Box>
                    </Box>

                </Popover>


                                 {/* MOVE FOLDER POPUP */}
                
                <Popover
                    // id={id}
                    open={MoveOpen}
                    // anchorEl={anchorEl}
                    onClose={e => setMoveOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Box width={'500px'} height={'auto'} >
                        <Box px={7} py={7} >
                            <Typography mb={1} color={'#1F2A37'} variant='h6' fontWeight={'500'} >Move Group to Folder</Typography>
                            <Divider sx={{ borderWidth: '1px' }} />
                            <Typography mt={2} mb={1} color={'#1F2A37'} variant='h6' fontSize={'18px'} fontWeight={'bold'} >Select Folder Destination</Typography>
                            <TextField
                                fullWidth
                                id="outlined-read-only-input"
                                defaultValue="Select Folder Name"
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
                            <Button fullWidth variant='contained' sx={{ mt: 1,textTransform:'capitalize',fontSize:'17px', backgroundColor: '#00778B', borderRadius: '7px', '&:hover': { backgroundColor: '#00778B' } }} >Move to Folder</Button>
                            <Button onClick={e => setMoveOpen(false)} fullWidth variant='outlined' sx={{ mt: 2, color: '#1F2A37', borderColor: '#1F2A37', borderRadius: '7px' }} >Cancel</Button>
                        </Box>
                    </Box>

                </Popover>


                                 {/* EDIT GROUP POPUP */}
            
                <Popover
                    // id={id}
                    open={EditOpen}
                    // anchorEl={anchorEl}
                    onClose={e => setEditOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Box width={'500px'} height={'auto'} >
                        <Box px={7} py={7} >
                            <Typography mb={1} color={'#1F2A37'} variant='h6' fontWeight={'500'} >Edit Group Name</Typography>
                            <Divider sx={{ borderWidth: '1px' }} />
                            <Typography mt={2} mb={1} color={'#1F2A37'} variant='h6' fontSize={'18px'} fontWeight={'bold'} >Select Group Destination</Typography>
                            <TextField
                                fullWidth
                                id="outlined-read-only-input"
                                defaultValue="Select Group Name"
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

                            <Typography mt={2} mb={1} color={'#1F2A37'} variant='h6' fontSize={'18px'} fontWeight={'bold'} >Write New Name</Typography>
                            <TextField
                                fullWidth
                                id="outlined-read-only-input"
                                // defaultValue="Select Group Name"
                                placeholder="Write name here"
                                size="small"
                                sx={{ color: '#9CA3AF', mb: 2, backgroundColor: '#F9FAFB' }}
                                InputProps={{
                                    // readOnly: true,
                                    sx: {
                                        '& input': {
                                            color: '#9CA3AF',
                                        }
                                    },
                                    // startAdornment: (
                                    //     <FolderIcon fontSize="small" sx={{ mr: 1, color: '#6B7280' }} />
                                    // ),
                                }}
                            />
                            <Button fullWidth variant='contained' sx={{ mt: 1,textTransform:'capitalize',fontSize:'17px', backgroundColor: '#00778B', borderRadius: '7px', '&:hover': { backgroundColor: '#00778B' } }} >Move to Folder</Button>
                            <Button onClick={e => setEditOpen(false)} fullWidth variant='outlined' sx={{ mt: 2, color: '#1F2A37', borderColor: '#1F2A37', borderRadius: '7px' }} >Cancel</Button>
                        </Box>
                    </Box>

                </Popover>
        </>
    )
}

export default DownNavMenues;