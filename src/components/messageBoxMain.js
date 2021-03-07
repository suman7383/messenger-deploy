import React, { useContext } from 'react';
import TextLeft from './textLeft';
import TextRight from './textRight'
import {UserContext} from '../context/user'

const MessageBoxMain=(props)=>{

     const [user,]=useContext(UserContext).user;
     
    return(
      
        <div className="messageBox">
        {props.data.map((data)=>( 
         data.userId===user.uid
         ?
         <TextRight key={data.id} image={data.fromImg} from={data.from} message={data.message} id={data.id} time={data.timeStamp}/>
         :
         <TextLeft image={data.fromImg} from={data.from} key={data.id} message={data.message} id={data.id} time={data.timeStamp}/>
         ))}
      </div>
    )
}

export default MessageBoxMain;