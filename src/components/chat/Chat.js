import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Chat.css'

function Chat() {
  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar />
        <div className='chat_header_info'>
          <h4>Room name</h4>
          <p>Last seen at ...</p>
        </div>
        <div className='chat_header_right'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        <p className='chat_message'>
          <span className='chat_name'>Helloooo Dave</span>
          <span className='chat_timestamp'>
            
          </span>
        </p>
      </div>
    
    </div>
  )
}

export default Chat