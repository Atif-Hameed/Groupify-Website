import { Avatar, Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import person from "../../assets/person.png"
import person3 from '../../assets/person3.png'
import fb from '../../assets/fb.png'
import logoMain from '../../assets/logoMain.png'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";

const ForgotPass = () => {
    return (
        <>
            <Grid container sx={{ height: '100vh' }}>
                <Grid sm={6} xs={12}>
                    <Box >
                        <img style={{ height: '99vh', width: '100%', objectFit: 'cover' }} component={'img'} src={person3} />
                    </Box>
                </Grid>
                <Grid xs={6} pl={10} position={'relative'}>
                    <Box>
                        <Box mb={10} sx={{ mt: 10, width: '120px' }} component={'img'} src={logoMain} />
                        <Typography variant="h4" mb={4}>Lost your password?</Typography>


                        <form style={{ width: '70%', marginBottom: '20px' }}>
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
                                sx={{ mt: 3, backgroundColor: '#00778B',
                                '&:hover':{
                                    backgroundColor:'#00778B'
                                }
                             }}
                            >
                                Request link
                            </Button>
                            </Link>
                            
                        </form>

                        <Link to="/signUp" style={{ textDecoration: 'none', color: '#3F83F8' }}>
                            <Typography sx={{ color: '#6B7280' }}>Not registered?
                                <Link to='/signUp' style={{ textDecoration: 'none',marginLeft: 5 }}>
                                    <Box component={'span'} color={'#00778B'} fontWeight={'bold'}>Signup here</Box>
                                </Link>
                            </Typography>
                        </Link>
                    </Box>

                    <div style={{ position: 'absolute', bottom: '2%', left: '10.5%' }}>
                        <Link to="/signemail" style={{ textDecoration: 'none'}}>
                            <Box gap={0.5} sx={{ display: 'flex', alignItems: 'center', color: '#00778B' }}>
                                <ArrowCircleLeftOutlinedIcon />
                                <Typography variant="h10">Back to login </Typography>
                            </Box>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
export default ForgotPass;