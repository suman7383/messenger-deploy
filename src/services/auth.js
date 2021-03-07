
import {auth,provider} from '../firebase';



export const SignInWithGoogle= async ()=>{
    
    await auth
    .signInWithPopup(provider)
    .catch((error)=>{
        console.log(error.message);
    })
}


export const LogOut=async()=>{
    let logoutSucess
    await auth.signOut()
              .then(()=>{
                  logoutSucess=true;
              })
              .catch((error)=>{
                  console.log(error.message);
              })

    return logoutSucess;
}