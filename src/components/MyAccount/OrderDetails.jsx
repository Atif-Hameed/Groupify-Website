import { Avatar, Box, Button, ButtonGroup, Checkbox, Divider, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";
import Toggle from '../../assets/Toggle.png'
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
];


const OrderDetails = (props) => {
    const [personName, setPersonName] = React.useState('');

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    const Headings = (props) => {
        return (
            <>
                <Typography mb={1} variant="h6" fontSize={'17px'} fontWeight={'500'}>{props.heading}</Typography>
            </>
        )
    }
    return (
        <>
            <Box maxWidth={'900px'} minWidth={'auto'} height={'auto'} >

                <Box width={'100%'} py={0.5} height={'50px'} sx={{ backgroundColor: '#00778B', display: 'flex', alignItems: 'center' }}>

                    <Box px={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <Typography color={'#fff'} variant="h6" >Order Summary</Typography>

                        <Box sx={{ backgroundColor: '#00778B', display: 'flex', alignItems: 'center', gap: 2 }}>

                            {props.des}
                        </Box>
                    </Box>

                </Box>


                <Grid container px={5} mb={2} >
                    <Grid item xs={6} >
                        <Box pt={3} pb={2} px={3} >
                            <Typography mb={3} variant="h5" fontWeight={'bold'} >Groupify Plus</Typography>
                            <Headings heading="Plan Name" />
                            <FormControl fullWidth>
                                <Select
                                fullWidth
                                    sx={{ mb: 2, backgroundColor: '#F9FAFB' }}
                                    value={personName}
                                    onChange={handleChange}
                                    size="small"
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem color={'#000'} value="">
                                        Groupify Plus
                                    </MenuItem>
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <Headings heading="Plan Type" />

                            <ButtonGroup sx={{ mb: 2, border: '1px solid #6B7280' }} variant="outlined" aria-label="outlined button group">
                                <Button variant="contained" sx={{ backgroundColor: '#E1EFFE', color: '#1C64F2', py: 1, fontSize: '16px' }} >Monthly</Button>
                                <Button sx={{ color: '#6B7280', border: 'none', py: 1, fontSize: '16px' }} >Yearly</Button>
                            </ButtonGroup>

                            <Headings heading="Plan Price" />

                            <TextField
                                id="outlined-read-only-input"
                                defaultValue="$29.00 USD"
                                fullWidth
                                size="small"
                                sx={{ color: '#6B7280', background:'#F9FAFB' }}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />

                            <Box my={3} sx={{
                                position: 'relative',
                                pb: 1,
                                '::after': {
                                    content: '""',
                                    display: 'block',
                                    width: '100%',
                                    height: '3px',
                                    backgroundColor: '#D1D5DB',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                },
                            }} >
                                <Typography color={'#6B7280'} >$29.00 USD Due Today</Typography>
                            </Box>

                            <Button fullWidth variant="contained" sx={{ backgroundColor: '#DBEAFE', color: '#292D32' }} >Safe, secure checkout</Button>
                            <Typography mt={10} color={'#1C64F2'} fontWeight={'500'} >Have a promo code?</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box pt={3} pb={2} px={3} sx={{ backgroundColor: '#E6E6E6' }}>
                            <Typography mb={3} variant="h5" fontWeight={'bold'} >Billing Details</Typography>

                            <Headings heading="Name of Cardholder" />

                            <TextField
                                fullWidth
                                id="outlined-read-only-input"
                                defaultValue="Demo Name"
                                size="small"
                                sx={{ color: '#6B7280', mb: 2, backgroundColor: '#F9FAFB' }}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />

                            <Headings heading="Credit Card" />

                            <TextField
                                fullWidth
                                id="outlined-read-only-input"
                                defaultValue="0000 - 0000 - 0000 - 000         MM/YY         ###"
                                size="small"
                                sx={{ color: '#6B7280', mb: 2, backgroundColor: '#F9FAFB' }}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />

                            <Headings heading="Billing Zip Code" />

                            <TextField
                                fullWidth
                                id="outlined-read-only-input"
                                defaultValue="Zip Code"
                                size="small"
                                sx={{ color: '#6B7280', mb: 2, backgroundColor: '#F9FAFB' }}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />

                            <Headings heading="Email Address" />

                            <TextField
                                fullWidth
                                id="outlined-read-only-input"
                                defaultValue="name@example.com"
                                size="small"
                                sx={{ color: '#6B7280', mb: 2, backgroundColor: '#F9FAFB' }}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Checkbox defaultChecked size="small" sx={{pl:0}}/>
                                <Typography fontSize={'15px'} color={'#6B7280'}>I accept the purchase <span style={{ color: '#3F83F8' }} >Terms & Conditions</span></Typography>
                            </Box>

                            <Button fullWidth variant="contained" sx={{ backgroundColor: '#00778B', color: '' }} >Submit</Button>

                            <Typography mt={2} fontSize={'13px'} color={'#6B7280'} >Powerd by <span style={{ color: '#3578E5' }}>Stripe</span></Typography>
                        </Box>
                    </Grid>
                </Grid>

            </Box >
        </>
    )
}

export default OrderDetails;