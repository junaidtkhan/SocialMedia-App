import React from 'react'
import { db } from '../../FirebaseConfig'
import { addDoc, doc, collection, setDoc, updateDoc, arrayUnion } from 'firebase/firestore'
export const UploadToFirestore = (POST) => {
   
    const docRef = doc(db, 'users', `${POST.userID}`)
   
    updateDoc(docRef, {
        Posts: arrayUnion(POST)
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err.message)
    })
   
}
