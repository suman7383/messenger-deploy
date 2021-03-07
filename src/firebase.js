import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
    apiKey: "AIzaSyA09tnwR9sk_TF7WXBLjheFLw2InQPouRw",
    authDomain: "messenger-20aa7.firebaseapp.com",
    projectId: "messenger-20aa7",
    storageBucket: "messenger-20aa7.appspot.com",
    messagingSenderId: "269991427090",
    appId: "1:269991427090:web:107221d6a03ef0a8db6ccb",
    measurementId: "G-NVBVZZ4XEF"
  };

  
  firebase.initializeApp(Config);

  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default firebase;