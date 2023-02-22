import React, { useState ,useEffect} from 'react'
import Navbar from './Navbar';
import { Paper, TextField } from '@mui/material';
import './homepage.css'
import axios from 'axios';
import Post from './post'
import bootstrap from 'bootstrap'
import { Button ,Box} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
function Homepage() {
    // const posts = useSelector((state)=>state.posts);
    // console.log(posts);

    const [post, setpost] = useState([])

    useEffect(() => {
      const fetchPosts=async ()=>{
        const res= await axios.get('http://localhost:5001/posts/timeline/63f3e67f8617d52fde2400a1')
       
        setpost(res.data);
       
      }
      fetchPosts();

    
      
    }, [])
    
  return (

<div className="homepage_body">
    <Navbar/>
    <div className='homepage'>
       
       <div className="personal block-1">
        </div>
        <div className="feed">
        <Box sx={{background:"white",height:'10vh',width:'40vw',ml:'2vw',mr:'2vw',mt:'2vh',borderRadius:'20px',height:'25vh'}}>
          <div className="feed_post">
         
         <AccountCircleIcon sx={{width:'5vw',height:'10vh'}}/>
        <input placeholder="What's on Your Mind?!!" className='feed_input'></input>
        </div>
        <Button sx={{ml:'31vw',mt:'0vh',background:'blue',color:'white','&:hover':{background:'darkblue'}}}>Submit</Button>
       
        </Box>
        {post.map((p)=>(<Post key ={p.id} post={p} />))} 
        
        </div>
       <div className="messages block-3">msgs</div>
   </div>
   </div>
    
  )
}

export default Homepage