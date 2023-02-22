import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes}  from 'react-router-dom';
import Homepage from './components/Homepage';

import Register from './components/Register'
import Upload from './components/Upload';
import { useDispatch } from 'react-redux';
import profile from './components/profile';
// import {getPosts} from './actions/posts'


function App() {

  // const dispatch = useDispatch();
  // useEffect (()=>{
  //   dispatch(getPosts());
  // },[dispatch]);
  return (
    <Router>
      <Routes>
   
    <Route path='/' element={<Register/>}/>
   
    <Route path='/upload' element={<Upload/>}/>
    <Route path='/homepage' element={<Homepage/>}/>
    <Route path ='/profile/:username' element={profile}/>

    </Routes>
    </Router>
  );
}

export default App;