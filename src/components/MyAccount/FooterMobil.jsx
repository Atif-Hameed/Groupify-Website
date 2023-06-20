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
import FooterIcon from '../../assets/smallMainLogo.png'
import Edge from '../../assets/edgeIcon.png'
import Chrom from '../../assets/chrom.png'
import USA from '../../assets/usa.png'
import Socail from '../../assets/social.png'
import Socail1 from '../../assets/social1.png'
import Socail2 from '../../assets/social2.png'
import Socail3 from '../../assets/social3.png'
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




const FooterMobile = () => {
    return (
        <>
            <Box sx={{ display: { sm: 'none', xs: 'unset' } }} >
                <Box sx={{ height: 'auto', backgroundColor: '#00778B' }} width={'100%'} >
                    <Box py={4} px={3.5}>
                        <Box mb={2} component={'img'} src={FooterIcon} />

                        <Typography mb={2} fontWeight={'light'} sx={{ color: '#E5E7EB', fontSize: '12px', width: '85%' }}>
                            Groupify is a Facebook  Groups management tool to help Groups Users & marketers. Our users stay organized, and leverage the full power of millions of Facebook Groups.
                        </Typography>

                        <Box mb={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ color: '#fff', fontSize: '14px' }}>
                                    Features
                                </Typography>
                                <KeyboardArrowDownIcon sx={{ color: '#fff' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ color: '#fff', fontSize: '14px' }}>
                                    Resource
                                </Typography>
                                <KeyboardArrowDownIcon sx={{ color: '#fff' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ color: '#fff', fontSize: '14px' }}>
                                    Company
                                </Typography>
                                <KeyboardArrowDownIcon sx={{ color: '#fff' }} />
                            </Box>
                        </Box>

                        <Typography mb={1} color={'#fff'}>Region</Typography>
                        <Box mb={2.5} sx={{ px: 1, backgroundColor: '#fff', display: 'flex', alignItems: 'center', height: '35px', width: '50%', border: '1px solid #fff', borderRadius: '5px', justifyContent: 'space-between' }} >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
                                <Box component={'img'} src={USA} />
                                <Typography>United States</Typography>
                            </Box>
                            <KeyboardArrowDownIcon />
                        </Box>

                        <Typography mb={1} color={'#fff'}>Get Our Extension</Typography>
                        <Box mb={2} sx={{ display: 'flex', alignItems: 'center', width: '70%', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', width: '50%', gap: 1 }}>
                                <Box component={'img'} src={Chrom} />
                                <Typography color={'#fff'} fontSize={'12px'}>Chrome Extension</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', width: '50%', gap: 1 }}>
                                <Box component={'img'} src={Edge} />
                                <Typography color={'#fff'} fontSize={'12px'}>Edge Extension</Typography>
                            </Box>
                        </Box>

                        <Typography mb={1} color={'#fff'}>Follow Us</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box component={'img'} src={Socail} />
                            <Box component={'img'} src={Socail1} />
                            <Box component={'img'} src={Socail2} />
                            <Box component={'img'} src={Socail3} />
                        </Box>

                        <Box>

                        </Box>
                    </Box>
                </Box>
                <Box py={1} px={3.5}>
                    <Box my={0.8} sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                        <Typography>Privacy Policy</Typography>
                        <Typography>FAQ</Typography>
                        <Typography>Community</Typography>
                        <Typography>Site Map</Typography>
                    </Box>
                    <Typography >© 2022 All Rights Reserved</Typography>
                </Box>
            </Box>
        </>
    )
}

export default FooterMobile;