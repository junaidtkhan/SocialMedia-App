import { db } from '../../FirebaseConfig';
import { getDoc, doc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { useappStore } from './Store';
import { useState } from 'react';
import { useEffect } from 'react';

export const FetchingFeed = () => {

    const setstorelist = useappStore((state) => (state.setList))

    useEffect(() => {
        const temp = []

        getDocs(collection(db, "users")).then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                doc.data().Posts.forEach((post) => {
                    //console.log(post)
                    temp.push(post)
                })

            });
            setstorelist(temp)
        });
    }, [])

    // const unsub = onSnapshot((collection(db, "users")), (doc) => {
    //     FetchingFeed()
    // });

}

