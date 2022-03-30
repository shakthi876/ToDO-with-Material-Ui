import React from 'react'
import F from './Footercss.module.css'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'

const Footer = () => {
  return (
    <>

<center>
    <Typography>
      &copy; shakthi.com
    </Typography>

    <Typography>
    <Link to='/about'>About</Link>
    </Typography>
    </center>

    {/* <div className={F.container}>
   
    <center>&copy;<span>Shakthi.com <span>  <Link to='/about'>About</Link>  </span> </span></center> 
    
    </div> */}
    </>
  )
}

export default Footer