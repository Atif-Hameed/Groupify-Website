import { Avatar, Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import person from "../../assets/person.png"
import person4 from '../../assets/person4.png'
import Sms from '../../assets/smsnoti.png'
import PersonSmall from '../../assets/PersonSmall.png'
import fb from '../../assets/fb.png'
import logoMain from '../../assets/logoMain.png'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";

const SendMailPass = () => {
    return (
        <>
            <Grid container sx={{height:{sm:'100vh', xs:'100%'} }}>
                <Grid sm={6} xs={12}>
                    <Box component={'img'} src={person4} sx={{ display: { sm: 'unset', xs: 'none' }, height: '99vh', width: '100%', objectFit: 'cover' }} />
                    <Box component={'img'} src={PersonSmall} sx={{ display: { sm: 'none', xs: 'unset' }, height: { sm: '100vh', xs: '100%' }, width: '100%', objectFit: { sm: 'cover', xs: 'fill' } }} />
                </Grid>
                <Grid sm={6} xs={12} sx={{ pl: { sm: 10, xs: 0 }, height: '100%' }} position={'relative'}>
                    <Box sx={{ px: { sm: 0, xs: 3 }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: { sm: 0, xs: 11 } }} >

                        <Box>
                            <Box mb={10} sx={{ display: { sm: 'unset', xs: 'none' }, mt: 10, width: '120px' }} component={'img'} src={logoMain} />
                            <Typography variant="h4" sx={{ fontSize: { sm: 'unset', xs: '22px' }, mb: { sm: 4, xs: 2 } }}>Check Your Email</Typography>

                            <Box sx={{ display: { sm: 'none', xs: 'unset' } }}>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="h8" sx={{ color: '#6B7280', }}>
                                        That Should Do The Trick
                                    </Typography>
                                </Box>
                                <Box mb={1} component={'img'} src={Sms} />
                            </Box>

                            <Box sx={{ width: { sm: '70%', xs: '100%' }, marginBottom: '20px' }}>
                                <Typography variant="h8" sx={{ color: '#6B7280', }}>
                                    We have sent a password reset link to:<br /><span style={{ color: '#00778B', fontWeight: '500' }} >example123@gmail.com</span>
                                </Typography>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        mt: 3, backgroundColor: '#00778B',
                                        '&:hover': {
                                            backgroundColor: '#00778B'
                                        }
                                    }}
                                >
                                    Resend Email
                                </Button>

                            </Box>

                            <Box>
                                <Typography >Didn’t receive it? Check your SPAM Folder or
                                    <Link to='/signin' style={{ textDecoration: 'none', marginLeft: 5 }}>
                                        <Box component={'span'} color={'#00778B'} fontWeight={'bold'}>Contact Us</Box>
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>

                        <Box >
                            <Link to="/signemail" style={{ textDecoration: 'none' }}>
                                <Box gap={0.5} sx={{ display: 'flex', alignItems: 'center', color: '#00778B' }}>
                                    <ArrowCircleLeftOutlinedIcon />
                                    <Typography variant="h10">Back to login </Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
export default SendMailPass;