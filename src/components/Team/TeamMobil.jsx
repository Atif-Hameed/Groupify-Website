import React from "react";
import SideBar from "../Dashboard/Sidebar";
// import Table from "./Table";
import { Box, Button, Divider, Grid, Menu, MenuItem, Popover, TextField, Typography, styled } from "@mui/material";
import NavBar from "../Dashboard/Navbar";
import DownNav from "../Dashboard/DownNav";
import Bottom from "../Dashboard/Bottom";
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import RadioIocn from "../../assets/radioicon.png"
import RadioIocn2 from "../../assets/radioicon2.png"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import MailIcon from '@mui/icons-material/Mail';
import FolderIcon from '@mui/icons-material/Folder';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const TeamMobil = () => {
    return(
        <>
        <Box sx={{display:{sm:'none', xs:'unset'}}}>
            <Box>
                <Typography>Status</Typography>
                <Box component={'img'} src={RadioIocn} />
            </Box>
        </Box>
        </>
    )
}

export default TeamMobil;