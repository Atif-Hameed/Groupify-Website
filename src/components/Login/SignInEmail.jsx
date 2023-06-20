import { Avatar, Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import person from "../../assets/person.png"
import person2 from '../../assets/person2.png'
import fb from '../../assets/fb.png'
import logoMain from '../../assets/logoMain.png'
import PersonSmall from '../../assets/PersonSmall2.png'
import { Link } from "react-router-dom";

const SignInEmail = () => {
    return (
        <>
            <Grid container sx={{ height: '100vh' }}>
                <Grid sm={6} xs={12}>
                    <Box component={'img'} src={person} sx={{display:{sm:'unset', xs:'none'}, height: '99vh', width: '100%', objectFit: 'cover'}} />
                    <Box component={'img'} src={PersonSmall} sx={{display:{sm:'none', xs:'unset'}, height: { sm: '100vh', xs: '100%' }, width: '100%', objectFit: { sm: 'cover', xs: 'fill' } }} />
                </Grid>
                <Grid sm={6} xs={12} sx={{pl:{sm:10, xs:0}}}>
                    <Box sx={{px:{sm:0, xs:3}}}>
                        <Box mb={10} sx={{display:{sm:'unset', xs:'none'}, mt: 10, width: '120px' }} component={'img'} src={logoMain} />
                        <Typography variant="h4" sx={{fontSize:{sm:'unset', xs:'25px'}}} mb={4}>Sign in to Groupify</Typography>


                        <Box sx={{width:{sm:'70%', xs:'100%'},marginBottom:'20px'}}>
                            <Typography component={'label'}>Your Email</Typography>
                            <TextField
                            sx={{backgroundColor:'#E5E7EB',color:'#F9FAFB',mt:1,mb:3}}
                                placeholder="name@example.com"
                                fullWidth
                                size="small"
                                margin="normal"
                            />
                            <Typography component={'label'}>Your Password</Typography>
                            <TextField
                            sx={{backgroundColor:'#E5E7EB',color:'#F9FAFB',mt:1}}    
                            placeholder="••••••••••"
                                type="password"
                                fullWidth
                                size="small"
                                margin="normal"
                            />
                            
                            <FormGroup sx={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                                
                                <FormControlLabel control={<Checkbox sx={{color:'lightgray'}} />} sx={{color:'#6B7280'}}  label="Remember me" />
                                
                                <Link to="/forgotPass" style={{textDecoration:'none',color:'#00778B'}}>
                                    <Typography component={'span'} variant="h6" >Lost password?</Typography>
                                </Link>
                            </FormGroup>

                            <Link to='/dashboard'>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{ mt: 3,backgroundColor:'#00778B',
                                '&:hover':{
                                    backgroundColor:'#00778B'
                                }
                             }}
                            >
                               Login to your account
                            </Button>
                            </Link>
                        </Box>

                        <Link  to="/signUp" style={{textDecoration:'none',color:'#3F83F8'}}>
                            <Typography sx={{color:'#6B7280'}}>Not registered?

                            <Link to='/signUp'  style={{textDecoration:'none'}}>
                            <Box ml={0.5} component={'span'} color={'#00778B'} fontWeight={'bold'}>Signup here</Box>
                            </Link>
                            </Typography>
                             
                        </Link>


                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
export default SignInEmail;