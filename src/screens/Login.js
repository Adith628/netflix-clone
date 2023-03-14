import React, { useState } from 'react';
import './Login.css';
import logo from '../images/logo.png'
import SignupScreen from '../screens/SignupScreen'

function Login() {

  const [signIn, setSignIn] = useState(false);


  return (
    <div className='login'>
      <div className="login_background">
        <img 
        className='login_logo'
        src={logo} alt="" 
        />
        <button onClick={()=>setSignIn(true)}
        className='login_button'
            >Sign In
        </button>
        <div className="login_gradient"></div>

      </div>

      <div className="login_body">
        {signIn ?(
          <SignupScreen />
        ) : (
          <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>Ready o watch? Enter your email to create or restart your membership.</h3>
        
          <div className="login_input">
            <form>
              <input type="email" placeholder='Email Address' />
              <button onClick={()=>setSignIn(true)}
               className='login_getStarted'>
                GET STARTED
              </button>
            </form>
          </div>

        </>
        )} 
      </div>
    </div>
  )
}

export default Login
