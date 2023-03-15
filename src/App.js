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
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {

  const user =useSelector(selectUser);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //user is logged in 
        console.log(userAuth);
        dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email,
        }))
      }else{
        //logged out
        dispatch(logout);
      }
    });

    return unsubscribe;

  },[dispatch])

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
