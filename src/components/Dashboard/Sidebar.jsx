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
import { Link, Route, useLocation, useNavigate, useNavigation } from "react-router-dom";
import PostIcon from '../../assets/post.png'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LandingPage from "../landingPage/LandingPage";

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))


const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    '&:hover': {
        backgroundColor: 'red'
    }
}))

const SideBar = () => {
    const location = useLocation()
    console.log(location)
    const pathname = location.pathname
    return (
        <>
            <StyledBox>
                <Sidebar style={{ width: '100%', backgroundColor: '#fff', position: 'relative', height: '100vh' }}>
                    <Menu
                        menuItemStyles={{
                            button: ({ level, active, disabled }) => {
                                if (active)
                                    return {
                                        borderRadius: '5px',
                                        color: '#fff !important',
                                        backgroundColor: '#00778B !important ',
                                        '& .MuiSvgIcon-root': {
                                            color: '#fff',
                                        },
                                        '&:hover': {
                                            backgroundColor: '#00778B !important ',
                                            '& .MuiSvgIcon-root': {
                                                color: '#fff',
                                            },
                                        }
                                    };

                            },
                        }}
                    >
                        <Box sx={{ pb: 1, pl: '18px', pr: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 25.5 }}>
                            <Box>
                                <MenuItem component={<Link to='/' />} style={{ marginBottom: '50px', marginTop: '10px' }}>
                                    <Link to='/'>
                                        <Box sx={{ width: '115px', height: '38px', mx: 'auto' }} component={'img'} src={LogoMain} />
                                    </Link>
                                </MenuItem>

                                <MenuItem active={pathname === '/dashboard'} component={<Link to='/dashboard' />} icon={<WidgetsIcon sx={{ color: '#00778B' }} />} > Dashboard </MenuItem>
                                <MenuItem active={pathname === '/groups'} component={<Link to='/groups' />} icon={<FolderOutlinedIcon sx={{ color: '#00778B' }} />} > Groups </MenuItem>
                                <MenuItem active={pathname === '/team'} component={<Link to='/team' />} icon={<AssignmentIndOutlinedIcon sx={{ color: '#00778B' }} />} > Team </MenuItem>
                                <MenuItem active={pathname === '/posts'} component={<Link to='/posts' />} icon={<BorderColorIcon sx={{ color: '#00778B' }} />} > Posts </MenuItem>
                                <MenuItem icon={<HandymanOutlinedIcon sx={{ color: '#00778B' }} />} > Admin Tools </MenuItem>
                            </Box>

                            <Box sx={{}}>

                                <MenuItem active={pathname === '/extension'} component={<Link to='/extension' />} icon={<ExtensionOutlinedIcon sx={{ color: '#00778B' }} />} > Extension </MenuItem>
                                <MenuItem active={pathname === '/myAccount'} component={<Link to='/myAccount' />} icon={<AccountCircleOutlinedIcon sx={{ color: '#00778B' }} />} > My Account </MenuItem>

                            </Box>
                        </Box>

                        <Box sx={{ pl: '18px', pr: '50px', backgroundColor: '#008399', color: '#fff' }}>
                            <MenuItem disabled  style={{ color:'#fff' } } icon={<TextSnippetOutlinedIcon />} > Documentation </MenuItem>
                        </Box>

                    </Menu>
                </Sidebar>

            </StyledBox>
        </>
    )
}
export default SideBar;