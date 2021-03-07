import React from 'react'

export default function TextLeft({message,id,time,from,image}){

    return(

        <div className="mainLeftBox">
        <div className="LeftImgCont">
            <img className="LeftImg" alt={id} src={image}/>
        </div>
    <div className="textBoxLeft" key={id}>
        
        <div className="msgBoxLeft">
        <p className="displayMsgLeft">
            {message}
        </p>
        <p className="displayNameTextLeft">
            -{from}<br/>

        </p>
        </div>
    </div>
    </div>
    )
}