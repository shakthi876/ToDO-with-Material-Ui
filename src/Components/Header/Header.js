import React from 'react'
import H from './Headercss.module.css'
import {Link} from 'react-router-dom'
import { AppBar, Tab, Typography } from '@material-ui/core'
import { Tabs } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  el: {
   textDecoration:'none'
  },

}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
     

     <center>
     <Typography
      variant='h4'
      component={Link} 
      className={classes.el}
      to="/"
     >
        <span style={{color:'red'}}> ToDo </span><span style={{color:'black'}}>List</span>
     </Typography>
     </center>
    {/* <AppBar color='inherit' position='fixed' title="My App" elevation={2}> 
    <Tab label="ToDo List" inkBarStyle={{background: 'red'}}  component={Link} to="/" />
      </AppBar> */}

    


    {/* <center>
        <div className={H.container}>
            <Link to='/'> <span className={H.headertodo}> ToDo </span> List</Link> 
             
        </div>
    </center> */}
    </>
  )
}

export default Header