import { Avatar, Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import person from "../../assets/person.png"
import person4 from '../../assets/person4.png'
import fb from '../../assets/fb.png'
import logoMain from '../../assets/logoMain.png'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";

const SendMailPass = () => {
    return (
        <>
            <Grid container sx={{ height: '100vh' }}>
                <Grid sm={6} xs={12}>
                    <Box >
                        <img style={{ height: '99vh', width: '100%', objectFit: 'cover' }} component={'img'} src={person4} />
                    </Box>
                </Grid>
                <Grid xs={6} pl={10} position={'relative'}>
                    <Box>
                        <Box mb={10} sx={{ mt: 10, width: '120px' }} component={'img'} src={logoMain} />
                        <Typography variant="h4" mb={4}>Reset password</Typography>


                        <form style={{ width: '70%', marginBottom: '20px' }}>
                            <Typography variant="h8" sx={{color:'#6B7280'}}>
                            We have sent a password reset link to:<br/> example123@gmail.com
                            </Typography>

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
                                Resend Email
                            </Button>
                            
                        </form>

                        <Box>
                            <Typography >Didn’t receive it? Check your SPAM Folder or 
                                <Link to='/signin' style={{ textDecoration: 'none', marginLeft: 5 }}>
                                    <Box component={'span'} color={'#00778B'} fontWeight={'bold'}>Contact Us</Box>
                                </Link>
                            </Typography>
                        </Box>
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
export default SendMailPass;