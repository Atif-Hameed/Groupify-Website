import { Avatar, Box, Button, Dialog, DialogContent, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Toggle from '../../assets/Toggle.png'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import OrderDetails from "./OrderDetails";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';



const CardPlan = (props) => {

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography mb={2} variant="h5" fontWeight={'bold'} textAlign={'center'} sx={{ display: 'inline-block', position: 'relative', '&::after': { backgroundColor: '#38AD928C', content: '""', height: '3px', width: '85%', position: 'absolute', bottom: 0, left: 3 } }} >{props.package}</Typography>
            </Box>
            <Typography mb={3} textAlign={'center'} variant="h3" fontWeight={'bold'} >{props.price}<span style={{ fontSize: '15px', color: '#6B7280', fontWeight: 'normal' }} >/month</span></Typography>
            <Typography textAlign={'center'} sx={{ color: '#6B7280' }} >{props.Description}</Typography>

            <Box mt={4}>
                <Box mb={1} sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
                    <CheckBoxIcon sx={{ color: '#1C64F2', fontSize: '22px' }} />
                    <Typography variant="h6" fontSize={'15px'} >{props.point1}</Typography>
                </Box>
                <Box mb={1} sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
                    <CheckBoxIcon sx={{ color: '#1C64F2', fontSize: '22px' }} />
                    <Typography variant="h6" fontSize={'15px'} >{props.point2}</Typography>
                </Box>
                <Box mb={1} sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
                    <CheckBoxIcon sx={{ color: '#1C64F2', fontSize: '22px' }} />
                    <Typography variant="h6" fontSize={'15px'} >{props.point3}</Typography>
                </Box>
                <Box mb={1} sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
                    <CheckBoxIcon sx={{ color: '#1C64F2', fontSize: '22px' }} />
                    <Typography variant="h6" fontSize={'15px'} >{props.point4}</Typography>
                </Box>
            </Box>
            {props.Button}

        </>
    )
}


const ComparePlan = (props) => {

    const [Orderopen, setOrderopen] = useState(false)

    return (
        <>
            <Box maxWidth={'900px'} minWidth={'auto'} height={'auto'} >

                <Box width={'100%'} py={0.5} height={'50px'} sx={{ backgroundColor: '#00778B', display: 'flex', alignItems: 'center' }}>

                    <Box px={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <Typography color={'#fff'} variant="h6" >Compare Plans</Typography>

                        <Button sx={{
                            fontSize: '13px',
                            backgroundColor: '#fff', py: 0.3, px: 2, borderRadius: '5px', color: '#00778B', '&:hover': {
                                backgroundColor: '#00778B1A',
                            }, border: '0.25px solid #00778B'
                        }} variant="contained" endIcon={<Box component={'img'} src={Toggle} />}>YEARLY
                        </Button>

                        <Box sx={{ backgroundColor: '#00778B', display: 'flex', alignItems: 'center', gap: 2 }}>

                            {props.des}
                        </Box>

                    </Box>

                </Box>

                <Dialog
                    maxWidth="md" sx={{ '& .MuiDialog-paper': { width: '900px' } }}
                    open={Orderopen}
                    onClose={() => { setOrderopen(false) }}>

                    <DialogContent sx={{ width: '100%', p: 0, m: 0 }}>

                        <OrderDetails des={<Avatar onClick={e => setOrderopen(false)} sx={{ backgroundColor: '#fff', cursor: 'pointer' }}>
                            <CloseOutlinedIcon sx={{ color: '#000' }} />
                        </Avatar>} />
                    </DialogContent>

                </Dialog>

                <Grid container my={4} >
                    <Grid item xs={4} sx={{ borderRight: '1px solid #C7C7C7' }}>
                        <Box px={3} py={3} >
                            <CardPlan
                                package="Free"
                                price="$0"
                                Description="Get started with Groupify & start mastering Facebook Groups!"
                                point1="Unlimited Group Folders"
                                point2="Quick Group Access"
                                point3="Free Browser Extension"
                                point4="Basic Group Insights"
                                Button={<Button fullWidth sx={{ mt: 4, border: '1px solid #1F2A37', borderRadius: '7px', py: 1, color: '#1F2A37', textTransform: 'capitalize', fontSize: '17px' }}>
                                    Current Plan </Button>}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={4} sx={{ borderRight: '1px solid #C7C7C7' }}>
                        <Box px={3} py={3} >
                            <CardPlan
                                package="Plus"
                                price="$29"
                                Description="Leverage the power of Teams within your Facebook Groups!"
                                point1="Everything in Free!"
                                point2="Assign Tasks"
                                point3="Team Tracking"
                                point4="Invite up to 3 Team Members"
                                Button={<Button onClick={e => setOrderopen(true)} fullWidth sx={{ mt: 4, border: '1px solid #1F2A37', borderRadius: '7px', py: 1, color: '#1F2A37', textTransform: 'capitalize', fontSize: '17px' }}>
                                    Upgrade </Button>}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={4} >
                        <Box px={3} py={3}  >
                            <CardPlan
                                package="Pro"
                                price="$59"
                                Description="Take your Team to the next level w/more seats & automations!"
                                point1="Everything in Plus!"
                                point2="Post Assignment"
                                point3="Priority Support"
                                point4="Invite up to 10 Team Members"
                                Button={<Button onClick={e => setOrderopen(true)} fullWidth sx={{ mt: 4, border: '1px solid #1F2A37', borderRadius: '7px', py: 1, color: '#1F2A37', textTransform: 'capitalize', fontSize: '17px' }}>
                                    Upgrade </Button>}
                            />
                        </Box>
                    </Grid>

                </Grid>


            </Box>
        </>
    )
}

export default ComparePlan;