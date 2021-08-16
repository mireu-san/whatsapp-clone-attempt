import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import { SearchOutlined } from '@material-ui/icons';
import './Sidebar.css';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <AnnouncementIcon />
                    </IconButton>
                    <IconButton>
                        <MenuOpenIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />

            </div>
        </div>
    );
}

export default Sidebar;