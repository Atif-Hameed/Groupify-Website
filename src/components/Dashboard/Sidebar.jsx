import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import LogoMain from '../../assets/logoMain.png'
import { Box, Switch, styled } from "@mui/material";
import WidgetsIcon from '@mui/icons-material/Widgets';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { Link, Route } from "react-router-dom";
import PostIcon from '../../assets/post.png'
import LandingPage from "../landingPage/LandingPage";

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))


const SideBar = () => {
    return (
        <>
            <StyledBox>
                <Sidebar style={{ width: '100%', backgroundColor: '#fff', position: 'relative', height: '100vh' }}>
                    <Menu style={{}} >
                        <Box>
                            <MenuItem component={<Link to='/' />} style={{ marginBottom: '50px', marginTop: '10px' }}>
                                <Link to='/'>
                                    <Box sx={{ width: '115px', height: '38px', mx: 'auto' }} component={'img'} src={LogoMain} />
                                </Link>
                            </MenuItem>

                            <MenuItem component={<Link to='/dashboard' />} icon={<WidgetsIcon sx={{ color: '#00778B' }} />} > Dashboard </MenuItem>
                            <MenuItem component={<Link to='/groups' />} icon={<FolderOutlinedIcon sx={{ color: '#00778B' }} />} > Groups </MenuItem>
                            <MenuItem component={<Link to='/team' />} icon={<AssignmentIndOutlinedIcon sx={{ color: '#00778B' }} />} > Team </MenuItem>
                            <MenuItem component={<Link to='/posts' />} icon={<Box component={'img'} src={PostIcon} />} > Posts </MenuItem>
                            <MenuItem icon={<HandymanOutlinedIcon sx={{ color: '#00778B' }} />} > Admin Tools </MenuItem>
                        </Box>
                        <Box sx={{ position: 'absolute', bottom: '0', left: '0', width: '100%' }}>

                            <MenuItem icon={<ExtensionOutlinedIcon sx={{ color: '#00778B' }} />} > Extension </MenuItem>
                            <MenuItem component={<Link to='/myAccount' />} icon={<AccountCircleOutlinedIcon sx={{ color: '#00778B' }} />} > My Account </MenuItem>
                            <MenuItem style={{ backgroundColor: '#008399', color: '#fff' }} icon={<TextSnippetOutlinedIcon sx={{ color: '#fff' }} />} > Documentation </MenuItem>

                        </Box>

                    </Menu>
                </Sidebar>

            </StyledBox>
        </>
    )
}
export default SideBar;