import { Box, Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { Feed } from './Feed'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Rightbar } from './Rightbar'
import { Add } from './Add'
import { v4 } from 'uuid'
import { FetchingFeed } from "../Store/FetchingFeed"
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../FirebaseConfig'

export const Home = (props) => {

  // useEffect(() => {
  //   const unsub = onSnapshot((collection(db, "users")), (doc) => {
  //     FetchingFeed()
  //   });
  // }, [])

  return (
    <Box bgcolor={'background.default'} color='text.primary' >
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
