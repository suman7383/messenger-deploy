import React from 'react';
import Card from './Card';
import {UserContextProvider} from './context/user';


function App() {
 
  return (

    <UserContextProvider>
  
    <div className="main"> 
      <header className="header">
        <h2>Messenger</h2>
      </header>

      <div className="cardBox">
        <Card/>
      </div>
      
    </div>

    </UserContextProvider>
  );
}

export default App;
