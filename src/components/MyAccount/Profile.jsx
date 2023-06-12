import { Avatar, Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Woman from '../../assets/woman2.jpg'
import Edit from '../../assets/post.png'
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import LockIcon from '@mui/icons-material/Lock';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PlaceIcon from '@mui/icons-material/Place';


const ProfileInfo = (props) => {
    return (
        <>
            <Box mb={1} sx={{ backgroundColor: '#F9FAFB', width: '75%', display: 'flex', alignItems: 'center', py: 1, px: 3 }}>

                <Box sx={{ width: '40%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7, color: '#374151', fontSize:'10px' }} >
                        {props.icon}
                        {props.Name}
                    </Box>
                </Box>

                <Box sx={{ width: '60%' }}>
                    <Typography color={'#6B7280'} fontSize={'14px'} >{props.des}</Typography>
                </Box>

            </Box>
        </>
    )
}


const AccountProfile = () => {
    return (
        <>
            <Box px={2} >
                <Grid container sx={{backgroundColor:'#fff',pt:3, pb:2}}>

                    <Grid item xs={4}>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Box>
                                <Box sx={{ position: 'relative', mb: 3 }}>
                                    <Avatar alt="Remy Sharp" src={Woman} sx={{ border: '8px solid #DEF7EC', height: '145px', width: '145px' }} />
                                    <IconButton sx={{ position: 'absolute', bottom: 2, left: '50%', backgroundColor: '#00778B', p: 1 }}>
                                        <PhotoCameraOutlinedIcon sx={{ color: '#fff', fontSize: '20px' }} />
                                    </IconButton>
                                </Box>
                                <Typography color={'#1F2A37'} variant="h4" fontSize={'30px'} fontWeight={'bold'} >Jenny Wilson</Typography>
                                <Typography mb={1} color={'#6B7280'} fontSize={'20px'} fontWeight={'300'} >Interaction Designer</Typography>
                                <Button variant="outlined" sx={{
                                    color: '#00778B', px: 5, py: 1,
                                    textTransform: 'capitalize',
                                    fontSize: '15px', borderRadius: '10px',
                                    borderColor: '#00778B'
                                }} startIcon={<Box component={'img'} src={Edit} height={'20px'} />} >Edit Profile</Button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={8}>
                        <Box mb={4}>
                            <Typography mb={2} color={'#1F2A37'} fontSize={'20px'} variant="h5" fontWeight={'bold'} >Your Information</Typography>
                            <Box>
                                <ProfileInfo icon={<PersonIcon sx={{fontSize:'18px'}} />} Name={<Typography fontSize={'14px'} >Name</Typography>} des="David Der" />
                            </Box>
                            <Box>
                                <ProfileInfo icon={<EmailIcon sx={{fontSize:'18px'}} />} Name={<Typography fontSize={'14px'}>Email Address</Typography>} des="demomail@domain.com" />
                            </Box>
                            <Box>
                                <ProfileInfo icon={<CallIcon sx={{fontSize:'18px'}} />} Name={<Typography fontSize={'14px'}>Phone Number</Typography>} des="+1-202-555-0163" />
                            </Box>
                            <Box>
                                <ProfileInfo icon={<FacebookIcon sx={{fontSize:'18px'}} />} Name={<Typography fontSize={'14px'}>Facebook</Typography>} des={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#38AD92' }}><CheckCircleIcon /> <Typography>Connected!</Typography></Box>} />
                            </Box>
                            <Box>
                                <ProfileInfo icon={<LockIcon sx={{fontSize:'18px'}} />} Name={<Typography fontSize={'14px'}>Password</Typography>} des="*************" />
                            </Box>
                        </Box>

                        <Box>
                            <Typography mb={2} color={'#1F2A37'} variant="h5" fontSize={'20px'} fontWeight={'bold'} >Business Information</Typography>
                            <Box>
                                <ProfileInfo icon={<ApartmentIcon sx={{fontSize:'18px'}} />} Name={<Typography fontSize={'14px'}>Business Name</Typography>} des="The Der Agency" />
                            </Box>
                            <Box>
                                <ProfileInfo icon={<PlaceIcon sx={{fontSize:'18px'}} />} Name={<Typography fontSize={'14px'}>Business Address</Typography>} des="10565 Rancho Rd, La Mesa, California(CA), 91941" />
                            </Box>
                            <Box>
                                <ProfileInfo icon={<CallIcon sx={{fontSize:'18px'}} />} Name={<Typography fontSize={'14px'}>Business Phone</Typography>} des="+1-202-555-0163" />
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default AccountProfile;