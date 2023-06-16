import React from "react";
import SideBar from "../Dashboard/Sidebar";
import Table from "./Table";
import { Box, Button, Divider, Grid, Menu, MenuItem, Popover, TextField, Typography, styled } from "@mui/material";
import NavBar from "../Dashboard/Navbar";
import AddIcon from '../../assets/addCircle.png'
import GroupPic from '../../assets/groupPic.png'
import DownNav from "../Dashboard/DownNav";
import Bottom from "../Dashboard/Bottom";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { useState } from "react";
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import FolderIcon from '@mui/icons-material/Folder';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LogoutIcon from '@mui/icons-material/Logout';
import DownNavMenues from "./DownNavMenues";



const StyledBox = styled(Box)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))


const Groups = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Box sx={{ backgroundColor: '#F9FAFB' }}>

                <Grid container>
                    <Grid sm={2} xs={0}>
                        <SideBar />
                    </Grid>
                    <Grid sm={10} xs={12} height={'100vh'} position={'relative'}>
                        <NavBar icon={<FolderOutlinedIcon sx={{ color: '#00778B' }} />} description={<Typography sx={{ color: '#000' }}>Groups</Typography>} />

                        <DownNavMenues />

                        <Box sx={{ display: { sm: 'unset', xs: 'none' } }}>
                            <Table />
                        </Box>

                        <Box  sx={{ display: { sm: 'none', xs: 'unset' } }}>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', py: 8 }}>
                                <Box component={'img'} src={GroupPic} />
                            </Box>
                            <Typography textAlign={'center'} sx={{fontSize:'16px', px:3}}><span style={{color:'#00778B',fontWeight:'500'}}>Portal Access to this feature is coming soon!</span>  Full Access & Functionality now available using our Browser Exentsion.</Typography>
                        </Box>

                        <StyledBox sx={{ position: 'absolute', bottom: '0', left: '0', width: '100%' }}>
                            <Bottom />
                        </StyledBox>
                    </Grid>
                </Grid>


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
            </Box>

        </>
    )
}

export default Groups;