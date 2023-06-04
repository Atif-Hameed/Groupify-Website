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
import MenuIcon from '../../assets/menu2.png'

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))


export default function SidebarMui() {

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
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Sidebar style={{ width: '100%', backgroundColor: '#fff', position: 'relative', height: '100vh' }}>
                    <Menu style={{}} >
                        <Box>
                            <MenuItem style={{ marginBottom: '50px', marginTop: '10px' }}>
                                <Box sx={{ width: '115px', height: '38px', mx: 'auto' }} component={'img'} src={LogoMain} />
                            </MenuItem>

                            <MenuItem icon={<WidgetsIcon sx={{ color: '#00778B' }} />} > Dashboard </MenuItem>
                            <MenuItem icon={<FolderOutlinedIcon sx={{ color: '#00778B' }} />} > Groups </MenuItem>
                            <MenuItem icon={<AssignmentIndOutlinedIcon sx={{ color: '#00778B' }} />} > Team </MenuItem>
                            <MenuItem icon={<ExtensionOutlinedIcon sx={{ color: '#00778B' }} />} > Extension </MenuItem>
                            <MenuItem icon={<AccountCircleOutlinedIcon sx={{ color: '#00778B' }} />} > My Account </MenuItem>

                        </Box>
                        <Box sx={{ position: 'absolute', bottom: '0', left: '0', width: '100%' }}>

                            <MenuItem>
                                <Typography textAlign={'center'} sx={{ color: 'Gray/500', fontSize: '14px' }}>
                                    Copyright 2022 | <Box component={'span'} sx={{ color: '#00778B' }} >Groupify</Box>
                                </Typography>
                            </MenuItem>

                        </Box>

                    </Menu>
                </Sidebar>;
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