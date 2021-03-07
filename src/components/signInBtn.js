import React, { useContext} from 'react';
import { UserContext } from '../context/user';
import { SignInWithGoogle } from '../services/auth';


export default function SignInBtn(){
  const [,setUser]=useContext(UserContext).user

  const signInClick=async()=>{
   let userSignIn=await SignInWithGoogle();
        if(userSignIn) setUser(userSignIn)
  }
    return(
        <div className="signOutBtn" onClick={()=>signInClick()}>
          <h3>
            Sign In
          </h3>
        </div>
    )
}