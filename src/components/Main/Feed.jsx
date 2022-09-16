import React from 'react'
import { Box } from '@mui/material'
import { Post } from './Post'

export const Feed = () => {

  return (
    <Box
      flex={4}
      p={8}
      display='flex'
      flexDirection='column'
      gap='30px'
    >
      <Post />
      <Post />
      <Post />
      <Post />

    </Box>
  )
}
