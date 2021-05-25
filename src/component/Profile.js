import React from 'react'
import Nav from './Nav'
import "./Profile.css"
import netflix_avatar from "./Netflix-avatar.png"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Footer from './Footer'


function Profile() {
    const user = useSelector(selectUser)

    return (
        <div className="profile">
            <Nav />
            <div className="profile__body">
                <h1>Edit Profile</h1>
                <div className="profile__info">
                    <img src={netflix_avatar} alt="" />
                    <div className="profile__detail">
                        <h2>{user.email}</h2>
                    
                    <div className="profile__plans">
                        <h3>Plans</h3>
                        <div className="plans__details">
                            <h3>Basic plan- 720p</h3>
                            <button>Subscribe</button>
                            <h3>Standard plan- 1080p</h3>
                            <button>Subscribe</button>
                            <h3>Premium plan- 4K+HDR</h3>
                            <button>Subscribe</button>
                        </div>
                        <button onClick={()=>auth.signOut()} className="profile__signOut">Sign Out</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <Footer/>
         
    
        </div>
    )
}

export default Profile
