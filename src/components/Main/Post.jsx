import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { v4 } from 'uuid';
import { Box, Button, Divider, FormControl, FormHelperText, FormLabel, TextareaAutosize, TextField } from '@mui/material';
import { useState } from 'react';
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db, } from '../../FirebaseConfig';
import { UploadToFirestore } from '../Store/UploadToFirestore';
import { AllComments } from './AllComments';



export const Post = (props) => {

  const [enteredComment, setEnteredComment] = useState('')
const[showComments,setShowComments]=useState(false)

  const likeHandler = (event) => {
    event.preventDefault()
  }
  const commentHandler = (e) => {
    e.preventDefault()

    if (enteredComment == '') {
      alert('invalid input')
      return
    }
    console.log('Commented')
    const docRef = doc(db, 'comments', `${props.postID}`)

    updateDoc(docRef, {
      comment: arrayUnion(enteredComment)
    }).then(() => {
      setEnteredComment('')
      console.log('comment uploaded')
    })

  }
  const ShowComments = () => {
    if(showComments==true){
      setShowComments(false)
      
    }
    if(showComments==false){
      setShowComments(true)

    }
  }
  return (
    <>

      <Card sx={{ boxShadow: '6px 8px 20px -2px rgba(0,0,0,0.42)' }} >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.name}
        // subheader={props.description}
        />
        <Typography sx={{ marginLeft: '20px', marginBottom: '5px', fontWeight: 'bold', fontFamily: 'sans-serif' }} variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <CardMedia sx={{ paddingBottom: '0' }}
          component="img"
          image={props.postURL}
          alt="picture"
        />
        <CardContent>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox onClick={likeHandler} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />

          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="comment" >
            <CommentIcon onClick={ShowComments} />
          </IconButton>

        </CardActions>
        <Divider />

        <form onSubmit={commentHandler}>
          <Box display='flex'>

            <TextField
              sx={{ width: '100%' }}
              id="standard-multiline-static"
              autoFocus
              placeholder="Type Comment here..."
              variant="standard"
              value={enteredComment}
              onChange={(e) => { setEnteredComment(e.target.value) }}
            />
            <Button sx={{ marginRight: '5px' }} type='submit'>Comment</Button>
          </Box>
        </form>

      </Card>

     {showComments && <AllComments postID={props.postID} setShowComments={setShowComments}/>}
      
    </>
  )
}
