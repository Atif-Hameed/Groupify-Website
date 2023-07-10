import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Flask from '../../assets/filter.png'
import InfoCircle from '../../assets/infoCircle.png'
import AddIcon from '../../assets/addCircle.png'
import Radio from '../../assets/Radio.png'
import Rotate from '../../assets/rotate.png'
import ImageIcon from '../../assets/imgIcon.png'
import CcIcon from '../../assets/ccIcon.png'
import Facebook from '../../assets/facebook.png'
import Medal from '../../assets/medal.png'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Avatar, TextField } from '@mui/material';
import avatarAngle from '../../assets/avatarAngle.png'
import avatarImage from '../../assets/avatarImg2.png'
import Cards from './Cards';
import './index.css'


const StyledBox = styled(Box)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const StyledBox2 = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    borderColor: '#D1D5DB',
    borderWidth: '2px',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    color: 'black',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
            // '&:focus': {
            //     width: '20ch',
            // },
        },
    },
}));

export default function DownNavFix() {
    return (
        <>
            <StyledBox sx={{ flexGrow: 1 }}>
                <AppBar elevation={1} sx={{ boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)', backgroundColor: 'transparent' }} position="static">
                    <Box sx={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>


                            <Box component={'img'} src={Flask} />


                        </Box>



                        <Box sx={{ display: 'flex', color: '#000', alignItems: 'center', gap: 2 }}>
                            <Box sx={{ display: 'flex', color: '#000', alignItems: 'center', gap: 1 }}>
                                <Box component={'img'} src={Medal} />
                                <Typography>Favorites</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', color: '#000', alignItems: 'center', gap: 1 }}>
                                <Box component={'img'} src={AddIcon} />
                                <Box component={'img'} src={AddIcon} />
                                <Box component={'img'} src={AddIcon} />

                                <div className='avatarImg'>
                                    <Avatar sx={{
                                        position:'relative',
                                        width:'46px',
                                        height:'46px',
                                        fontSize:'15px',
                                        backgroundColor: '#00778B', '& > *': {
                                            display: 'none',
                                        },
                                    }}>CC</Avatar>
                                    <img className='avatarAngle' src={avatarAngle} />
                                </div>

                                
                                <div className='avatarImg'>
                                    <Avatar sx={{
                                        position:'relative',
                                        width:'46px',
                                        height:'46px',
                                        fontSize:'15px',
                                    }} src={avatarImage} />
                                    <img className='avatarAngle' src={avatarAngle} />
                                </div>

                            </Box>
                        </Box>

                    </Box>
                </AppBar>
            </StyledBox>

            <StyledBox2 sx={{ px: 2.5, mt: 2 }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2, gap: 1, display: 'flex', alignItems: 'center', }}
                >
                    <WidgetsIcon sx={{ color: '#000' }} />
                    <Typography sx={{ color: '#000' }}>Dashboard</Typography>
                </IconButton>
            </StyledBox2>





        </>
    );
}