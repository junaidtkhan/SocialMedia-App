import React from 'react'
import { Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Divider from '@mui/material/Divider';
import { v4 } from 'uuid';

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }} >
      <Box position="fixed" pr={1}>

        <Box m={1} >

          <Typography variant='h6' fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup total={10} >
            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          </AvatarGroup>
        </Box>

        <Divider />

        <Box m={1}>
          <Typography variant='h6' fontWeight={100} pb={2}>
            Latest Uploads
          </Typography>
          <ImageList variant="masonry" cols={3} gap={5} rowHeight={100}>

            <ImageListItem >
              <img
                src="https://random.imagecdn.app/400/400"
                alt="hello"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem >
              <img
                src="https://random.imagecdn.app/400/400"
                alt="hello"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem >
              <img
                src="https://random.imagecdn.app/400/400"
                alt="hello"
                loading="lazy"
              />
            </ImageListItem>
            
          </ImageList>
        </Box>

        <Divider />

        <Box m={1} >
        <Typography variant='h6' fontWeight={100} >
            Latest Conversation 
          </Typography>
          <List >
            <ListItem alignItems="flex-start"  >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40Xa5s3XqAwGIfF7YXOl_U_5Jh7nt7VN5bBx7MJc&s" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>

                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>

      </Box>
    </Box>
  )
}
