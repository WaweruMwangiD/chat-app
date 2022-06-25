import { ChatOutlined, DonutLargeOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_header'>

            <div className='sidebar_header_right'>
                <IconButton>
                    <DonutLargeOutlined />
                </IconButton>
                <IconButton>
                    <ChatOutlined />
                </IconButton>
                <IconButton>
                
                </IconButton>
            
            </div>
        </div>
        <div>
        
        </div>
    
    
    
    </div>
  )
}

export default Sidebar