import { Avatar, Fab, Input, TextField, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Stack, styled } from '@mui/system';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { storage } from '../../FirebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid';
import { useappStore } from '../Store/Store';
import { UploadToFirestore } from '../Store/UploadToFirestore'

export const Add = () => {
    const [open, setOpen] = useState(false)
    const [image, setImage] = useState(null)
    const [Description, setDescription] = useState('')
    const setPost = useappStore((state) => (state.setPost))
    const uploadingPost = useappStore((state) => (state.uploadingPost))
    const currentUser = useappStore((state) => (state.currentUser))

    const UserBox = styled(Box)({
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        marginBottom: '20px'
    })
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(`images/${image.name}`)
        const imageRef = ref(storage, `images/${image.name}` + uuidv4())

        uploadBytes(imageRef, image).then((data) => {
            getDownloadURL(imageRef).then((url) => {
                console.log(url)
                console.log(Description)
                const uid = currentUser.uid
                const post = {
                    postURL: url,
                    description: Description,
                    Liked: false,
                    Comments: [],
                    userID: uid,
                    postID: uuidv4()
                }
                console.log(post)
                UploadToFirestore(post)


            }).catch((err) => {
                console.log(err.message)
            })
            alert('Image uplaoded')
        }).catch((err) => {
            alert(err.message)
        })
    }
    return (
        <>

            <Tooltip title="Add" sx={{ position: 'fixed', bottom: '20px', left: { xs: "calc((50%) - 25px)", sm: "10px" } }}>
                <Fab color="primary" aria-label="add" >
                    <AddIcon onClick={e => setOpen(true)} />
                </Fab>
            </Tooltip>


            <Modal
                open={open}
                onClose={() => { setOpen(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style} width={400} height={280} bgcolor={'background.default'} color='text.primary' borderRadius={5} p={2}>




                    <Typography variant="h6" color='#888' textAlign='center'>Create Post</Typography>
                    <UserBox>
                        <Avatar alt='junaid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjIWqJhtGNjemwaOfYZcw_AjDidwRoVhpOeXKYnKJ4g&s"
                        />
                        <Typography variant='h6' >
                            RiseTech
                        </Typography>
                    </UserBox>

                    <form onSubmit={submitHandler}>

                        <TextField
                            sx={{ width: '100%' }}
                            id="standard-multiline-static"
                            autoFocus
                            placeholder="What's on your mind..!"
                            variant="standard"
                            onChange={(e) => { setDescription(e.target.value) }}
                        />
                        <Stack direction='row' gap={2} mt={2} mb={2}>
                            <EmojiEmotionsIcon color='primary' />
                            <div>

                                <label htmlFor='imageIcon'></label>
                                <input type='file' id='imageIcon' onChange={(e) => { setImage(e.target.files[0]) }}></input>
                            </div>

                            <ImageIcon color='secondary' />

                            <VideoCameraBackIcon color='success' />
                            <PersonAddIcon color='error' />
                        </Stack>
                        <Button sx={{ float: 'right' }} type='submit' > Submit</Button>


                        {/* <div>
                            <label htmlFor='img'></label>
                            <input id='img' type="text" onChange={(e) => { setImage(e.target.value) }}></input>
                        </div>
                        <div>
                            <button type='submit'>Upload</button>
                        </div> */}
                    </form>
                </Box>
            </Modal>




        </>
    )
}
