
import React, { useContext } from 'react';
import {UserContext} from '../context/user'
import MessageBoxMain from './messageBoxMain';

const MessageBox=(props)=>{

    const [user,]=useContext(UserContext).user;

    console.log(user);
    return (
        <>
        {user?<MessageBoxMain data={props.data}/>:<div className="messageBox"></div>}
        </>
    )
}

export default MessageBox;