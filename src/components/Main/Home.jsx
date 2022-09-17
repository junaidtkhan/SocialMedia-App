import { Add } from '@mui/icons-material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { Feed } from './Feed'
import { Navbar } from './Navbar'
import { Rightbar } from './Rightbar'
import { Sidebar } from './Sidebar'

export const Home = (props) => {
    
  return (
    
    <Box bgcolor={'background.default'} color='text.primary'>
        <Navbar setMode={props.SetMode} mode={props.Mode} />
        <Stack direction="row" spacing={2} justifyContent="space-between" >
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />

      </Box>
  )
}
