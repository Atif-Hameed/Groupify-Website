import { Avatar, Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import person from "../../assets/person.png"
import person2 from '../../assets/person2.png'
import PersonSmall from '../../assets/PersonSmall2.png'
import fb from '../../assets/fb.png'
import logoMain from '../../assets/logoMain.png'
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <Grid container sx={{ height:{sm:'100vh', xs:'100%'} }}>
                <Grid sm={6} xs={12}>
                    <Box component={'img'} src={person} sx={{ display: { sm: 'unset', xs: 'none' }, height: '99vh', width: '100%', objectFit: 'cover' }} />
                    <Box component={'img'} src={PersonSmall} sx={{ display: { sm: 'none', xs: 'unset' }, height: { sm: '100vh', xs: '100%' }, width: '100%', objectFit: { sm: 'cover', xs: 'fill' } }} />
                </Grid>
                <Grid sm={6} xs={12} sx={{ pl: { sm: 10, xs: 0 }, height: '100%' }} position={'relative'}>
                    <Box sx={{ px: { sm: 0, xs: 3 }}}>
                        <Box mb={6} sx={{ display: { sm: 'unset', xs: 'none' }, mt: 10, width: '120px' }} component={'img'} src={logoMain} />
                        <Typography variant="h4" sx={{ fontSize: { sm: 'unset', xs: '30px' }, mb: { sm: 4, xs: 2 } }}>Sign Up to Groupify</Typography>


                        <Box sx={{ width:{sm:'70%', xs:'100%'},marginBottom: '20px' }}>
                            <Typography component={'label'}>First Name</Typography>
                            <TextField
                                sx={{ backgroundColor: '#E5E7EB', color: '#F9FAFB', mt: 1, mb:{sm:2,xs:1} }}
                                placeholder="John"
                                fullWidth
                                size="small"
                                margin="normal"
                            />

                            <Typography component={'label'}>Last Name</Typography>
                            <TextField
                                sx={{ backgroundColor: '#E5E7EB', color: '#F9FAFB', mt: 1,mb:{sm:2,xs:1} }}
                                placeholder="Doe"
                                fullWidth
                                size="small"
                                margin="normal"
                            />

                            <Typography component={'label'}>Your Email</Typography>
                            <TextField
                                sx={{ backgroundColor: '#E5E7EB', color: '#F9FAFB', mt: 1,mb:{sm:2,xs:1} }}
                                placeholder="name@example.com"
                                fullWidth
                                size="small"
                                margin="normal"
                            />

                            <Typography component={'label'}>Password</Typography>
                            <TextField
                                sx={{ backgroundColor: '#E5E7EB', color: '#F9FAFB', mt: 1 }}
                                placeholder="••••••••••"
                                type="password"
                                fullWidth
                                size="small"
                                margin="normal"
                            />


                            <FormGroup sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                                <FormControlLabel control={<Checkbox sx={{ color: 'lightgray' }} />} sx={{ color: '#6B7280' }} label="Remember me" />


                            </FormGroup>

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt:{sm:2, xs:1}, backgroundColor: '#00778B',
                                    '&:hover': {
                                        backgroundColor: '#00778B'
                                    }
                                }}
                            >
                                Sign Up
                            </Button>
                        </Box>

                        <Link to="/signUp" style={{ textDecoration: 'none', color: '#3F83F8' }}>
                            <Typography sx={{ color: '#6B7280' }}>Already have an account?

                                <Link to='/signemail' style={{ textDecoration: 'none' }}>
                                    <Box ml={0.5} component={'span'} color={'#00778B'} fontWeight={'bold'}>SignIn here</Box>
                                </Link>
                            </Typography>

                        </Link>


                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
export default SignUp;