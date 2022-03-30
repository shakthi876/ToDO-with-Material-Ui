import { Button, Tab, Typography } from '@material-ui/core';
import { PictureAsPdfOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const About = () => {
  const mystlye1={
    padding:'10px',
    margin:"20px",
    fontSize:"20px"
  };
  const overall={
    margin:'20px'
  };
  const mystyle2= {
    color: "black",
    padding:'10px',
    margin:"20px",
    fontSize:"20px"
  };
  return (
    <>
    <Header />

    <div style={overall}>
    <center>

   
<Button
startIcon={<ArrowBackIosIcon/>}
component={Link} 
color='primary'
to='/' 
>
 Go Back
  
</Button>
   
</center>
      <Typography
      style={mystyle2}
      align='center'
      color='textPrimary'
      gutterBottom
      paragraph
      >
      To Do List Version 1.0 <br />  
      To Do is a task management app to help you stay organized and manage your day-to-day. <br />
      It is developed in React Js and used Json as fake backend.  

      </Typography>
    
     <Typography
     align='center'
     color='textPrimary'
     style={mystlye1}
     >

     <span style={{color: "red"}}>Developed By</span> <br/>
     <span  > Shakthi Naarayann R  </span>
     </Typography>
     </div>
    </>
  )
}

export default About