import { Avatar, Box, Button, Grid, Hidden, IconButton, Typography } from "@mui/material";
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
import '../../App.css'
import BorderColorIcon from '@mui/icons-material/BorderColor';


const ProfileInfo = (props) => {
    return (
        <>
            <Box mb={1} sx={{ backgroundColor: '#F9FAFB', width: { sm: '75%', xs: '100%' }, display: 'flex', alignItems: 'center', py: 1, px: { sm: 3, xs: 0 } }}>

                <Box sx={{ width: { sm: '40%', xs: '50%' } }}>
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 0.7, color: '#374151', }} >
                        {props.icon}
                        {props.Name}
                    </Box>
                </Box>

                <Box sx={{ width: { sm: '60%', xs: '50%' } }}>
                    <Typography color={'#6B7280'} fontSize={'14px'} >{props.des}</Typography>
                </Box>

            </Box>
        </>
    )
}


const AccountProfile = () => {
    return (
        <>
            <Box >
                <Grid container className="account_profile" sx={{ pt: { sm: 3, xs: 1 }, pb: 2, flexDirection: { sm: 'row', xs: 'column' } }}>

                    <Grid item sm={4} xs={12}>

                        <Box sx={{ display: 'flex', justifyContent: { sm: 'center', xs: 'flex-start' } }}>
                            <Box sx={{ display: 'flex', flexDirection: { sm: 'column', xs: 'row' }, gap: { sm: 0, xs: 2.5 } }}>
                                <Box sx={{ position: 'relative', mb: 3 }}>

                                    <Avatar alt="Remy Sharp" src={Woman} sx={{ border: '8px solid #DEF7EC', height: { sm: '145px', xs: '120px' }, width: { sm: '145px', xs: '120px' } }} />
                                    <IconButton sx={{ position: 'absolute', bottom: { sm: -2, xs: 0 }, left: { sm: '55%', xs: '65%' }, backgroundColor: '#00778B', p: 1 }}>
                                        <PhotoCameraOutlinedIcon sx={{ color: '#fff', fontSize: '20px' }} />
                                    </IconButton>

                                </Box>
                                <Box sx={{ mt: 1 }}>

                                    <Typography color={'#1F2A37'} variant="h4" sx={{ fontSize: { sm: '30px', xs: '26px' }, mb: { sm: 'auto', xs: 0.8 } }} fontWeight={'bold'} >Jenny Wilson</Typography>
                                    <Typography mb={1} color={'#6B7280'} sx={{ fontSize: { sm: '20px', xs: '17px' }, fontWeight: { sm: '300', xs: '500' } }}  >Interaction Designer</Typography>

                                    <Button variant="outlined" sx={{
                                        color: { sm: '#00778B', xs: '#fff' }, px: { sm: 5, xs: 1.5 }, py: 1,
                                        backgroundColor: { sm: 'transparent', xs: '#00778B' },
                                        textTransform: 'capitalize',
                                        fontSize: { sm: '15px', xs: '13px' }, borderRadius: '10px',
                                        borderColor: '#00778B'
                                    }} startIcon={<BorderColorIcon />} >Edit Profile</Button>
                                </Box>

                            </Box>
                        </Box>
                    </Grid>

                    <Grid item sm={8} xs={12}>
                        <Box mb={4}>
                            <Typography mb={2} color={'#1F2A37'} fontSize={'20px'} variant="h5" fontWeight={'bold'} >Your Information</Typography>
                            <Box>
                                <ProfileInfo icon={<PersonIcon sx={{ fontSize:{sm:'18px',xs:'20px'}}} />} Name={<Typography sx={{fontSize:{sm:'14px',xs:'16px'},fontWeight:{sm:'normal',xs:'500'}}} >Name</Typography>} des="David Der" />
                            </Box>
                            <Box>
                                <ProfileInfo icon={<EmailIcon sx={{ fontSize:{sm:'18px',xs:'20px'}}} />} Name={<Typography sx={{fontSize:{sm:'14px',xs:'16px'},fontWeight:{sm:'normal',xs:'500'}}}>Email Address</Typography>} des="demomail@domain.com" />
                            </Box>
                            <Box>
                                <ProfileInfo icon={<CallIcon sx={{ fontSize:{sm:'18px',xs:'20px'}}} />} Name={<Typography sx={{fontSize:{sm:'14px',xs:'16px'},fontWeight:{sm:'normal',xs:'500'}}}>Phone Number</Typography>} des="+1-202-555-0163" />
                            </Box>
                            <Box>
                                <ProfileInfo icon={<FacebookIcon sx={{ fontSize:{sm:'18px',xs:'20px'}}} />} Name={<Typography sx={{fontSize:{sm:'14px',xs:'16px'},fontWeight:{sm:'normal',xs:'500'}}}>Facebook</Typography>} des={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#38AD92' }}><CheckCircleIcon /> <Typography>Connected!</Typography></Box>} />
                            </Box>
                            <Box>
                                <Hidden smDown>
                                    <ProfileInfo icon={<LockIcon sx={{ fontSize:{sm:'18px',xs:'20px'}}} />} Name={<Typography sx={{fontSize:{sm:'14px',xs:'16px'},fontWeight:{sm:'normal',xs:'500'}}}>Password</Typography>} des="*************" />
                                </Hidden>
                            </Box>
                        </Box>

                        <Box>
                            <Typography mb={2} color={'#1F2A37'} variant="h5" fontSize={'20px'} fontWeight={'bold'} >Business Information</Typography>
                            <Box>
                                <ProfileInfo icon={<ApartmentIcon sx={{ fontSize:{sm:'18px',xs:'20px'}}} />} Name={<Typography sx={{fontSize:{sm:'14px',xs:'16px'}}}>Business Name</Typography>} des="The Der Agency" />
                            </Box>
                            <Box>
                                <ProfileInfo icon={<PlaceIcon sx={{fontSize:{sm:'18px',xs:'20px'}}} />} Name={<Typography sx={{fontSize:{sm:'14px',xs:'16px'},fontWeight:{sm:'normal',xs:'500'}}}>Business Address</Typography>} des="10565 Rancho Rd, La Mesa, California(CA), 91941" />
                            </Box>
                            <Box>
                                <ProfileInfo icon={<CallIcon sx={{ fontSize:{sm:'18px',xs:'20px'}}} />} Name={<Typography sx={{fontSize:{sm:'14px',xs:'16px'},fontWeight:{sm:'normal',xs:'500'}}}>Business Phone</Typography>} des="+1-202-555-0163" />
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default AccountProfile;