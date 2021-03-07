import {createContext,useState} from 'react';

export const UserContext=createContext();


export const UserContextProvider=(props)=>{
    const [user,setUser]=useState(null);
    const [arr,setArr]=useState([]);

    return(
        <UserContext.Provider value={{user :[user,setUser],arr:[arr,setArr]}}>
            {props.children}
        </UserContext.Provider>
    )

}