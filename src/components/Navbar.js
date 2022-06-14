import React from 'react'
import {AppBar , Toolbar, Typography,Tabs,Tab,Button} from '@mui/material'
import { color } from '@mui/system'

const Navbar = () => {
  return (
    <React.Fragment>
        <AppBar sx={{background: "#063970"}}>
            <Toolbar>
            <Typography sx = {{marginRight:"auto"}}> VTECH </Typography>

            <Tabs textColor="inherit">
                <Tab label = "Services" />
                <Tab label = "Contact Us" />
                <Tab label = "About Us" />
            </Tabs>
            <Button sx={{ marginLeft: "auto", color:"lightgrey"}} variant="outlined">Login</Button>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar