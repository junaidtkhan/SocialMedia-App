import { Box, Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { Feed } from './Feed'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Rightbar } from './Rightbar'
import { Add } from './Add'
import { useState } from 'react'
import { getDoc, doc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { useappStore } from '../Store/Store';
import { db } from '../../FirebaseConfig'
export const Home = (props) => {

  const [loading, setLoading] = useState(true)
  const setstorelist = useappStore((state) => (state.setList))
  const list = useappStore((state) => (state.list))





  useEffect(() => {
    console.log('Entered useeffect')
    setLoading(true)

    const temp = []

    getDocs(collection(db, "users")).then((querySnapshot) => {
      
      querySnapshot.forEach((doc) => {
        doc.data().Posts.forEach((post) => {
          //console.log(post)
          post.name=doc.data().name
          // console.log(post.name)
          temp.push(post)
        })

      });
      setstorelist(temp)
      setLoading(false)
    })
    console.log('list updated')


  }, [])

  return (
    <Box bgcolor={'background.default'} color='text.primary' >
      <Navbar setMode={props.SetMode} mode={props.Mode} />
      <Stack direction="row" spacing={2} justifyContent="space-between" >
        <Sidebar />
        {!loading && <Feed />}
        <Rightbar />
      </Stack>
      <Add />

    </Box>
  )
}
