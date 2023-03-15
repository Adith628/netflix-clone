import React,{useEffect,useState} from 'react'
import "./Nav.css"
import logo from "../../images/logo.png";
import {useNavigate} from 'react-router-dom';
import avatar from '../../images/Netflix-avatar.png'
 
function Nav() {

  const [show,handleShow] = useState(false);
  const navigate = useNavigate();


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
          onClick={()=>navigate('/')}
          className='nav_logo'
          src={logo} 
          alt="logo"
        />
       
 
        <img 
          onClick={()=>navigate("/profile")}
          className='nav_avatar'
          src={avatar}
          alt="avatar"
        />
      </div>
      
    </div>
  )
}
 

export default Nav
