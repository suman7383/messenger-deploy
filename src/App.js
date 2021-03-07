import React from 'react';
import Card from './Card';
import {UserContextProvider} from './context/user';

import Header from './components/header';

function App() {
  return (
    <UserContextProvider>
  
    <div className="main"> 
      <Header/>

      <div className="cardBox">
        <Card/>
      </div>
      
    </div>

    </UserContextProvider>
  );
}

export default App;
