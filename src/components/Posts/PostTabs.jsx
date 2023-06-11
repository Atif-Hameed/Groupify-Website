import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { AppBar, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import EditIcon from '../../assets/edit.png';
import ArchiveIcon from '../../assets/archive.png';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CreatePostTable from './CreatePostTable';
import PendingPostTable from './PendingPostTable';
import PostHistoryTable from './PostHistoryTable';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';


const Tabs = () => {
   
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" indicatorColor='secondary' >
                        <Tab label= {<Box gap={1} sx={{display:'flex', alignItems:'center'}}>
                            <Box component={'img'} height={'19px'} src={EditIcon} />
                            <Typography textTransform={'capitalize'} fontSize={'16px'} color={'#000'} fontWeight={'500'} >Create Posts</Typography>
                            </Box>} value="1" />
                        
                        <Tab label= {<Box gap={1} sx={{display:'flex', alignItems:'center'}}>
                            <CalendarMonthOutlinedIcon/>
                            <Typography textTransform={'capitalize'} fontSize={'16px'} color={'#000'} fontWeight={'500'} >Pending Posts</Typography>
                            </Box>} value="2" />

                        <Tab label= {<Box gap={1} sx={{display:'flex', alignItems:'center'}}>
                            <InboxOutlinedIcon />
                            <Typography textTransform={'capitalize'} fontSize={'16px'} color={'#000'} fontWeight={'500'} >Posts History</Typography>
                            </Box>} value="3" />
                    </TabList>
                </Box>
                <TabPanel sx={{px:0}} value="1"> <CreatePostTable /></TabPanel>
                <TabPanel sx={{px:0}} value="2"> <PendingPostTable/></TabPanel>
                <TabPanel sx={{px:0}} value="3"> <PostHistoryTable/></TabPanel>
            </TabContext>
        </Box>
    );
}

const PostTabs = () => {
    return (
        <>
            <AppBar elevation={1} sx={{ boxShadow: 'none', backgroundColor: 'transparent',px:3.5, py:1 }} position="static">
            <Tabs/>
            </AppBar>
        </>
    )
}

export default PostTabs;