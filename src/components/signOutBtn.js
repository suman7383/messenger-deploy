import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { LogOut } from '../services/auth';

export default function SignOutBtn(){
    const [,]=useContext(UserContext).user

  const signOutClick=async()=>{
    let logOutSuccess=await LogOut();
    if(logOutSuccess) alert("You are Logged Out!!")
  }
    return(
        <div className="signOutBtn" onClick={()=>signOutClick()}>
          <h3>
            Sign Out
          </h3>
        </div>
    )
}