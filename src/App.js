import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Login from './screens/Login'
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';

function App() {

  const user =null;

  // const user = {
  //   name:"hello"
  // };

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
