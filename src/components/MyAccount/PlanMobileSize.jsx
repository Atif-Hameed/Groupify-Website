import { Avatar, Box, Button, ButtonGroup, Card, CardContent, Dialog, DialogContent, Grid, Paper, Switch, TextField, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import BoxTick from '../../assets/box-tick.png'
import Dot from '../../assets/greenDot.png'
import Toggle from '../../assets/Toggle.png'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ComparePlan from "./ComparePlan";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FooterIcon from '../../assets/smallMainLogo.png'



const CardPlan = (props) => {

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'start' }}>

            </Box>
            <Typography mb={1} color={'#000'} textAlign={'start'} variant="h3" fontWeight={'bold'} >{props.price}<span style={{ fontSize: '15px', color: '#6B7280', fontWeight: 'normal' }} >/month</span></Typography>
            <Typography mb={2} textAlign={'start'} variant="h5" sx={{ color: '#000', fontWeight: '500', fontSize: '18px' }} >{props.package}</Typography>
            <Typography textAlign={'start'} sx={{ color: '#6B7280' }} >{props.Description}</Typography>

            <Box mt={4}>
                <Box mb={1} sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
                    <CheckBoxIcon sx={{ color: '#1C64F2', fontSize: '22px' }} />
                    <Typography color={'#000'} variant="h6" fontSize={'15px'} >{props.point1}</Typography>
                </Box>
                <Box mb={1} sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
                    <CheckBoxIcon sx={{ color: '#1C64F2', fontSize: '22px' }} />
                    <Typography color={'#000'} variant="h6" fontSize={'15px'} >{props.point2}</Typography>
                </Box>
                <Box mb={1} sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
                    <CheckBoxIcon sx={{ color: '#1C64F2', fontSize: '22px' }} />
                    <Typography color={'#000'} variant="h6" fontSize={'15px'} >{props.point3}</Typography>
                </Box>
                <Box mb={1} sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
                    <CheckBoxIcon sx={{ color: '#1C64F2', fontSize: '22px' }} />
                    <Typography color={'#000'} variant="h6" fontSize={'15px'} >{props.point4}</Typography>
                </Box>
            </Box>
            {props.Button}

        </>
    )
}



const PlanMobileSize = () => {
    return (
        <>
            <Box sx={{ display: { sm: 'none', xs: 'unset' } }}>

                <ButtonGroup sx={{ mb: 3 }} fullWidth variant="contained" aria-label="outlined primary button group">
                    <Button variant="contained" sx={{ backgroundColor: '#111928', color: '#fff', textTransform: 'capitalize', py: 1 }}>Monthly</Button>
                    <Button variant="outlined" sx={{ color: '#111928', textTransform: 'capitalize', py: 1 }}>Yearly</Button>
                </ButtonGroup>

                <Grid container my={2}  >
                    <Grid item xs={12} >
                        <Paper sx={{ mb: 3, borderTop: '5px solid #00778B', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}>
                            <Box px={3} py={3} >
                                <CardPlan
                                    package="Groupify Free"
                                    price="$0"
                                    Description="Get started with Groupify & start mastering Facebook Groups!"
                                    point1="Unlimited Group Folders"
                                    point2="Quick Group Access"
                                    point3="Free Browser Extension"
                                    point4="Basic Group Insights"
                                    Button={<Button fullWidth sx={{ mt: 4, border: '1px solid #1F2A37', borderRadius: '7px', py: 0.5, color: '#1F2A37', textTransform: 'capitalize', fontSize: '17px' }}>
                                        Current Plan </Button>}
                                />
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} >
                        <Paper sx={{ mb: 2, overflow: 'hidden', position: 'relative', borderTop: '5px solid #FEB701', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}>
                            <Box sx={{
                                fontSize: '12px',
                                color: '#fff',
                                display: "flex", alignItems: "center", justifyContent: 'center',
                                position: 'absolute',
                                top: 40,
                                right: -35,
                                width: '180px',
                                height: '30px',
                                backgroundColor: '#00778B',
                                transform: 'rotate(45deg)',
                            }}>
                                Early Adopter Pricing
                            </Box>
                            <Box px={3} py={3} >
                                <CardPlan
                                    package="Groupify Pro"
                                    price="$297"
                                    Description="Leverage the power of Teams within your Facebook Groups!"
                                    point1="Everything in Free!"
                                    point2="Assign Tasks"
                                    point3="Team Tracking"
                                    point4="Invite up to 3 Team Members"
                                    Button={<Button variant="contained" fullWidth sx={{ mt: 4, backgroundColor: '#00778B', border: '1px solid #1F2A37', borderRadius: '7px', py: 0.5, color: '#fff', textTransform: 'capitalize', fontSize: '17px' }}>
                                        Upgrade </Button>}
                                />
                            </Box>
                        </Paper>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, color: '#1C64F2' }} >
                            <Typography fontWeight={'500'}>Show Detailed Plan Comparison</Typography>
                            <KeyboardArrowDownIcon />
                        </Box>


                    </Grid>

                </Grid>
            </Box >

            
            
        </>
    )
}

export default PlanMobileSize;