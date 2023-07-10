import { Avatar, Box, Button, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Skeleton, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import OutlinedInput from '@mui/material/OutlinedInput';

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
];

const SchedulePost = (props) => {

    const [personName, setPersonName] = React.useState('');

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    return (
        <>
            <Box maxWidth={'900px'} minWidth={'auto'} height={'auto'} >

                <Box width={'100%'} py={0.5} height={'50px'} sx={{ backgroundColor: '#00778B', display: 'flex', alignItems: 'center' }}>

                    <Box px={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <Typography color={'#fff'} fontWeight={'bold'} >Create New Post</Typography>
                        <Box sx={{ backgroundColor: '#00778B', display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar sx={{ backgroundColor: '#fff' }}>
                                <OpenInFullOutlinedIcon sx={{ color: '#000' }} />
                            </Avatar>

                            {props.des}

                        </Box>
                    </Box>

                </Box>

                <Box width={'100%'} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box pt={0} pb={2} width={'550px'} sx={{ border: '1px solid #E5E7EB' }}>
                        <Grid container spacing={2} sx={{}}>
                            <Grid item xs={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateCalendar />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Box>
                                    <Typography mt={2} fontWeight={'bold'} >Manually set time</Typography>
                                    <Typography color={'#6B7280'} >(GMT-4) America/New York</Typography>

                                    <Box mt={1} sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
                                        <Box>
                                            <select style={{ width: '50px', height: '30px', fontSize: '16px' }}>
                                                <option>3</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                            </select>
                                        </Box>
                                        <Box>
                                            <select style={{ width: '60px', height: '30px', fontSize: '16px', mx: 3 }}>
                                                <option>25</option>
                                                <option>10</option>
                                                <option>20</option>
                                                <option>24</option>
                                                <option>15</option>
                                                <option>16</option>
                                                <option>17</option>
                                                <option>18</option>
                                                <option>29</option>
                                                <option>11</option>
                                                <option>13</option>
                                                <option>22</option>
                                            </select>
                                        </Box>
                                        <Box>
                                            <select style={{ width: '60px', height: '30px', fontSize: '16px' }}>
                                                <option>PM</option>
                                                <option>AM</option>
                                            </select>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>

                        <Box sx={{display:'flex', justifyContent:'center',width:'100%'}}>
                            <Box sx={{width:'450px'}}>
                                <Typography mb={1} fontWeight={'bold'} >Post to</Typography>
                                <FormControl>
                                    <Select
                                        sx={{ width: '450px', backgroundColor:'#E5E7EB'}}
                                        value={personName}
                                        size="small"
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem disabled value="">
                                            Select Group(s) to Publish Post
                                        </MenuItem>
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <Typography my={1} fontWeight={'bold'} >Assign to</Typography>
                                <FormControl>
                                    <Select
                                        sx={{ width: '450px', backgroundColor:'#E5E7EB' }}
                                        value={personName}
                                        size="small"
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem disabled value="">
                                            Select Team Member(s) to Assign Post Request
                                        </MenuItem>
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <Button sx={{ width: '450px', mt: 3, backgroundColor:'#00778B', textTransform:'capitalize' }} variant="contained">Schedule Post</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default SchedulePost;