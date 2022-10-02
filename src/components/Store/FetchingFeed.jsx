import { db } from '../../FirebaseConfig';
import { getDoc, doc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { useappStore } from './Store';
import { useState } from 'react';
import { useEffect } from 'react';

function FetchingFeed(params) {
    return new Promise((resolve, reject) => {
        const setstorelist = useappStore((state) => (state.setList))


        const temp = []

        getDocs(collection(db, "users")).then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
               
                doc.data().Posts.forEach((post) => {
                    //console.log(post)
                    temp.push(post)
                })

            });
            setstorelist(temp)
            resolve('Data Fetched')
        }).catch((err) => {
            reject(err.message)
        })
    })
}
export default FetchingFeed
// export const FetchingFeed = (params) => {
    
// }



// export const FetchingFeed = new Promise((resolve, reject) => {
//     try {

//         resolve()
//     } catch (error) {
//         reject(error)
//     }


// })


