import { Button } from '@mui/material'
import React from 'react'
import { db } from '../../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useappStore } from '../Store/Store';

export const Refresh = () => {
    const setstorelist = useappStore((state) => (state.setList))

    const updateList = () => {

        const temp = []

        getDocs(collection(db, "users")).then((querySnapshot) => {

            querySnapshot.forEach((doc) => {

                doc.data().Posts.forEach((post) => {
                    post.name = doc.data().name
                    //console.log(post)
                    temp.push(post)
                })

            });
            setstorelist(temp)
            console.log('Data Fetched')
        })

    }

    return (
        <Button sx={{ color: 'white' }} onClick={updateList}>Refresh</Button>
    )
}
