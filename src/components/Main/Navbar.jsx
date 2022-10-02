import React from 'react'
import { useState } from 'react';
import { useappStore } from '../Store/Store';
import { signOut } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';

import { AppBar, styled, Toolbar, Typography, Box, Button } from '@mui/material'
import WebIcon from '@mui/icons-material/Web';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import DarkMode from '@mui/icons-material/DarkMode';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { v4 } from 'uuid';
import { Refresh } from './Refresh';

export const Navbar = (props) => {
  const setLoggedIn = useappStore((state) => (state.setLoggedIn))

  const [open, setOpen] = useState(false)

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  })
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    color: "black",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }))
  const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    justifyContent: "space-around",
    width: '9rem',
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: { display: 'flex' }
  }))
  const UserBox = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '5px',
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: { display: 'flex' }
  }))
  const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',

    [theme.breakpoints.down("sm")]: { display: 'flex', flexDirection: 'column', margin: '5px 0' }
  }))
  const LogoutHandler = () => {
    signOut(auth).then(() => {
      alert('user logged out')
      localStorage.setItem('user','')
      setLoggedIn(false)
    }).catch((err) => {
      console.log(err.message)
    })
  }
  return (
    <AppBar position="sticky" >
      <StyledToolbar sx={{ gap: '10px' }}>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>RiseTech</Typography>
        <WebIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder=' Searching...' /></Search>

        <Container>
          <Refresh />
          <Box>
            <Button color="secondary" onClick={e => props.setMode(props.mode === 'light' ? 'dark' : 'light')}>

              <DarkMode />
            </Button>
            {/* <Switch  onClick={e=>props.setMode(props.mode==='light'?'dark':'light')} /> */}
          </Box>
          <Icons>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
            <Avatar alt='junaid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjIWqJhtGNjemwaOfYZcw_AjDidwRoVhpOeXKYnKJ4g&s"
              onClick={e => setOpen(true)}
            />
          </Icons>
          <UserBox>
            <Avatar alt='junaid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjIWqJhtGNjemwaOfYZcw_AjDidwRoVhpOeXKYnKJ4g&s"
              onClick={e => setOpen(true)}
            />
            <Typography variant="span" onClick={e => setOpen(true)}>RiseTech </Typography>
          </UserBox>
        </Container>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"

        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >
          <label for="myfile">Profile</label>
          <input type="file" id="myfile" name="myfile" />
        </MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem onClick={LogoutHandler}>Logout</MenuItem>
      </Menu>
    </AppBar>

  )
}
