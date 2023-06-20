import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import LogoMain from '../../assets/logoMain.png'
import WidgetsIcon from '@mui/icons-material/Widgets';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { IconButton, Typography, styled } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MenuIcon from '../../assets/menu2.png'
import { Link, useLocation } from 'react-router-dom';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))


export default function SidebarMui() {

    const location = useLocation()
    console.log(location)
    const pathname = location.pathname

    const icons = [WidgetsIcon, FolderOutlinedIcon];

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,overflow:'hidden', }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
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
                        <Box sx={{ pb: 1, pl: '18px', pr: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap:{sm:25.5, xs:39.75}  }}>
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

                        <Box sx={{ pl: '18px', pr:{sm:'50px',xs:'30px'} , backgroundColor: '#008399', color: '#fff', }}>
                            <MenuItem disabled  style={{ color:'#fff' } } icon={<TextSnippetOutlinedIcon />} > Documentation </MenuItem>
                        </Box>

                    </Menu>
                </Sidebar>
            </List>

        </Box>
    );

    return (

        <div>
            <StyledBox>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton sx={{px:0}} onClick={toggleDrawer(anchor, true)}>
                        {/* Replace with desired icon component */}
                        <Box component={'img'} src={MenuIcon} />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </StyledBox>
        </div >
       
    );
}