import { Box } from "@mui/material";
import React from "react";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

const Bottom = () => {
    return (
        <>
            <Box sx={{ width: '100%',height:'50px', backgroundColor: '#00778B', display: 'flex', justifyContent: 'flex-end' }}>
                <Box sx={{ backgroundColor: '#008399', mx: 3, px: 2, borderRadius: '50%',display:'flex', justifyContent:'center',alignItems:'center' }}>
                    <ChatOutlinedIcon sx={{ color: '#fff',fontSize:'25px' }} />
                </Box>
            </Box>
        </>
    )
}

export default Bottom;