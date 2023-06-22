import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import person from '../../assets/person.png'
import PersonSmall from '../../assets/PersonSmall.png'
import person2 from '../../assets/person2.png'
import fb from '../../assets/fb.png'
import logoMain from '../../assets/logoMain.png'
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import SignInEmail from "./SignInEmail";


const SignIn = () => {
    return (
        <>
            <Grid container sx={{ overflow: 'hidden', height:{sm:'100vh', xs:'100%'}  }}>
                <Grid sm={6} xs={12}>
                    <Box component={'img'} src={person} sx={{display:{sm:'unset', xs:'none'}, height: { sm: '100vh', xs: '100%' }, width: '100%', objectFit: { sm: 'cover', xs: 'fill' } }} />
                    <Box component={'img'} src={PersonSmall} sx={{display:{sm:'none', xs:'unset'}, height: { sm: '100vh', xs: '100%' }, width: '100%', objectFit: { sm: 'cover', xs: 'fill' } }} />
                </Grid>
                
                <Grid sm={6} xs={12} sx={{ pl: { sm: 10, xs: 0 },height:{sm:'100vh', xs:'100%'} }}>
                   
                    <Box sx={{px:{sm:0, xs:2}, height:'100%', display: 'flex', flexDirection:'column', justifyContent: 'space-between', gap:{sm:0, xs:21}}}>
                       
                        <Box sx={{mt:{sm:10, xs:3},}}>
                           
                            <Box sx={{ mb: { sm: 10, xs: '2' },display:{sm:'unset', xs:'none'},width: '120px' }} component={'img'} src={logoMain} />
                            <Typography variant="h4" mb={4}>Welcome to Groupify</Typography>
                            <Typography variant="h6" sx={{ color: '#292D32' }} mb={3}>Login to Facebook to Continue</Typography>

                            <Box mb={3} sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width:{sm:'350px', xs:'auto'} ,
                                height: '40px',
                                borderRadius: '50px',
                                padding: '8px 20px',
                                backgroundColor: '#4C6DE3'
                            }}>
                                <Box component={'img'} src={fb} sx={{ width: '30px', height: '30px' }} />
                                <Typography variant="h6" sx={{ color: '#fff' }} >Continue as Roger</Typography>
                                <Avatar alt="Remy Sharp" src={person2} />
                            </Box>



                            <Link to='/signemail' style={{ textDecoration: 'none', color: '#3F83F8' }}>
                                <Typography component="span" sx={{fontWeight:{sm:'unset', xs:'bold'}}}>Login with Email</Typography>
                            </Link>
                        </Box>
                        <Box mb={0}>
                            <Typography  variant="h10" sx={{ color: 'gray' }}>Copyright 2022 | <span style={{ color: '#00778B' }}>Groupify</span></Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
export default SignIn;