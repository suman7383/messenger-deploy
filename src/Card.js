import React,{useContext, useEffect, useState} from 'react';
import firebase, { auth } from "./firebase";
import './index.css'
import Title from './components/Title';
import MessageBox from './components/messageBox'
import Form from './components/Form'
import { UserContext } from './context/user';

const Card=()=>{

  const [arr,setArr]=useState([]);
  const [,setUser]=useContext(UserContext).user;

  const getData=async()=>{
    await firebase.firestore().collection('message').orderBy('timeStamp','asc').onSnapshot((query)=>{
      setArr(
        query.docs.map((items)=>({
        id:items.id,
        from:items.data().from,
        to:items.data().to,
        message:items.data().mainMessage,
        fromImg:items.data().fromImg,
        userId:items.data().userId
      }))
      );
  });
  }
  
  const refresh=async()=>{
    await auth.onAuthStateChanged((user)=>{
      setUser(user);
    })
  }
  useEffect(()=>{
  getData();
  refresh();
  }, // eslint-disable-next-line
  [])

  return (
    <>
      <Title/>
      <MessageBox data={arr}/>
      <Form/>  
      
    </>
    );
}

export default Card;