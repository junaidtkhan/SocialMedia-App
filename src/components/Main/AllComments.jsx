import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../FirebaseConfig';
import { useState } from 'react';
import { useEffect } from 'react';
export const AllComments = (props) => {
    const [loading, setLoading] = useState(true)
    const [comments, setComments] = useState([])

    useEffect(() => {
        const docRef = doc(db, "comments", `${props.postID}`);
        console.log('here')
        getDoc(docRef).then((com) => {
            const temp = []
            com.data().comment.forEach(element => {
                temp.push(element)
            });
            setComments(temp)
            setLoading(false)

        });

    }, [])



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
    return (
        <div>{!loading && <Modal
            open={true}
            onClose={() => { props.setShowComments(false) }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Comments
                </Typography>
                {comments.map((com) => <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {comments.indexOf(com) + 1} : {com}
                </Typography>)}

            </Box>
        </Modal>}
        </div>
    );
}