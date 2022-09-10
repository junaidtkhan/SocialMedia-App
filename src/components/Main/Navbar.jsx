import React from 'react'
import { useState } from 'react';
import { AppBar, styled, Toolbar, Typography, Box } from '@mui/material'
import WebIcon from '@mui/icons-material/Web';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const Navbar = () => {
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
  return (
    <AppBar position="stick">
      <StyledToolbar sx={{ gap: '10px' }}>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>RiseTech</Typography>
        <WebIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder=' Searching...' /></Search>
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
          <Typography variant="span">RiseTech </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>

  )
}
