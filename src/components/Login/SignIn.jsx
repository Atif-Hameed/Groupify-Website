import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import person from '../../assets/person.png'
import person2 from '../../assets/person2.png'
import fb from '../../assets/fb.png'
import logoMain from '../../assets/logoMain.png'
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import SignInEmail from "./SignInEmail";    
  

const SignIn = () => {
    return (
        <>
            <Grid container sx={{ overflow: 'hidden', height: '100vh' }}>
                <Grid sm={6} xs={12}>
                    <Box >
                        <img style={{ height: '100vh', width: '100%', objectFit: 'cover' }} component={'img'} src={person} />
                    </Box>
                </Grid>
                <Grid xs={6} pl={10} position={'relative'}>
                    <Box>
                        <Box mb={10} sx={{ mt: 10, width: '120px' }} component={'img'} src={logoMain} />
                        <Typography variant="h4" mb={4}>Welcome to Groupify</Typography>
                        <Typography variant="h6" sx={{ color: '#292D32' }} mb={3}>Login to Facebook to Continue</Typography>

                        <Box mb={3} sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '350px',
                            height: '40px',
                            borderRadius: '50px',
                            padding: '8px 20px',
                            backgroundColor: '#4C6DE3'
                        }}>
                            <Box component={'img'} src={fb} sx={{ width: '30px', height: '30px' }} />
                            <Typography variant="h6" sx={{ color: '#fff' }} >Continue as Roger</Typography>
                            <Avatar alt="Remy Sharp" src={person2} />
                        </Box>



                        <Link to='/signemail' style={{textDecoration:'none',color:'#3F83F8'}}>
                            <Typography component="span" >Login with Email</Typography>
                        </Link>

                        <div style={{ position: 'absolute', bottom: '2%', left: '10.5%' }}>
                            <Typography variant="h10" sx={{ color: 'gray' }}>Copyright 2022 | <span style={{ color: '#00778B' }}>Groupify</span></Typography>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
export default SignIn;