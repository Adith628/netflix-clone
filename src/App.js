import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Login from './screens/Login'
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { auth } from './firebase';

function App() {

  const user =null;

  // const user = {
  //   name:"hello"
  // };

  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //user is logged in 
        console.log(userAuth)
      }else{
        //logged out

      }
    });
    
    return unsubscribe;

  },[])

  return (
    <div className="app">
      <Router>
        {!user ?(
          <Login/>
        ):(
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
        </Routes>
        )

      }
        
    </Router>

    </div>
  );
}

export default App;
