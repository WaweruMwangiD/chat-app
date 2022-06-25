import { Avatar } from '@mui/material';
import React from 'react'
import './SidebarChat.css'

function SidebarChat() {
  return (
    <div className='sidebar_chat'>
        <Avatar />
        <div className='sidebar_chat_info'>
            <h2>Room Name</h2>
            <p>Last text...</p>
        
        </div>
    </div>
  )
}

export default SidebarChat;