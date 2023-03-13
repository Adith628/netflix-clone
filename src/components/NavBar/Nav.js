import React,{useEffect,useState} from 'react'
import "./Nav.css"
import logo from "../../images/logo.png";

function Nav() {

  const [show,handleShow] = useState(false);

  const transitionNavbar =()=>{
    if(window.scrollY>100){
      handleShow(true);
    }
    else{
      handleShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",transitionNavbar);
    return()=>window.removeEventListener("scroll",transitionNavbar);
  },[])


  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
      
        <img
          className='nav_logo'
          src={logo} 
          alt="logo"
        />
       
 
        <img 
          className='nav_avatar'
          src="https://i.pinimg.com/originals/31/2e/8e/312e8ec9f9581d8f606bfa875b302bcb.jpg"
          alt="avatar"
        />
      </div>
      
    </div>
  )
}
 

export default Nav
