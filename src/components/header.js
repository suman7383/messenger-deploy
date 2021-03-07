import React, { useContext } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {UserContext} from '../context/user';
import firebase from '../firebase';



export default function Header(){
    const [user,]=useContext(UserContext).user;
    const [arr,]=useContext(UserContext).arr;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const deleteClick=()=>{
  let temp=arr.length;
  while(temp!==0){
  firebase.firestore().collection("message").doc(arr[arr.length-1].id).delete();
  temp--;
  }
}

console.log(arr);

const classes = useStyles();

    return(
    <header className="header">
        <div className="messenger">
        <h2>Messenger</h2>
        </div>

        {user && user.uid==="0zbVPx2YUJVilnj4uC6CJwS8iAo1"?<div className="DeleteBtn">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={()=>deleteClick()}
          >
            Delete
          </Button>
        </div>:<></>}
        

      </header>
    )

}