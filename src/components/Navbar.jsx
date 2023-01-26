import React from 'react';
import { LightModeOutlined, DarkModeOutlined, Search, Menu as MenuIcon } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material';
import FlexBetween from './FlexBetween';




const Navbar = () => {
    const dispatch= useDispatch();
    const theme= useTheme();
  return (
   <AppBar
   sx={{
    position: "static",
    background: "none",
    boxShadow: "none",
   }}>
        <Toolbar sx={{justifyContent: "space-between"}}>
            {/**LEFT SIDE */}
            <FlexBetween>
                <IconButton onClick={ () => console.log("open/close sidebar")}>
                    <MenuIcon/>
                </IconButton>
                <FlexBetween
                    backgroundColor={theme.palette.background.alt}
                    borderRadius="9px"
                    gap="3rem"
                    p="0.1 rem 1.5rem"
                >
                    <InputBase placeholder='Search...'/>
                    <IconButton>
                        <Search/>
                    </IconButton>
                </FlexBetween>
            </FlexBetween>
        </Toolbar>
   </AppBar>
  )
}

export default Navbar