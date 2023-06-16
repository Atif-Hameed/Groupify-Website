import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { AppBar, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountProfile from './Profile';
import Billing from './Billing';
import Plan from './Plan';



const Tabs = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList  onChange={handleChange} aria-label="lab API tabs example" indicatorColor='secondary' >

                        <Tab label={<Box sx={{display: 'flex', alignItems: 'center',gap:{sm:1,xs:0.5} }}>
                            <AccountCircleOutlinedIcon sx={{ color: '#00778B' }} />
                            <Typography textTransform={'capitalize'} fontSize={'16px'} color={'#000'} fontWeight={'500'} >Profile</Typography>
                        </Box>} value="1" />

                        <Tab label={<Box sx={{ display: 'flex', alignItems: 'center',gap:{sm:1,xs:0.5} }}>
                            <PaymentsOutlinedIcon />
                            <Typography textTransform={'capitalize'} fontSize={'16px'} color={'#000'} fontWeight={'500'} >Billing</Typography>
                        </Box>} value="2" />

                        <Tab label={<Box sx={{ display: 'flex', alignItems: 'center',gap:{sm:1,xs:0.5} }}>
                            <MonetizationOnOutlinedIcon />
                            <Typography textTransform={'capitalize'} fontSize={'16px'} color={'#000'} fontWeight={'500'} >Plan</Typography>
                        </Box>} value="3" />

                    </TabList>
                </Box>
                <TabPanel sx={{ px: 0  }} value="1"><AccountProfile /></TabPanel>
                <TabPanel sx={{ px: 0 }} value="2"><Billing /></TabPanel>
                <TabPanel sx={{ px: 0 }} value="3"><Plan /></TabPanel>
            </TabContext>
        </Box>
    );
}

const MyAccountTabs = () => {
    return (
        <>
            <AppBar elevation={1} className="myAccount_Tabs" sx={{ boxShadow: 'none', backgroundColor: 'transparent' }} position="static">
                <Tabs />
            </AppBar>
        </>
    )
}

export default MyAccountTabs;