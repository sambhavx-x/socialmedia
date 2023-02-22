import React from 'react'
import { Box } from '@mui/material'
import './post.css'
import {format} from 'timeago.js'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react'
function Post({post}) {
  const [like, setlike] = useState(post.likes.length)
const [idliked, setisliked] = useState(false)
const [user, setuser] = useState(false)

useEffect(() => {
 const fetchUser =async()=>{ const res =await axios.get(`user${post.userId}`)
  setuser(res.data)
};
fetchUser();
}, [post.userId])


  return (
  <> 

  <Box sx={{background:"white",height:'10vh',width:'40vw',ml:'2vw',mr:'2vw',mt:'2vh',borderRadius:'20px',height:'50vh'}}> 
  <span>{post.userId}</span><br />
    <span>{format(post.createdAt)}</span><br />
  <span>{post.description}</span>
  </Box>
 

</>

  )
}

export default Post