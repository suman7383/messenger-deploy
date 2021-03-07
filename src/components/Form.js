import React,{useContext, useState} from 'react';
import { Button, TextField } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import firebase from "../firebase";
import { UserContext } from '../context/user';

export default function Form(){

    const [text,setText]=useState("");
    const [user,]=useContext(UserContext).user;

    const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    })
    );

function sendText(e){

  e.preventDefault()

  if(user){

    firebase.firestore().collection("message").add({
    from:user.displayName,
    to:"test",
    mainMessage:text,
    fromImg:user.photoURL,
    timeStamp:firebase.firestore.FieldValue.serverTimestamp(), 
    userId:user.uid
  })

  setText("")

  }

  else{
    
  }

  


}

const classes = useStyles();

    return(
    <form className="textField">
        <div style={{width:"65%"}}>
            <TextField
            id="standard-basic"
              label="Enter Message"
              value={text}
              
              onChange={(e)=>{
                setText(e.target.value)
              }}
            style={{width:"100%",margin:"0.4rem 1rem"}}
          />
        </div>
            
        <div className="sendBtn">
          <Button
            variant="contained"
            color="primary"
            className={classes.button} 
            endIcon={<Icon>send</Icon>}
            type="submit"
            onClick={sendText}>Send</Button>
        </div>
    </form>  
    )
}