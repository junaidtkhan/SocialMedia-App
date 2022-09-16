import { Avatar, Fab, TextField, Tooltip } from '@mui/material'
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

export const Add = () => {
    const [open, setOpen] = useState(false)
    const StyledModal = styled(Modal)({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    })
    const UserBox = styled(Box)({
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        marginBottom: '20px'
    })
    return (
        <>

            <Tooltip title="Add" sx={{ position: 'fixed', bottom: '20px', left: { xs: "calc((50%) - 25px)", sm: "10px" } }}>
                <Fab color="primary" aria-label="add" >
                    <AddIcon onClick={e => setOpen(true)} />
                </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280}  bgcolor={'background.default'} color='text.primary' borderRadius={5} p={2}>
                    <Typography variant="h6" color='#888' textAlign='center'>Create Post</Typography>
                    <UserBox>
                        <Avatar alt='junaid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjIWqJhtGNjemwaOfYZcw_AjDidwRoVhpOeXKYnKJ4g&s"
                        />
                        <Typography variant='h6' >
                            RiseTech
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        placeholder="What's on your mind..!"
                        variant="standard"
                    />
                    <Stack direction='row' gap={2} mt={2} mb={2}>
                        <EmojiEmotionsIcon color='primary'/>
                        <ImageIcon color='secondary'/>
                        <VideoCameraBackIcon color='success'/>
                        <PersonAddIcon color='error'/>
                    </Stack>
                </Box>
            </StyledModal>

        </>
    )
}
