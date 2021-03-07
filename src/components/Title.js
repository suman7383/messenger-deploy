
import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import SignOutBtn from './signOutBtn';
import SignInBtn from './signInBtn';

export default function Title(){
  const [user,]=useContext(UserContext).user

    return(
      <div className="cardTitleBox">
        {user?<div className="cardTitle">
          <h3>{user.displayName}</h3>
        </div>
        :<div className="cardTitle">
          <h3>Name</h3>
        </div>}
        
        {user?<SignOutBtn/>:<SignInBtn/>}
        
      </div>
    )
}