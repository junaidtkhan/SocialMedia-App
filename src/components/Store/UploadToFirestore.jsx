import React from 'react'
import { db } from '../../FirebaseConfig'
import { addDoc, doc, collection, setDoc, updateDoc, arrayUnion } from 'firebase/firestore'
import { FetchingFeed } from './FetchingFeed'

export const UploadToFirestore = (POST) => {

    const docRef = doc(db, 'users', `${POST.userID}`)
    const commentDocRef = doc(db, 'comments', `${POST.postID}`)
console.log('1')
    setDoc(commentDocRef, {
        comment: []
    }).then(() => {
        console.log('comment added')
    }).catch((err) => {
        console.log(err.message)
    })
    updateDoc(docRef, {
        Posts: arrayUnion(POST)

    }).then((res) => {


    }).catch((err) => {
        console.log(err.message)
    })
    //
}
