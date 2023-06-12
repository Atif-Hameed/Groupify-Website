import { Box, Button, Card, CardContent, Grid, Switch, TextField, Typography } from "@mui/material";
import React from "react";
import BoxTick from '../../assets/box-tick.png'
import Dot from '../../assets/greenDot.png'
import Toggle from '../../assets/Toggle.png'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

const Plan = () => {
    return (
        <>
            <Box px={2}>
                <Grid container spacing={4}>
                    <Grid item xs={6} >
                        <Box mb={2} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CheckBoxIcon sx={{ color: '#000' }} fontSize="small" />
                            <Typography color={'#000'} fontSize={'18px'} fontWeight={'500'}>Current Plan</Typography>
                        </Box>

                        <Card sx={{ px: 3, borderRadius: '6px' }} >
                            <CardContent>
                                <Box mb={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                        <Typography fontSize={'18px'} fontWeight={'500'}>Groupify Free</Typography>
                                        <Typography fontSize={'15px'} color={'#1F2A37'} >$0 /monthly</Typography>
                                    </Box>
                                    <Button sx={{ backgroundColor: '#61BC5B40', color: '#5AB055', borderRadius: '30px', fontSize: '10px', px: 3, py: 0.3 }} startIcon={<Box component={'img'} src={Dot} height={'3px'} />} >Active</Button>
                                </Box>

                                <Typography mb={2} >Your plan renews on June 6th, 2022</Typography>

                                <Box mb={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography fontSize={'16px'} fontWeight={'500'}>Team Members</Typography>
                                    <Typography fontSize={'16px'} fontWeight={'500'}>1 / 1</Typography>
                                </Box>

                                <TextField multiline rows={1} fullWidth />

                                <Typography mt={2} fontSize={'13px'} fontWeight={'500'} color={'#00778B'} textAlign={'center'} >Cancel Plan</Typography>
                            </CardContent>
                        </Card>

                    </Grid>

                    <Grid item xs={6} >
                        <Box mb={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <AutoAwesomeOutlinedIcon sx={{ transform: 'rotate(180deg)', color: '#000' }} />
                                <Typography color={'#000'} fontSize={'18px'} fontWeight={'500'}>Upgrade Your Plan</Typography>
                            </Box>

                            <Button sx={{
                                fontSize: '13px',
                                backgroundColor: '#00778B1A', py: 0.3, px: 2, borderRadius: '5px', color: '#00778B', '&:hover': {
                                    backgroundColor: '#00778B1A',
                                }, border: '0.25px solid #00778B'
                            }} variant="contained" endIcon={<Box component={'img'} src={Toggle} />}>YEARLY
                            </Button>

                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap:4 }}>

                            <Box sx={{width:'50%'}}>
                                <Card>
                                    <CardContent sx={{ my: 3 }}>
                                        <Typography mb={1}  variant="h4" fontSize={'21px'}  textAlign={'center'} fontWeight={'500'} color={'#1F2A37'}>Groupify Plus</Typography>
                                        <Typography mb={2} variant="h4" fontSize={'30px'} fontWeight={'500'} textAlign={'center'} >$29 /mo</Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Button variant="contained" disableElevation sx={{ fontSize: '8px', borderRadius: '20px', border: '0.25px solid #00778B', py: 0.3, backgroundColor: '#00778B1A', color: '#00778B', '&:hover': { backgroundColor: '#00778B1A' } }} >Up to 3 Team Members</Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                                <Button fullWidth sx={{ mt: 1, color: '#00778B', border: '0.25px solid #00778B', borderRadius: '8px', textTransform: 'capitalize' }} >Upgrade</Button>
                            </Box>

                            <Box Box sx={{width:'50%'}}>
                                <Card>
                                    <CardContent sx={{ my: 3 }}>
                                        <Typography mb={1} variant="h4" fontSize={'21px'}  textAlign={'center'} fontWeight={'500'} color={'#1F2A37'}>Groupify Pro</Typography>
                                        <Typography mb={2} variant="h4" fontSize={'30px'} fontWeight={'500'} textAlign={'center'} >$59 /mo</Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Button variant="contained" disableElevation sx={{ fontSize: '8px', borderRadius: '20px', border: '0.25px solid #00778B', py: 0.3, backgroundColor: '#00778B1A', color: '#00778B', '&:hover': { backgroundColor: '#00778B1A' } }} >Up to 3 Team Members</Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                                <Button fullWidth sx={{ mt: 1, color: '#00778B', border: '0.25px solid #00778B', borderRadius: '8px', textTransform: 'capitalize' }} >Upgrade</Button>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>

            </Box>
        </>
    )
}

export default Plan;