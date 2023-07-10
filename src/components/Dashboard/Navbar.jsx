import { AppBar, Avatar, Box, Dialog, DialogContent, IconButton, InputBase, Menu, Toolbar, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { MenuItem } from "react-pro-sidebar";
import WidgetsIcon from '@mui/icons-material/Widgets';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import LikeVector from '../../assets/likeVector.png'
import SmallMainLogo from '../../assets/smallMainLogo.png'
import person2 from '../../assets/person2.png'
import SearchIcon from '@mui/icons-material/Search';
import { Search } from "@mui/icons-material";
import SidebarMui from "./SidebarMui";
import { Link } from "react-router-dom";
import ProfilePopUp from "./ProfilePopUp";

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const StyledToolbar2 = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))






const NavBar = (props) => {

    const [Open, setOpen] = useState(false)

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>

                <AppBar position="static" elevation={1} sx={{ backgroundColor: '#fff', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}>

                    <StyledToolbar sx={{ justifyContent: 'space-between' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2, gap: 1, ml: -1, display: 'flex', alignItems: 'center','&:hover':{backgroundColor:'unset'} }}
                        >
                            <Box>{props.icon}</Box>
                            <Box>{props.description}</Box>

                        </IconButton>


                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, color: '#00778B' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box component={'img'} src={LikeVector} />
                                <Typography sx={{fontWeight:'500'}}>Upgrade</Typography>
                            </Box>
                            <Avatar sx={{cursor:'pointer'}} onClick={e=>setOpen(true)} alt="Remy Sharp" src={person2} />
                        </Box>
                        <Dialog
                                    maxWidth="md" sx={{ '& .MuiDialog-paper': { width: 'auto' } }}
                                    open={Open}
                                    onClose={e => setOpen(false)}>

                                    <DialogContent sx={{ width: '100%', p: 0, m: 0 }}>
                                        <ProfilePopUp/>
                                    </DialogContent>

                                </Dialog>

                    </StyledToolbar>



                    <StyledToolbar2 sx={{ display: 'flex', px: 2.5, justifyContent: 'space-between', backgroundColor: '#00778B' }}>
                        <Link to="/">
                            <Box component={'img'} src={SmallMainLogo} />
                        </Link>
                        <SidebarMui />

                    </StyledToolbar2>


                </AppBar>
            </Box>
        </>
    )
}
export default NavBar;