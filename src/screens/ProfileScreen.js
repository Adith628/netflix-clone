import React from 'react';
import './ProfileScreen.css';
import Nav from '../components/NavBar/Nav';
import avatar from '../images/Netflix-avatar.png';
import {selectUser} from '../features/userSlice';
import { useSelector } from 'react-redux';
import {auth} from '../firebase';



function ProfileScreen() {

    const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
        <Nav/>
        <div className="profile_body">
            <h1>Edit Profile</h1>
            <div className="profile_info">
                <img src={avatar} alt="" />
                <div className="profile_details">
                    <h2>{user.email}</h2>
                    <div className="profile_plan">
                        <h3>Plans</h3>
                        

                        <button 
                        onClick={()=>auth.signOut()}
                        className="profile_signout">
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
       
      
    </div>
  )
}

export default ProfileScreen
