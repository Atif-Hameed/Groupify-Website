import { Box, Button, Typography } from "@mui/material";
import React from "react";
import LogoMain from '../../assets/logoMain.png'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

const SendPost = () => {
    return(
        <>
           <Box sx={{width:'650px', mx:'auto', my:10}}>
            <Box mb={5} component={'img'} src={LogoMain} height={'70px'} />
            <Typography mb={3} variant="h4">Your Team Member, &#123;&#123;First & Last Name&#125;&#125;, has published a new Post!</Typography>
            <Typography mb={3} color={'#6B7280'}>Posted Date: &#123;&#123;Date&#125;&#125; &#125;&#125;Time&#125;&#125;</Typography>
            <Typography mb={3} color={'#6B7280'}>Target Group &#123;&#123;Selected Group Name&#125;&#125;</Typography>
            <Typography  mb={2} color={'#6B7280'}>  Brief: &#123;&#123;Short Summary of Post Content&#125;&#125; </Typography>

            <Box sx={{width:'500px'}}>
            <Button fullWidth sx={{backgroundColor:'#00778B', textTransform:'capitalize', py:1}} variant="contained">Click to View Post Request</Button>
                <Box mt={4} sx={{display:'flex', gap:2}}>
                <ExpandCircleDownOutlinedIcon sx={{color:'#00778B', transform: 'rotate(270deg)'}} />
                <Typography fontSize={'17px'} color={'#818094'}>Alternatively, you can copy and paste this link into your browser to verify:  <span style={{color:'#00778B'}} >www.groupify.com/verify</span></Typography>
                </Box>
            </Box>
           </Box>
        </>
    )
}

export default SendPost;