import React from "react";
import AppBar from '@mui/material/AppBar';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, FormControl, Grid, IconButton, InputLabel, MenuItem, NativeSelect, OutlinedInput, Select, Toolbar, Typography, styled } from "@mui/material";
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
import chorom from '../../assets/chorom.png'
import line from '../../assets/line.png'
import edge from '../../assets/edge.png'
// import SignIn from "./logIn/signIn";
import footerIcon from '../../assets/footer.png'
import footerCirlcle from '../../assets/footer.png'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Hidden } from '@mui/material';
import { Link } from "react-router-dom";


const MainBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${VectorBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    height: '550px',
    width: '100%',
})

const StylesBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '70px'
})

const MainBox2 = styled(Box)({
    backgroundImage: `url(${VectorBg2})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    height: '500px',
    marginTop: '100px',
    marginBottom: '100px'
})

const StylesApp = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 50px',
})



const FooterBox = styled(Box)({
    position: 'relative',
    backgroundImage: `url(${footer})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '456px',
    width: '100%',
})

const StyledGrid = styled(Grid)(({ theme }) => ({
    display: 'none',
    justifyContent: 'flex-end',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const PolygonBox = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up("sm")]: {
        flexDirection: 'row',
    }
}))

const SelectBox = styled(Grid)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up("sm")]: {
        width: '663.5px'
    }
}))





const LandingPage = () => {
    return (
        <>
            <MainBox mb={5}>
                <Box>


                    {/* TOP SECTION */}
                    <StylesApp mt={5} mb={2}>
                        <Box component={'img'} src={LogoMain} sx={{ width: '180px', height: 'auto' }} />
                        <StylesBox >
                            <Box component={'img'} src={Menu} />

                            <Link to="signin">
                                <Button variant="contained" sx={{ borderRadius: 10, px: 1, backgroundColor: "#fff", color: "#000", border: '1px solid #E5E7EB' }}
                                    startIcon={<PersonOutlineIcon sx={{ backgroundColor: "#00778B", p: 1, borderRadius: '100%', color: "#fff" }} />}>
                                    My Account
                                </Button>
                            </Link>

                        </StylesBox>
                    </StylesApp>





                    <Grid container ml={1} spacing={5} sx={{ display: 'flex', alignItems: 'center' }}>

                        <Grid item xs={12} md={4} >
                            <Typography variant="h4" fontWeight={'500'}>Unlock The Full Power of <Box component={'span'} sx={{ color: '#00778B' }}>Facebook Groups.</Box></Typography>
                            <Typography variant="h5" sx={{ color: '#6B7280', mt: 2 }} >Organize and Leverage the Power of 620 Million Facebook Groups</Typography>
                            <Button sx={{ borderRadius: 5, backgroundColor: '#00778B', mt: 2 }} variant="contained" endIcon={<SendIcon />}> Get Started Free</Button>
                        </Grid>

                        <StyledGrid item xs={0} md={8} >
                            <Box component={'img'} src={laptop} sx={{ width: '550px' }} />
                        </StyledGrid>

                    </Grid>

                </Box>
            </MainBox>


            <Box>



                {/* POLyGON ICONS */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box component={'img'} src={fbLogo} sx={{ width: '125px', height: '125px' }} />
                </Box>
                <Typography variant="h4" fontWeight={'500'} textAlign={'center'}>Master <Box component={'span'} sx={{ color: '#0B9AF7' }}>Facebook</Box><br /> Groups With <Box component={'span'} sx={{ color: '#00778B' }}>Groupify</Box></Typography>

                <PolygonBox sx={{ display: 'flex', justifyContent: 'center' }} gap={4} mt={3} >
                    <Box component={'img'} src={icon1} sx={{ width: '280px', height: 'auto', cursor: 'pointer', ":hover": { transform: 'scale(1.1)' }, transition: 'all ease 0.2s' }} />
                    <Box component={'img'} src={icon2} sx={{ width: '280px', height: 'auto', cursor: 'pointer', ":hover": { transform: 'scale(1.1)' }, transition: 'all ease 0.2s' }} />
                    <Box component={'img'} src={icon3} sx={{ width: '280px', height: 'auto', cursor: 'pointer', ":hover": { transform: 'scale(1.1)' }, transition: 'all ease 0.2s' }} />
                    <Box component={'img'} src={icon4} sx={{ width: '280px', height: 'auto', cursor: 'pointer', ":hover": { transform: 'scale(1.1)' }, transition: 'all ease 0.2s' }} />
                </PolygonBox>




                {/* Laptop BIg PHOTO */}
                <MainBox2>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Box component={'img'} src={icon5} sx={{
                            width: '1371px', height: 'auto', '@media (max-width: 600px)': {
                                width: '100%',
                            },
                        }} />
                    </Box>
                </MainBox2>




                {/* MID SECTION */}

                <Typography variant="h3" mb={1} textAlign={'center'}>Frequently Asked <span style={{ color: '#00778B', fontWeight: 'bold' }} >Questions</span></Typography>
                <Typography variant="h5" mb={2} textAlign={'center'}>And You Can Always <span style={{ color: '#00778B', fontWeight: 'bold' }} >Contact Us</span></Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <SelectBox>

                        <FormControl sx={{ m: 1, mb: 2, width: '100%' }}>
                            <select id="mySelect" style={{ padding: '17px', fontSize: '17px', fontWeight: '500', borderColor: '#E5E7EB', borderRadius: '5px' }}>
                                <option >
                                    What is the GroupZen Teams™ feature?
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </FormControl>



                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', mb: 2, mt: 1, ml: 1 }}>

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

                        <div>

                            <FormControl sx={{ m: 1, mb: 2, width: '100%' }}>
                                <select id="mySelect" style={{ padding: '17px', fontSize: '17px', fontWeight: '500', borderColor: '#E5E7EB', borderRadius: '5px' }}>
                                    <option >
                                        When will GroupZen Teams™ be ready to Launch?
                                    </option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </FormControl>

                        </div>

                        <div>

                            <FormControl sx={{ m: 1, mb: 2, width: '100%' }}>
                                <select id="mySelect" style={{ padding: '17px', fontSize: '17px', fontWeight: '500', borderColor: '#E5E7EB', borderRadius: '5px' }}>
                                    <option >
                                        How will Facebook Groups list sync to my GroupZen™ account?
                                    </option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </FormControl>

                        </div>
                    </SelectBox>
                </Box>
            </Box>


            {/* FOOTER */}
            <FooterBox mt={10}>

                {/* <Box component={'img'} src={footerCirlcle} sx={{ position: 'absolute', left: '50%', top: '-10%', width: '120px', zIndex: '10' }} /> */}

                <Typography variant="h3" pt={10} textAlign={'center'} sx={{ color: '#fff' }}>Install Extension</Typography>




                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box component={'img'} src={chorom} sx={{
                        position: 'absolute',
                        bottom: '10%',
                        left: '30%',
                        width: '260px',
                        height: '170px',
                        "&:hover": {
                            cursor: "pointer"
                        }
                    }} />
                    <Box component={'img'} src={line} sx={{
                        position: 'absolute',
                        bottom: '10%',
                        left: '50%'
                    }} />
                    <Box component={'img'} src={edge} sx={{
                        position: 'absolute',
                        bottom: '10%',
                        right: '30%',
                        width: '260px',
                        height: '170px',
                        "&:hover": {
                            cursor: 'pointer'
                        }
                    }} />

                </Box>
            </FooterBox>
            <Typography variant="h6" textAlign={'center'} sx={{ color: '#6B7280' }} p={1} >Copyright 2022 <span style={{ color: '#00778B', fontWeight: 'bold' }} >Groupify™</span> All rights reserved.</Typography>

        </>
    )
}

export default LandingPage;

