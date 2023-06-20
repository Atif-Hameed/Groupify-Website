import React from "react";
import AppBar from '@mui/material/AppBar';
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, Divider, FormControl, Grid, IconButton, InputLabel, MenuItem, NativeSelect, OutlinedInput, Select, Toolbar, Typography, styled } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import LogoMain from '../../assets/logoMain.png';
import Menu from '../../assets/Vector.png';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VectorBg from '../../assets/VectorBg.png'
import VectorBg2 from '../../assets/VectorBg2.png'
import laptop from '../../assets/laptop.png'
import fbLogo from '../../assets/fbLogo.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import footer from '../../assets/footer.png'
import chorom from '../../assets/chromBig.png'
import line from '../../assets/line.png'
import edge from '../../assets/edgeBig.png'
// import SignIn from "./logIn/signIn";
import footerIcon from '../../assets/footer.png'
import footerCirlcle from '../../assets/footer.png'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Hidden } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";


const MainBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${VectorBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    width: '100%',
})


const MainBox2 = styled(Box)({
    backgroundImage: `url(${VectorBg2})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    marginTop: '100px',
    marginBottom: { sm: '100px', xs: 0 }
})


const FooterBox = styled(Box)({
    position: 'relative',
    backgroundImage: `url(${footer})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '456px',
    width: '100%',
})




const LandingPage = () => {
    return (
        <>
            <MainBox sx={{ height: { sm: '550px', xs: '100%' } }}>
                <Box>


                    {/* TOP SECTION */}
                    <Box sx={{ mb: { sm: 2, xs: 10 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: { sm: '50px', xs: 2 } }} mt={5} >
                        <Box component={'img'} src={LogoMain} sx={{ width: { sm: '180px', xs: '120px' }, height: 'auto' }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: { sm: 7, xs: 3 } }} >
                            <Box component={'img'} src={Menu} />

                            <Link to="signin" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" sx={{ fontSize: { sm: 'unset', xs: '10px' }, display: { sm: 'flex', xs: 'none' }, borderRadius: 10, px: 1, backgroundColor: "#fff", color: "#000", border: '1px solid #E5E7EB' }}
                                    startIcon={<PersonOutlineIcon sx={{ backgroundColor: "#00778B", p: { sm: 1, xs: 0.5 }, borderRadius: '100%', color: "#fff" }} />}>
                                    My Account
                                </Button>
                                <Box sx={{ display: { sm: 'none', xs: 'unset' } }} >
                                    <Avatar sx={{ backgroundColor: '#00778B' }}>
                                        <PersonIcon fontSize="large" sx={{ color: '#fff' }} />
                                    </Avatar>
                                </Box>
                            </Link>

                        </Box>
                    </Box>



                    <Grid container sx={{ ml: { sm: 6, xs: 0 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                        <Grid item xs={12} md={4} sx={{ px: { sm: 0, xs: 2 } }}  >
                            <Typography variant="h4" fontWeight={'500'}>Unlock The Full Power of <Box component={'span'} sx={{ color: '#00778B', fontWeight: 'bold' }}>Facebook Groups.</Box></Typography>
                            <Typography variant="h5" sx={{ color: '#6B7280', mt: 2 }} >Organize and Leverage the Power of 620 Million Facebook Groups</Typography>
                            <Link to="/dashboard" style={{ textDecoration: 'none' }} > <Button sx={{ borderRadius: 5, backgroundColor: '#00778B', mt: 2, fontWeight: '500', '&:hover': { backgroundColor: '#00778B' } }} variant="contained" endIcon={<SendIcon />}> Get Started Free</Button></Link>
                        </Grid>

                        <Grid item xs={12} md={8} sx={{ mt: { sm: 'unset', xs: 5 }, px: { sm: 0, xs: 2 }, display: 'flex', justifyContent: { sm: 'flex-end', xs: 'center' } }} >
                            <Box component={'img'} src={laptop} sx={{ width: { sm: '550px', xs: '100%' } }} />
                        </Grid>

                    </Grid>

                </Box>
            </MainBox>


            <Box mt={6} >
                {/* POLyGON ICONS */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box component={'img'} src={fbLogo} sx={{ width: '125px', height: '125px' }} />
                </Box>
                <Typography variant="h4" fontWeight={'500'} textAlign={'center'}>Master <Box component={'span'} sx={{ color: '#0B9AF7' }}>Facebook</Box><br /> Groups With <Box component={'span'} sx={{ color: '#00778B' }}>Groupify</Box></Typography>


                <Box sx={{ display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, alignItems: 'center', justifyContent: 'center', }} gap={4} mt={3}>
                    <Box component={'img'} src={icon1} sx={{ width: '280px', height: 'auto', cursor: 'pointer', ":hover": { transform: 'scale(1.1)' }, transition: 'all ease 0.2s' }} />
                    <Box component={'img'} src={icon2} sx={{ width: '280px', height: 'auto', cursor: 'pointer', ":hover": { transform: 'scale(1.1)' }, transition: 'all ease 0.2s' }} />
                    <Box component={'img'} src={icon3} sx={{ width: '280px', height: 'auto', cursor: 'pointer', ":hover": { transform: 'scale(1.1)' }, transition: 'all ease 0.2s' }} />
                    <Box component={'img'} src={icon4} sx={{ width: '280px', height: 'auto', cursor: 'pointer', ":hover": { transform: 'scale(1.1)' }, transition: 'all ease 0.2s' }} />
                </Box>


                {/* Laptop BIg PHOTO */}
                <MainBox2 sx={{ mb: { sm: 4, xs: 0 }, height: { sm: '500px', xs: '200px' } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Box component={'img'} src={icon5} sx={{
                            width: '1371px', height: 'auto', '@media (max-width: 600px)': {
                                width: '100%',
                            },
                        }} />
                    </Box>
                </MainBox2>




                {/* MID SECTION */}

                <Typography variant="h3" sx={{ mb: { sm: 1, xs: 3 }, fontSize: { sm: 'auto', xs: '40px' } }} textAlign={'center'}>Frequently Asked <span style={{ color: '#00778B', fontWeight: 'bold', }} >Questions</span></Typography>
                <Typography variant="h5" sx={{ fontSize: { sm: 'auto', xs: '20px' } }} mb={2} textAlign={'center'}>And You Can Always <span style={{ color: '#00778B', fontWeight: 'bold' }} >Contact Us</span></Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: { sm: '35%', xs: '90%' } }}>


                        <FormControl sx={{ mb: 2, width: '100%', }}>
                            <select id="mySelect" style={{ padding: '17px', fontSize: '17px', fontWeight: '500', borderColor: '#E5E7EB', borderRadius: '5px' }}>
                                <option >
                                    What is the GroupZen Teams™ feature?
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </FormControl>



                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', mb: 2, mt: 1, }}>

                            <Box p={2} sx={{
                                border: '1px solid #E5E7EB',
                                backgroundColor: '#00778B',
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderTopRightRadius: '5px',
                                borderTopLeftRadius: '5px'
                            }}>
                                <Typography variant="h7" color={'#fff'}>
                                    This is our most requested upgrade, and we are excited to launch it!
                                </Typography>
                                <ExpandLessIcon sx={{ color: '#fff' }} />
                            </Box>


                            <Box p={2} sx={{
                                border: '1px solid #E5E7EB'
                            }}>
                                <Typography color={'#6B7280'}>
                                    GroupZen is the only platform that allows you to manage your team for co-ordinated Facebook Group Marketing!  Quickly add unlimited that allows you to manage your team members and assign a list of Facebook Groups for them to join (you'll be able to auto-track their progress!)
                                </Typography>
                            </Box>
                        </Box>

                        <FormControl sx={{ mb: 2, width: '100%' }}>
                            <select id="mySelect" style={{ padding: '17px', fontSize: '17px', fontWeight: '500', borderColor: '#E5E7EB', borderRadius: '5px' }}>
                                <option >
                                    When will GroupZen Teams™ be ready to Launch?
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </FormControl>

                        <FormControl sx={{ mb: 2, width: '100%' }}>
                            <select id="mySelect" style={{ padding: '17px', fontSize: '17px', fontWeight: '500', borderColor: '#E5E7EB', borderRadius: '5px' }}>
                                <option >
                                    How will Facebook Groups list sync to my GroupZen™ account?
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </FormControl>

                    </Box>
                </Box>

            </Box>


            {/* FOOTER */}
            <FooterBox mt={10}>

                <Typography variant="h3" pt={10} textAlign={'center'} sx={{ color: '#fff' }}>Install Extension</Typography>

                <Box mt={6} sx={{ display:'flex', justifyContent:'center'}}>
                    <Grid container sx={{width:{sm:'40%', xs:'100%'},display:'flex',alignItems:'center', justifyContent:{sm:'space-between', xs:'center'}, gap:{sm:0, xs:2}}}>
                        <Grid item sx={{display:'flex', flexDirection:'column',alignItems:'center',gap:4}}>
                            <Box component={'img'} src={chorom} />
                            <Button variant="contained" sx={{backgroundColor:'#fff', color:'#000', px:{sm:5,xs:1.5}, py:{sm:1.8, xs:1},borderRadius:'30px','&:hover':{backgroundColor:'gray',color:'#fff'}}} >Chrome Extension</Button>
                        </Grid>
                        <Grid item>
                            <Box component={'img'} src={line} />
                        </Grid>
                        <Grid item sx={{display:'flex', flexDirection:'column',alignItems:'center',gap:4}}>
                            <Box component={'img'} src={edge} />
                            <Button variant="outlined" sx={{borderColor:'#fff', color:'#fff', px:{sm:5,xs:1.5}, py:{sm:1.8, xs:1},borderRadius:'30px','&:hover':{color:'#000',borderColor:'#000'}}} >Edge Extension</Button>
                        </Grid>
                    </Grid>
                </Box>

                

            </FooterBox>
            <Typography variant="h6" textAlign={'center'} sx={{ color: '#6B7280', fontSize:{sm:'20px', xs:'16px'} }} p={1} >Copyright 2022 <span style={{ color: '#00778B', fontWeight: 'bold' }} >Groupify™</span> All rights reserved.</Typography>

        </>
    )
}

export default LandingPage;

