import React from 'react';


export default function TextRight({message,id,from,image}){

    return(
    <div className="mainRightBox">
        
      <div className="textBoxRight" key={id}>
        <div className="msgBox">
            <p className="displayMsg">
                {message}
            </p>

            <p className="displayNameText">
                -{from}<br/>
            </p>
            
            
        </div> 
     </div>
        <div className="RightImgCont">
            <img className="RightImg" alt={id}src={image}/>
        </div>

    </div>
    )
}