import React from 'react'
import { Box } from '@mui/material'
import { Post } from './Post'
import { FetchingFeed } from '../Store/FetchingFeed'
import { useEffect } from 'react'
import { v4 } from 'uuid'
import { useappStore } from '../Store/Store'
export const Feed = () => {
  
  // useEffect(() => {
  // }, [])
  const list = useappStore((state) => (state.list))
 // console.log(list[0].postURL)

  return (
    <Box
      flex={4}
      p={8}
      display='flex'
      flexDirection='column'
      gap='30px'
      key={v4()}
    >
      {list.map((post) => (<Post
        url={post.postURL}
        comments={post.description}
        liked={post.Liked}
        name={post.userID}
      />))}

    </Box>
  )
}
export const getdata = (data) => {

}
