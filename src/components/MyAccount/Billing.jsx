import { Box, Button, Card, CardActions, CardContent, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import BillingTable from "./BillingTable";

const Billing = () => {
    return (
        <>
            <Box>
                <Grid container spacing={3} >
                   
                    <Grid item sm={4} xs={12}>
                        <Typography mb={2} variant="h5" fontSize={'20px'} fontWeight={'bold'} color={'#1F2A37'} >Billing Information</Typography>
                        <Card sx={{ minWidth: 275, pb: 2 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 18, fontWeight: '500' }} color={'#000'} gutterBottom>
                                    Current Plan
                                </Typography>
                                <Typography sx={{ mb: 1, mt: 1.5 }} color="text.secondary">
                                    Groupify Pro
                                </Typography>
                                <Divider />

                                <Box sx={{ display: 'flex', mb: 1, mt: 1.5, justifyContent: 'space-between' }}>
                                    <Typography sx={{}} color="text.secondary">
                                        Monthly
                                    </Typography>
                                    <Typography color="text.secondary">$29.00</Typography>
                                </Box>
                                <Divider />

                                <Typography mt={2.5} sx={{ fontSize: 18, fontWeight: '500' }} color={'#000'} gutterBottom>
                                    Payment Information
                                </Typography>

                                <Box sx={{ display: 'flex', mb: 1, mt: 1.5, justifyContent: 'space-between' }}>
                                    <Typography sx={{}} color="text.secondary">
                                        Last Payment
                                    </Typography>
                                    <Typography color="text.secondary">03/23/2022</Typography>
                                </Box>
                                <Divider />

                                <Box sx={{ display: 'flex', mb: 1, mt: 1.5, justifyContent: 'space-between' }}>
                                    <Typography sx={{}} color="text.secondary">
                                        Upcoming Payment
                                    </Typography>
                                    <Typography color="text.secondary">04/23/2022</Typography>
                                </Box>
                                <Divider />

                                <Box sx={{ display: 'flex', mb: 1, mt: 1.5, justifyContent: 'space-between' }}>
                                    <Typography sx={{}} color="text.secondary">
                                        Card
                                    </Typography>
                                    <Typography color="text.secondary">xxx  xxxx  xxxx  xx56</Typography>
                                </Box>
                                <Divider />

                            </CardContent>
                            <CardActions>
                                <Button fullWidth variant="contained" sx={{ backgroundColor: '#00778B' }}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item sm={8} xs={12}  >
                        <Typography mb={2} variant="h5" fontSize={'20px'} fontWeight={'bold'} color={'#1F2A37'} >Transaction History</Typography>
                        <Box>
                        <BillingTable/>
                        </Box>
                    </Grid>
                
                </Grid>
            </Box>
        </>
    )
}

export default Billing;