import { Avatar, Box, Button, Dialog, DialogContent, Divider, Grid, Skeleton, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import MaximizeOutlinedIcon from '@mui/icons-material/MaximizeOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SchedulePost from "./SchedulePost";
import { Link } from "react-router-dom";

const NewPost = (props) => {

    const [schedulopen, setschedulopen] = useState(false)

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

                <Grid container spacing={0}>

                    <Grid px={3} sx={{ backgroundColor: '#fff' }} py={3} item sm={6} xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography>Content</Typography>
                            <Typography>0</Typography>
                        </Box>
                        <Box sx={{
                            backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB',
                            borderRadius: '5px',
                        }}>
                            <TextField

                                id="outlined-multiline-flexible"
                                placeholder="Enter your text and links"
                                multiline
                                rows={6}
                                fullWidth

                            />
                            {/* <Divider /> */}
                            <TextField
                                id="outlined-read-only-input"
                                label={<Box sx={{ display: 'flex', gap: 1 }}>
                                    <SentimentSatisfiedAltOutlinedIcon sx={{ color: '#000' }} />
                                    <SmartToyOutlinedIcon sx={{ color: '#000' }} /></Box>}
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Box>

                        <Typography mt={3.5}>Media</Typography>

                        <Grid container spacing={1} mb={8}>

                            <Grid item sm={6} xs={12} >
                                <Box py={2} sx={{ border: '2px dashed #E5E7EB', borderRadius: '10px', backgroundColor: '#F9FAFB', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                                    <ImageOutlinedIcon sx={{ color: '#000' }} />
                                    <input
                                        accept="image/*"
                                        id="file-input"
                                        type="file"
                                        style={{ display: 'none' }}

                                    />
                                    <label htmlFor="file-input" style={{ cursor: 'pointer' }} >
                                        <Typography fontSize={'13px'} textAlign={'center'}>Drag files here<br /><span style={{ color: '#00778B', fontWeight: 'bold' }} >or select files to upload</span></Typography>
                                    </label>
                                </Box>
                            </Grid>

                            <Grid item sm={6} xs={12}>
                                <Box py={2} sx={{ border: '2px dashed #E5E7EB', borderRadius: '10px', backgroundColor: '#F9FAFB', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                                    <CloudUploadOutlinedIcon sx={{ color: '#000' }} />
                                    <input
                                        accept="image/*"
                                        id="file-input"
                                        type="file"
                                        style={{ display: 'none' }}

                                    />
                                    <label htmlFor="file-input" style={{ cursor: 'pointer' }} >
                                        <Typography fontSize={'13px'} textAlign={'center'}>Explore thousands of assets<br /><span style={{ color: '#00778B', fontWeight: 'bold' }} >Browse your media</span></Typography>
                                    </label>
                                </Box>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid px={3} sx={{ backgroundColor: '#374151' }} py={3} item sm={6} xs={12}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                            <Box>
                                <Box mb={2} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Skeleton style={{ backgroundColor: '#fff' }} width={15} height={15} variant="circular" />
                                    <Skeleton style={{ backgroundColor: '#fff' }} width={55} height={20} variant="text" sx={{ fontSize: '1rem' }} />
                                </Box>

                                <Stack mb={3} p={2} spacing={1} sx={{ backgroundColor: '#fff', borderRadius: '7px' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Skeleton variant="circular" width={40} height={40} />
                                        <Skeleton style={{}} width={55} height={20} variant="text" sx={{ fontSize: '1rem' }} />
                                    </Box>

                                    <Skeleton style={{}} width={'100%'} height={20} variant="text" sx={{ fontSize: '1rem' }} />
                                    <Skeleton style={{}} width={100} height={20} variant="text" sx={{ fontSize: '1rem' }} />

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                        <Skeleton variant="text" width={60} height={20} />
                                        <Skeleton variant="text" width={60} height={20} />
                                        <Skeleton variant="text" width={60} height={20} />
                                    </Box>
                                </Stack>

                                <Typography textAlign={'start'} fontSize={'13px'} sx={{ color: '#fff' }}>
                                    Social netwoerks regularly make updates to formatting,
                                    so your post may appear slightly different when published. <span style={{ fontWeight: 'bold' }} >Learn more</span>
                                </Typography>
                            </Box>



                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                                <Button onClick={e => setschedulopen(true)} variant="contained" sx={{ backgroundColor: '#D1D5DB', color: '#000', textTransform: 'capitalize' }}>Schedule for later</Button>
                                <Link to="/sendPost">
                                <Button variant="contained" sx={{ backgroundColor: '#00778B', textTransform: 'capitalize' }} endIcon={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <MaximizeOutlinedIcon sx={{ transform: 'rotate(90deg)' }} />
                                    <ExpandMoreOutlinedIcon />
                                </Box>}>Post now</Button>
                                </Link>
                            </Box>

                            <Dialog
                                maxWidth="md" sx={{ '& .MuiDialog-paper': { width: '900px' } }}
                                open={schedulopen}
                                onClose={e => setschedulopen(false)}>

                                <DialogContent sx={{ width: '100%', p: 0, m: 0 }}>
                                    <SchedulePost des={<Avatar onClick={e => setschedulopen(false)} sx={{ backgroundColor: '#fff', cursor: 'pointer' }}>
                                        <CloseOutlinedIcon sx={{ color: '#000' }} />
                                    </Avatar>} />
                                </DialogContent>

                            </Dialog>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default NewPost;