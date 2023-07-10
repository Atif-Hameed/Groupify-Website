import { Box, Card, CardContent, Grid, Paper, Typography, styled } from "@mui/material";
import React from "react";
import InfoCircle from '../../assets/infoCircle.png'
import Radio from '../../assets/Radio.png'
import Rotate from '../../assets/rotate.png'
import Facebook from '../../assets/facebook.png'
import { Link } from "react-router-dom";



const StyledBox = styled(Box)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))
const StyledBox2 = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const Cards = () => {
    return (
        <>


            <Box sx={{ backgroundColor: 'transparent', py: 3 }}>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >

                    <StyledBox sx={{ width: '85%', paddingLeft: '20px', paddingRight: '15px', py: 1, backgroundColor: '#69D5BC33', alignItems: 'center', justifyContent: 'space-between', borderRadius: '7px' }} >

                        <Box gap={2} sx={{ display: 'flex', alignItems: 'center' }}>

                            <Box component={'img'} src={Radio} />

                            <Box display={'flex'} alignItems={'center'} gap={1}>
                                <Box component={'img'} src={Facebook} />
                                <Typography sx={{ color: '#000', fontWeight:'500' }}>Facebook</Typography>
                            </Box>

                            <Link to="https://www.facebook.com" style={{color:'#000'}}>
                                <Typography sx={{ textDecoration: 'underline',fontWeight:'500' }} >click to connect</Typography>
                            </Link>

                        </Box>

                        <Box gap={3} sx={{ display: 'flex', alignItems: 'center' }} >

                            <Typography>last sync: 5/7/22 @ 6:22pm</Typography>
                            <Box component={'img'} src={Rotate} />

                        </Box>


                    </StyledBox>


                    <StyledBox2 sx={{ width: '82%', px: 2, py: 1, backgroundColor: '#69D5BC33', alignItems: 'center', justifyContent: 'space-between', borderRadius: '7px' }} >

                        <Box gap={2} sx={{ display: 'flex', alignItems: 'center' }}>

                            <Box component={'img'} src={InfoCircle} />

                            <Typography sx={{ textDecoration: 'underline', color: '#00778B', fontWeight: '500', fontSize: '13px' }} >Click to Connect Your Facebook Account</Typography>

                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center' }} >
                            <Box component={'img'} src={Rotate} />
                        </Box>

                    </StyledBox2>

                </Box>
            </Box>



            <Box display={'flex'} justifyContent={'center'}>
                <Grid container spacing={3} sx={{ px: { xs: 2.5, sm: 10.5 }, mb: { xs: 3, sm: 0 } }}>
                    <Grid item sm={3} xs={12}>
                        <Card >
                            <CardContent sx={{ my: 3 }}>
                                <Typography textAlign={'center'}>Your Groups</Typography>
                                <Typography variant="h4" textAlign={'center'} >238</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sm={3} xs={12}>
                        <Card >
                            <CardContent sx={{ my: 3 }}>
                                <Typography textAlign={'center'}>Total Members</Typography>
                                <Typography variant="h4" textAlign={'center'} >2.8m</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sm={3} xs={12}>
                        <Card >
                            <CardContent sx={{ my: 3 }}>
                                <Typography textAlign={'center'}>Team Posts</Typography>
                                <Typography variant="h4" textAlign={'center'} >42</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sm={3} xs={12}>
                        <Card >
                            <CardContent sx={{ my: 3 }}>
                                <Typography textAlign={'center'}>Team Members</Typography>
                                <Typography variant="h4" textAlign={'center'} >3</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default Cards;