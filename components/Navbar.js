import React from 'react'
import './navbar.css'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Input, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
function Navbar() {


  return (
    
    
    <div className="navbar">SOCiALS
   

     <div className="right">
     <div className="search">
     <Paper component="form" onSubmit={()=>{}} className='paper'
     sx={{borderRadius:20 ,borderRadius:'1px solid #e3e3e3'}}><Input className='search-bar' placeholder='Search' value="" onChange={()=>{}}/>
     
      <IconButton sx={{color:'red'}} color='red'><SearchIcon/></IconButton>
     </Paper>
    
     </div>
     
        <div className="login">
            <span className="one">Hello user</span>
            <span className="two">Sign in</span>
        </div>
        </div> 

        {/* MOBILE_NAV---LIGHT-LO-ABHI  */}
        {/* {!isNonMobileScreens&&isMobileMenutoggled&&(<Box >box
          
        </Box>)}
      */}
      </div>
  )
}

export default Navbar