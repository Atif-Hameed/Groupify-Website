import { Avatar, Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import person from "../../assets/person.png"
import person3 from '../../assets/person3.png'
import PersonSmall from '../../assets/PersonSmall3.png'
import fb from '../../assets/fb.png'
import logoMain from '../../assets/logoMain.png'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";

const ForgotPass = () => {
    return (
        <>
            <Grid container sx={{ height:{sm:'100vh', xs:'100%'} }}>
                <Grid sm={6} xs={12}>
                    <Box component={'img'} src={person3} sx={{ display: { sm: 'unset', xs: 'none' }, height: '99vh', width: '100%', objectFit: 'cover' }} />
                    <Box component={'img'} src={PersonSmall} sx={{ display: { sm: 'none', xs: 'unset' }, height: { sm: '100vh', xs: '100%' }, width: '100%', objectFit: { sm: 'cover', xs: 'fill' } }} />
                </Grid>
                <Grid sm={6} xs={12} sx={{ pl: { sm: 10, xs: 0 }, height:'100%' }} position={'relative'}>
                    <Box sx={{px:{sm:0, xs:3},height:'100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap:{sm:0, xs:11} }} >
                        <Box>
                            <Link to="/">
                            <Box mb={10} sx={{ display: { sm: 'unset', xs: 'none' }, mt: 10, width: '120px' }} component={'img'} src={logoMain} />
                            </Link>
                            <Typography variant="h4" sx={{fontSize:{sm:'unset', xs:'25px'}}} mb={4}>Lost your password?</Typography>


                            <Box sx={{ width: { sm: '70%', xs: '100%' }, marginBottom: '20px' }}>
                                <Typography component={'label'}>Your Email</Typography>
                                <TextField
                                    sx={{ backgroundColor: '#E5E7EB', color: '#F9FAFB', mt: 1, mb: 3 }}
                                    placeholder="name@example.com"
                                    fullWidth
                                    margin="normal"
                                />


                                <FormGroup sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Checkbox defaultChecked color="primary" />
                                    <Typography sx={{ color: '#6B7280' }}>
                                        I accept the <Box component={'span'} sx={{ color: '#00778B', fontWeight: 'bold' }}>Terms & Conditions</Box>
                                    </Typography>
                                </FormGroup>

                                <Link to="/sendMailPass">
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
                                        Request link
                                    </Button>
                                </Link>

                            </Box>

                            <Link to="/signUp" style={{ textDecoration: 'none', color: '#3F83F8' }}>
                                <Typography sx={{ color: '#6B7280' }}>Not registered?
                                    <Link to='/signUp' style={{ textDecoration: 'none', marginLeft: 5 }}>
                                        <Box component={'span'} color={'#00778B'} fontWeight={'bold'}>Signup here</Box>
                                    </Link>
                                </Typography>
                            </Link>
                        </Box>

                        <Box mb={1}>
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
export default ForgotPass;