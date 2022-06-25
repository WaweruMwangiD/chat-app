import { ChatOutlined, DonutLargeOutlined, MoreVert, Search } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import SidebarChat from './sideBarChat/SidebarChat'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_header'>

            <Avatar />
            <div className='sidebar_header_right'>
                <IconButton>
                    <DonutLargeOutlined />
                </IconButton>
                <IconButton>
                    <ChatOutlined />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            
            </div>
        </div>
        <div className='sidebar_search'>
                <div className="sidebar_search_container">
                    <Search />
                    <input type='text' placeholder='search a chat room' />
                </div>
        </div>
        <div className='sidebar_chats'>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    
    
    
    </div>
  )
}

export default Sidebar