import React, { useEffect, useState } from 'react';
import { Avatar } from "@material-ui/core";
import './SidebarChat.css';


function SidebarChat( { addNewChat } ) {
    const [seed, setSeed] = useState('');


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const createChat = () => {
        const roomName = prompt("please enter name for chat");

        if (roomName) {
            // this section will be database stuff later on...
        };
    };



    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChart__info">
                <h2>Room name</h2>
                <p>Last message</p>
            </div>
        </div>
        // otherwise 성격을 띈 것. 위의 조건과 다르지도 않으면, else격.
    ): (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add new chat</h2>        
        </div>
        );
    }

export default SidebarChat
