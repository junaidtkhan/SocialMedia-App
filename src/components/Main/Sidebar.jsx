import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Divider from '@mui/material/Divider';

import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import React from 'react'
import { v4 } from 'uuid';

export const Sidebar = () => {
  return (
    <Box flex={1.5} p={2} sx={{ display: { xs: "none", sm: "block" } }} key={v4()}>
      <Box width="21%" position='fixed'>

        <List sx={{ width: '100%', fontSize: "5px", bgcolor: 'background.paper' }}>

          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />

          </ListItemButton>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItemButton
          >
            <ListItemText primary="Trash" />
          </ListItemButton>
          <ListItemButton
          >
            <ListItemText primary="Spam" />
          </ListItemButton>
          <Divider />

        </List>

      </Box>
    </Box>
  )
}
