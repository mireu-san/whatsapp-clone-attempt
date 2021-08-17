import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';

import React, { useState, useEffect } from 'react';
import './Chat.css';
import { InsertEmoticon } from '@material-ui/icons';

function Chat() {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className='chat__headerInfo'>
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className='chat__headerRight'>
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

                {/* message start */}
            <div className='chat__body'>
                {/* true == message.name === user.displayName */}
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className='chat__name'>Mima sama</span>
                        Hey guys!
                    <span className='chat__timestamp'>
                        12:32am
                    </span>
                </p>
            </div>
                {/* message end */}

            <div className='chat_footer'>
                <InsertEmoticon />
            <form>
                <input type='text' />
                <button>Send a message</button>
            </form>
            </div>

        <div className='chat__body'>
        </div>

        </div>


    )
}

export default Chat
