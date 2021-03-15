import React from 'react';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Navbar from './Navbar';
import './Profile.css';
import Plans from './Plans';

function Profile() {

    const user = useSelector(selectUser);

    return (
        <div className="profile">
            <Navbar/>
            <div className="profile__body">
                <h1>Edit Profile</h1>
                <div className="profile__info">
                    <img
                        src="http://blogs.studentlife.utoronto.ca/lifeatuoft/files/2015/02/FullSizeRender.jpg"
                        alt=""
                    />
                    <div className="profile__details">
                        <h2>{user.email}</h2>
                        
                        <div className="profile__plans">
                            <h3>Plans</h3>
                            <Plans/>
                            <button 
                                onClick={ () => { auth.signOut() }}
                                className="profile__signOut">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile
