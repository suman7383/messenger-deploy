import React, { useContext,useRef,useEffect } from 'react';
import TextLeft from './textLeft';
import TextRight from './textRight'
import {UserContext} from '../context/user'

const MessageBoxMain=(props)=>{

    const [user,]=useContext(UserContext).user;
    const messagesEndRef = useRef(null)
    let textAdded=props.data.length;

    const ScrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })

  }

  useEffect(()=>{
      ScrollToBottom();
      console.log(textAdded)
  },[textAdded,messagesEndRef])
     
    return(
      
        <div className="messageBox">
        {props.data.map((data)=>( 
         data.userId===user.uid
         ?<>
         <TextRight key={data.id} image={data.fromImg} from={data.from} message={data.message} id={data.id} time={data.timeStamp}/>
         <div ref={messagesEndRef} /></>
         
         :
         <>
         <TextLeft image={data.fromImg} from={data.from} key={data.id} message={data.message} id={data.id} time={data.timeStamp}/>
         <div ref={messagesEndRef} />
         </>
         
         ))}
      </div>
    )
}

export default MessageBoxMain;